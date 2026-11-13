import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Projektordner als Wurzel, damit eine fremde package-lock.json weiter oben (z. B. im Benutzerordner) ignoriert wird
  turbopack: { root: __dirname },
  // Gleiche URLs wie die bisherige Website (z. B. /entkernung-abbruch-rueckbau/)
  trailingSlash: true,
  // Entwicklungsserver auch im Heimnetz erreichbar (Handy-Test über die Network-Adresse)
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.16.*.*", "*.local"],
  images: {
    formats: ["image/webp"],
    qualities: [70],
    // Weniger Bildbreiten: jede Breite ist eine eigene Umwandlung im Vercel-Bildcache.
    // So sind mehr Anfragen Cache-Treffer, und das Kontingent der Bildoptimierung wird geschont.
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [96, 256, 384],
    // Statische Importe tragen einen Inhalts-Hash, ändern sich also nie unter derselben URL
    minimumCacheTTL: 31536000,
    // Profilbilder der Google-Bewertungen, Next lädt sie auf dem Server und liefert sie von der eigenen Domain aus
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
  },
};

export default nextConfig;
