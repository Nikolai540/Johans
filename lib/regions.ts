import type { ServiceId } from "./content";
import type { PhotoKey } from "./images";

// Regionale Landingpages. Jede Region braucht eigenständige Texte (Schwerpunkte, Orte, Fragen) –
// nur den Ortsnamen auszutauschen wertet Google als Brückenseite (Doorway Page).
// Neue Region: Datensatz unten ergänzen und den Ordner app/einsatzgebiet/landsberg-am-lech kopieren.

export type RegionId = "landsberg" | "ammersee" | "buchloe";

export type Region = {
  id: RegionId;
  href: string;
  name: string;
  /** Offizielle Ortsnamen – auch für schema.org areaServed */
  places: string[];
  /** Kurzbeschreibung für die Karte auf der Startseite */
  teaser: string;
  /** Linktext der Karte, beschreibend statt "Mehr erfahren" */
  cta: string;
  badge?: string;
};

export const regions: Region[] = [
  {
    id: "landsberg",
    href: "/einsatzgebiet/landsberg-am-lech/",
    name: "Landsberg am Lech & Umgebung",
    places: ["Landsberg am Lech", "Kaufering", "Penzing", "Igling", "Hurlach", "Scheuring", "Prittriching"],
    teaser: "Unser komplettes Leistungsportfolio für Stadt und Umland – von der fachgerechten Entkernung bis zum Trockenbau.",
    cta: "Leistungen in Landsberg & Umgebung",
  },
  {
    id: "ammersee",
    href: "/einsatzgebiet/ammersee-westufer/",
    name: "Ammersee Westufer",
    places: ["Dießen am Ammersee", "Utting am Ammersee", "Schondorf am Ammersee", "Greifenberg", "Windach", "Geltendorf"],
    teaser: "Diskrete, besenreine Haushaltsauflösungen sowie Renovierung und Sanierung für Immobilien in Seenähe.",
    cta: "Leistungen am Ammersee-Westufer",
  },
  {
    id: "buchloe",
    href: "/einsatzgebiet/buchloe-fuchstal/",
    name: "Buchloe, Fuchstal & Region",
    places: ["Vilgertshofen", "Fuchstal", "Denklingen", "Buchloe"],
    teaser: "Unser Heimvorteil: kurze Wege, schnelle Reaktion und unkomplizierte Abwicklung – für Abbruch, Entrümpelung und Gartenarbeit.",
    cta: "Leistungen in Buchloe, Fuchstal & Region",
    badge: "Unser Firmensitz",
  },
];

export type RegionPage = {
  region: RegionId;
  title: string;
  description: string;
  h1: string;
  intro: string;
  hero: PhotoKey;
  services: { h2: string; intro: string; items: { id: ServiceId; text: string }[] };
  trust: { h2: string; intro: string; items: { title: string; text: string }[] };
  local: { h2: string; paragraphs: string[]; photo: PhotoKey };
  faqs: { q: string; a: string }[];
};

// PLATZHALTER: Aussagen zu Reaktionszeiten und Abläufen vor dem Livegang bestätigen.
export const landsbergPage: RegionPage = {
  region: "landsberg",
  title: "Entrümpelung, Abbruch & Sanierung in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entrümpelung, Entkernung, Abbruch, Sanierung & Trockenbau in Landsberg am Lech, Kaufering, Penzing & Umgebung. Kostenlose Besichtigung, Festpreis.",
  h1: "Ihr Partner für Entrümpelung, Abbruch & Sanierung in Landsberg am Lech",
  intro:
    "Von der Entrümpelung über die fachgerechte Entkernung bis zum fertigen Trockenbau: Wir erledigen Ihr Projekt in Landsberg am Lech, Kaufering und Umgebung aus einer Hand – mit festem Ansprechpartner, Festpreis nach kostenloser Besichtigung und besenreiner Übergabe.",
  hero: "landsbergLuftbild",
  services: {
    h2: "Unsere Leistungen in Landsberg am Lech und Umgebung",
    intro:
      "Für Eigentümer, Erbengemeinschaften, Vermieter und Hausverwaltungen im Raum Landsberg übernehmen wir jeden Schritt – einzeln beauftragt oder als ein Projekt mit einem Zeitplan.",
    items: [
      {
        id: "entruempelung",
        text: "Keller, Dachboden, Garage oder die ganze Wohnung: In Landsberg, Kaufering und den Nachbargemeinden räumen wir zügig, trennen nach Wertstoffen und übergeben besenrein. Den Container organisieren wir auf Wunsch gleich mit.",
      },
      {
        id: "haushaltsaufloesung",
        text: "Nach einem Erbfall, vor dem Verkauf oder beim Umzug ins Pflegeheim lösen wir den kompletten Haushalt auf – diskret, termingerecht und auch dann, wenn Sie selbst nicht in der Region wohnen.",
      },
      {
        id: "entkernung",
        text: "Vor der Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Installationen – sortenrein getrennt und fachgerecht entsorgt, im Altbau wie im Reihenhaus.",
      },
      {
        id: "abbruch",
        text: "Einzelne Wände, Fliesen und Estrich, Gartenhäuser, Schuppen und kleine Nebengebäude. Wanddurchbrüche für neue Türen und Durchgänge – bei tragenden Wänden gemeinsam mit dem Statiker.",
      },
      {
        id: "rueckbau",
        text: "Treppen, Kamine, Innenwände oder ganze Gebäudeteile bauen wir kontrolliert zurück, während der Rest des Hauses stehen bleibt – gerade in der dichten Bebauung der Landsberger Altstadt entscheidend.",
      },
      {
        id: "renovierung",
        text: "Wände, Decken, Böden und Türen: Wir bringen Wohnungen und Häuser im Landkreis wieder in Schuss – vor dem Einzug, nach dem Mieterwechsel oder als Auffrischung des eigenen Zuhauses.",
      },
      {
        id: "sanierung",
        text: "Von der Entkernung bis zum Innenausbau koordinieren wir die Sanierung von Altbau und Bestand – mit Gespür für alte Bausubstanz, wie sie in Landsberg und den Ortskernen der Umgebung typisch ist.",
      },
      {
        id: "trockenbau",
        text: "Neue Raumaufteilung, abgehängte Decken, Vorsatzschalen oder der Ausbau des Dachgeschosses – vom Ständerwerk bis zur streichfertig gespachtelten Wand, oft direkt im Anschluss an die Entkernung.",
      },
      {
        id: "gartenbau",
        text: "Wege, Terrassen und Einfahrten pflastern, Beete und Rasen neu anlegen, Hecken und Gehölze roden – häufig direkt nach Abbruch oder Sanierung, damit Haus und Garten gemeinsam fertig werden.",
      },
    ],
  },
  trust: {
    h2: "Zuverlässig, termingerecht und direkt aus der Region",
    intro:
      "Unser Sitz in Vilgertshofen liegt nur gut zehn Kilometer südlich von Landsberg. Wir kennen die Altstadt mit ihren engen Zufahrten genauso wie die Wohngebiete im Umland – und sind schnell bei Ihnen vor Ort.",
    items: [
      {
        title: "Kostenlose Besichtigung",
        text: "Wir sehen uns Ihr Objekt in Landsberg, Kaufering oder Umgebung an, bevor wir ein Angebot machen – kostenlos und unverbindlich.",
      },
      {
        title: "Festpreis statt Überraschungen",
        text: "Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
      },
      {
        title: "Ein Ansprechpartner",
        text: "Johann Schmidt koordiniert Ihr Projekt persönlich – von der Entrümpelung bis zum Garten. Fachbetriebe aus der Region binden wir bei Bedarf ein.",
      },
      {
        title: "Termingerecht und besenrein",
        text: "Wir nennen Ihnen einen Termin und halten ihn. Am Ende übergeben wir besenrein – bereit für Verkauf, Übergabe oder die nächsten Handwerker.",
      },
    ],
  },
  local: {
    h2: "Von der Altstadt bis ins Umland",
    paragraphs: [
      "In der Landsberger Altstadt treffen wir auf historische Bausubstanz, enge Zufahrten und Nachbarn Wand an Wand. Zufahrt, Container-Stellplatz und Arbeitszeiten klären wir deshalb vorab und arbeiten so, dass Bestand und Nachbarschaft geschont werden.",
      "In Kaufering, Penzing und Igling sind es oft Einfamilien- und Reihenhäuser, die nach einem Generationswechsel entrümpelt, entkernt und saniert werden. Rund um Hurlach, Scheuring und Prittriching kommen häufig Scheunen, Nebengebäude und große Grundstücke dazu – vom Abbruch des alten Schuppens bis zur neuen Pflasterfläche.",
    ],
    photo: "landsbergLechUfer",
  },
  faqs: [
    {
      q: "Kommen Sie auch nach Kaufering, Penzing oder Prittriching?",
      a: "Ja. Neben Landsberg am Lech sind wir in Kaufering, Penzing, Igling, Hurlach, Scheuring und Prittriching im Einsatz. Von unserem Sitz in Vilgertshofen sind die Wege kurz – auch für eine schnelle Besichtigung.",
    },
    {
      q: "Was kostet die Besichtigung in Landsberg und Umgebung?",
      a: "Nichts. Die Besichtigung vor Ort ist kostenlos und unverbindlich. Danach erhalten Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
    {
      q: "Wie schnell können Sie mit einer Entrümpelung oder Entkernung beginnen?",
      a: "Den Besichtigungstermin vereinbaren wir in der Regel innerhalb weniger Tage. Den Starttermin legen wir danach gemeinsam fest – abhängig vom Umfang und davon, ob zum Beispiel ein Verkaufs- oder Übergabetermin feststeht.",
    },
    {
      q: "Übernehmen Sie Entkernung und Trockenbau im selben Projekt?",
      a: "Ja. Wir entkernen, bauen zurück und setzen anschließend neue Wände, Decken oder den Dachausbau im Trockenbau um. Für Elektro, Sanitär oder Fliesen binden wir Fachbetriebe aus der Region ein – Sie behalten einen Ansprechpartner.",
    },
    {
      q: "Kümmern Sie sich um Container und Entsorgung?",
      a: "Ja. Wir organisieren auf Wunsch den Container, trennen nach Wertstoffen und entsorgen über zugelassene Entsorgungsbetriebe. Die Kosten dafür sind im Festpreis enthalten.",
    },
  ],
};

/** Alle regionalen Landingpages, die bereits veröffentlicht sind (Sitemap) */
export const regionPages: RegionPage[] = [landsbergPage];

export function regionById(id: RegionId) {
  return regions.find((r) => r.id === id)!;
}
