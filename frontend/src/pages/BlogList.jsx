import { useEffect } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdsSection, { AdTopBanner } from "../components/AdsSection";
import { getAllPosts } from "../blog/posts";

export default function BlogList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-void">
      <Header />
      <Seo
        title="Blog - TeraPlayer"
        description="Trending guides and news from TeraPlayer: TeraBox, tech, gaming, cinema and pop culture — watch videos without the app, fix links that will not open, and download on your phone, step by step."
        path="/blog"
        ogTitle="Blog - TeraPlayer"
        ogDescription="Trending guides and news from TeraPlayer: TeraBox, tech, gaming, cinema and pop culture — watch videos without the app, fix links that will not open, and download on your phone, step by step."
      />

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
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-3 py-1 text-xs font-medium text-muted-foreground">
                <Newspaper className="h-3.5 w-3.5 text-primary" />
                TeraBox &amp; tech guides
              </div>
              <h1 className="font-display font-black text-4xl leading-[1.08] tracking-tighter text-balance sm:text-5xl lg:text-6xl">
                TeraPlayer <span className="text-primary">Blog</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Practical guides for opening TeraBox links in your browser — no
                app install, no login for public links.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="tp-container pb-16 md:pb-20">
          <div className="mx-auto grid max-w-3xl gap-4">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-border bg-surface-raised p-6 sm:p-7"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    loading="lazy"
                    className="mb-5 aspect-[16/9] w-full rounded-xl object-cover"
                  />
                )}
                <p className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span>{post.category}</span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </span>
                </p>
                <h2 className="mt-3 font-display font-bold text-xl tracking-tight sm:text-2xl">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Read the guide
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Existing site-wide ads: same component every public page mounts. */}
      <AdsSection />

      <Footer />
    </div>
  );
}
