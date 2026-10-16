import type { StaticImageData } from "next/image";

import abbruch from "@/public/images/abbruch.jpg";
import ammerseeLuftbild from "@/public/images/ammersee-luftbild.jpg";
import buchloeLuftbild from "@/public/images/buchloe-luftbild.jpg";
import entkernung from "@/public/images/entkernung.jpg";
import kauferingLech from "@/public/images/kaufering-lech.jpg";
import landsbergBayertor from "@/public/images/landsberg-bayertor.jpg";
import landsbergLechTuerkis from "@/public/images/landsberg-lech-tuerkis.jpg";
import landsbergLechUfer from "@/public/images/landsberg-lech-ufer.jpg";
import landsbergLechwehr from "@/public/images/landsberg-lechwehr.jpg";
import landsbergLuftbild from "@/public/images/landsberg-luftbild.jpg";
import lechBlickNorden from "@/public/images/lech-blick-norden.jpg";
import pflasterarbeiten from "@/public/images/pflasterarbeiten.jpg";
import sanierungFachwerk from "@/public/images/sanierung-fachwerk.jpg";
import sperrmuell from "@/public/images/sperrmuell.jpg";
import trockenbau from "@/public/images/trockenbau.jpg";
import uttingAmmersee from "@/public/images/utting-ammersee.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** Kurzer Bildtitel; bei Fremdbildern aus Gewerken mit "Symbolbild" gekennzeichnet. */
  caption: string;
  credit: { title: string; author: string; license: string; licenseUrl: string; source: string };
};

// Alle Fotos stammen aus Wikimedia Commons (freie Lizenzen, unverändert, nur zugeschnitten angezeigt).
// Sie zeigen die Region bzw. Arbeiten anderer – nicht Projekte von JL Bauprojekte.
// Eigene Projektfotos können hier 1:1 ausgetauscht werden.
export const photos = {
  landsbergLechwehr: {
    src: landsbergLechwehr,
    alt: "Das Lechwehr in Landsberg am Lech, dahinter die Altstadt mit dem Turm der Stadtpfarrkirche",
    caption: "Lechwehr, Landsberg am Lech",
    credit: { title: "Landsberg am Lech Lechwehr", author: "PeterWeisenbach", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/w/index.php?curid=87623793" },
  },
  lechBlickNorden: {
    src: lechBlickNorden,
    alt: "Ruhiger Lech nördlich des Lechwehrs in Landsberg mit Uferbäumen und Altstadthäusern",
    caption: "Der Lech in Landsberg, Blick nach Norden",
    credit: { title: "Landsberg am Lech — Lechwehr (Blick gen Norden)", author: "User:Mattes", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/de/deed.en", source: "https://commons.wikimedia.org/wiki/File:Landsberg_am_Lech_%E2%80%94_Lechwehr_(Blick_gen_Norden).JPG" },
  },
  landsbergLuftbild: {
    src: landsbergLuftbild,
    alt: "Luftbild der Altstadt von Landsberg am Lech mit roten Dächern",
    caption: "Landsberg am Lech aus der Luft",
    credit: { title: "Segelflug Geratshofen - Landsberg, LL Altstadt v W", author: "Flodur63", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", source: "https://commons.wikimedia.org/w/index.php?curid=21630269" },
  },
  landsbergLechUfer: {
    src: landsbergLechUfer,
    alt: "Türkisfarbener Lech vor der Landsberger Altstadt mit Wehr und Häuserzeile",
    caption: "Lech und Altstadt, Landsberg am Lech",
    credit: { title: "Landsberg Lech 4", author: "Zairon", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Landsberg_Lech_4.JPG" },
  },
  landsbergLechTuerkis: {
    src: landsbergLechTuerkis,
    alt: "Breiter Lech mit türkisem Wasser und der Uferpromenade von Landsberg am Lech",
    caption: "Lech bei Landsberg",
    credit: { title: "Landsberg Lech 3", author: "Zairon", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Landsberg_Lech_3.JPG" },
  },
  landsbergBayertor: {
    src: landsbergBayertor,
    alt: "Das Bayertor in Landsberg am Lech, ein spätgotisches Stadttor mit hohem Turm",
    caption: "Bayertor, Landsberg am Lech",
    credit: { title: "Bayertor Landsberg am Lech 01", author: "H.Helmlechner", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Bayertor_Landsberg_am_Lech_01.jpg" },
  },
  ammerseeLuftbild: {
    src: ammerseeLuftbild,
    alt: "Luftbild des Ammersees von Süden mit Feldern und Orten am Ufer",
    caption: "Ammersee von Süden",
    credit: { title: "Aerial image of the Ammersee (view from the south)", author: "Carsten Steger", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/w/index.php?curid=114816560" },
  },
  uttingAmmersee: {
    src: uttingAmmersee,
    alt: "Dächer von Utting am Ammersee mit Kirchturm in der Abendsonne",
    caption: "Utting am Ammersee",
    credit: { title: "Utting ammersee daecher", author: "DigiAndi", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", source: "https://commons.wikimedia.org/w/index.php?curid=4213969" },
  },
  kauferingLech: {
    src: kauferingLech,
    alt: "Der aufgestaute Lech bei Kaufering mit bewaldeten Ufern",
    caption: "Lech bei Kaufering",
    credit: { title: "Kaufering nördl - Lech Staustufe 18 v N, Kaufering 020921 - 03", author: "Flodur63", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Kaufering_n%C3%B6rdl_-_Lech_Staustufe_18_v_N,_Kaufering_020921_-_03.jpg" },
  },
  buchloeLuftbild: {
    src: buchloeLuftbild,
    alt: "Luftbild von Buchloe mit Wohngebieten, Bahnlinie und Wasserturm",
    caption: "Buchloe aus der Luft",
    credit: { title: "Buchloe Luftaufnahme (12)", author: "Ordercrazy", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en", source: "https://commons.wikimedia.org/w/index.php?curid=74929186" },
  },
  sperrmuell: {
    src: sperrmuell,
    alt: "Ausgeräumte Möbel und Sperrmüll vor einer Backsteinmauer",
    caption: "Symbolbild: Sperrmüll zur Abholung",
    credit: { title: "Sperrmüll zur Abholung bereitgestellt", author: "3268zauber", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", source: "https://commons.wikimedia.org/w/index.php?curid=7026070" },
  },
  entkernung: {
    src: entkernung,
    alt: "Entkernter Innenraum mit freigelegten Stützen, ein Arbeiter bindet Staub mit Wasser",
    caption: "Symbolbild: Entkernung eines Gebäudes",
    credit: { title: "Basel Exhibition demolition-20120505-RM-130742", author: "Ermell", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Basel_Exhibition_demolition-20120505-RM-130742.jpg" },
  },
  abbruch: {
    src: abbruch,
    alt: "Abbruchstelle mit Schuttbergen hinter einem Bauzaun",
    caption: "Symbolbild: Abbrucharbeiten",
    credit: { title: "Abbrucharbeiten Hotel Heinrich Heine", author: "Olaf Meister", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/w/index.php?curid=51292295" },
  },
  sanierungFachwerk: {
    src: sanierungFachwerk,
    alt: "Fachwerkhaus mit freigelegtem Gebälk während der Sanierung",
    caption: "Symbolbild: Sanierung eines Fachwerkhauses",
    credit: { title: "Gnoien Fachwerkhaus Sanierung 2009-08-20 091", author: "Niteshift", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", source: "https://commons.wikimedia.org/w/index.php?curid=7630794" },
  },
  trockenbau: {
    src: trockenbau,
    alt: "Gipskartonplatten auf Arbeitsböcken vor einer gedämmten Ständerwand",
    caption: "Symbolbild: Trockenbau",
    credit: { title: "Gipsskivor", author: "Jorchr", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Gipsskivor.jpg" },
  },
  pflasterarbeiten: {
    src: pflasterarbeiten,
    alt: "Handwerker verlegt Natursteinpflaster in einem Sandbett",
    caption: "Symbolbild: Pflasterarbeiten",
    credit: { title: "Krems ad Donau Obere Landstraße Pflasterarbeiten DSC4578", author: "Isiwal", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/w/index.php?curid=168447764" },
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const film = {
  webm: "/images/lechwehr-film.webm",
  mp4: "/images/lechwehr-film.mp4",
  poster: "/images/lechwehr-film-poster.jpg",
  label: "Das Lechwehr in Landsberg am Lech, Wasser stürzt über die Wehrstufen vor der Altstadt",
  caption: "Lechwehr, Landsberg am Lech",
  credit: { title: "2024-Lechwehr-Landsberg-am-Lech", author: "Arths-at", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:2024-Lechwehr-Landsberg-am-Lech.webm" },
};
