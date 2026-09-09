import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";

interface SitemapEntryConfig {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

const primaryRoutes: SitemapEntryConfig[] = [
  { path: "", changeFrequency: "daily", priority: 1.0 },
  { path: "/vendors", changeFrequency: "weekly", priority: 0.9 },
  { path: "/riders", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "weekly", priority: 0.9 },
  { path: "/ambassadors", changeFrequency: "weekly", priority: 0.85 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.85 },
  { path: "/blog", changeFrequency: "daily", priority: 0.85 },
  { path: "/platform", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partners", changeFrequency: "monthly", priority: 0.75 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.75 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  { path: "/delete-account", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = primaryRoutes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

