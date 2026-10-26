import type { PhotoKey } from "./images";
import { regions } from "./regions";
import { pages } from "./site";

export type ServiceId =
  | "entruempelung"
  | "haushaltsaufloesung"
  | "entkernung"
  | "abbruch"
  | "rueckbau"
  | "schadstoffsanierung"
  | "renovierung"
  | "trockenbau"
  | "bodenverlegung"
  | "umzug";

export type Service = { id: ServiceId; name: string; short: string; text: string };

export const services: Record<ServiceId, Service> = {
  entruempelung: {
    id: "entruempelung",
    name: "Entrümpelung",
    short: "Keller, Dachboden, Garage, Wohnung",
    text: "Keller, Dachboden, Garage oder die ganze Wohnung: Wir räumen, trennen nach Wertstoffen und entsorgen fachgerecht. Bei Entrümpelungen in Landsberg am Lech, Kaufering und Umgebung organisieren wir auf Wunsch den Container und übergeben die Räume besenrein.",
  },
  haushaltsaufloesung: {
    id: "haushaltsaufloesung",
    name: "Haushaltsauflösung",
    short: "Nach Erbfall, Umzug oder vor dem Verkauf",
    text: "Nach einem Erbfall, dem Umzug ins Pflegeheim oder vor dem Verkauf lösen wir den kompletten Haushalt auf – diskret, termingerecht und mit Blick auf alles, was noch verwertet werden kann. Sie haben einen Ansprechpartner statt drei Firmen.",
  },
  entkernung: {
    id: "entkernung",
    name: "Entkernung",
    short: "Zurück auf den Rohbau",
    text: "Vor jeder Kernsanierung steht die Entkernung: Wir entfernen Bodenbeläge, Putz, nichttragende Wände, Decken und alte Installationen, bis nur noch der Rohbau steht. Verdächtige Baustoffe sprechen wir vorab an und klären sie, bevor es losgeht.",
  },
  abbruch: {
    id: "abbruch",
    name: "Abbruch",
    short: "Wände, Böden, Gartenhäuser, Nebengebäude",
    text: "Kleinere Abbrucharbeiten sauber erledigt: einzelne Wände, Fliesen und Estrich, Gartenhäuser, Schuppen und kleine Nebengebäude. Wanddurchbrüche für neue Türen und Durchgänge, bei tragenden Wänden gemeinsam mit dem Statiker. Komplette Hausabrisse führen wir nicht aus.",
  },
  rueckbau: {
    id: "rueckbau",
    name: "Rückbau",
    short: "Kontrolliert, Bauteil für Bauteil",
    text: "Rückbau heißt kontrolliert und Schritt für Schritt: Treppen, Kamine, Innenwände oder ganze Gebäudeteile, während der Rest des Hauses stehen bleibt. So entsteht Platz für Umbau und Neuanfang, ohne dass Bestand und Nachbarschaft leiden.",
  },
  schadstoffsanierung: {
    id: "schadstoffsanierung",
    name: "Schadstoffsanierung",
    short: "Asbest nach TRGS 519, alte Mineralwolle",
    text: "Asbest in alten Bodenbelägen, Klebern, Putz oder Eternit-Platten und alte Mineralwolle bauen wir fachgerecht aus – mit Sachkunde nach TRGS 519 (Anlage 4), Gefährdungsbeurteilung, festgelegten Schutzmaßnahmen und Entsorgung mit Nachweis.",
  },
  renovierung: {
    id: "renovierung",
    name: "Renovierung",
    short: "Wände, Decken, Böden",
    text: "Wände, Decken und Böden: Wir machen Wohnungen und Häuser wieder bezugsfertig – vor dem Einzug, nach dem Mieterwechsel oder vor dem Verkauf.",
  },
  trockenbau: {
    id: "trockenbau",
    name: "Trockenbau",
    short: "Wände, Decken, Dachausbau",
    text: "Neue Raumaufteilung, abgehängte Decken, Vorsatzschalen oder der Ausbau des Dachgeschosses – vom Ständerwerk bis zur streichfertig gespachtelten Wand.",
  },
  bodenverlegung: {
    id: "bodenverlegung",
    name: "Bodenverlegung",
    short: "Laminat und Vinyl",
    text: "Laminat und Vinyl, mit Trittschalldämmung, Sockelleisten und Übergangsprofilen. Den alten Belag entfernen wir auf Wunsch gleich mit.",
  },
  umzug: {
    id: "umzug",
    name: "Umzug",
    short: "Zusammen mit Räumung und Renovierung",
    text: "Wir packen mit an, tragen und transportieren – besonders praktisch in Verbindung mit einer Entrümpelung oder Renovierung. Was genau dazugehört, besprechen wir bei der Besichtigung.",
  },
};

/** Reihenfolge im Formular und im schema.org-Leistungskatalog */
export const serviceOrder: ServiceId[] = [
  "entruempelung",
  "haushaltsaufloesung",
  "entkernung",
  "abbruch",
  "rueckbau",
  "schadstoffsanierung",
  "renovierung",
  "trockenbau",
  "bodenverlegung",
  "umzug",
];

/** Die drei Hauptleistungen auf der Startseite */
export const serviceCategories: {
  id: "entkernung" | "entruempelung" | "renovierung";
  name: string;
  text: string;
  items: ServiceId[];
  photo: PhotoKey;
  shape: "portrait" | "landscape" | "square";
  page: { href: string; cta: string };
}[] = [
  {
    id: "entkernung",
    name: "Entkernung, Abbruch & Rückbau",
    text: "Vor jeder Kernsanierung steht die Entkernung: Wir entfernen Bodenbeläge, Putz, nichttragende Wände, Decken und alte Installationen bis auf den Rohbau, bauen Bauteile kontrolliert zurück und übernehmen kleinere Abbrucharbeiten. Stecken Asbest oder alte Mineralwolle im Bestand, bauen wir sie nach den Technischen Regeln für Gefahrstoffe aus.",
    items: ["entkernung", "abbruch", "rueckbau", "schadstoffsanierung"],
    photo: "entkernung",
    shape: "landscape",
    page: { href: pages.entkernung.href, cta: "Alles zu Entkernung & Schadstoffsanierung" },
  },
  {
    id: "entruempelung",
    name: "Entrümpelung & Haushaltsauflösung",
    text: "Keller, Dachboden, Garage oder die ganze Wohnung: Wir räumen, trennen nach Wertstoffen und entsorgen fachgerecht. Haushaltsauflösungen nach einem Erbfall, beim Umzug ins Pflegeheim oder vor dem Verkauf erledigen wir diskret und termingerecht – und übergeben besenrein.",
    items: ["entruempelung", "haushaltsaufloesung"],
    photo: "sperrmuell",
    shape: "portrait",
    page: { href: pages.entruempelung.href, cta: "Alles zu Entrümpelung & Haushaltsauflösung" },
  },
  {
    id: "renovierung",
    name: "Renovierung",
    text: "Wände, Decken, Böden: Wir machen Wohnungen und Häuser wieder bezugsfertig – vor dem Einzug, nach dem Mieterwechsel oder vor dem Verkauf.",
    items: ["trockenbau", "bodenverlegung", "umzug"],
    photo: "trockenbau",
    shape: "portrait",
    page: { href: pages.renovierung.href, cta: "Alles zur Renovierung" },
  },
];

/** Alle Orte des Einsatzgebiets, gruppiert nach Region in lib/regions.ts */
export const places = regions.flatMap((r) => r.places);

export const faqs: { q: string; a: string }[] = [
  {
    q: "In welchen Orten sind Sie im Einsatz?",
    a: "Unsere Standorte sind Landsberg am Lech (Max-Planck-Straße 13) und Vilgertshofen. Wir arbeiten in Landsberg und Kaufering, in Buchloe, in der Ammersee-Region, in Mindelheim, Augsburg, Schongau und im Allgäu. Ihr Ort ist nicht dabei? Fragen Sie gern nach.",
  },
  {
    q: "Was ist der Unterschied zwischen Entkernung, Rückbau und Abbruch?",
    a: "Bei der Entkernung wird ein Gebäude weitgehend vom Innenausbau befreit: Böden, Fliesen, Decken, Trockenbau, Türen und Sanitär kommen raus, der Rohbau bleibt stehen. Beim Rückbau werden gezielt einzelne Bauteile entfernt, etwa eine Wand, eine Treppe oder ein Kamin. Abbruch meint das Abtragen von Bauteilen oder kleinen Gebäuden wie Gartenhäusern – komplette Hausabrisse übernehmen wir nicht.",
  },
  {
    q: "Können Sie auch tragende Wände entfernen?",
    a: "Ja – in Zusammenarbeit mit einem Statiker. Er legt fest, wie die Last abgefangen wird, zum Beispiel mit einem Stahlträger. Erst danach öffnen wir die Wand. Nichttragende Wände und Wanddurchbrüche für neue Türen erledigen wir direkt.",
  },
  {
    q: "Woran erkenne ich, ob in meinem Haus Asbest verbaut ist?",
    a: "Mit bloßem Auge meist gar nicht. Ein erster Hinweis ist das Baujahr: Bis 1993 wurde Asbest in vielen Baustoffen verwendet – in Bodenplatten und deren Kleber, in Putz, Spachtel und Fliesenkleber, in Dach- und Fassadenplatten und in Isolierungen. Gewissheit bringt eine Materialprobe aus dem Labor. Bei der Besichtigung sagen wir Ihnen, wo eine Probe sinnvoll ist.",
  },
  {
    q: "Was kostet eine Entrümpelung oder Haushaltsauflösung?",
    a: "Der Preis richtet sich nach Menge, Zugänglichkeit, Stockwerk und Entsorgungsart. Nach einer Besichtigung – oder anhand von Fotos per WhatsApp – erhalten Sie einen verbindlichen Festpreis. Spätere Nachforderungen gibt es nicht.",
  },
  {
    q: "Kümmern Sie sich auch um Entsorgung und Container?",
    a: "Ja. Wir trennen Holz, Metall, Bauschutt und Restmüll vor Ort und organisieren Container und Abfuhr. Den Stellplatz für die Mulde auf öffentlichem Grund stimmen wir bei Bedarf mit der Gemeinde ab.",
  },
  {
    q: "Übernehmen Sie auch Umzüge?",
    a: "Ja – vor allem in Verbindung mit einer Entrümpelung oder Renovierung, etwa beim Wechsel in eine kleinere Wohnung oder ins Pflegeheim. Was genau dazugehört, besprechen wir bei der Besichtigung.",
  },
];
