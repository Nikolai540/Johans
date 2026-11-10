import type { MetadataRoute } from "next";

import { regionById, regionPages } from "@/lib/regions";
import { aboutPage, pages, site } from "@/lib/site";
import {
  abbrucharbeiten,
  bodenEntfernen,
  containerdienst,
  demontage,
  gewerbeaufloesung,
  kellerEntruempelung,
  messie,
  nachlassaufloesung,
  rueckbau,
  wanddurchbruch,
  wohnungsaufloesung,
} from "@/lib/spezialseiten";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/vilgertshofen/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}${pages.entruempelung.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}${pages.entkernung.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}${pages.renovierung.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}${pages.schadstoffe.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}${aboutPage.href}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...[gewerbeaufloesung, messie, wohnungsaufloesung, nachlassaufloesung, kellerEntruempelung, containerdienst, wanddurchbruch, demontage, bodenEntfernen, rueckbau, abbrucharbeiten].map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...regionPages.map((p) => ({
      url: `${site.url}${regionById(p.region).href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
