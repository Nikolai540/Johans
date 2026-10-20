import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { businessGraph, JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const title = "Entrümpelung, Entkernung & Rückbau in Landsberg am Lech | J&L Bauprojekte";
const description =
  "Entrümpelung, Haushaltsauflösung, Entkernung, Abbruch und Rückbau aus einer Hand – in Landsberg am Lech, Kaufering, Buchloe und am Ammersee. Festpreis nach Besichtigung.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  keywords: [
    "Entkernung Landsberg am Lech",
    "Abbruch Landsberg",
    "Rückbau Landsberg",
    "Entrümpelung Landsberg",
    "Haushaltsauflösung Landsberg",
    "Sanierung Ammersee",
    "Renovierung Kaufering",
    "Trockenbau Landsberg",
    "Gartenbau Landsberg",
    "Handwerker Buchloe",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [{ url: "/images/landsberg-lechwehr.jpg", width: 1920, height: 989, alt: "Lechwehr in Landsberg am Lech" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/landsberg-lechwehr.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    "geo.region": "DE-BY",
    "geo.placename": "Landsberg am Lech",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#1f1e1c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Blendet [data-reveal]-Elemente beim Scrollen ein. Die Web Animations API ändert keine Attribute,
// React sieht beim Hydrieren also unverändertes HTML. Ohne JavaScript bleibt alles sichtbar.
const revealScript = `(() => {
  if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const reveals = new WeakMap();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { reveals.get(e.target).play(); io.unobserve(e.target); }
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
  for (const el of document.querySelectorAll("[data-reveal]")) {
    const i = parseFloat(el.style.getPropertyValue("--i")) || 0;
    const a = el.animate(
      [{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "none" }],
      { duration: 500, delay: i * 60, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
    );
    a.pause();
    reveals.set(el, a);
    io.observe(el);
  }
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Motion-Startzustände nur mit JavaScript – ohne JS bleibt alles sichtbar */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={businessGraph()} />
      </head>
      <body>
        {children}
        {/* Als Inline-Skript startet die Einblendung sofort nach dem HTML und wartet nicht auf React */}
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </body>
    </html>
  );
}
