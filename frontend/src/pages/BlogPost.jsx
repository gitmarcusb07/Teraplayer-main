import { useEffect } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Zap } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdsSection, { AdTopBanner } from "../components/AdsSection";
import { Button } from "../components/ui/button";
import { getPostBySlug } from "../blog/posts";
import NotFound from "./NotFound";

function renderSection(section, index) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="pt-2 font-display font-bold text-xl tracking-tight sm:text-2xl"
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="pt-2 font-display font-bold text-lg tracking-tight"
        >
          {section.text}
        </h3>
      );
    case "list":
      return (
        <ul
          key={index}
          className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol
          key={index}
          className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "faq":
      return (
        <div key={index} className="space-y-4">
          {section.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface-raised p-5 sm:p-6"
            >
              <h3 className="font-display font-bold text-base tracking-tight sm:text-lg">
                {item.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      );
    case "p":
    default:
      return (
        <p
          key={index}
          className="text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {section.text}
        </p>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Unknown slug: reuse the site's existing 404 page instead of a new one.
  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-void">
      <Header />
      <Seo
        title={`${post.title} - TeraPlayer`}
        description={post.description}
        path={`/blog/${post.slug}`}
        ogTitle={`${post.title} - TeraPlayer`}
        ogDescription={post.description}
      >
        <meta property="article:published_time" content={post.date} />
      </Seo>

      <main>
        <AdTopBanner />
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-full max-w-3xl -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="tp-container py-14 md:py-24"
          >
            <div className="mx-auto max-w-3xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All posts
              </Link>
              <h1 className="mt-6 font-display font-black text-3xl leading-[1.08] tracking-tighter text-balance sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{post.category}</span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {post.date}
                </span>
              </p>
            </div>
          </motion.div>
        </section>

        <section className="tp-container pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl space-y-5">
            {post.sections.map(renderSection)}
          </div>

          {/* CTA back to the player — same pattern as the About page CTA. */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-surface-raised p-6 text-center sm:p-7">
            <h2 className="font-display font-bold text-xl tracking-tight sm:text-2xl">
              Try it now
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              If you have a public TeraBox link ready, paste it into the player
              and press Watch — no app install, no account needed.
            </p>
            <Button asChild className="mt-6 h-12 px-8 text-base" size="lg">
              <Link to="/">
                <Zap className="mr-2 h-5 w-5" />
                Open the player
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Existing site-wide ads: same component every public page mounts. */}
      <AdsSection />

      <Footer />
    </div>
  );
}
