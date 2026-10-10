import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Calendar, Clock, Share2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/metadata";
import { APP_LINKS } from "@/lib/constants";
import { AppleIcon, GooglePlayIcon } from "@/components/ui/app-store-badges";

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
    keywords: [
      post.category,
      "ValGo",
      "OOU Ago Iwoye",
      "Olabisi Onabanjo University",
      "student life OOU",
      "Ago Iwoye food delivery",
      "campus food delivery Nigeria",
      "ValGo blog",
    ],
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

            {/* Campus CTA in Article */}
            <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-900 to-[#0a1628] p-6 text-white border border-white/10 shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Experience Fast Campus Delivery at OOU
              </p>
              <h3 className="text-lg font-black mt-1">
                Download the ValGo App for iOS &amp; Android
              </h3>
              <p className="text-xs text-blue-100/70 mt-1 mb-4 leading-relaxed">
                Skip long cafeteria queues in Ago Iwoye. Order delicious meals and daily essentials straight to your hostel gate in minutes.
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={APP_LINKS.customer.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-bold text-slate-950 shadow-sm hover:bg-blue-50 transition-colors"
                >
                  <AppleIcon className="h-3.5 w-3.5" />
                  App Store
                </a>
                <a
                  href={APP_LINKS.customer.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-500 transition-colors"
                >
                  <GooglePlayIcon className="h-3.5 w-3.5" />
                  Google Play
                </a>
              </div>
            </div>

            {/* Author / Footer info */}
            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
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
