import type { ServiceId } from "./content";
import type { PhotoKey } from "./images";

// Regionale Landingpages. Jede Region braucht eigenständige Texte (Schwerpunkte, Orte, Fragen) –
// nur den Ortsnamen auszutauschen wertet Google als Brückenseite (Doorway Page).
// Neue Region: Datensatz unten ergänzen und den Ordner app/einsatzgebiet/landsberg-am-lech kopieren.

export type RegionId = "landsberg" | "ammersee" | "buchloe" | "augsburg" | "schongau" | "allgaeu";

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
    teaser: "Unser komplettes Leistungsportfolio für Stadt und Umland – von der Entrümpelung über die Entkernung bis zum neuen Boden.",
    cta: "Leistungen in Landsberg & Umgebung",
    badge: "Unser Standort",
  },
  {
    id: "ammersee",
    href: "/einsatzgebiet/ammersee-westufer/",
    name: "Ammersee Westufer",
    places: ["Dießen am Ammersee", "Utting am Ammersee", "Schondorf am Ammersee", "Greifenberg", "Windach", "Geltendorf"],
    teaser: "Diskrete, besenreine Haushaltsauflösungen und Renovierung für Immobilien in Seenähe.",
    cta: "Leistungen am Ammersee-Westufer",
  },
  {
    id: "buchloe",
    href: "/einsatzgebiet/buchloe-fuchstal/",
    name: "Buchloe, Fuchstal & Region",
    places: ["Vilgertshofen", "Fuchstal", "Denklingen", "Buchloe"],
    teaser: "Unser Heimvorteil: kurze Wege, schnelle Reaktion und unkomplizierte Abwicklung – für Abbruch, Entrümpelung und Renovierung.",
    cta: "Leistungen in Buchloe, Fuchstal & Region",
    badge: "Unser Firmensitz",
  },
  {
    id: "augsburg",
    href: "/einsatzgebiet/augsburg/",
    name: "Augsburg & Umgebung",
    places: ["Augsburg", "Königsbrunn", "Bobingen", "Schwabmünchen", "Friedberg", "Mering"],
    teaser: "Wohnungsauflösungen, Entkernung und Renovierung für Eigentümer, Vermieter und Hausverwaltungen in der Stadt und im Umland.",
    cta: "Leistungen in Augsburg & Umgebung",
  },
  {
    id: "schongau",
    href: "/einsatzgebiet/schongau/",
    name: "Schongau & Pfaffenwinkel",
    places: ["Schongau", "Peiting", "Altenstadt", "Hohenfurch", "Schwabsoien", "Peißenberg"],
    teaser: "Haushaltsauflösung, Rückbau und Renovierung für Altstadthäuser, Höfe und Einfamilienhäuser – über die B17 schnell erreicht.",
    cta: "Leistungen in Schongau & Pfaffenwinkel",
  },
  {
    id: "allgaeu",
    href: "/einsatzgebiet/allgaeu/",
    name: "Allgäu",
    places: ["Kaufbeuren", "Marktoberdorf", "Mindelheim", "Bad Wörishofen", "Türkheim"],
    teaser: "Entkernung, Entrümpelung und neue Böden in Kaufbeuren, Mindelheim, Marktoberdorf und Umgebung.",
    cta: "Leistungen im Allgäu",
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

// PLATZHALTER: Aussagen zu Reaktionszeiten und Abläufen (alle Regionen) vor dem Livegang bestätigen.
// Augsburg, Schongau und Allgäu zeigen vorerst Symbolbilder – Ortsfotos in lib/images.ts ergänzen und hier eintragen.
export const landsbergPage: RegionPage = {
  region: "landsberg",
  locations: ["branch", "main"],
  title: "Entrümpelung, Entkernung & Renovierung in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entrümpelung, Entkernung, Abbruch und Renovierung in Landsberg am Lech, Kaufering, Penzing & Umgebung. Kostenlose Besichtigung, Festpreis.",
  h1: "Ihr Partner für Entrümpelung, Entkernung & Renovierung in Landsberg am Lech",
  intro:
    "Von der Entrümpelung über die fachgerechte Entkernung bis zum neu verlegten Boden: Von unserem Standort in Landsberg aus erledigen wir Ihr Projekt in der Stadt, in Kaufering und Umgebung aus einer Hand – mit festem Ansprechpartner, Festpreis nach kostenloser Besichtigung und besenreiner Übergabe.",
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
        text: "Wände, Decken und neue Raumaufteilung im Trockenbau: Wir bringen Wohnungen und Häuser im Landkreis wieder in Schuss – vor dem Einzug, nach dem Mieterwechsel oder vor dem Verkauf.",
      },
      {
        id: "bodenverlegung",
        text: "Laminat und Vinyl mit Trittschalldämmung, Sockelleisten und Übergangsprofilen – oft direkt im Anschluss an die Entkernung, damit der Untergrund nicht lange offen liegt.",
      },
      {
        id: "umzug",
        text: "Beim Umzug in eine kleinere Wohnung oder ins Pflegeheim packen wir mit an und verbinden Transport, Räumung und Renovierung der alten Wohnung. Den Umfang klären wir bei der Besichtigung.",
      },
      {
        id: "schadstoffsanierung",
        text: "In Altbauten der Innenstadt und in Häusern aus den 1960er- bis 1980er-Jahren kann Asbest in Böden, Klebern oder Putz stecken. Wir klären den Verdacht vor dem Umbau und bauen belastete Materialien nach TRGS 519 zurück.",
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
        text: "Johann Schmidt koordiniert Ihr Projekt persönlich – von der Entrümpelung bis zum fertig verlegten Boden.",
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
      "In Kaufering, Penzing und Igling sind es oft Einfamilien- und Reihenhäuser, die nach einem Generationswechsel entrümpelt, entkernt und renoviert werden. Rund um Hurlach, Scheuring und Prittriching kommen häufig Scheunen und Nebengebäude dazu – von der Räumung der Scheune bis zum Abbruch des alten Schuppens.",
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
      q: "Übernehmen Sie Entkernung und Renovierung im selben Projekt?",
      a: "Ja. Wir entkernen, bauen zurück und setzen anschließend neue Wände und Decken im Trockenbau um oder verlegen den neuen Boden. Sie haben dabei einen Ansprechpartner und einen Zeitplan.",
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
  title: "Haushaltsauflösung & Renovierung am Ammersee | J&L Bauprojekte",
  description:
    "Haushaltsauflösung, Entrümpelung, Renovierung & Bodenverlegung in Dießen, Utting, Schondorf, Greifenberg, Windach & Geltendorf. Diskret, besenrein, Festpreis.",
  h1: "Ihr Partner für Haushalts\u00adauflösung & Renovierung am Ammersee",
  intro:
    "Ob Haus mit Seeblick in Utting, Wohnung in Dießen oder Elternhaus in Windach: Wir lösen Haushalte am Westufer des Ammersees diskret und besenrein auf und bringen Immobilien mit Renovierung und neuen Böden wieder auf Stand – mit festem Ansprechpartner und Festpreis nach kostenloser Besichtigung.",
  hero: "uttingAmmersee",
  services: {
    h2: "Unsere Leistungen am Ammersee-Westufer",
    intro:
      "Am See geht es selten nur um eine Räumung: um ein Elternhaus, das verkauft werden soll, eine Wohnung, die neu vermietet wird, oder ein älteres Haus, das für die nächste Generation hergerichtet wird. Wir begleiten alle Schritte – auch wenn Sie selbst weiter weg wohnen.",
    items: [
      {
        id: "haushaltsaufloesung",
        focus: true,
        text: "Nach einem Erbfall, vor dem Verkauf oder beim Umzug ins Pflegeheim lösen wir den kompletten Haushalt auf – diskret, ohne Aufsehen in der Nachbarschaft und mit Blick auf alles, was noch verwertet werden kann.",
      },
      {
        id: "renovierung",
        focus: true,
        text: "Wände, Decken und neue Räume im Trockenbau: Wir machen Häuser und Wohnungen in Dießen, Utting und Schondorf wieder bezugsfertig – vor dem Verkauf, der Neuvermietung oder wenn aus dem Ferienhaus ein Hauptwohnsitz wird.",
      },
      {
        id: "entruempelung",
        text: "Keller, Dachboden, Garage oder Nebengebäude: Wir räumen, trennen nach Wertstoffen und entsorgen fachgerecht. Zufahrt und Abtransport planen wir vorab – auch bei engen Grundstücken in Seenähe.",
      },
      {
        id: "bodenverlegung",
        text: "Laminat und Vinyl statt abgetretenem Teppich: Wir entfernen den alten Belag und verlegen den neuen mit Trittschalldämmung, Sockelleisten und Übergangsprofilen.",
      },
      {
        id: "umzug",
        text: "Wenn Eltern in eine kleinere Wohnung oder ins Pflegeheim ziehen, packen wir mit an und verbinden Umzug, Räumung und Renovierung. Den Umfang klären wir bei der Besichtigung.",
      },
      {
        id: "entkernung",
        text: "Vor einer Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Installationen – sortenrein getrennt und fachgerecht entsorgt.",
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
        id: "schadstoffsanierung",
        text: "Viele Häuser am See stammen aus Jahrzehnten, in denen Asbest verbaut wurde – in Bodenbelägen, Klebern oder Eternit-Platten an Garage und Schuppen. Wir klären den Verdacht vor dem Umbau und bauen nach TRGS 519 zurück.",
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
      "In Greifenberg, Windach und Geltendorf sind es häufiger Einfamilienhäuser und ehemalige Hofstellen, die nach einem Generationswechsel geräumt, entkernt oder renoviert werden. Auch hier gilt: ein Ansprechpartner, ein Festpreis, ein fester Termin.",
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
      a: "Ja. Nach der Haushaltsauflösung übernehmen wir auf Wunsch die Renovierung – Wände und Decken im Trockenbau und neue Laminat- oder Vinylböden. So wird das Haus aus einer Hand verkaufs- oder bezugsfertig.",
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
  title: "Abbruch, Entrümpelung & Renovierung in Buchloe & Fuchstal | J&L Bauprojekte",
  description:
    "Abbruch, Entrümpelung & Renovierung in Buchloe, Fuchstal, Denklingen & Vilgertshofen – vom Firmensitz um die Ecke. Kostenlose Besichtigung, Festpreis.",
  h1: "Ihr Partner für Abbruch, Entrümpelung & Renovierung in Buchloe und Fuchstal",
  intro:
    "Unser Firmensitz liegt in Vilgertshofen – mitten in der Region. Das ist Ihr Heimvorteil: kurze Anfahrt, schnelle Reaktion und unkomplizierte Absprachen für Abbruch, Entrümpelung und Renovierung in Fuchstal, Denklingen, Buchloe und Umgebung.",
  hero: "buchloeLuftbild",
  services: {
    h2: "Unsere Leistungen in Buchloe, Fuchstal und Umgebung",
    intro:
      "Vom alten Schuppen über die volle Scheune bis zum neuen Boden im Wohnhaus: Wir übernehmen Abbruch, Räumung und Renovierung – und alles, was dazwischen am Haus ansteht.",
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
        id: "renovierung",
        focus: true,
        text: "Wände, Decken, Dachgeschoss: Mit Trockenbau und frischen Oberflächen machen wir Wohnungen und Häuser in der Region wieder bezugsfertig – vor dem Einzug, nach dem Auszug oder zur Auffrischung.",
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
        id: "bodenverlegung",
        text: "Laminat und Vinyl, inklusive Entfernen des alten Belags, Trittschalldämmung und Sockelleisten – im Wohnhaus wie in der ausgebauten Einliegerwohnung.",
      },
      {
        id: "umzug",
        text: "Wir packen mit an, wenn ohnehin geräumt oder renoviert wird, und verbinden Transport und Räumung. Den Umfang klären wir bei der Besichtigung.",
      },
      {
        id: "schadstoffsanierung",
        text: "Eternit-Platten auf Schuppen, Garagen und Stallgebäuden sind in der Region häufig. Wir bauen sie nach TRGS 519 zerstörungsfrei aus, verpacken sie staubdicht und entsorgen sie mit Nachweis.",
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
        text: "Wir schauen uns Abbruch, Räumung oder Renovierung vor Ort an – kostenlos und unverbindlich. Danach erhalten Sie einen Festpreis.",
      },
      {
        title: "Aus der Region, für die Region",
        text: "Johann Schmidt kennt die Orte, die Wege und die Gegebenheiten hier – und koordiniert Ihr Projekt persönlich.",
      },
    ],
  },
  local: {
    h2: "Daheim zwischen Fuchstal und Buchloe",
    paragraphs: [
      "In Vilgertshofen, Fuchstal und Denklingen sind wir zu Hause – bis in Ortsteile wie Leeder, Asch, Seestall oder Epfach. Hier geht es oft um Höfe, Scheunen und Nebengebäude, die nicht mehr gebraucht werden: Wir räumen, brechen ab und hinterlassen die Fläche sauber für das, was als Nächstes kommt.",
      "In Buchloe, schon im Landkreis Ostallgäu, sind es eher Einfamilienhäuser, Wohnungen und Gewerbeflächen, die entrümpelt, entkernt oder für neue Nutzer renoviert werden. Auch hier gilt: ein Ansprechpartner, ein Festpreis, ein fester Termin.",
    ],
    photo: "abbruch",
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
      a: "Kleine Nebengebäude wie Gartenhäuser, Schuppen oder Carports brechen wir selbst ab. Komplette Hausabrisse übernehmen wir nicht. Ob eine Scheune darunter fällt, klären wir bei der kostenlosen Besichtigung.",
    },
    {
      q: "Übernehmen Sie nach Abbruch oder Räumung auch die Renovierung?",
      a: "Ja. Wir bauen auf Wunsch neue Wände im Trockenbau, verlegen Laminat oder Vinyl und übergeben besenrein – mit einem Ansprechpartner für alles.",
    },
    {
      q: "Was kostet die Besichtigung?",
      a: "Nichts. Die Besichtigung ist kostenlos und unverbindlich. Danach erhalten Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
  ],
};

export const augsburgPage: RegionPage = {
  region: "augsburg",
  locations: ["branch", "main"],
  title: "Wohnungsauflösung, Entkernung & Renovierung in Augsburg | J&L Bauprojekte",
  description:
    "Wohnungsauflösung, Entrümpelung, Entkernung & Renovierung in Augsburg, Königsbrunn, Bobingen, Schwabmünchen & Friedberg. Kostenlose Besichtigung, Festpreis.",
  h1: "Ihr Partner für Wohnungs\u00adauflösung, Entkernung & Renovierung in Augsburg",
  intro:
    "Ob Mietwohnung in der Innenstadt, Reihenhaus in Königsbrunn oder Gewerbefläche in Friedberg: Wir räumen, entkernen und renovieren in Augsburg und Umgebung – für Eigentümer, Vermieter und Hausverwaltungen, mit festem Ansprechpartner und Festpreis nach kostenloser Besichtigung.",
  hero: "sperrmuell",
  services: {
    h2: "Unsere Leistungen in Augsburg und Umgebung",
    intro:
      "In der Stadt geht es oft um Tempo: Die Wohnung muss bis zum Monatsende leer sein, der neue Mieter wartet, der Käufer will übernehmen. Wir planen Räumung, Rückbau und Renovierung so, dass Termine halten.",
    items: [
      {
        id: "haushaltsaufloesung",
        focus: true,
        text: "Wohnungs- und Haushaltsauflösungen in Augsburg, auch im dritten Stock ohne Aufzug: Wir räumen, trennen nach Wertstoffen und übergeben besenrein – rechtzeitig zum Termin mit Vermieter oder Käufer.",
      },
      {
        id: "entkernung",
        focus: true,
        text: "Vor der Sanierung einer Altbauwohnung oder eines Mehrfamilienhauses legen wir den Rohbau frei: Böden, Fliesen, Verkleidungen und nichttragende Wände – mit Rücksicht auf die Nachbarn im Haus.",
      },
      {
        id: "renovierung",
        focus: true,
        text: "Nach dem Mieterwechsel bringen wir die Wohnung wieder in Schuss: neue Wände und Decken im Trockenbau, saubere Oberflächen, bezugsfertig für den nächsten Mieter.",
      },
      {
        id: "entruempelung",
        text: "Keller, Dachboden, Garage oder Abstellraum: Auch kleine Aufträge in Augsburg und den Nachbarorten übernehmen wir – mit Abtransport und fachgerechter Entsorgung.",
      },
      {
        id: "bodenverlegung",
        text: "Laminat und Vinyl statt alter Teppich- oder PVC-Beläge: Wir entfernen den alten Boden und verlegen den neuen mit Trittschalldämmung, Sockelleisten und Übergangsprofilen.",
      },
      {
        id: "umzug",
        text: "Beim Umzug innerhalb Augsburgs oder ins Umland packen wir mit an und verbinden ihn auf Wunsch mit Räumung und Renovierung der alten Wohnung. Den Umfang klären wir bei der Besichtigung.",
      },
      {
        id: "rueckbau",
        text: "Einbauten, Zwischenwände, Treppen oder Kamine bauen wir kontrolliert zurück, während der Rest des Gebäudes genutzt wird – wichtig in bewohnten Mehrfamilienhäusern.",
      },
      {
        id: "abbruch",
        text: "Garagen, Schuppen, Gartenhäuser und einzelne Wände in Königsbrunn, Bobingen oder Friedberg brechen wir ab. Wanddurchbrüche bei tragenden Wänden nur gemeinsam mit dem Statiker.",
      },
      {
        id: "schadstoffsanierung",
        text: "In Wohnungen aus den 1960er- bis 1980er-Jahren können alte Bodenbeläge und Kleber Asbest enthalten. Wir sprechen den Verdacht bei der Besichtigung an und bauen nach TRGS 519 aus.",
      },
    ],
  },
  trust: {
    h2: "Termintreu für Eigentümer, Vermieter und Hausverwaltungen",
    intro:
      "Von unserem Standort in Landsberg am Lech ist Augsburg über die B17 schnell erreicht. Wir kennen die Abläufe in Mehrfamilienhäusern: Hausverwaltung informieren, Treppenhaus schützen, Stellplatz für den Container klären, Ruhezeiten einhalten.",
    items: [
      {
        title: "Feste Übergabetermine",
        text: "Wir planen rückwärts vom Übergabetermin und halten ihn – damit Kaution, Verkauf oder Neuvermietung nicht warten müssen.",
      },
      {
        title: "Kostenlose Besichtigung",
        text: "Wir sehen uns die Wohnung in Augsburg oder Umgebung an – kostenlos und unverbindlich, auf Wunsch gemeinsam mit der Hausverwaltung.",
      },
      {
        title: "Festpreis inklusive Entsorgung",
        text: "Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
      },
      {
        title: "Rücksicht im Haus",
        text: "Treppenhaus schützen, Ruhezeiten einhalten, Einfahrten freihalten: Wir arbeiten so, dass es im Haus keinen Ärger gibt.",
      },
    ],
  },
  local: {
    h2: "Von der Innenstadt bis ins Umland",
    paragraphs: [
      "In der Augsburger Innenstadt und den Stadtvierteln drumherum sind es oft Altbau- und Nachkriegswohnungen in Mehrfamilienhäusern: enge Treppenhäuser, wenig Platz vor dem Haus, Nachbarn Tür an Tür. Stellplatz für den Container und Zeitplan klären wir deshalb vorab.",
      "In Königsbrunn, Bobingen, Schwabmünchen, Friedberg und Mering überwiegen Einfamilien- und Reihenhäuser. Hier geht es häufig um ganze Haushalte nach einem Generationswechsel, um die Entkernung vor der Sanierung und um neue Böden vor dem Einzug.",
    ],
    photo: "trockenbau",
  },
  faqs: [
    {
      q: "Kommen Sie für eine Wohnungsauflösung nach Augsburg?",
      a: "Ja. Augsburg und die Nachbarorte Königsbrunn, Bobingen, Schwabmünchen, Friedberg und Mering gehören zu unserem Einsatzgebiet. Von unserem Standort in Landsberg am Lech sind wir über die B17 schnell vor Ort.",
    },
    {
      q: "Schaffen Sie die Räumung bis zum Übergabetermin?",
      a: "Nennen Sie uns den Termin bei der Anfrage. Wir planen die Räumung so, dass die Wohnung rechtzeitig besenrein ist – oft innerhalb weniger Tage nach der Besichtigung.",
    },
    {
      q: "Arbeiten Sie auch für Hausverwaltungen?",
      a: "Ja. Für Hausverwaltungen und Vermieter übernehmen wir Räumung, Entkernung und Renovierung von Wohnungen – mit festem Ansprechpartner und schriftlichem Festpreis.",
    },
    {
      q: "Was ist, wenn es keinen Aufzug gibt?",
      a: "Kein Problem. Wir tragen auch aus dem dritten oder vierten Stock. Der Aufwand fließt in den Festpreis ein, den Sie nach der Besichtigung erhalten.",
    },
    {
      q: "Was kostet die Besichtigung in Augsburg?",
      a: "Nichts. Die Besichtigung ist kostenlos und unverbindlich, auch in Augsburg und den Nachbarorten.",
    },
  ],
};

export const schongauPage: RegionPage = {
  region: "schongau",
  locations: ["main", "branch"],
  title: "Haushaltsauflösung, Rückbau & Renovierung in Schongau | J&L Bauprojekte",
  description:
    "Haushaltsauflösung, Entrümpelung, Rückbau & Renovierung in Schongau, Peiting, Altenstadt, Hohenfurch & Peißenberg. Kostenlose Besichtigung, Festpreis.",
  h1: "Ihr Partner für Haushalts\u00adauflösung, Rückbau & Renovierung in Schongau",
  intro:
    "Vom Altstadthaus innerhalb der Stadtmauer bis zum Hof in Hohenfurch: Wir lösen Haushalte auf, bauen kontrolliert zurück und renovieren in Schongau und im Pfaffenwinkel – von unserem Firmensitz in Vilgertshofen aus, mit festem Ansprechpartner und Festpreis nach kostenloser Besichtigung.",
  hero: "sanierungFachwerk",
  services: {
    h2: "Unsere Leistungen in Schongau und im Pfaffenwinkel",
    intro:
      "Alte Häuser, gewachsene Höfe und oft mehrere Generationen unter einem Dach: Im Pfaffenwinkel geht es selten nur um eine Räumung. Wir begleiten Sie vom vollen Dachboden bis zum neu verlegten Boden.",
    items: [
      {
        id: "haushaltsaufloesung",
        focus: true,
        text: "Nach einem Erbfall oder vor dem Verkauf lösen wir Haushalte in Schongau, Peiting und Umgebung auf – diskret, termingerecht und mit Blick auf das, was noch verwertet werden kann.",
      },
      {
        id: "rueckbau",
        focus: true,
        text: "In der Schongauer Altstadt stehen die Häuser dicht an dicht. Treppen, Kamine, Zwischenwände oder alte Anbauten bauen wir kontrolliert zurück, ohne Bestand und Nachbarn zu belasten.",
      },
      {
        id: "renovierung",
        focus: true,
        text: "Wände, Decken und Dachgeschoss: Mit Trockenbau und frischen Oberflächen machen wir ältere Häuser wieder bewohnbar – für die nächste Generation oder neue Mieter.",
      },
      {
        id: "entruempelung",
        text: "Scheune, Stadel, Dachboden oder Werkstatt: Wir räumen auch große Mengen, trennen nach Wertstoffen und organisieren den Abtransport.",
      },
      {
        id: "entkernung",
        text: "Vor einer Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Installationen – sortenrein getrennt und fachgerecht entsorgt.",
      },
      {
        id: "bodenverlegung",
        text: "Laminat und Vinyl statt alter Teppiche und PVC-Beläge: Wir entfernen den alten Belag und verlegen den neuen mit Trittschalldämmung, Sockelleisten und Übergangsprofilen.",
      },
      {
        id: "abbruch",
        text: "Schuppen, Carports, Gartenhäuser und kleine Nebengebäude brechen wir ab und entsorgen den Bauschutt. Komplette Hausabrisse übernehmen wir nicht.",
      },
      {
        id: "umzug",
        text: "Wenn Eltern ins Pflegeheim oder in eine kleinere Wohnung ziehen, packen wir mit an und verbinden Umzug, Räumung und Renovierung. Den Umfang klären wir bei der Besichtigung.",
      },
      {
        id: "schadstoffsanierung",
        text: "Eternit-Platten an Schuppen und Nebengebäuden oder alte Bodenbeläge mit Asbestverdacht sprechen wir bei der Besichtigung an und bauen sie nach TRGS 519 aus.",
      },
    ],
  },
  trust: {
    h2: "Kurze Wege über die B17",
    intro:
      "Unser Firmensitz in Vilgertshofen liegt zwischen Landsberg und Schongau. Für Sie heißt das: kurze Anfahrt, schnelle Besichtigung und ein Ansprechpartner, der die Gegend kennt.",
    items: [
      {
        title: "Schnell vor Ort",
        text: "Besichtigung und Rückfragen klären wir in kurzer Zeit vor Ort – auch für kleinere Aufträge.",
      },
      {
        title: "Kostenlose Besichtigung",
        text: "Wir sehen uns Haus, Hof oder Wohnung in Schongau und Umgebung an – kostenlos und unverbindlich.",
      },
      {
        title: "Festpreis inklusive Entsorgung",
        text: "Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
      },
      {
        title: "Diskret im Erbfall",
        text: "Persönliche Unterlagen und Erinnerungsstücke legen wir beiseite. Wenn Sie nicht in der Region wohnen, stimmen wir alles per Telefon und Fotos ab.",
      },
    ],
  },
  local: {
    h2: "Zwischen Lech und Pfaffenwinkel",
    paragraphs: [
      "Innerhalb der Schongauer Stadtmauer sind die Gassen schmal und Stellflächen knapp. Zufahrt, Container-Stellplatz und Arbeitszeiten stimmen wir deshalb vorab ab und arbeiten so, dass die Nachbarschaft möglichst wenig davon merkt.",
      "In Peiting, Altenstadt, Hohenfurch und Schwabsoien sind es oft Einfamilienhäuser und ehemalige Höfe mit Scheune und Nebengebäuden. Hier räumen wir, bauen zurück und renovieren – Schritt für Schritt oder als ein Projekt.",
    ],
    photo: "abbruch",
  },
  faqs: [
    {
      q: "Kommen Sie auch nach Peiting, Altenstadt oder Peißenberg?",
      a: "Ja. Neben Schongau sind wir in Peiting, Altenstadt, Hohenfurch, Schwabsoien und Peißenberg im Einsatz. Von unserem Firmensitz in Vilgertshofen sind die Wege kurz.",
    },
    {
      q: "Können Sie auch in der engen Altstadt arbeiten?",
      a: "Ja. Wo kein Container Platz hat, planen wir den Abtransport anders. Zufahrt und Stellplatz klären wir bei der Besichtigung.",
    },
    {
      q: "Räumen Sie auch Scheunen und Nebengebäude?",
      a: "Ja. Scheunen, Stadel, Werkstätten und Nebengebäude räumen wir auch bei großen Mengen. Kleine Nebengebäude brechen wir auf Wunsch anschließend ab.",
    },
    {
      q: "Was kostet die Besichtigung?",
      a: "Nichts. Die Besichtigung ist kostenlos und unverbindlich. Danach erhalten Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
  ],
};

export const allgaeuPage: RegionPage = {
  region: "allgaeu",
  locations: ["main", "branch"],
  title: "Entkernung, Entrümpelung & Bodenverlegung im Allgäu | J&L Bauprojekte",
  description:
    "Entkernung, Entrümpelung, Renovierung & Bodenverlegung in Kaufbeuren, Mindelheim, Marktoberdorf, Bad Wörishofen & Türkheim. Kostenlose Besichtigung, Festpreis.",
  h1: "Ihr Partner für Entkernung, Entrümpelung & neue Böden im Allgäu",
  intro:
    "Kaufbeuren, Mindelheim, Marktoberdorf, Bad Wörishofen und Türkheim: Wir entkernen, räumen und verlegen neue Böden im nahen Allgäu – von unseren Standorten in Vilgertshofen und Landsberg am Lech aus, mit festem Ansprechpartner und Festpreis nach kostenloser Besichtigung.",
  hero: "entkernung",
  services: {
    h2: "Unsere Leistungen im Allgäu",
    intro:
      "Ob Elternhaus in Kaufbeuren, Wohnung in Bad Wörishofen oder Gewerbefläche in Mindelheim: Wir übernehmen die Arbeiten, die vor und nach dem Umbau anfallen – einzeln oder als ein Projekt.",
    items: [
      {
        id: "entkernung",
        focus: true,
        text: "Vor der Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Fliesen, Putz, nichttragende Wände und alte Installationen – sortenrein getrennt und fachgerecht entsorgt.",
      },
      {
        id: "entruempelung",
        focus: true,
        text: "Keller, Dachboden, Garage oder das ganze Haus: Wir räumen in Kaufbeuren, Marktoberdorf und Umgebung, trennen nach Wertstoffen und übergeben besenrein.",
      },
      {
        id: "bodenverlegung",
        focus: true,
        text: "Laminat und Vinyl für Wohnung, Ferienwohnung oder Büro: Wir entfernen den alten Belag und verlegen den neuen mit Trittschalldämmung, Sockelleisten und Übergangsprofilen.",
      },
      {
        id: "haushaltsaufloesung",
        text: "Nach einem Erbfall oder vor dem Verkauf lösen wir den Haushalt diskret auf – auch wenn Sie selbst nicht im Allgäu wohnen.",
      },
      {
        id: "renovierung",
        text: "Neue Wände und Decken im Trockenbau, Dachgeschossausbau und frische Oberflächen: Wir machen Häuser und Wohnungen wieder bezugsfertig.",
      },
      {
        id: "rueckbau",
        text: "Treppen, Kamine, Zwischenwände oder alte Anbauten bauen wir kontrolliert zurück, während der Rest des Hauses stehen bleibt.",
      },
      {
        id: "abbruch",
        text: "Gartenhäuser, Schuppen, Carports und einzelne Wände brechen wir ab und entsorgen den Bauschutt. Wanddurchbrüche bei tragenden Wänden nur gemeinsam mit dem Statiker.",
      },
      {
        id: "umzug",
        text: "Wir packen beim Umzug mit an und verbinden ihn auf Wunsch mit Räumung und Renovierung. Den Umfang klären wir bei der Besichtigung.",
      },
      {
        id: "schadstoffsanierung",
        text: "Alte Bodenbeläge, Kleber oder Eternit-Platten mit Asbestverdacht sprechen wir bei der Besichtigung an und bauen sie nach TRGS 519 aus.",
      },
    ],
  },
  trust: {
    h2: "Aus der Nachbarschaft ins Allgäu",
    intro:
      "Von Vilgertshofen und Landsberg am Lech aus sind Kaufbeuren, Mindelheim und Marktoberdorf gut erreichbar. Sie bekommen eine schnelle Besichtigung, einen festen Ansprechpartner und einen Preis, der hält.",
    items: [
      {
        title: "Kostenlose Besichtigung",
        text: "Wir kommen zu Ihnen nach Kaufbeuren, Mindelheim, Marktoberdorf oder in die Nachbarorte – kostenlos und unverbindlich.",
      },
      {
        title: "Festpreis inklusive Entsorgung",
        text: "Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
      },
      {
        title: "Ein Ansprechpartner",
        text: "Johann Schmidt koordiniert Ihr Projekt persönlich – von der Entkernung bis zum fertig verlegten Boden.",
      },
      {
        title: "Besenrein übergeben",
        text: "Am Ende übergeben wir besenrein – bereit für die nächsten Handwerker, den Einzug oder den Verkauf.",
      },
    ],
  },
  local: {
    h2: "Im nahen Allgäu unterwegs",
    paragraphs: [
      "In Kaufbeuren und Marktoberdorf treffen wir auf alles vom Altstadthaus bis zum Einfamilienhaus aus den 1970er-Jahren. Viele dieser Häuser stehen nach einem Generationswechsel vor der Sanierung – und die beginnt mit Räumung und Entkernung.",
      "In Mindelheim, Bad Wörishofen und Türkheim sind es oft Wohnungen, Ferienwohnungen und kleinere Gewerbeflächen, die geräumt, renoviert und mit neuem Boden ausgestattet werden. Weitere Orte im Allgäu können Sie gern anfragen.",
    ],
    photo: "sperrmuell",
  },
  faqs: [
    {
      q: "Kommen Sie auch nach Kaufbeuren und Mindelheim?",
      a: "Ja. Kaufbeuren, Marktoberdorf, Mindelheim, Bad Wörishofen und Türkheim gehören zu unserem Einsatzgebiet. Weiter entfernte Orte im Allgäu können Sie gern anfragen.",
    },
    {
      q: "Verlegen Sie auch Böden in Ferienwohnungen?",
      a: "Ja. Laminat und Vinyl verlegen wir in Wohnungen, Ferienwohnungen und Büros. Den Termin stimmen wir so ab, dass die Ausfallzeit möglichst kurz bleibt.",
    },
    {
      q: "Übernehmen Sie Entkernung und neuen Boden in einem Projekt?",
      a: "Ja. Wir entkernen, entfernen den alten Belag und verlegen anschließend Laminat oder Vinyl – mit einem Ansprechpartner und einem Zeitplan.",
    },
    {
      q: "Was kostet die Besichtigung im Allgäu?",
      a: "Nichts. Die Besichtigung ist kostenlos und unverbindlich. Danach erhalten Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
  ],
};

/** Alle regionalen Landingpages, die bereits veröffentlicht sind (Sitemap) */
export const regionPages: RegionPage[] = [landsbergPage, ammerseePage, buchloePage, augsburgPage, schongauPage, allgaeuPage];

export function regionById(id: RegionId) {
  return regions.find((r) => r.id === id)!;
}
