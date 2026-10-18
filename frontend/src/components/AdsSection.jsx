import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { useLang } from "../i18n/LanguageContext";

/**
 * Site-wide advertising section — rendered on every public page.
 *
 * It is mounted by Home, About, Contact, Privacy Policy, Terms of Service,
 * Help Center and the 404 page (right before the page footer). The admin area
 * uses a separate route shell and never mounts this component, so no ad ever
 * appears on the admin login or anywhere else under /admin.
 *
 * ── How the Adsterra banner units are embedded ────────────────────────────
 *
 * 1. The banner loader reads its config from the global `window.atOptions`
 *    the moment it executes, then deletes it. If several units load in
 *    parallel, one unit's script can consume another unit's config — the
 *    classic "every banner shows the same ad" SPA bug. All units therefore
 *    share one promise queue: each unit waits for the previous script to
 *    finish before it sets `atOptions` and injects its own script.
 *
 * 2. `atOptions.async: true` + `atOptions.container` selects the loader's own
 *    async placement mode: the ad renders inside the referenced element
 *    instead of next to its <script> tag. React owns that container element
 *    but never renders children into it, so the injected ad survives every
 *    re-render.
 *
 * 3. Ads are skipped while prerendering (the postbuild script sets
 *    `window.__TP_PRERENDER__`; `navigator.webdriver` also catches other
 *    headless renderers). The static HTML snapshots stay clean and the
 *    strict `networkidle0` prerender is never delayed by ad requests.
 *
 * 4. The Adsterra Smartlink ("direct link") has no visual unit at all. It is
 *    monetized popunder-style instead: the visitor's first click anywhere on
 *    the page opens the Smartlink in a background tab — at most once per
 *    browser session.
 */

const BANNER_SCRIPT_BASE = "https://biomanos.org/22";

const NATIVE_BANNER_KEY = "7e3f1640408748e6223c4a07caa45c1e";
const NATIVE_BANNER_SRC = `https://pl31458283.profitableratecpmnetwork.com/${NATIVE_BANNER_KEY}/invoke.js`;

// Adsterra Smartlink — a "direct link" format: a plain URL with no banner
// code, so it is monetized popunder-style (see useSmartlinkPopunder below).
const SMARTLINK_URL = "https://apiguinee.org/4/033b3676a345598e143ebf324be3b6d8";
const SMARTLINK_SESSION_KEY = "tp-smartlink-clicked";

// The six banner units (iframe format). Fixed-size creatives that cannot fit
// a phone screen are hidden at those breakpoints so the page never scrolls
// sideways; they appear again on wider screens. Hidden units are also never
// loaded — ad networks dislike impressions for creatives that are not visible.
const BANNER_UNITS = [
  // 728x90 leaderboard
  { adKey: "ae944b37ff48da05800207d1bbd0af34", width: 728, height: 90, className: "hidden lg:flex", minWidth: 1024 },
  // 468x60 banner
  { adKey: "8bfd02b17bc700167e51120f503b61fa", width: 468, height: 60, className: "hidden sm:flex", minWidth: 640 },
  // 320x50 mobile leaderboard
  { adKey: "32c49a42eb1cbda9e8056a5c3c4aec3f", width: 320, height: 50, className: "flex" },
  // 300x250 medium rectangle
  { adKey: "44b178d0908b9627f2052780f22aff8a", width: 300, height: 250, className: "flex" },
  // 160x600 wide skyscraper
  { adKey: "d9a5e2b2cf7ad55e5d97c7f14f1cfaaa", width: 160, height: 600, className: "flex" },
  // 160x300 half-page
  { adKey: "572646baf7134446a75078b7a7c00a10", width: 160, height: 300, className: "flex" },
];

const SCRIPT_TIMEOUT_MS = 20000;

// Module-level queue: every ad on the page is loaded strictly one at a time.
let adQueue = Promise.resolve();
// Guards against React StrictMode's double effect invocation (same element).
const scheduledNodes = new WeakSet();

function isPrerendering() {
  if (typeof window === "undefined") return true;
  if (window.__TP_PRERENDER__ === true) return true;
  return typeof navigator !== "undefined" && navigator.webdriver === true;
}

/** Track a CSS media query so units hidden by breakpoints are never loaded. */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return true;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mql = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);
    setMatches(mql.matches);
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener(onChange); // Safari < 14
    return () => mql.removeListener(onChange);
  }, [query]);

  return matches;
}

/**
 * Adsterra Smartlink (direct link): fires on the visitor's first click
 * anywhere on the page and opens it in a background tab — a popunder. The
 * click gesture keeps popup blockers happy, and the sessionStorage flag makes
 * sure a visitor sees it at most once per session, not on every pageview.
 */
function useSmartlinkPopunder() {
  useEffect(() => {
    if (isPrerendering()) return undefined;
    try {
      if (window.sessionStorage.getItem(SMARTLINK_SESSION_KEY) === "1") return undefined;
    } catch (e) {
      // Storage blocked — fall back to once per page load.
    }

    let fired = false;
    const onClick = () => {
      if (fired) return;
      fired = true;
      document.removeEventListener("click", onClick, true);
      try {
        window.sessionStorage.setItem(SMARTLINK_SESSION_KEY, "1");
      } catch (e) {
        // ignore
      }
      // Never preventDefault here — the visitor's original action must proceed.
      window.open(SMARTLINK_URL, "_blank", "noopener");
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}

/** Chain an ad task so only one third-party ad script runs at any time. */
function scheduleAdTask(task) {
  const run = () => Promise.resolve().then(task).catch(() => {});
  adQueue = adQueue.then(run, run);
}

/** Append a script tag; resolves when it loads, errors or times out. */
function injectScript(src, attributes = {}) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve();
    };
    const timer = window.setTimeout(finish, SCRIPT_TIMEOUT_MS);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    // Keep Cloudflare Rocket Loader away from the ad scripts.
    script.setAttribute("data-cfasync", "false");
    Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
    script.src = src;
    script.onload = finish;
    script.onerror = finish;
    (document.body || document.documentElement).appendChild(script);
  });
}

/** One iframe-format banner unit (e.g. 320x50, 728x90, 160x600). */
export function AdBanner({ adKey, width, height, className, enabled = true }) {
  const holderRef = useRef(null);

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder || !enabled || scheduledNodes.has(holder) || isPrerendering()) return;
    scheduledNodes.add(holder);

    scheduleAdTask(async () => {
      // The visitor may have navigated away while this unit waited its turn.
      if (!holder.isConnected) return;

      window.atOptions = {
        key: adKey,
        format: "iframe",
        height,
        width,
        params: {},
        async: true, // render into `container` (SPA-safe), not beside the script tag
        container: holder.id,
      };

      await injectScript(`${BANNER_SCRIPT_BASE}/${adKey}`);

      try {
        delete window.atOptions;
      } catch (e) {
        window.atOptions = undefined;
      }
    });
  }, [adKey, width, height, enabled]);

  return (
    <div className={cn("flex justify-center", className)}>
      {/*
        The ad iframe is injected inside this element by the loader. Keep it a
        childless, stable node — React must never reconcile its children.
      */}
      <div
        ref={holderRef}
        id={`tp-ad-${adKey}`}
        style={{ width, height }}
        className="overflow-hidden"
        data-ad-size={`${width}x${height}`}
      />
    </div>
  );
}

/** Adsterra native banner — the responsive card-style unit. */
function NativeBanner() {
  const holderRef = useRef(null);

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder || scheduledNodes.has(holder) || isPrerendering()) return;
    scheduledNodes.add(holder);

    scheduleAdTask(() => {
      if (!holder.isConnected) return;
      // The native loader fills the element with id `container-<key>`.
      return injectScript(NATIVE_BANNER_SRC);
    });
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div
        ref={holderRef}
        id={`container-${NATIVE_BANNER_KEY}`}
        className="min-h-[90px] w-full"
      />
    </div>
  );
}

export default function AdsSection() {
  const { t } = useLang();
  // Adsterra Smartlink — popunder-style, first click per session (no UI).
  useSmartlinkPopunder();
  // Units hidden by a breakpoint (see BANNER_UNITS) are not loaded at all.
  const wideViewport = useMediaQuery("(min-width: 1024px)");
  const mediumViewport = useMediaQuery("(min-width: 640px)");

  return (
    <section
      aria-label="Advertisement"
      className="mx-auto mt-16 w-full max-w-5xl overflow-hidden px-2 sm:px-6"
      data-testid="ads-section"
    >
      <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/70">
        {t("ad.label")}
      </p>
      <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6">
        {BANNER_UNITS.map(({ minWidth, ...unit }) => (
          <AdBanner
            key={unit.adKey}
            {...unit}
            enabled={!minWidth || (minWidth >= 1024 ? wideViewport : mediumViewport)}
          />
        ))}
        <NativeBanner />
      </div>
    </section>
  );
}
