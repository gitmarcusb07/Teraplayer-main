import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  Bookmark,
  CalendarDays,
  Clock,
  EyeOff,
  FileText,
  HardDriveDownload,
  Mail,
  Scale,
  ShieldCheck,
  Smartphone,
  Tag,
} from "lucide-react";
import "./legal.css";

/**
 * Standalone legal document shell for the Watch Later Android app pages.
 *
 * The visual language intentionally mirrors the app, not the TeraPlayer
 * website: system typography, #0A0A0C canvas, #16161C surface cards, thin
 * #26262E hairlines and the app's #A855F7 accent.
 *
 * Deliberately has NO site header, footer or navigation: these pages are
 * reached only from the app (and from a store listing), never from the
 * TeraPlayer website itself. They also never link back to the site home.
 */

const TABS = [
  {
    id: "privacy",
    to: "/watchlater-privacypolicy",
    label: "Privacy Policy",
    Icon: ShieldCheck,
  },
  {
    id: "terms",
    to: "/watchlater-terms-and-conditions",
    label: "Terms & Conditions",
    Icon: FileText,
  },
];

const SUMMARY_ICONS = {
  privacy: [ShieldCheck, Smartphone, EyeOff],
  terms: [FileText, HardDriveDownload, Scale],
};

const SUMMARY_ICON_FALLBACK = [ShieldCheck, Smartphone, EyeOff];

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
                      <th key={cell} scope="col">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c} data-label={block.head[c] || ""}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p key={i} className="wl-p">
            {block.text}
          </p>
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
  contactEmail = "teraplayer.contact@gmail.com",
  contactBody = "Email us and we will reply within 30 days. Watch Later keeps your library on your device, so there is no online account to manage — but we are happy to answer questions about this document or help with a data request.",
}) {
  const [activeSection, setActiveSection] = useState(null);
  const summaryIcons = SUMMARY_ICONS[activeDoc] || SUMMARY_ICON_FALLBACK;
  const versionLabel = version ? `v${version.replace(/\s+and later$/i, "+")}` : null;

  // Keep the browser chrome dark for this standalone route, and make it
  // possible for the inline shell in public/index.html to paint the right
  // background before React mounts.
  useEffect(() => {
    const root = document.documentElement;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const schemeMeta = document.querySelector('meta[name="color-scheme"]');
    const previousTheme = themeMeta?.getAttribute("content") ?? null;
    const previousScheme = schemeMeta?.getAttribute("content") ?? null;

    root.classList.add("wl-legal-route");
    themeMeta?.setAttribute("content", "#0A0A0C");
    schemeMeta?.setAttribute("content", "dark");

    return () => {
      root.classList.remove("wl-legal-route");
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

      <header className="wl-topbar">
        <div className="wl-shell wl-topbar__inner">
          <div className="wl-brand">
            <span className="wl-brand__mark" aria-hidden="true">
              <Bookmark size={15} strokeWidth={2.5} fill="currentColor" />
            </span>
            <span className="wl-brand__name">Watch Later</span>
          </div>
          <span className="wl-status">
            <span className="wl-status__dot" aria-hidden="true" />
            No ads
            <span className="wl-status__extra"> · No tracking</span>
          </span>
        </div>
      </header>

      <main>
        <section className="wl-hero wl-shell" aria-labelledby="legal-title">
          <p className="wl-eyebrow">{eyebrow}</p>
          <h1 className="wl-title" id="legal-title">
            {title}
          </h1>
          <p className="wl-intro">{intro}</p>

          <ul className="wl-meta" aria-label="Document details">
            <li className="wl-chip">
              <Smartphone size={14} aria-hidden="true" />
              <span>Watch Later for Android</span>
            </li>
            <li className="wl-chip">
              <CalendarDays size={14} aria-hidden="true" />
              <span>
                Effective <strong>{updated}</strong>
              </span>
            </li>
            {versionLabel ? (
              <li className="wl-chip">
                <Tag size={14} aria-hidden="true" />
                <span>{versionLabel}</span>
              </li>
            ) : null}
          </ul>
        </section>

        <div className="wl-shell wl-tabs-wrap">
          <nav className="wl-tabs" aria-label="Watch Later legal documents">
            {TABS.map(({ id, to, label, Icon }) => (
              <Link
                key={id}
                to={to}
                className={`wl-tab${activeDoc === id ? " wl-tab--active" : ""}`}
                aria-current={activeDoc === id ? "page" : undefined}
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </Link>
            ))}
          </nav>

          {summary?.length ? (
            <ul className="wl-summary">
              {summary.map((card, index) => {
                const Icon = summaryIcons[index % summaryIcons.length];
                return (
                  <li key={card.title} className="wl-summary__card">
                    <span className="wl-summary__icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <p className="wl-summary__kicker">{card.kicker}</p>
                    <p className="wl-summary__title">{card.title}</p>
                    <p className="wl-summary__body">{card.body}</p>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>

        <div className="wl-shell wl-layout" id="legal-content">
          <aside className="wl-side">
            <p className="wl-side__label">On this page</p>
            <nav className="wl-side__nav" aria-label="Document sections">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`wl-side__link${activeSection === section.id ? " is-active" : ""}`}
                  aria-current={activeSection === section.id ? "location" : undefined}
                >
                  <span className="wl-side__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>

            <div className="wl-side__help">
              <p className="wl-side__help-top">
                <Mail size={15} aria-hidden="true" />
                Need help?
              </p>
              <p>Email us about this document and we will reply within 30 days.</p>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </aside>

          <div className="wl-doc">
            <nav className="wl-mobile-toc" aria-label="Document sections">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={activeSection === section.id ? "is-active" : undefined}
                  aria-current={activeSection === section.id ? "location" : undefined}
                >
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>

            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="wl-section"
                aria-labelledby={`${section.id}-title`}
              >
                <div className="wl-section__head">
                  <span className="wl-section__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="wl-section__title" id={`${section.id}-title`}>
                    {section.title}
                  </h2>
                </div>
                <Blocks blocks={section.blocks} />
              </section>
            ))}

            <section className="wl-contact" aria-labelledby="legal-contact-title">
              <span className="wl-contact__icon" aria-hidden="true">
                <Mail size={20} strokeWidth={2} />
              </span>
              <h2 className="wl-contact__title" id="legal-contact-title">
                Questions about this document?
              </h2>
              <p className="wl-contact__body">
                {contactBody}
              </p>
              <div className="wl-contact__actions">
                <a className="wl-contact__button" href={`mailto:${contactEmail}`}>
                  <Mail size={16} aria-hidden="true" />
                  {contactEmail}
                </a>
                <span className="wl-contact__note">
                  <Clock size={13} aria-hidden="true" />
                  Usually within 30 days
                </span>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="wl-footer">
        <div className="wl-shell wl-footer__inner">
          <div className="wl-footer__top">
            <div className="wl-footer__brand">
              <span className="wl-brand__mark" aria-hidden="true">
                <Bookmark size={13} strokeWidth={2.5} fill="currentColor" />
              </span>
              <div>
                <p className="wl-footer__brandname">Watch Later</p>
                <p className="wl-footer__appid">com.watchlater.app</p>
              </div>
            </div>

            <div className="wl-footer__badges">
              <span className="wl-footer__badge">
                <ShieldCheck size={13} aria-hidden="true" />
                No ads
              </span>
              <span className="wl-footer__badge">
                <EyeOff size={13} aria-hidden="true" />
                No tracking
              </span>
              <span className="wl-footer__badge">
                <HardDriveDownload size={13} aria-hidden="true" />
                Local-first
              </span>
            </div>
          </div>

          <div className="wl-footer__bottom">
            <p className="wl-footer__note">
              Watch Later is published by TeraPlayer. This document is provided for the Watch
              Later Android application and does not describe the TeraPlayer website, which
              has its own separate policies.
            </p>
            <div className="wl-footer__meta">
              <span>© 2026 TeraPlayer</span>
              <a className="wl-backtop" href="#legal-content" aria-label="Back to top">
                <ArrowUp size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
