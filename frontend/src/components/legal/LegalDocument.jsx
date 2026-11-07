import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./legal.css";

/**
 * Standalone legal document shell for the Watch Later Android app pages.
 *
 * White & simple style mirroring the Quran Walls privacy page:
 * light paper background, card surfaces, dark ink text, numbered sections,
 * sticky table of contents, summary cards and a footer.
 *
 * Deliberately has NO site header, footer or navigation: these pages are
 * reached only from the app (and from a store listing), never from the
 * TeraPlayer website itself. They also never link back to the site home.
 *
 * There is NO contact email or mailto link. Section 10 · Contact simply
 * points readers at the Watch Later Google Play listing, matching the
 * reference privacy page.
 */

function Blocks({ blocks }) {
  return (
    <div className="wl-blocks">
      {blocks.map((block, i) => {
        if (block.type === "list") {
          return (
            <ul key={i} className="wl-list">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "table") {
          return (
            <div key={i} className="wl-table-wrap">
              <table className="wl-table">
                <thead>
                  <tr>
                    {block.head.map((cell) => (
                      <th key={cell} scope="col">{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c} data-label={block.head[c] || ""}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p key={i} className="wl-p">{block.text}</p>
        );
      })}
    </div>
  );
}

export default function LegalDocument({
  title,
  eyebrow,
  intro,
  updated,
  version,
  summary,
  sections,
  activeDoc = "privacy",
}) {
  const [activeSection, setActiveSection] = useState(null);
  const versionLabel = version ? `v${version.replace(/\s+and later$/i, "+")}` : null;

  // Keep the browser chrome light for this standalone route.
  useEffect(() => {
    const root = document.documentElement;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const schemeMeta = document.querySelector('meta[name="color-scheme"]');
    const previousTheme = themeMeta?.getAttribute("content") ?? null;
    const previousScheme = schemeMeta?.getAttribute("content") ?? null;

    root.classList.add("wl-legal");
    themeMeta?.setAttribute("content", "#ffffff");
    schemeMeta?.setAttribute("content", "light");

    return () => {
      root.classList.remove("wl-legal");
      if (previousTheme !== null) themeMeta?.setAttribute("content", previousTheme);
      if (previousScheme !== null) schemeMeta?.setAttribute("content", previousScheme);
    };
  }, []);

  useEffect(() => {
    // The prerendered snapshot is captured after the crawler scrolls the page,
    // which would freeze a late "active section" into the HTML and cause a
    // hydration mismatch. Leave the initial state (no active item) in the
    // snapshot; the real browser sets it immediately after hydration.
    if (window.__TP_PRERENDER__ === true) return undefined;

    const hashId = window.location.hash.replace(/^#/, "");
    const firstId = sections.some((section) => section.id === hashId)
      ? hashId
      : sections[0]?.id;

    setActiveSection(firstId);

    if (typeof IntersectionObserver === "undefined") return undefined;

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="wl-legal">
      <a className="wl-skip" href="#legal-content">
        Skip to document
      </a>

      <header className="hero">
        <div className="hero-inner">
          <div className="brand-row" aria-label="Watch Later">
            <span className="brand-mark" aria-hidden="true">
              <img src="/logo.png" alt="" width="42" height="42" />
            </span>
            <span className="brand-name">
              Watch Later<span className="brand-sub">Android app privacy</span>
            </span>
          </div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="hero-copy">{intro}</p>
          <div className="hero-meta">
            <span><strong>Applies to:</strong> Watch Later Android app</span>
            <span><strong>Last updated:</strong> {updated}</span>
            {versionLabel ? (<span><strong>Version:</strong> {versionLabel}</span>) : null}
          </div>
        </div>
      </header>

      <aside className="scope-note">
        <strong>Scope:</strong> This policy explains how the Watch Later Android app handles information when you use its features.
      </aside>

      <main className="layout" id="legal-content">
        <nav className="toc" aria-label="Policy sections">
          <h2>On this page</h2>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="content">
          <div className="summary" aria-label="Privacy overview">
            {summary?.map((card) => (
              <div key={card.title} className="summary-card">
                <span className="symbol" aria-hidden="true">◈</span>
                <strong>{card.title}</strong>
                <span>{card.body}</span>
              </div>
            ))}
          </div>

          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="policy-section"
              aria-labelledby={`${section.id}-title`}
            >
              <p className="section-kicker">
                {String(index + 1).padStart(2, "0")} ·
                {section.kicker || section.title}
              </p>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}
        </div>
      </main>

      <footer>
        <p>
          Watch Later app · {title} · Last updated {updated}
        </p>
      </footer>
    </div>
  );
}
