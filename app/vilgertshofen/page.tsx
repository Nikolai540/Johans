import type { Metadata } from "next";

import { HomePage } from "@/components/HomePage";
import { locationById, site } from "@/lib/site";

const loc = locationById("vilgertshofen");
const title = `Entkernung, Entrümpelung & Renovierung in ${loc.town} | ${site.name}`;
const description =
  "Abbruch, Entkernung, Entrümpelung, Asbestsanierung nach TRGS 519 und Renovierung aus einer Hand. Vom Firmensitz in Vilgertshofen aus in Landsberg am Lech, Kaufering, Buchloe, Augsburg, Schongau, am Ammersee und im Allgäu. Festpreis nach kostenloser Besichtigung.";

// Startseite des Firmensitzes, gleicher Inhalt wie "/" mit Vilgertshofen in Titel, H1, Karte und Standort-Card
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: loc.home },
  keywords: ["Entkernung Vilgertshofen", "Entrümpelung Vilgertshofen", "Haushaltsauflösung Vilgertshofen", "Renovierung Vilgertshofen"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: loc.home,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/images/landsberg-lechwehr.jpg", width: 1920, height: 989, alt: "Lechwehr in Landsberg am Lech" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/landsberg-lechwehr.jpg"] },
  other: {
    "geo.region": "DE-BY",
    "geo.placename": loc.town,
    "geo.position": `${loc.lat};${loc.lng}`,
    ICBM: `${loc.lat}, ${loc.lng}`,
  },
};

export default function Page() {
  return <HomePage location="vilgertshofen" />;
}
