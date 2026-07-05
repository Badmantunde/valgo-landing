import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";

const routes = [
  "",
  "/platform",
  "/services",
  "/restaurants",
  "/partners",
  "/ambassadors",
  "/faq",
  "/careers",
  "/blog",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
