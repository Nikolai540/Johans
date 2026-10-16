import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/images/landsberg-lechwehr.jpg`],
    },
    { url: `${site.url}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
