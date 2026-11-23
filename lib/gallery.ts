import type { StaticImageData } from "next/image";

import g0_1 from "@/public/images/startseite/galerie/platzhalter-1.jpg";
import g0_2 from "@/public/images/startseite/galerie/platzhalter-2.jpg";
import g0_3 from "@/public/images/startseite/galerie/platzhalter-3.jpg";
import g0_4 from "@/public/images/startseite/galerie/platzhalter-4.jpg";
import g0_5 from "@/public/images/startseite/galerie/platzhalter-5.jpg";
import g0_6 from "@/public/images/startseite/galerie/platzhalter-6.jpg";
import g0_7 from "@/public/images/startseite/galerie/platzhalter-7.jpg";
import g0_8 from "@/public/images/startseite/galerie/platzhalter-8.jpg";
import g1_1 from "@/public/images/entkernung-abbruch-rueckbau/galerie/platzhalter-1.jpg";
import g1_2 from "@/public/images/entkernung-abbruch-rueckbau/galerie/platzhalter-2.jpg";
import g1_3 from "@/public/images/entkernung-abbruch-rueckbau/galerie/platzhalter-3.jpg";
import g1_4 from "@/public/images/entkernung-abbruch-rueckbau/galerie/platzhalter-4.jpg";
import g1_5 from "@/public/images/entkernung-abbruch-rueckbau/galerie/platzhalter-5.jpg";
import g1_6 from "@/public/images/entkernung-abbruch-rueckbau/galerie/platzhalter-6.jpg";
import g1_7 from "@/public/images/entkernung-abbruch-rueckbau/galerie/platzhalter-7.jpg";
import g1_8 from "@/public/images/entkernung-abbruch-rueckbau/galerie/platzhalter-8.jpg";
import g2_1 from "@/public/images/entruempelung-haushaltsaufloesung/galerie/platzhalter-1.jpg";
import g2_2 from "@/public/images/entruempelung-haushaltsaufloesung/galerie/platzhalter-2.jpg";
import g2_3 from "@/public/images/entruempelung-haushaltsaufloesung/galerie/platzhalter-3.jpg";
import g2_4 from "@/public/images/entruempelung-haushaltsaufloesung/galerie/platzhalter-4.jpg";
import g2_5 from "@/public/images/entruempelung-haushaltsaufloesung/galerie/platzhalter-5.jpg";
import g2_6 from "@/public/images/entruempelung-haushaltsaufloesung/galerie/platzhalter-6.jpg";
import g2_7 from "@/public/images/entruempelung-haushaltsaufloesung/galerie/platzhalter-7.jpg";
import g2_8 from "@/public/images/entruempelung-haushaltsaufloesung/galerie/platzhalter-8.jpg";
import g3_1 from "@/public/images/containerdienst/galerie/platzhalter-1.jpg";
import g3_2 from "@/public/images/containerdienst/galerie/platzhalter-2.jpg";
import g3_3 from "@/public/images/containerdienst/galerie/platzhalter-3.jpg";
import g3_4 from "@/public/images/containerdienst/galerie/platzhalter-4.jpg";
import g3_5 from "@/public/images/containerdienst/galerie/platzhalter-5.jpg";
import g3_6 from "@/public/images/containerdienst/galerie/platzhalter-6.jpg";
import g3_7 from "@/public/images/containerdienst/galerie/platzhalter-7.jpg";
import g3_8 from "@/public/images/containerdienst/galerie/platzhalter-8.jpg";
import g4_1 from "@/public/images/renovierung/galerie/platzhalter-1.jpg";
import g4_2 from "@/public/images/renovierung/galerie/platzhalter-2.jpg";
import g4_3 from "@/public/images/renovierung/galerie/platzhalter-3.jpg";
import g4_4 from "@/public/images/renovierung/galerie/platzhalter-4.jpg";
import g4_5 from "@/public/images/renovierung/galerie/platzhalter-5.jpg";
import g4_6 from "@/public/images/renovierung/galerie/platzhalter-6.jpg";
import g4_7 from "@/public/images/renovierung/galerie/platzhalter-7.jpg";
import g4_8 from "@/public/images/renovierung/galerie/platzhalter-8.jpg";
import g5_1 from "@/public/images/schadstoffe/galerie/platzhalter-1.jpg";
import g5_2 from "@/public/images/schadstoffe/galerie/platzhalter-2.jpg";
import g5_3 from "@/public/images/schadstoffe/galerie/platzhalter-3.jpg";
import g5_4 from "@/public/images/schadstoffe/galerie/platzhalter-4.jpg";
import g5_5 from "@/public/images/schadstoffe/galerie/platzhalter-5.jpg";
import g5_6 from "@/public/images/schadstoffe/galerie/platzhalter-6.jpg";
import g5_7 from "@/public/images/schadstoffe/galerie/platzhalter-7.jpg";
import g5_8 from "@/public/images/schadstoffe/galerie/platzhalter-8.jpg";

export type GalleryItem = { src: StaticImageData; alt: string; caption: string; placeholder?: boolean };

// Bildtexte in Reihenfolge der Dateien im Ordner galerie/.
// shortcut: Alle Karussells teilen sich diese Texte. Bekommt eine Seite eigene Fotos, dort eine eigene Textliste anlegen.
const texts: Omit<GalleryItem, "src">[] = [
  { alt: "Entkernter Altbau mit freigelegtem Mauerwerk", caption: "Entkernung im Altbau", placeholder: true },
  { alt: "Geräumte Wohnung nach einer Haushaltsauflösung", caption: "Haushaltsauflösung", placeholder: true },
  { alt: "Abgetragene Fliesen und Estrich in einem Bad", caption: "Fliesen- und Bodenabbruch", placeholder: true },
  { alt: "Neue Trockenbauwände im Dachgeschoss", caption: "Trockenbau im Dachgeschoss", placeholder: true },
  { alt: "Frisch verlegter Vinylboden mit Sockelleisten", caption: "Vinylboden verlegt", placeholder: true },
  { alt: "Abbruch eines alten Gartenhauses", caption: "Abbruch eines Gartenhauses", placeholder: true },
  { alt: "Leerer Kellerraum nach der Entrümpelung", caption: "Kellerentrümpelung", placeholder: true },
  { alt: "Wanddurchbruch mit eingesetztem Stahlträger", caption: "Wanddurchbruch", placeholder: true },
];

const withTexts = (srcs: StaticImageData[]) => srcs.map((src, i) => ({ src, ...texts[i] }));

// Ein Karussell pro Seite, Fotos in public/images/<seite>/galerie/. Die Leistungsseiten starten mit Kopien der Startseiten-Fotos.
// Format: Handyfotos quer im Standardformat 4:3 füllen den Rahmen ganz, Hochkant-Fotos werden
// vollständig mit Rand gezeigt. Vor dem Ablegen auf 2000 px an der langen Seite verkleinern (JPG, Qualität 80).
export const galleries: Record<string, GalleryItem[]> = {
  "startseite": withTexts([g0_1, g0_2, g0_3, g0_4, g0_5, g0_6, g0_7, g0_8]),
  "entkernung-abbruch-rueckbau": withTexts([g1_1, g1_2, g1_3, g1_4, g1_5, g1_6, g1_7, g1_8]),
  "entruempelung-haushaltsaufloesung": withTexts([g2_1, g2_2, g2_3, g2_4, g2_5, g2_6, g2_7, g2_8]),
  "containerdienst": withTexts([g3_1, g3_2, g3_3, g3_4, g3_5, g3_6, g3_7, g3_8]),
  "renovierung": withTexts([g4_1, g4_2, g4_3, g4_4, g4_5, g4_6, g4_7, g4_8]),
  "schadstoffe": withTexts([g5_1, g5_2, g5_3, g5_4, g5_5, g5_6, g5_7, g5_8]),
};
