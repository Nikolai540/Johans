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
    teaser: "Alle Leistungen für Stadt und Umland: Entrümpelung, Entkernung, Abbruch und der neue Boden.",
    cta: "Leistungen in Landsberg & Umgebung",
    badge: "Unser Standort",
  },
  {
    id: "ammersee",
    href: "/einsatzgebiet/ammersee-westufer/",
    name: "Ammersee Westufer",
    places: ["Dießen am Ammersee", "Utting am Ammersee", "Schondorf am Ammersee", "Greifenberg", "Windach", "Geltendorf"],
    teaser: "Haushaltsauflösungen und Renovierung für Häuser und Wohnungen in Seenähe. Diskret und besenrein.",
    cta: "Leistungen am Ammersee-Westufer",
  },
  {
    id: "buchloe",
    href: "/einsatzgebiet/buchloe-fuchstal/",
    name: "Buchloe, Fuchstal & Region",
    places: ["Vilgertshofen", "Fuchstal", "Denklingen", "Buchloe"],
    teaser: "Hier sitzt unser Betrieb. Kurze Wege und schnelle Termine für Abbruch, Entrümpelung und Renovierung.",
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
    teaser: "Haushaltsauflösung, Rückbau und Renovierung für Altstadthäuser, Höfe und Einfamilienhäuser. Über die B17 schnell erreicht.",
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
  h1: "Entrümpelung, Entkernung & Renovierung in Landsberg am Lech",
  intro:
    "Entrümpelung, Entkernung, Abbruch und zum Schluss der neue Boden: Von unserem Standort in Landsberg aus erledigen wir das in der Stadt, in Kaufering und Umgebung aus einer Hand. Sie haben einen festen Ansprechpartner und bekommen nach der kostenlosen Besichtigung einen Festpreis.",
  hero: "landsbergLuftbild",
  services: {
    h2: "Unsere Leistungen in Landsberg am Lech und Umgebung",
    intro:
      "Für Eigentümer, Erbengemeinschaften, Vermieter und Hausverwaltungen im Raum Landsberg. Einzeln beauftragt oder als ein Projekt mit einem Zeitplan.",
    items: [
      {
        id: "entruempelung",
        text: "Keller, Dachboden, Garage oder die ganze Wohnung: In Landsberg, Kaufering und den Nachbargemeinden räumen wir zügig, trennen nach Wertstoffen und übergeben besenrein. Den Container organisieren wir auf Wunsch gleich mit.",
      },
      {
        id: "haushaltsaufloesung",
        text: "Nach einem Erbfall, vor dem Verkauf oder beim Umzug ins Pflegeheim lösen wir den ganzen Haushalt auf. Diskret, pünktlich und auch dann, wenn Sie selbst nicht in der Region wohnen.",
      },
      {
        id: "entkernung",
        text: "Vor der Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Leitungen kommen raus, im Altbau wie im Reihenhaus. Den Schutt trennen und entsorgen wir selbst.",
      },
      {
        id: "abbruch",
        text: "Einzelne Wände, Fliesen und Estrich, Gartenhäuser, Schuppen und kleine Nebengebäude. Dazu Wanddurchbrüche für neue Türen, bei tragenden Wänden zusammen mit dem Statiker.",
      },
      {
        id: "rueckbau",
        text: "Treppen, Kamine, Innenwände oder ganze Gebäudeteile bauen wir kontrolliert zurück, während der Rest des Hauses stehen bleibt. In der dichten Landsberger Altstadt geht es oft gar nicht anders.",
      },
      {
        id: "renovierung",
        text: "Wände, Decken und neue Raumaufteilung im Trockenbau: Wir bringen Wohnungen und Häuser im Landkreis wieder in Schuss, vor dem Einzug, nach dem Mieterwechsel oder vor dem Verkauf.",
      },
      {
        id: "bodenverlegung",
        text: "Laminat und Vinyl mit Trittschalldämmung, Sockelleisten und Übergangsprofilen. Oft direkt nach der Entkernung, damit der Untergrund nicht lange offen liegt.",
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
    h2: "Direkt aus Landsberg",
    intro:
      "Unser Standort ist in der Max-Planck-Straße, der Firmensitz in Vilgertshofen liegt gut zehn Kilometer südlich. Wir kennen die engen Zufahrten in der Altstadt genauso wie die Wohngebiete im Umland und sind schnell bei Ihnen.",
    items: [
      {
        title: "Kostenlose Besichtigung",
        text: "Bevor wir ein Angebot machen, sehen wir uns Ihr Objekt in Landsberg, Kaufering oder Umgebung an. Kostenlos und unverbindlich.",
      },
      {
        title: "Festpreis statt Überraschungen",
        text: "Nach der Besichtigung bekommen Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
      },
      {
        title: "Ein Ansprechpartner",
        text: "Johann Schmidt kümmert sich selbst um Ihr Projekt, von der Entrümpelung bis zum fertig verlegten Boden.",
      },
      {
        title: "Termingerecht und besenrein",
        text: "Wir nennen Ihnen einen Termin und halten ihn. Am Ende übergeben wir besenrein, fertig für Verkauf, Übergabe oder die nächsten Handwerker.",
      },
    ],
  },
  local: {
    h2: "Von der Altstadt bis ins Umland",
    paragraphs: [
      "In der Landsberger Altstadt treffen wir auf historische Bausubstanz, enge Zufahrten und Nachbarn Wand an Wand. Zufahrt, Container-Stellplatz und Arbeitszeiten klären wir deshalb vorab und arbeiten so, dass Bestand und Nachbarschaft geschont werden.",
      "In Kaufering, Penzing und Igling sind es oft Einfamilien- und Reihenhäuser, die nach einem Generationswechsel entrümpelt, entkernt und renoviert werden. Rund um Hurlach, Scheuring und Prittriching kommen oft Scheunen und Nebengebäude dazu: Scheune räumen, alten Schuppen abbrechen.",
    ],
    photo: "landsbergLechUfer",
  },
  faqs: [
    {
      q: "Kommen Sie auch nach Kaufering, Penzing oder Prittriching?",
      a: "Ja. Neben Landsberg am Lech sind wir in Kaufering, Penzing, Igling, Hurlach, Scheuring und Prittriching im Einsatz. Von Landsberg und Vilgertshofen aus sind die Wege kurz, auch für eine schnelle Besichtigung.",
    },
    {
      q: "Wo finde ich Sie in Landsberg am Lech?",
      a: "Unser Standort ist in der Max-Planck-Straße 13, 86899 Landsberg am Lech. Zur Besichtigung kommen wir zu Ihnen. Rufen Sie an oder schicken Sie uns das Formular.",
    },
    {
      q: "Was kostet die Besichtigung in Landsberg und Umgebung?",
      a: "Nichts. Die Besichtigung vor Ort ist kostenlos und unverbindlich. Danach bekommen Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
    {
      q: "Wie schnell können Sie mit einer Entrümpelung oder Entkernung beginnen?",
      a: "Den Besichtigungstermin vereinbaren wir in der Regel innerhalb weniger Tage. Den Start legen wir danach gemeinsam fest. Das hängt vom Umfang ab und davon, ob schon ein Verkaufs- oder Übergabetermin steht.",
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
  h1: "Haushalts\u00adauflösung & Renovierung am Ammersee",
  intro:
    "Haus mit Seeblick in Utting, Wohnung in Dießen oder Elternhaus in Windach: Wir lösen Haushalte am Westufer des Ammersees diskret auf und übergeben besenrein. Danach renovieren wir auf Wunsch und verlegen neue Böden. Festpreis nach kostenloser Besichtigung.",
  hero: "uttingAmmersee",
  services: {
    h2: "Unsere Leistungen am Ammersee-Westufer",
    intro:
      "Am See geht es selten nur um eine Räumung: um ein Elternhaus, das verkauft werden soll, eine Wohnung, die neu vermietet wird, oder ein älteres Haus, das für die nächste Generation hergerichtet wird. Wir übernehmen alle Schritte, auch wenn Sie selbst weiter weg wohnen.",
    items: [
      {
        id: "haushaltsaufloesung",
        focus: true,
        text: "Nach einem Erbfall, vor dem Verkauf oder beim Umzug ins Pflegeheim lösen wir den ganzen Haushalt auf. Diskret, ohne Aufsehen in der Nachbarschaft, und was noch verwertbar ist, sortieren wir aus.",
      },
      {
        id: "renovierung",
        focus: true,
        text: "Wände, Decken und neue Räume im Trockenbau: Wir machen Häuser und Wohnungen in Dießen, Utting und Schondorf wieder bezugsfertig. Vor dem Verkauf, vor der Neuvermietung oder wenn aus dem Ferienhaus ein Hauptwohnsitz wird.",
      },
      {
        id: "entruempelung",
        text: "Keller, Dachboden, Garage oder Nebengebäude: Wir räumen, trennen nach Wertstoffen und entsorgen fachgerecht. Zufahrt und Abtransport planen wir vorab, auch bei engen Grundstücken in Seenähe.",
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
        text: "Vor einer Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Leitungen. Alles sortenrein getrennt und fachgerecht entsorgt.",
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
        text: "Viele Häuser am See stammen aus der Zeit, als Asbest verbaut wurde: in Bodenbelägen, Klebern oder Eternit-Platten an Garage und Schuppen. Wir klären den Verdacht vor dem Umbau und bauen nach TRGS 519 zurück.",
      },
    ],
  },
  trust: {
    h2: "Schnell am Westufer, auch wenn Sie weit weg wohnen",
    intro:
      "Von unseren Standorten in Landsberg am Lech und Vilgertshofen sind wir schnell am Westufer. Für Erben und Eigentümer, die nicht vor Ort wohnen, wickeln wir auf Wunsch alles ab. Per Telefon und Fotos wissen Sie immer, wie weit wir sind.",
    items: [
      {
        title: "Diskrete Abwicklung",
        text: "Neutrales Auftreten, kein Aufsehen in der Nachbarschaft und Stillschweigen über das, was wir sehen. Persönliche Unterlagen und Fotos legen wir für Sie beiseite.",
      },
      {
        title: "Kostenlose Besichtigung",
        text: "Wir sehen uns Haus oder Wohnung in Dießen, Utting, Schondorf oder Umgebung an. Kostenlos, unverbindlich und auf Wunsch zusammen mit Ihrem Bevollmächtigten.",
      },
      {
        title: "Festpreis inklusive Entsorgung",
        text: "Nach der Besichtigung bekommen Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
      },
      {
        title: "Besenrein übergeben",
        text: "Am Ende sind die Räume besenrein, fertig für Makler, Käufer, neue Mieter oder die nächsten Handwerker.",
      },
    ],
  },
  local: {
    h2: "Rund um das Westufer des Ammersees",
    paragraphs: [
      "Zwischen Dießen und Schondorf stehen viele ältere Häuser am Hang oder in Seenähe, oft mit schmalen Zufahrten, wenig Platz für einen Container und Nachbarn, die Ruhe schätzen. Anfahrt, Stellplatz und Arbeitszeiten planen wir deshalb vorab und halten den Aufwand vor Ort so gering wie möglich.",
      "In Greifenberg, Windach und Geltendorf sind es häufiger Einfamilienhäuser und ehemalige Hofstellen, die nach einem Generationswechsel geräumt, entkernt oder renoviert werden. Auch dort haben Sie einen Ansprechpartner, einen Festpreis und einen festen Termin.",
    ],
    photo: "sanierungFachwerk",
  },
  faqs: [
    {
      q: "Übernehmen Sie Haushaltsauflösungen in Dießen, Utting und Schondorf?",
      a: "Ja. Wir lösen Haushalte am ganzen Westufer auf: in Dießen am Ammersee, Utting, Schondorf, Greifenberg, Windach und Geltendorf. Die Besichtigung ist kostenlos, danach erhalten Sie einen Festpreis.",
    },
    {
      q: "Ich wohne nicht in der Region. Geht die Haushaltsauflösung trotzdem?",
      a: "Ja, das ist bei Haushaltsauflösungen häufig der Fall. Schlüsselübergabe, Termine und Abnahme stimmen wir mit Ihnen ab, persönliche Unterlagen legen wir beiseite und auf Wunsch schicken wir Ihnen Fotos vom Zwischenstand.",
    },
    {
      q: "Was passiert mit Möbeln und Gegenständen, die noch etwas wert sind?",
      a: "Was noch verwertet werden kann, sprechen wir bei der Besichtigung an. Was Sie behalten möchten, markieren Sie vorab. Alles andere trennen wir nach Wertstoffen und entsorgen es fachgerecht.",
    },
    {
      q: "Können Sie das Haus nach der Räumung auch renovieren?",
      a: "Ja. Nach der Haushaltsauflösung renovieren wir auf Wunsch: Wände und Decken im Trockenbau, neue Laminat- oder Vinylböden. So wird das Haus aus einer Hand verkaufs- oder bezugsfertig.",
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
    "Abbruch, Entrümpelung & Renovierung in Buchloe, Fuchstal, Denklingen & Vilgertshofen, vom Firmensitz um die Ecke. Kostenlose Besichtigung, Festpreis.",
  h1: "Abbruch, Entrümpelung & Renovierung in Buchloe und Fuchstal",
  intro:
    "Unser Firmensitz ist in Vilgertshofen, also direkt hier. Für Abbruch, Entrümpelung und Renovierung in Fuchstal, Denklingen, Buchloe und Umgebung heißt das: kurze Anfahrt, schnelle Termine, einfache Absprachen.",
  hero: "buchloeLuftbild",
  services: {
    h2: "Unsere Leistungen in Buchloe, Fuchstal und Umgebung",
    intro:
      "Alter Schuppen, volle Scheune, neuer Boden im Wohnhaus: Wir übernehmen Abbruch, Räumung und Renovierung und was sonst am Haus ansteht.",
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
        text: "Wände, Decken, Dachgeschoss: Mit Trockenbau und frischen Oberflächen machen wir Wohnungen und Häuser in der Region wieder bezugsfertig. Vor dem Einzug, nach dem Auszug oder einfach zum Auffrischen.",
      },
      {
        id: "haushaltsaufloesung",
        text: "Nach einem Erbfall oder vor dem Verkauf lösen wir den Haushalt diskret und pünktlich auf, im Einfamilienhaus in Buchloe wie auf dem Hof in Fuchstal.",
      },
      {
        id: "rueckbau",
        text: "Kamine, Treppen, Zwischenwände oder alte Anbauten bauen wir kontrolliert zurück, während der Rest des Gebäudes stehen bleibt.",
      },
      {
        id: "entkernung",
        text: "Vor der Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Leitungen. Alles sortenrein getrennt und fachgerecht entsorgt.",
      },
      {
        id: "bodenverlegung",
        text: "Laminat und Vinyl, inklusive Entfernen des alten Belags, Trittschalldämmung und Sockelleisten. Im Wohnhaus wie in der ausgebauten Einliegerwohnung.",
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
    h2: "Kurze Wege vom Firmensitz",
    intro:
      "Von unserem Firmensitz in Vilgertshofen sind Fuchstal und Denklingen nur wenige Kilometer entfernt, nach Buchloe sind es rund 20 Kilometer. Die Besichtigung ist deshalb schnell vereinbart.",
    items: [
      {
        title: "Schnell vor Ort",
        text: "Ob Besichtigung oder Rückfrage auf der Baustelle: Aus Vilgertshofen sind wir schnell bei Ihnen, auch für kleinere Aufträge.",
      },
      {
        title: "Unkomplizierte Abwicklung",
        text: "Ein Anruf, ein Termin, ein Festpreis. Container, Abtransport und Entsorgung übernehmen wir.",
      },
      {
        title: "Kostenlose Besichtigung",
        text: "Wir schauen uns Abbruch, Räumung oder Renovierung vor Ort an, kostenlos und unverbindlich. Danach bekommen Sie einen Festpreis.",
      },
      {
        title: "Ortskenntnis",
        text: "Johann Schmidt kennt die Orte und Wege hier und kümmert sich selbst um Ihr Projekt.",
      },
    ],
  },
  local: {
    h2: "Daheim zwischen Fuchstal und Buchloe",
    paragraphs: [
      "In Vilgertshofen, Fuchstal und Denklingen sind wir zu Hause, bis in Ortsteile wie Leeder, Asch, Seestall oder Epfach. Hier geht es oft um Höfe, Scheunen und Nebengebäude, die nicht mehr gebraucht werden: Wir räumen, brechen ab und hinterlassen die Fläche sauber für das, was als Nächstes kommt.",
      "In Buchloe, schon im Landkreis Ostallgäu, sind es eher Einfamilienhäuser, Wohnungen und Gewerbeflächen, die entrümpelt, entkernt oder für neue Nutzer renoviert werden.",
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
      a: "Weil unser Firmensitz in der Nachbarschaft liegt, ist die Besichtigung meist schnell vereinbart. Den Start legen wir danach gemeinsam fest. Kleinere Aufträge passen oft kurzfristig rein.",
    },
    {
      q: "Brechen Sie auch Scheunen oder ganze Häuser ab?",
      a: "Kleine Nebengebäude wie Gartenhäuser, Schuppen oder Carports brechen wir selbst ab. Komplette Hausabrisse übernehmen wir nicht. Ob eine Scheune darunter fällt, klären wir bei der kostenlosen Besichtigung.",
    },
    {
      q: "Übernehmen Sie nach Abbruch oder Räumung auch die Renovierung?",
      a: "Ja. Wir bauen auf Wunsch neue Wände im Trockenbau, verlegen Laminat oder Vinyl und übergeben besenrein. Ein Ansprechpartner für alles.",
    },
    {
      q: "Was kostet die Besichtigung?",
      a: "Nichts. Die Besichtigung ist kostenlos und unverbindlich. Danach bekommen Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
  ],
};

export const augsburgPage: RegionPage = {
  region: "augsburg",
  locations: ["branch", "main"],
  title: "Wohnungsauflösung, Entkernung & Renovierung in Augsburg | J&L Bauprojekte",
  description:
    "Wohnungsauflösung, Entrümpelung, Entkernung & Renovierung in Augsburg, Königsbrunn, Bobingen, Schwabmünchen & Friedberg. Kostenlose Besichtigung, Festpreis.",
  h1: "Wohnungs\u00adauflösung, Entkernung & Renovierung in Augsburg",
  intro:
    "Mietwohnung in der Innenstadt, Reihenhaus in Königsbrunn oder Gewerbefläche in Friedberg: Wir räumen, entkernen und renovieren in Augsburg und Umgebung. Für Eigentümer, Vermieter und Hausverwaltungen, mit festem Ansprechpartner und Festpreis nach kostenloser Besichtigung.",
  hero: "sperrmuell",
  services: {
    h2: "Unsere Leistungen in Augsburg und Umgebung",
    intro:
      "In der Stadt geht es oft um Tempo: Die Wohnung muss bis zum Monatsende leer sein, der neue Mieter wartet, der Käufer will übernehmen. Wir planen Räumung, Rückbau und Renovierung so, dass Termine halten.",
    items: [
      {
        id: "haushaltsaufloesung",
        focus: true,
        text: "Wohnungs- und Haushaltsauflösungen in Augsburg, auch im dritten Stock ohne Aufzug: Wir räumen, trennen nach Wertstoffen und übergeben besenrein, rechtzeitig zum Termin mit Vermieter oder Käufer.",
      },
      {
        id: "entkernung",
        focus: true,
        text: "Vor der Sanierung einer Altbauwohnung oder eines Mehrfamilienhauses legen wir den Rohbau frei: Böden, Fliesen, Verkleidungen und nichttragende Wände. Mit Rücksicht auf die Nachbarn im Haus.",
      },
      {
        id: "renovierung",
        focus: true,
        text: "Nach dem Mieterwechsel bringen wir die Wohnung wieder in Schuss: neue Wände und Decken im Trockenbau, saubere Oberflächen, bezugsfertig für den nächsten Mieter.",
      },
      {
        id: "entruempelung",
        text: "Keller, Dachboden, Garage oder Abstellraum: Auch kleine Aufträge in Augsburg und den Nachbarorten, mit Abtransport und fachgerechter Entsorgung.",
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
        text: "Einbauten, Zwischenwände, Treppen oder Kamine bauen wir kontrolliert zurück, während der Rest des Gebäudes bewohnt bleibt. In Mehrfamilienhäusern ist das wichtig.",
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
        text: "Wir planen rückwärts vom Übergabetermin und halten ihn, damit Kaution, Verkauf oder Neuvermietung nicht warten müssen.",
      },
      {
        title: "Kostenlose Besichtigung",
        text: "Wir sehen uns die Wohnung in Augsburg oder Umgebung an. Kostenlos, unverbindlich und auf Wunsch zusammen mit der Hausverwaltung.",
      },
      {
        title: "Festpreis inklusive Entsorgung",
        text: "Nach der Besichtigung bekommen Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
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
      a: "Nennen Sie uns den Termin bei der Anfrage. Wir planen die Räumung so, dass die Wohnung rechtzeitig besenrein ist. Oft klappt das wenige Tage nach der Besichtigung.",
    },
    {
      q: "Arbeiten Sie auch für Hausverwaltungen?",
      a: "Ja. Für Hausverwaltungen und Vermieter räumen, entkernen und renovieren wir Wohnungen. Mit festem Ansprechpartner und schriftlichem Festpreis.",
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
  h1: "Haushalts\u00adauflösung, Rückbau & Renovierung in Schongau",
  intro:
    "Altstadthaus innerhalb der Stadtmauer oder Hof in Hohenfurch: Wir lösen Haushalte auf, bauen kontrolliert zurück und renovieren in Schongau und im Pfaffenwinkel. Von Vilgertshofen aus, mit festem Ansprechpartner und Festpreis nach kostenloser Besichtigung.",
  hero: "sanierungFachwerk",
  services: {
    h2: "Unsere Leistungen in Schongau und im Pfaffenwinkel",
    intro:
      "Alte Häuser, gewachsene Höfe und oft mehrere Generationen unter einem Dach: Im Pfaffenwinkel geht es selten nur um eine Räumung. Wir machen alles, vom vollen Dachboden bis zum neu verlegten Boden.",
    items: [
      {
        id: "haushaltsaufloesung",
        focus: true,
        text: "Nach einem Erbfall oder vor dem Verkauf lösen wir Haushalte in Schongau, Peiting und Umgebung auf. Diskret und pünktlich, und was noch verwertbar ist, sortieren wir aus.",
      },
      {
        id: "rueckbau",
        focus: true,
        text: "In der Schongauer Altstadt stehen die Häuser dicht an dicht. Treppen, Kamine, Zwischenwände oder alte Anbauten bauen wir kontrolliert zurück, ohne Bestand und Nachbarn zu belasten.",
      },
      {
        id: "renovierung",
        focus: true,
        text: "Wände, Decken und Dachgeschoss: Mit Trockenbau und frischen Oberflächen machen wir ältere Häuser wieder bewohnbar, für die nächste Generation oder neue Mieter.",
      },
      {
        id: "entruempelung",
        text: "Scheune, Stadel, Dachboden oder Werkstatt: Wir räumen auch große Mengen, trennen nach Wertstoffen und organisieren den Abtransport.",
      },
      {
        id: "entkernung",
        text: "Vor einer Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Putz, nichttragende Wände und alte Leitungen. Alles sortenrein getrennt und fachgerecht entsorgt.",
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
        text: "Besichtigung und Rückfragen klären wir schnell vor Ort, auch bei kleineren Aufträgen.",
      },
      {
        title: "Kostenlose Besichtigung",
        text: "Wir sehen uns Haus, Hof oder Wohnung in Schongau und Umgebung an. Kostenlos und unverbindlich.",
      },
      {
        title: "Festpreis inklusive Entsorgung",
        text: "Nach der Besichtigung bekommen Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
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
      "In Peiting, Altenstadt, Hohenfurch und Schwabsoien sind es oft Einfamilienhäuser und ehemalige Höfe mit Scheune und Nebengebäuden. Hier räumen wir, bauen zurück und renovieren, Schritt für Schritt oder als ein Projekt.",
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
      a: "Nichts. Die Besichtigung ist kostenlos und unverbindlich. Danach bekommen Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
  ],
};

export const allgaeuPage: RegionPage = {
  region: "allgaeu",
  locations: ["main", "branch"],
  title: "Entkernung, Entrümpelung & Bodenverlegung im Allgäu | J&L Bauprojekte",
  description:
    "Entkernung, Entrümpelung, Renovierung & Bodenverlegung in Kaufbeuren, Mindelheim, Marktoberdorf, Bad Wörishofen & Türkheim. Kostenlose Besichtigung, Festpreis.",
  h1: "Entkernung, Entrümpelung & neue Böden im Allgäu",
  intro:
    "Kaufbeuren, Mindelheim, Marktoberdorf, Bad Wörishofen und Türkheim: Im Allgäu entkernen wir, entrümpeln und verlegen neue Böden. Wir kommen aus Vilgertshofen und Landsberg am Lech, Sie haben einen festen Ansprechpartner und bekommen nach der kostenlosen Besichtigung einen Festpreis.",
  hero: "entkernung",
  services: {
    h2: "Unsere Leistungen im Allgäu",
    intro:
      "Elternhaus in Kaufbeuren, Wohnung in Bad Wörishofen oder Gewerbefläche in Mindelheim: Wir übernehmen die Arbeiten vor und nach dem Umbau, einzeln oder als ein Projekt.",
    items: [
      {
        id: "entkernung",
        focus: true,
        text: "Vor der Kernsanierung legen wir den Rohbau frei: Bodenbeläge, Fliesen, Putz, nichttragende Wände und alte Leitungen. Alles sortenrein getrennt und fachgerecht entsorgt.",
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
        text: "Nach einem Erbfall oder vor dem Verkauf lösen wir den Haushalt diskret auf, auch wenn Sie selbst nicht im Allgäu wohnen.",
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
        text: "Wir kommen nach Kaufbeuren, Mindelheim, Marktoberdorf oder in die Nachbarorte. Kostenlos und unverbindlich.",
      },
      {
        title: "Festpreis inklusive Entsorgung",
        text: "Nach der Besichtigung bekommen Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind darin enthalten.",
      },
      {
        title: "Ein Ansprechpartner",
        text: "Johann Schmidt kümmert sich selbst um Ihr Projekt, von der Entkernung bis zum fertig verlegten Boden.",
      },
      {
        title: "Besenrein übergeben",
        text: "Am Ende übergeben wir besenrein, fertig für die nächsten Handwerker, den Einzug oder den Verkauf.",
      },
    ],
  },
  local: {
    h2: "Im nahen Allgäu unterwegs",
    paragraphs: [
      "In Kaufbeuren und Marktoberdorf treffen wir auf alles vom Altstadthaus bis zum Einfamilienhaus aus den 1970er-Jahren. Viele davon stehen nach einem Generationswechsel vor der Sanierung, und die fängt mit Räumung und Entkernung an.",
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
      a: "Ja. Wir entkernen, reißen den alten Belag raus und verlegen dann Laminat oder Vinyl. Ein Ansprechpartner, ein Zeitplan.",
    },
    {
      q: "Was kostet die Besichtigung im Allgäu?",
      a: "Nichts. Die Besichtigung ist kostenlos und unverbindlich. Danach bekommen Sie einen Festpreis, in dem Abtransport und Entsorgung enthalten sind.",
    },
  ],
};

/** Alle regionalen Landingpages, die bereits veröffentlicht sind (Sitemap) */
export const regionPages: RegionPage[] = [landsbergPage, ammerseePage, buchloePage, augsburgPage, schongauPage, allgaeuPage];

export function regionById(id: RegionId) {
  return regions.find((r) => r.id === id)!;
}
