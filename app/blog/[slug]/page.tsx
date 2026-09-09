import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Calendar, Clock, Share2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };
  return createPageMetadata({
    title: `${post.title} | ValGo Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "ValGo blog", "campus delivery"],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        icon={BookOpen}
        title={post.title}
        description={`${post.date} • ${post.readTime} read • By ValGo Editorial Team`}
      />

      <CheckeredStrip size="sm" variant="blue-white" />

      <section className="py-16 sm:py-24 bg-[#fafbfc]">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mb-8 p-2 rounded-lg hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all stories
          </Link>

          {/* Article Container */}
          <article className="rounded-xl border border-border bg-white p-6 sm:p-10 shadow-xs">
            <div className="space-y-6 text-foreground/85 leading-relaxed text-base sm:text-lg">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author / Footer info */}
            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                  VG
                </div>
                <div>
                  <span className="block font-bold text-foreground">ValGo Editorial</span>
                  <span>Building for Nigerian Campuses</span>
                </div>
              </div>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://usevalgo.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-slate-50 px-3 py-1.5 font-semibold text-foreground hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <Share2 className="h-3.5 w-3.5" />
                Share Story
              </a>
            </div>
          </article>
        </div>
      </section>

      <CheckeredStrip size="sm" variant="dark-blue" />
    </>
  );
}
