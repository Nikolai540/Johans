import type { PhotoKey } from "./images";

export type ServiceId =
  | "entruempelung"
  | "haushaltsaufloesung"
  | "entkernung"
  | "abbruch"
  | "rueckbau"
  | "renovierung"
  | "sanierung"
  | "trockenbau"
  | "gartenbau"
  | "gewerke";

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
    text: "Vor jeder Kernsanierung steht die Entkernung: Wir entfernen Bodenbeläge, Putz, nichttragende Wände, Decken und alte Installationen, bis nur noch der Rohbau steht. Verdächtige Baustoffe sprechen wir vorab an und lassen sie fachgerecht prüfen, bevor es losgeht.",
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
  renovierung: {
    id: "renovierung",
    name: "Renovierung",
    short: "Wände, Decken, Böden, Türen",
    text: "Wände, Decken, Böden und Türen: Wir bringen Wohnungen und Häuser in Landsberg und im Umland wieder in Schuss – vor dem Einzug, nach dem Auszug von Mietern oder als Auffrischung des eigenen Zuhauses.",
  },
  sanierung: {
    id: "sanierung",
    name: "Sanierung",
    short: "Altbau und Bestand, koordiniert",
    text: "Bei der Sanierung von Altbauten und Bestandsimmobilien koordinieren wir alle Schritte von der Entkernung bis zum Innenausbau. Gerade in den historischen Ortskernen von Landsberg, Dießen am Ammersee oder Buchloe zählt dabei ein sorgfältiger Umgang mit alter Bausubstanz.",
  },
  trockenbau: {
    id: "trockenbau",
    name: "Trockenbau",
    short: "Wände, Decken, Dachausbau",
    text: "Neue Raumaufteilung, abgehängte Decken, Vorsatzschalen oder der Ausbau des Dachgeschosses: Trockenbau ist schnell, sauber und flexibel. Ihr Ansprechpartner für Trockenbau in Landsberg am Lech – vom Ständerwerk bis zur gespachtelten, streichfertigen Wand.",
  },
  gartenbau: {
    id: "gartenbau",
    name: "Gartenbau",
    short: "Pflaster, Wege, Beete, Rasen",
    text: "Wege, Terrassen und Einfahrten pflastern, Beete anlegen, Rasen neu aufbauen, Hecken und Gehölze roden: Wir gestalten Gärten in Landsberg, Kaufering und rund um den Ammersee – oft direkt im Anschluss an Abbruch oder Sanierung.",
  },
  gewerke: {
    id: "gewerke",
    name: "Vermittlung von Gewerken",
    short: "Fachbetriebe aus der Region",
    text: "Was wir nicht selbst ausführen, vermitteln wir an Fachbetriebe aus der Region, mit denen wir zusammenarbeiten: Elektro, Sanitär und Heizung, Fliesen, Maler, Estrich und mehr. Sie behalten einen Ansprechpartner, wir stimmen die Termine ab.",
  },
};

export const serviceOrder: ServiceId[] = [
  "entruempelung",
  "haushaltsaufloesung",
  "entkernung",
  "abbruch",
  "rueckbau",
  "renovierung",
  "sanierung",
  "trockenbau",
  "gartenbau",
  "gewerke",
];

/** Zeilen der Leistungssektion: verwandte Leistungen teilen sich ein Bild. */
export const serviceRows: { ids: ServiceId[]; photo?: PhotoKey; shape: "portrait" | "landscape" | "square" }[] = [
  { ids: ["entruempelung", "haushaltsaufloesung"], photo: "sperrmuell", shape: "portrait" },
  { ids: ["entkernung"], photo: "entkernung", shape: "landscape" },
  { ids: ["abbruch", "rueckbau"], photo: "abbruch", shape: "square" },
  { ids: ["renovierung", "sanierung"], photo: "sanierungFachwerk", shape: "landscape" },
  { ids: ["trockenbau"], photo: "trockenbau", shape: "portrait" },
  { ids: ["gartenbau"], photo: "pflasterarbeiten", shape: "square" },
  { ids: ["gewerke"], shape: "landscape" },
];

export const places = [
  "Landsberg am Lech",
  "Vilgertshofen",
  "Kaufering",
  "Penzing",
  "Igling",
  "Hurlach",
  "Scheuring",
  "Prittriching",
  "Fuchstal",
  "Denklingen",
  "Windach",
  "Geltendorf",
  "Dießen am Ammersee",
  "Utting am Ammersee",
  "Schondorf am Ammersee",
  "Greifenberg",
  "Buchloe",
] as const;

// PLATZHALTER: Welche Gewerke selbst ausgeführt und welche vermittelt werden, vor dem Livegang bestätigen.
export const trades: { group: string; items: { name: string; note: string; by: "J&L Bauprojekte" | "Partnerbetrieb" }[] }[] = [
  {
    group: "Räumen & Rückbau",
    items: [
      { name: "Entrümpelung & Haushaltsauflösung", note: "Räumen, sortieren, entsorgen", by: "J&L Bauprojekte" },
      { name: "Entkernung, Abbruch & Rückbau", note: "Bis auf den Rohbau, Wanddurchbrüche", by: "J&L Bauprojekte" },
      { name: "Container & Entsorgung", note: "Mulden, Bauschutt, Wertstoffe", by: "J&L Bauprojekte" },
      { name: "Statik bei tragenden Wänden", note: "Berechnung und Abfangung", by: "Partnerbetrieb" },
    ],
  },
  {
    group: "Rohbau & Gebäudehülle",
    items: [
      { name: "Maurer- und Betonarbeiten", note: "Durchbrüche, Stürze, neue Wände", by: "Partnerbetrieb" },
      { name: "Zimmerer & Dachdecker", note: "Dachstuhl, Eindeckung, Gauben", by: "Partnerbetrieb" },
      { name: "Fenster & Türen", note: "Austausch und Einbau", by: "Partnerbetrieb" },
      { name: "Gerüstbau", note: "Fassade und Dach", by: "Partnerbetrieb" },
    ],
  },
  {
    group: "Innenausbau & Technik",
    items: [
      { name: "Renovierung & Sanierung", note: "Koordination bis zur Übergabe", by: "J&L Bauprojekte" },
      { name: "Trockenbau", note: "Wände, Decken, Dachgeschoss", by: "J&L Bauprojekte" },
      { name: "Elektroinstallation", note: "Leitungen, Verteiler, Anschlüsse", by: "Partnerbetrieb" },
      { name: "Sanitär & Heizung", note: "Bad, Leitungen, Heiztechnik", by: "Partnerbetrieb" },
      { name: "Estrich & Bodenbeläge", note: "Unterbau, Parkett, Vinyl", by: "Partnerbetrieb" },
      { name: "Fliesen", note: "Bad, Küche, Boden", by: "Partnerbetrieb" },
      { name: "Maler & Lackierer", note: "Wände, Decken, Fassade", by: "Partnerbetrieb" },
    ],
  },
  {
    group: "Außenanlagen",
    items: [
      { name: "Gartenbau, Pflaster & Wege", note: "Terrasse, Einfahrt, Beete, Rasen", by: "J&L Bauprojekte" },
      { name: "Baumpflege & Fällungen", note: "Mit Genehmigung, wo nötig", by: "Partnerbetrieb" },
    ],
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "In welchen Orten sind Sie im Einsatz?",
    a: "Unser Sitz ist Vilgertshofen bei Landsberg am Lech. Wir arbeiten im gesamten Landkreis – unter anderem in Kaufering, Penzing, Igling und Fuchstal –, in der Ammersee-Region mit Dießen, Utting und Schondorf sowie in Buchloe und Umgebung. Fragen Sie gern auch für Orte, die hier nicht stehen.",
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
    q: "Was kostet eine Entrümpelung oder Haushaltsauflösung?",
    a: "Der Preis richtet sich nach Menge, Zugänglichkeit, Stockwerk und Entsorgungsart. Nach einer Besichtigung – oder anhand von Fotos per WhatsApp – erhalten Sie einen verbindlichen Festpreis. Spätere Nachforderungen gibt es nicht.",
  },
  {
    q: "Kümmern Sie sich auch um Entsorgung und Container?",
    a: "Ja. Wir trennen Holz, Metall, Bauschutt und Restmüll vor Ort und organisieren Container und Abfuhr. Den Stellplatz für die Mulde auf öffentlichem Grund stimmen wir bei Bedarf mit der Gemeinde ab.",
  },
  {
    q: "Können Sie Handwerker für andere Gewerke vermitteln?",
    a: "Ja. Für Elektro, Sanitär, Heizung, Fliesen, Estrich, Maler und weitere Gewerke arbeiten wir mit Fachbetrieben aus der Region zusammen. Wir stimmen Termine und Reihenfolge ab, damit Ihr Projekt ohne Leerlauf vorankommt.",
  },
];
