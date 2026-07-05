import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
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
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "ValGo blog"],
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
        title={post.title}
        description={`${post.date} · ${post.readTime}`}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-blue-600 transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="space-y-5">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
