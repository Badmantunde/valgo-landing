import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { FadeUp } from "@/components/ui/motion";
import { createPageMetadata } from "@/lib/metadata";
import { blogPosts } from "@/data/blog-posts";

export const metadata = createPageMetadata({
  title: "Blog & Stories | ValGo Campus Delivery",
  description:
    "Updates, stories, and insights from the ValGo team as we launch at OOU in Ago Iwoye and grow to university campuses nationwide.",
  path: "/blog",
  keywords: [
    "ValGo blog",
    "campus delivery news",
    "OOU startup",
    "student food delivery Nigeria",
    "campus life stories",
  ],
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="ValGo Stories & News"
        icon={BookOpen}
        title="Behind the Scenes at ValGo."
        accentTitle="Campus Culture & Updates."
        description="Launch insights, founder reflections, and stories from the team building Nigeria's university-first logistics and food delivery platform."
      />

      <CheckeredStrip size="md" variant="blue-white" />

      <section className="py-16 sm:py-24 bg-[#fafbfc]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.06}>
                <article className="group flex flex-col rounded-xl border border-border bg-white p-6 sm:p-8 h-full shadow-xs hover:border-blue-300 hover:shadow-card transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted mb-4">
                    <span className="rounded-md bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-100 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium">
                      <Calendar className="h-3 w-3 text-muted" />
                      <time>{post.date}</time>
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium">
                      <Clock className="h-3 w-3 text-muted" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted mt-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-5 mt-6 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted">ValGo Editorial Team</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Read Article
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>

          <div className="mt-16 text-center max-w-xl mx-auto rounded-xl border border-border bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-base font-bold text-foreground mb-1">
              Want the latest campus stories first?
            </h3>
            <p className="text-xs sm:text-sm text-muted mb-4">
              Follow our campus dispatch handles for live updates, launch announcements, and student features.
            </p>
            <a
              href="https://x.com/usevalgo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Follow @usevalgo on X
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CheckeredStrip size="md" variant="dark-blue" />
    </>
  );
}
