import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Erst nur beobachten (Report-Only): Verstöße erscheinen in der Browser-Konsole, blockiert wird nichts.
// 'unsafe-inline' bei Skripten, weil Next.js Inline-Skripte schreibt und Nonces alle Seiten dynamisch machen würden.
// Google Maps läuft im iframe (nach Zustimmung); Resend und Google Places ruft nur der Server auf.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  // report-to für Chrome, Edge, Safari; report-uri für Firefox, das report-to bei CSP nicht kennt
  "report-to csp",
  "report-uri /api/csp-report/",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Projektordner als Wurzel, damit eine fremde package-lock.json weiter oben (z. B. im Benutzerordner) ignoriert wird
  turbopack: { root: __dirname },
  // Gleiche URLs wie die bisherige Website (z. B. /entkernung-abbruch-rueckbau/)
  trailingSlash: true,
  // Entwicklungsserver auch im Heimnetz erreichbar (Handy-Test über die Network-Adresse)
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.16.*.*", "*.local"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy-Report-Only", value: csp },
          { key: "Reporting-Endpoints", value: 'csp="/api/csp-report/"' },
          // frame-ancestors greift im Report-Only-Modus nicht, deshalb Einbettungsschutz hier scharf
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
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
