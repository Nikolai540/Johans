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
    badge: "Unser Standort",
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
  /** Nächstgelegene Standorte, der erste erbringt die Leistung (schema.org provider) */
  locations: ("main" | "branch")[];
  title: string;
  description: string;
  h1: string;
  intro: string;
  hero: PhotoKey;
  /** focus: als Schwerpunkt der Region markiert */
  services: { h2: string; intro: string; items: { id: ServiceId; text: string; focus?: boolean }[] };
  trust: { h2: string; intro: string; items: { title: string; text: string }[] };
  local: { h2: string; paragraphs: string[]; photo: PhotoKey };
  faqs: { q: string; a: string }[];
};

// PLATZHALTER: Aussagen zu Reaktionszeiten und Abläufen (alle drei Regionen) vor dem Livegang bestätigen.
export const landsbergPage: RegionPage = {
  region: "landsberg",
  locations: ["branch", "main"],
  title: "Entrümpelung, Abbruch & Sanierung in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entrümpelung, Entkernung, Abbruch, Sanierung & Trockenbau in Landsberg am Lech, Kaufering, Penzing & Umgebung. Kostenlose Besichtigung, Festpreis.",
  h1: "Ihr Partner für Entrümpelung, Abbruch & Sanierung in Landsberg am Lech",
  intro:
    "Von der Entrümpelung über die fachgerechte Entkernung bis zum fertigen Trockenbau: Von unserem Standort in Landsberg aus erledigen wir Ihr Projekt in der Stadt, in Kaufering und Umgebung aus einer Hand – mit festem Ansprechpartner, Festpreis nach kostenloser Besichtigung und besenreiner Übergabe.",
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
      "Mit unserem Standort in der Max-Planck-Straße sind wir direkt in Landsberg zu Hause, unser Firmensitz in Vilgertshofen liegt nur gut zehn Kilometer südlich. Wir kennen die Altstadt mit ihren engen Zufahrten genauso wie die Wohngebiete im Umland – und sind schnell bei Ihnen vor Ort.",
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
      a: "Ja. Neben Landsberg am Lech sind wir in Kaufering, Penzing, Igling, Hurlach, Scheuring und Prittriching im Einsatz. Von unserem Standort in Landsberg und dem Firmensitz in Vilgertshofen sind die Wege kurz – auch für eine schnelle Besichtigung.",
    },
    {
      q: "Wo finde ich Sie in Landsberg am Lech?",
      a: "Unser Standort ist in der Max-Planck-Straße 13, 86899 Landsberg am Lech. Für die Besichtigung kommen wir zu Ihnen – rufen Sie an oder senden Sie uns Ihre Anfrage über das Formular.",
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

export const ammerseePage: RegionPage = {
  region: "ammersee",
  locations: ["branch", "main"],
  title: "Haushaltsauflösung, Renovierung & Sanierung am Ammersee | J&L Bauprojekte",
  description:
    "Haushaltsauflösung, Entrümpelung, Renovierung & Sanierung in Dießen, Utting, Schondorf, Greifenberg, Windach & Geltendorf. Diskret, besenrein, Festpreis.",
  h1: "Ihr Partner für Haushaltsauflösung, Renovierung & Sanierung am Ammersee",
  intro:
    "Ob Haus mit Seeblick in Utting, Wohnung in Dießen oder Elternhaus in Windach: Wir lösen Haushalte am Westufer des Ammersees diskret und besenrein auf und bringen Immobilien mit Renovierung und Sanierung wieder auf Stand – mit festem Ansprechpartner und Festpreis nach kostenloser Besichtigung.",
  hero: "uttingAmmersee",
  services: {
    h2: "Unsere Leistungen am Ammersee-Westufer",
    intro:
      "Am See geht es selten nur um eine Räumung: um ein Elternhaus, das verkauft werden soll, eine Wohnung, die neu vermietet wird, oder ein älteres Haus, das für die nächste Generation saniert wird. Wir begleiten alle Schritte – auch wenn Sie selbst weiter weg wohnen.",
    items: [
      {
        id: "haushaltsaufloesung",
        focus: true,
        text: "Nach einem Erbfall, vor dem Verkauf oder beim Umzug ins Pflegeheim lösen wir den kompletten Haushalt auf – diskret, ohne Aufsehen in der Nachbarschaft und mit Blick auf alles, was noch verwertet werden kann.",
      },
      {
        id: "renovierung",
        focus: true,
        text: "Wände, Decken, Böden und Türen: Wir machen Häuser und Wohnungen in Dießen, Utting und Schondorf wieder bezugsfertig – vor dem Verkauf, der Neuvermietung oder dem eigenen Einzug.",
      },
      {
        id: "sanierung",
        focus: true,
        text: "Ältere Häuser am See verdienen einen sorgfältigen Umgang mit der Bausubstanz. Wir koordinieren die Sanierung von der Entkernung bis zum Innenausbau und binden Fachbetriebe für Elektro, Sanitär und Heizung ein.",
      },
      {
        id: "entruempelung",
        text: "Keller, Dachboden, Garage oder Nebengebäude: Wir räumen, trennen nach Wertstoffen und entsorgen fachgerecht. Zufahrt und Abtransport planen wir vorab – auch bei engen Grundstücken in Seenähe.",
      },
      {
        id: "entkernung",
        text: "Vor einer Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Installationen – sortenrein getrennt und fachgerecht entsorgt.",
      },
      {
        id: "trockenbau",
        text: "Neue Raumaufteilung, Dachgeschossausbau oder abgehängte Decken: Mit Trockenbau entstehen schnell und sauber neue Räume – etwa wenn aus dem Ferienhaus ein Hauptwohnsitz werden soll.",
      },
      {
        id: "rueckbau",
        text: "Alte Kachelöfen, Kamine, Treppen oder Innenwände bauen wir kontrolliert zurück, während der Rest des Hauses unangetastet bleibt.",
      },
      {
        id: "abbruch",
        text: "Gartenhäuser, Schuppen, Carports und einzelne Wände brechen wir ab und entsorgen den Bauschutt. Wanddurchbrüche bei tragenden Wänden nur gemeinsam mit dem Statiker.",
      },
      {
        id: "gartenbau",
        text: "Nach Räumung oder Sanierung bringen wir auch den Garten in Form: Hecken und Gehölze zurückschneiden oder roden, Wege und Terrassen pflastern, Rasen neu anlegen.",
      },
    ],
  },
  trust: {
    h2: "Diskret, zuverlässig und direkt aus der Region",
    intro:
      "Von unseren Standorten in Landsberg am Lech und Vilgertshofen sind wir schnell am Westufer. Für Erben und Eigentümer, die nicht vor Ort wohnen, übernehmen wir auf Wunsch die komplette Abwicklung – Sie behalten per Telefon und Fotos den Überblick.",
    items: [
      {
        title: "Diskrete Abwicklung",
        text: "Neutrales Auftreten, kein Aufsehen in der Nachbarschaft und Stillschweigen über das, was wir sehen. Persönliche Unterlagen und Fotos legen wir für Sie beiseite.",
      },
      {
        title: "Kostenlose Besichtigung",
        text: "Wir sehen uns Haus oder Wohnung in Dießen, Utting, Schondorf oder Umgebung an – kostenlos und unverbindlich, auf Wunsch gemeinsam mit Ihrem Bevollmächtigten.",
      },
      {
        title: "Festpreis inklusive Entsorgung",
        text: "Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
      },
      {
        title: "Besenrein übergeben",
        text: "Am Ende übergeben wir die Räume besenrein – bereit für Makler, Käufer, neue Mieter oder die nächsten Handwerker.",
      },
    ],
  },
  local: {
    h2: "Rund um das Westufer des Ammersees",
    paragraphs: [
      "Zwischen Dießen und Schondorf stehen viele ältere Häuser am Hang oder in Seenähe – oft mit schmalen Zufahrten, wenig Platz für einen Container und Nachbarn, die Ruhe schätzen. Anfahrt, Stellplatz und Arbeitszeiten planen wir deshalb vorab und halten den Aufwand vor Ort so gering wie möglich.",
      "In Greifenberg, Windach und Geltendorf sind es häufiger Einfamilienhäuser und ehemalige Hofstellen, die nach einem Generationswechsel geräumt, renoviert oder saniert werden. Auch hier gilt: ein Ansprechpartner, ein Festpreis, ein fester Termin.",
    ],
    photo: "sanierungFachwerk",
  },
  faqs: [
    {
      q: "Übernehmen Sie Haushaltsauflösungen in Dießen, Utting und Schondorf?",
      a: "Ja. Wir lösen Haushalte am gesamten Westufer auf – in Dießen am Ammersee, Utting, Schondorf, Greifenberg, Windach und Geltendorf. Die Besichtigung ist kostenlos, danach erhalten Sie einen Festpreis.",
    },
    {
      q: "Ich wohne nicht in der Region – geht die Haushaltsauflösung trotzdem?",
      a: "Ja, das ist bei Haushaltsauflösungen häufig der Fall. Schlüsselübergabe, Termine und Abnahme stimmen wir mit Ihnen ab, persönliche Unterlagen legen wir beiseite und auf Wunsch schicken wir Ihnen Fotos vom Zwischenstand.",
    },
    {
      q: "Was passiert mit Möbeln und Gegenständen, die noch etwas wert sind?",
      a: "Was noch verwertet werden kann, sprechen wir bei der Besichtigung an. Was Sie behalten möchten, markieren Sie vorab – alles andere wird nach Wertstoffen getrennt und fachgerecht entsorgt.",
    },
    {
      q: "Können Sie das Haus nach der Räumung auch renovieren?",
      a: "Ja. Nach der Haushaltsauflösung übernehmen wir auf Wunsch Renovierung und Sanierung – von Wänden, Decken und Böden bis zum Trockenbau. Für Elektro, Sanitär oder Fliesen binden wir Fachbetriebe aus der Region ein. So wird das Haus aus einer Hand verkaufs- oder bezugsfertig.",
    },
    {
      q: "Wie schnell sind Sie am Ammersee vor Ort?",
      a: "Von unseren Standorten in Landsberg am Lech und Vilgertshofen ist das Westufer schnell erreicht. Den Besichtigungstermin vereinbaren wir in der Regel innerhalb weniger Tage.",
    },
  ],
};

export const buchloePage: RegionPage = {
  region: "buchloe",
  locations: ["main"],
  title: "Abbruch, Entrümpelung & Gartenarbeit in Buchloe & Fuchstal | J&L Bauprojekte",
  description:
    "Abbruch, Entrümpelung & Gartenarbeit in Buchloe, Fuchstal, Denklingen & Vilgertshofen – vom Firmensitz um die Ecke. Kostenlose Besichtigung, Festpreis.",
  h1: "Ihr Partner für Abbruch, Entrümpelung & Gartenarbeit in Buchloe und Fuchstal",
  intro:
    "Unser Firmensitz liegt in Vilgertshofen – mitten in der Region. Das ist Ihr Heimvorteil: kurze Anfahrt, schnelle Reaktion und unkomplizierte Absprachen für Abbruch, Entrümpelung und Gartenarbeit in Fuchstal, Denklingen, Buchloe und Umgebung.",
  hero: "buchloeLuftbild",
  services: {
    h2: "Unsere Leistungen in Buchloe, Fuchstal und Umgebung",
    intro:
      "Vom alten Schuppen über die volle Scheune bis zum neuen Pflaster im Hof: Wir übernehmen Abbruch, Räumung und Gartenarbeit – und alles, was danach am Haus ansteht.",
    items: [
      {
        id: "abbruch",
        focus: true,
        text: "Gartenhäuser, Schuppen, Carports und kleine Nebengebäude brechen wir ab und entsorgen den Bauschutt sortenrein. Wanddurchbrüche bei tragenden Wänden nur gemeinsam mit dem Statiker.",
      },
      {
        id: "entruempelung",
        focus: true,
        text: "Scheune, Stadel, Dachboden oder das ganze Haus: Wir räumen auch große Mengen, trennen nach Wertstoffen und organisieren den Container. Weil wir aus der Nähe kommen, geht das oft auch kurzfristig.",
      },
      {
        id: "gartenbau",
        focus: true,
        text: "Hecken und Gehölze roden, Wege, Terrassen und Hofflächen pflastern, Beete und Rasen neu anlegen – gern direkt im Anschluss an den Abbruch, damit aus der frei gewordenen Fläche ein Garten wird.",
      },
      {
        id: "haushaltsaufloesung",
        text: "Nach einem Erbfall oder vor dem Verkauf lösen wir den Haushalt diskret und termingerecht auf – vom Einfamilienhaus in Buchloe bis zum Hof in Fuchstal.",
      },
      {
        id: "rueckbau",
        text: "Kamine, Treppen, Zwischenwände oder alte Anbauten bauen wir kontrolliert zurück, während der Rest des Gebäudes stehen bleibt.",
      },
      {
        id: "entkernung",
        text: "Vor der Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Installationen – sortenrein getrennt und fachgerecht entsorgt.",
      },
      {
        id: "renovierung",
        text: "Wände, Decken, Böden und Türen: Wir machen Wohnungen und Häuser in der Region wieder bezugsfertig – vor dem Einzug, nach dem Auszug oder zur Auffrischung.",
      },
      {
        id: "sanierung",
        text: "Ältere Häuser und Hofstellen sanieren wir Schritt für Schritt – von der Entkernung bis zum Innenausbau, mit Fachbetrieben aus unserem Netzwerk.",
      },
      {
        id: "trockenbau",
        text: "Dachgeschoss ausbauen, Räume neu aufteilen, Decken abhängen: Trockenbau vom Ständerwerk bis zur streichfertig gespachtelten Wand.",
      },
    ],
  },
  trust: {
    h2: "Ihr Heimvorteil: kurze Wege, schnelle Reaktion",
    intro:
      "Von unserem Firmensitz in Vilgertshofen sind Fuchstal und Denklingen nur wenige Kilometer entfernt, nach Buchloe sind es rund 20 Kilometer. Für Sie heißt das: schneller Besichtigungstermin, flexible Absprachen und kurze Anfahrten.",
    items: [
      {
        title: "Schnell vor Ort",
        text: "Ob Besichtigung oder Rückfrage auf der Baustelle: Aus Vilgertshofen sind wir in kurzer Zeit bei Ihnen – auch für kleinere Aufträge.",
      },
      {
        title: "Unkomplizierte Abwicklung",
        text: "Ein Anruf, ein Termin, ein Festpreis. Container, Abtransport und Entsorgung organisieren wir – Sie müssen sich um nichts kümmern.",
      },
      {
        title: "Kostenlose Besichtigung",
        text: "Wir schauen uns Abbruch, Räumung oder Garten vor Ort an – kostenlos und unverbindlich. Danach erhalten Sie einen Festpreis.",
      },
      {
        title: "Aus der Region, für die Region",
        text: "Johann Schmidt kennt die Orte, die Wege und die Betriebe hier. Für weitere Gewerke greifen wir auf Fachbetriebe aus der Nachbarschaft zurück.",
      },
    ],
  },
  local: {
    h2: "Daheim zwischen Fuchstal und Buchloe",
    paragraphs: [
      "In Vilgertshofen, Fuchstal und Denklingen sind wir zu Hause – bis in Ortsteile wie Leeder, Asch, Seestall oder Epfach. Hier geht es oft um Höfe, Scheunen und Nebengebäude, die nicht mehr gebraucht werden: Wir räumen, brechen ab und machen aus der frei gewordenen Fläche Hof, Garten oder Stellplatz.",
      "In Buchloe, schon im Landkreis Ostallgäu, sind es eher Einfamilienhäuser, Wohnungen und Gewerbeflächen, die entrümpelt, entkernt oder für neue Nutzer vorbereitet werden. Auch hier gilt: ein Ansprechpartner, ein Festpreis, ein fester Termin.",
    ],
    photo: "pflasterarbeiten",
  },
  faqs: [
    {
      q: "Kommen Sie auch nach Buchloe, obwohl das im Ostallgäu liegt?",
      a: "Ja. Buchloe gehört fest zu unserem Einsatzgebiet, auch wenn die Stadt schon zum Landkreis Ostallgäu zählt. Von unserem Firmensitz in Vilgertshofen sind es rund 20 Kilometer.",
    },
    {
      q: "Wie schnell können Sie in Fuchstal oder Denklingen starten?",
      a: "Weil unser Firmensitz in der Nachbarschaft liegt, ist die Besichtigung meist schnell vereinbart. Den Starttermin legen wir danach gemeinsam fest – kleinere Aufträge lassen sich oft kurzfristig einplanen.",
    },
    {
      q: "Brechen Sie auch Scheunen oder ganze Häuser ab?",
      a: "Kleine Nebengebäude wie Gartenhäuser, Schuppen oder Carports brechen wir selbst ab. Komplette Hausabrisse übernehmen wir nicht – hier vermitteln wir Ihnen bei Bedarf einen passenden Fachbetrieb. Ob eine Scheune darunter fällt, klären wir bei der kostenlosen Besichtigung.",
    },
    {
      q: "Übernehmen Sie nach dem Abbruch auch die Gartenarbeit?",
      a: "Ja. Wir entsorgen den Bauschutt, gleichen die Fläche aus und legen auf Wunsch Pflaster, Wege, Beete oder Rasen an. So haben Sie für Abbruch und Garten einen Ansprechpartner.",
    },
    {
      q: "Was kostet die Besichtigung?",
      a: "Nichts. Die Besichtigung ist kostenlos und unverbindlich. Danach erhalten Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
  ],
};

/** Alle regionalen Landingpages, die bereits veröffentlicht sind (Sitemap) */
export const regionPages: RegionPage[] = [landsbergPage, ammerseePage, buchloePage];

export function regionById(id: RegionId) {
  return regions.find((r) => r.id === id)!;
}
