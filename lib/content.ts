import type { PhotoKey } from "./images";
import { regions } from "./regions";
import { pages } from "./site";
import { containerdienst } from "./spezialseiten";

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
    text: "Keller, Dachboden, Garage oder die ganze Wohnung: Wir räumen, trennen nach Wertstoffen und entsorgen fachgerecht. Bei Entrümpelungen in Landsberg am Lech, Kaufering und Umgebung bestellen wir auf Wunsch den Container. Am Ende ist alles besenrein.",
  },
  haushaltsaufloesung: {
    id: "haushaltsaufloesung",
    name: "Haushaltsauflösung",
    short: "Nach Erbfall, Umzug oder vor dem Verkauf",
    text: "Nach einem Erbfall, beim Umzug ins Pflegeheim oder vor dem Verkauf lösen wir den ganzen Haushalt auf. Diskret, zum vereinbarten Termin, und was noch verwertbar ist, sortieren wir aus. Sie haben einen Ansprechpartner statt drei Firmen.",
  },
  entkernung: {
    id: "entkernung",
    name: "Entkernung",
    short: "Zurück auf den Rohbau",
    text: "Vor jeder Kernsanierung kommt die Entkernung. Wir holen Bodenbeläge, Putz, nichttragende Wände, Decken und alte Leitungen raus, bis nur der Rohbau steht. Verdächtige Baustoffe klären wir, bevor es losgeht.",
  },
  abbruch: {
    id: "abbruch",
    name: "Abbruch",
    short: "Wände, Böden, Gartenhäuser, Nebengebäude",
    text: "Kleinere Abbrucharbeiten: einzelne Wände, Fliesen und Estrich, Gartenhäuser, Schuppen und kleine Nebengebäude. Dazu Wanddurchbrüche für neue Türen, bei tragenden Wänden zusammen mit dem Statiker. Ganze Häuser reißen wir nicht ab.",
  },
  rueckbau: {
    id: "rueckbau",
    name: "Rückbau",
    short: "Kontrolliert, Bauteil für Bauteil",
    text: "Treppen, Kamine, Innenwände oder ganze Gebäudeteile bauen wir Stück für Stück zurück. Der Rest des Hauses bleibt stehen, und die Nachbarn merken wenig davon.",
  },
  schadstoffsanierung: {
    id: "schadstoffsanierung",
    name: "Schadstoffsanierung",
    short: "Asbest und alte Mineralwolle",
    text: "Asbestsanierung nach TRGS 519: Asbest in alten Bodenbelägen, Klebern, Putz oder Eternit-Platten bauen wir mit Sachkunde nach Anlage 4 aus, alte Mineralwolle ebenso. Mit Gefährdungsbeurteilung, festen Schutzmaßnahmen und Entsorgungsnachweis.",
  },
  renovierung: {
    id: "renovierung",
    name: "Renovierung",
    short: "Wände, Decken, Böden",
    text: "Wände, Decken und Böden: Wir machen Wohnungen und Häuser wieder bezugsfertig. Vor dem Einzug, nach dem Mieterwechsel oder vor dem Verkauf.",
  },
  trockenbau: {
    id: "trockenbau",
    name: "Trockenbau",
    short: "Wände, Decken, Dachausbau",
    text: "Neue Raumaufteilung, abgehängte Decken, Vorsatzschalen oder das Dachgeschoss ausbauen. Vom Ständerwerk bis zur streichfertig gespachtelten Wand.",
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
    text: "Wir packen mit an, tragen und fahren. Am meisten spart das zusammen mit einer Entrümpelung oder Renovierung. Den genauen Umfang besprechen wir bei der Besichtigung.",
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

/** Die Leistungsbereiche auf der Startseite */
export const serviceCategories: {
  id: "entkernung" | "entruempelung" | "renovierung" | "schadstoffe" | "containerdienst";
  name: string;
  text: string;
  /** Leistungen aus `services` oder eigene Stichpunkte */
  items: (ServiceId | { name: string; short: string })[];
  photo: PhotoKey;
  shape: "portrait" | "landscape" | "square";
  page: { href: string; cta: string };
}[] = [
  {
    id: "entkernung",
    name: "Entkernung, Abbruch & Rückbau",
    text: "Wir entkernen bis auf den Rohbau, bauen Bauteile kontrolliert zurück und übernehmen kleinere Abbrucharbeiten. Steckt Asbest oder alte Mineralwolle im Bestand, bauen wir das gleich fachgerecht mit aus.",
    items: ["entkernung", "abbruch", "rueckbau"],
    photo: "entkernung",
    shape: "landscape",
    page: { href: pages.entkernung.href, cta: "Alles zu Entkernung, Abbruch & Rückbau" },
  },
  {
    id: "entruempelung",
    name: "Entrümpelung & Haushaltsauflösung",
    text: "Keller, Dachboden, Garage oder die ganze Wohnung: Wir räumen, trennen und entsorgen. Haushaltsauflösungen nach einem Erbfall, beim Umzug ins Pflegeheim oder vor dem Verkauf erledigen wir diskret und pünktlich. Sie bekommen die Räume besenrein zurück.",
    items: ["entruempelung", "haushaltsaufloesung"],
    photo: "sperrmuell",
    shape: "portrait",
    page: { href: pages.entruempelung.href, cta: "Alles zu Entrümpelung & Haushaltsauflösung" },
  },
  {
    id: "renovierung",
    name: "Renovierung",
    text: "Trockenbau, neue Böden und auf Wunsch der Umzug: So werden Wohnungen und Häuser wieder bezugsfertig, ob vor dem Einzug, nach dem Mieterwechsel oder vor dem Verkauf.",
    items: ["trockenbau", "bodenverlegung", "umzug"],
    photo: "trockenbau",
    shape: "portrait",
    page: { href: pages.renovierung.href, cta: "Alles zur Renovierung" },
  },
  {
    id: "schadstoffe",
    name: "Schadstoffsanierung",
    text: "Viele Häuser, die zwischen 1950 und 1995 gebaut oder modernisiert wurden, enthalten heute verbotene Baustoffe. Zum Problem wird das beim Umbau. Asbestsanierung nach TRGS 519 und der Ausbau alter Mineralwolle gehören bei uns dazu, mit Schutzmaßnahmen und Entsorgungsnachweis.",
    items: [
      { name: "Asbest", short: "Bodenbeläge, Kleber, Putz, Eternit-Platten" },
      { name: "Alte Mineralwolle (KMF)", short: "Dämmung aus der Zeit vor 1996" },
      { name: "Entsorgung", short: "Fachgerecht und mit Nachweis" },
    ],
    photo: "sanierungFachwerk",
    shape: "landscape",
    page: { href: pages.schadstoffe.href, cta: "Alles zur Schadstoffsanierung" },
  },
  {
    id: "containerdienst",
    name: "Container & Entsorgung",
    text: "Bei jeder Entrümpelung und Entkernung kümmern wir uns auch um den Abfall. Den passenden Container bestellen wir bei Partnern aus der Region, befüllen ihn selbst und lassen alles fachgerecht entsorgen. Das ist im Festpreis drin.",
    items: [
      { name: "Bauschutt", short: "Aus Entkernung, Abbruch und Rückbau" },
      { name: "Sperrmüll", short: "Aus Entrümpelung und Haushaltsauflösung" },
      { name: "Mischabfall", short: "Gemischte Bau- und Gewerbeabfälle" },
    ],
    photo: "abbruch",
    shape: "square",
    page: { href: containerdienst.path, cta: "Alles zu Container & Entsorgung" },
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
    a: "Bei der Entkernung wird ein Gebäude weitgehend vom Innenausbau befreit: Böden, Fliesen, Decken, Trockenbau, Türen und Sanitär kommen raus, der Rohbau bleibt stehen. Beim Rückbau werden gezielt einzelne Bauteile entfernt, etwa eine Wand, eine Treppe oder ein Kamin. Abbruch heißt, Bauteile oder kleine Gebäude wie Gartenhäuser abzutragen. Komplette Hausabrisse übernehmen wir nicht.",
  },
  {
    q: "Können Sie auch tragende Wände entfernen?",
    a: "Ja, zusammen mit einem Statiker. Er legt fest, wie die Last abgefangen wird, zum Beispiel mit einem Stahlträger. Erst danach öffnen wir die Wand. Nichttragende Wände und Wanddurchbrüche für neue Türen erledigen wir direkt.",
  },
  {
    q: "Was kostet eine Entrümpelung oder Haushaltsauflösung?",
    a: "Der Preis hängt von Menge, Zugang, Stockwerk und Entsorgung ab. Nach einer Besichtigung oder anhand von Fotos per WhatsApp bekommen Sie einen verbindlichen Festpreis. Nachforderungen gibt es nicht.",
  },
  {
    q: "Kümmern Sie sich auch um Entsorgung und Container?",
    a: "Ja. Wir trennen Holz, Metall, Bauschutt und Restmüll vor Ort und organisieren Container und Abfuhr. Den Stellplatz für die Mulde auf öffentlichem Grund stimmen wir bei Bedarf mit der Gemeinde ab.",
  },
  {
    q: "Übernehmen Sie auch Umzüge?",
    a: "Ja, vor allem zusammen mit einer Entrümpelung oder Renovierung, etwa beim Wechsel in eine kleinere Wohnung oder ins Pflegeheim. Den genauen Umfang besprechen wir bei der Besichtigung.",
  },
];
