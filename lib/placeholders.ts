import type { StaticImageData } from "next/image";

import baustelle from "@/public/images/ueber-uns/baustelle.jpg";
import johann from "@/public/images/ueber-uns/johann.jpg";
import schadstoffe from "@/public/images/schadstoffe/schadstoffe.jpg";

export type Placeholder = { src: StaticImageData; alt: string; caption: string };

// PLATZHALTER: Einfarbige Testbilder für die Seiten Schadstoffe und Über uns.
// Eigene Fotos unter gleichem Namen in public/images/schadstoffe/ bzw. ueber-uns/ ablegen (oder Import ändern)
// und Bildtext ohne "Platzhalter:" eintragen.
export const placeholders = {
  schadstoffe: {
    src: schadstoffe,
    alt: "Arbeiter in Schutzanzug und Atemschutz beim Ausbau alter Bodenplatten",
    caption: "Platzhalter: Schutzausrüstung bei der Schadstoffsanierung",
  },
  johann: {
    src: johann,
    alt: "Johann Schmidt, Inhaber von J&L Bauprojekte, auf einer Baustelle",
    caption: "Platzhalter: Porträt Johann Schmidt",
  },
  baustelle: {
    src: baustelle,
    alt: "Besenrein übergebener Raum nach der Entkernung",
    caption: "Platzhalter: saubere Übergabe nach der Entkernung",
  },
} satisfies Record<string, Placeholder>;
