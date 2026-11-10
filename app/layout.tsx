import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { CookieBanner } from "@/components/CookieBanner";
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

const title = "Entkernung, Entrümpelung & Renovierung in Landsberg am Lech | J&L Bauprojekte";
const description =
  "Abbruch, Entkernung, Entrümpelung, Asbestsanierung nach TRGS 519 und Renovierung aus einer Hand. In Landsberg am Lech, Kaufering, Buchloe, Augsburg, Schongau, am Ammersee und im Allgäu. Festpreis nach kostenloser Besichtigung.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  keywords: [
    "Entkernung Landsberg am Lech",
    "Entrümpelung Landsberg",
    "Haushaltsauflösung Landsberg",
    "Renovierung Landsberg",
    "Trockenbau Landsberg",
    "Vinylboden verlegen Landsberg",
    "Umzug Landsberg",
    "Entrümpelung Buchloe",
    "Entkernung Augsburg",
    "Entrümpelung Schongau",
    "Renovierung Kaufbeuren",
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
    "geo.position": `${site.branch.geo.latitude};${site.branch.geo.longitude}`,
    ICBM: `${site.branch.geo.latitude}, ${site.branch.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#1f1e1c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        <JsonLd data={businessGraph()} />
      </head>
      <body>
        {children}
        <CookieBanner />
        {/* Einblendung beim Scrollen, startet unabhängig von React */}
        <script async src="/reveal.js" />
      </body>
    </html>
  );
}
