"""MongoDB-backed rate limiter.

Uses one document per request keyed by (scope, ip). The collection has a
TTL index that cleans docs older than the configured window automatically.

Window and limit are configurable via env vars:
  - RATE_LIMIT_WINDOW (default: 60 seconds)
  - RATE_LIMIT_MAX    (default: 60 requests)
"""
from __future__ import annotations

import logging
import os
import time

from fastapi import HTTPException, Request

logger = logging.getLogger("teraplayer.rate_limit")

WINDOW_SECONDS = int(os.environ.get("RATE_LIMIT_WINDOW", "60"))
LIMIT = int(os.environ.get("RATE_LIMIT_MAX", "60"))


async def ensure_indexes(db) -> None:
    """Create TTL and query indexes for the rate_limits collection."""
    if db is None:
        return

    try:
        # TTL: docs auto-expire ~ WINDOW_SECONDS after created_at.
        await db.rate_limits.create_index(
            "created_at", expireAfterSeconds=WINDOW_SECONDS
        )
        await db.rate_limits.create_index([("scope", 1), ("ip", 1)])
    except Exception as exc:  # noqa: BLE001
        # Bad auth / DB down must never brick startup (lifespan already
        # treats this as non-fatal, but keep it safe when called directly).
        logger.warning("Failed to ensure rate_limit indexes, skipping", exc_info=exc)


async def check_rate_limit(db, request: Request, scope: str = "api") -> None:
    """Check and record a rate-limited request. Raises 429 when exceeded.

    Fail-open when MongoDB is unavailable (bad auth, timeout, network):
    the request is allowed and a warning is logged, matching the
    extraction-only mode and the site_settings fallback behavior.
    """
    # No-op when MongoDB is not configured
    if db is None:
        return

    xff = request.headers.get("x-forwarded-for") or ""
    ip = (
        xff.split(",")[0].strip()
        or request.headers.get("x-real-ip")
        or (request.client.host if request.client else "unknown")
    )
    now = time.time()

    try:
        count = await db.rate_limits.count_documents(
            {"scope": scope, "ip": ip, "ts": {"$gte": now - WINDOW_SECONDS}}
        )
    except Exception as exc:  # noqa: BLE001 - e.g. OperationFailure bad auth
        logger.warning(
            "Rate-limit check skipped (Mongo unavailable), allowing request",
            exc_info=exc,
        )
        return

    if count >= LIMIT:
        raise HTTPException(
            status_code=429,
            detail="Rate limit exceeded. Please wait a moment before trying again.",
        )
    from datetime import datetime, timezone

    try:
        await db.rate_limits.insert_one(
            {
                "scope": scope,
                "ip": ip,
                "ts": now,
                "created_at": datetime.now(timezone.utc),
            }
        )
    except Exception as exc:  # noqa: BLE001
        # Recording failure must never fail the user request.
        logger.warning("Failed to record rate-limit entry", exc_info=exc)
