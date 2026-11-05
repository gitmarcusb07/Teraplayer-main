import { Link } from "react-router-dom";

/**
 * Standalone legal document shell for the Watch Later Android app pages.
 *
 * Deliberately has NO site header, footer or navigation: these pages are
 * reached only from the app (and from a store listing), never from the
 * TeraPlayer website itself. They also never link back to the site home.
 */

function NumberBadge({ index }) {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-secondary text-[11px] font-semibold tabular-nums text-muted-foreground">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

function Blocks({ blocks }) {
  return (
    <div className="mt-4 space-y-4">
      {blocks.map((block, i) => {
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "table") {
          return (
            <div key={i} className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-secondary">
                  <tr>
                    {block.head.map((cell) => (
                      <th key={cell} className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-foreground">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r} className="border-t border-border align-top">
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className={
                            c === 0
                              ? "px-4 py-3 font-medium text-foreground"
                              : "px-4 py-3 text-muted-foreground"
                          }
                        >
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
          <p key={i} className="text-sm leading-7 text-muted-foreground">
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
  contactEmail = "teraplayer.contact@gmail.com",
  otherPage,
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Brand strip — text only, intentionally not a link. */}
      <div className="border-b border-border/70 bg-card/60">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-black text-primary-foreground shadow-sm">
              W
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">Watch Later</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Android app legal
              </p>
            </div>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            TeraPlayer
          </p>
        </div>
      </div>

      <header className="relative overflow-hidden border-b border-border/70">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_15%_0%,hsl(var(--primary)/0.16),transparent_60%),radial-gradient(50%_110%_at_90%_0%,hsl(var(--accent)/0.14),transparent_55%)]"
        />
        <div className="relative mx-auto w-full max-w-5xl px-5 pb-10 pt-12 sm:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-[44px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {intro}
          </p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Applies to</dt>
              <dd className="mt-1 font-medium">Watch Later for Android</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Effective</dt>
              <dd className="mt-1 font-medium">{updated}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">App version</dt>
              <dd className="mt-1 font-medium">{version}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Contact</dt>
              <dd className="mt-1 font-medium">{contactEmail}</dd>
            </div>
          </dl>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-10 sm:px-8">
        {summary?.length ? (
          <div className="mb-10 grid gap-3 sm:grid-cols-3">
            {summary.map((card) => (
              <div key={card.title} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{card.kicker}</p>
                <p className="mt-2 text-sm font-semibold leading-6">{card.title}</p>
                <p className="mt-1 text-xs leading-6 text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:items-start">
          <nav aria-label="On this page" className="hidden lg:sticky lg:top-8 lg:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              On this page
            </p>
            <ol className="mt-3 space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-lg px-2 py-1.5 text-[13px] leading-5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-4 scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-[0_8px_26px_rgba(12,27,20,0.03)] sm:p-7"
              >
                <div className="flex items-start gap-3">
                  <NumberBadge index={index} />
                  <h2 className="pt-1 text-base font-semibold leading-6 tracking-tight sm:text-lg">
                    {section.title}
                  </h2>
                </div>
                <Blocks blocks={section.blocks} />
              </section>
            ))}

            <section className="relative mt-6 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.09] via-card to-accent/[0.09] p-6 sm:p-7">
              <h2 className="text-base font-semibold tracking-tight">Questions about this document?</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                Email us and we will reply within 30 days. For account or data deletion requests,
                write from the email address linked to your account so we can verify it.
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {contactEmail}
              </a>
            </section>

            {otherPage ? (
              <p className="mt-6 text-sm text-muted-foreground">
                See also:{" "}
                <Link to={otherPage.to} className="font-medium text-primary underline underline-offset-4">
                  {otherPage.label}
                </Link>
              </p>
            ) : null}

            <p className="mt-8 text-xs leading-6 text-muted-foreground">
              Watch Later is published by TeraPlayer. This document is provided for the Watch Later
              Android application and does not describe the TeraPlayer website, which has its own
              separate policies.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
