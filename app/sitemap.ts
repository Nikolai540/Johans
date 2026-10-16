import type { MetadataRoute } from "next";

import { pages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}${pages.entruempelung.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}${pages.entkernung.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
