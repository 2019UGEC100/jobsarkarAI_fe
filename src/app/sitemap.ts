import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/jobs",
  "/exams",
  "/categories",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

