import type { MetadataRoute } from "next";

import { regionById, regionPages } from "@/lib/regions";
import { pages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}${pages.entruempelung.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}${pages.entkernung.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...regionPages.map((p) => ({
      url: `${site.url}${regionById(p.region).href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
