import type { StaticImageData } from "next/image";

import p1 from "@/public/images/galerie/platzhalter-1.jpg";
import p2 from "@/public/images/galerie/platzhalter-2.jpg";
import p3 from "@/public/images/galerie/platzhalter-3.jpg";
import p4 from "@/public/images/galerie/platzhalter-4.jpg";
import p5 from "@/public/images/galerie/platzhalter-5.jpg";
import p6 from "@/public/images/galerie/platzhalter-6.jpg";
import p7 from "@/public/images/galerie/platzhalter-7.jpg";
import p8 from "@/public/images/galerie/platzhalter-8.jpg";

export type GalleryItem = { src: StaticImageData; alt: string; caption: string; placeholder?: boolean };

// PLATZHALTER: Einfarbige Testbilder. Eigene Baustellenfotos in public/images/galerie/ ablegen,
// Import, Alternativtext und Bildtext anpassen und "placeholder" entfernen.
// Die Reihenfolge bestimmt das Raster: Bild 1 groß, Bild 6 breit.
export const gallery: GalleryItem[] = [
  { src: p1, alt: "Entkernter Altbau mit freigelegtem Mauerwerk", caption: "Entkernung im Altbau", placeholder: true },
  { src: p2, alt: "Geräumte Wohnung nach einer Haushaltsauflösung", caption: "Haushaltsauflösung", placeholder: true },
  { src: p3, alt: "Abgetragene Fliesen und Estrich in einem Bad", caption: "Fliesen- und Bodenabbruch", placeholder: true },
  { src: p4, alt: "Neue Trockenbauwände im Dachgeschoss", caption: "Trockenbau im Dachgeschoss", placeholder: true },
  { src: p5, alt: "Frisch verlegter Vinylboden mit Sockelleisten", caption: "Vinylboden verlegt", placeholder: true },
  { src: p6, alt: "Abbruch eines alten Gartenhauses", caption: "Abbruch eines Gartenhauses", placeholder: true },
  { src: p7, alt: "Leerer Kellerraum nach der Entrümpelung", caption: "Kellerentrümpelung", placeholder: true },
  { src: p8, alt: "Wanddurchbruch mit eingesetztem Stahlträger", caption: "Wanddurchbruch", placeholder: true },
];
