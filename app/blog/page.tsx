import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { FadeUp } from "@/components/ui/motion";
import { LAUNCH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: `Updates, stories, and insights from the ValGo team as we launch at ${LAUNCH.university}.`,
};

import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Stories from the ValGo team"
        description={`Launch updates, product thinking, and campus stories as we build ValGo in ${LAUNCH.city} and beyond.`}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.05}>
                <article className="group rounded-lg border border-border p-6 h-full hover:shadow-card transition-shadow">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <span className="font-medium text-blue-600">{post.category}</span>
                    <span>·</span>
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground tracking-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-blue-600 hover:underline"
                  >
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </FadeUp>
            ))}
          </div>

          <p className="mt-12 text-sm text-muted text-center">
            More articles coming as we approach launch. Follow us on{" "}
            <a
              href="https://x.com/usevalgo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              X
            </a>{" "}
            for updates.
          </p>
        </div>
      </section>
    </>
  );
}
