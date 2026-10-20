import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Gleiche URLs wie die bisherige Website (z. B. /entkernung-abbruch-rueckbau/)
  trailingSlash: true,
  // Entwicklungsserver auch im Heimnetz erreichbar (Handy-Test über die Network-Adresse)
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.16.*.*", "*.local"],
  images: {
    formats: ["image/webp"],
    qualities: [70, 80],
    // Weniger Bildbreiten: jede Breite ist eine eigene Umwandlung im Vercel-Bildcache.
    // So sind mehr Anfragen Cache-Treffer, und das Kontingent der Bildoptimierung wird geschont.
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [96, 256, 384],
    // Statische Importe tragen einen Inhalts-Hash, ändern sich also nie unter derselben URL
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
