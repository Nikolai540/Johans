import type { ServiceId } from "./content";
import type { PhotoKey } from "./images";
import { pages } from "./site";

export type SubPage = {
  path: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  hero: PhotoKey;
  preselect: ServiceId[];
  /** id: Sprungmarke für Links auf einzelne Leistungen, points: Stichpunkte unter dem Text */
  services: { h2: string; intro: string; items: { h3: string; text: string; id?: string; points?: string[] }[] };
  pollutants?: PollutantSection;
  occasions: { h2: string; items: { h3: string; text: string }[] };
  checklist: { h2: string; intro: string; items: string[] };
  steps: { h2: string; items: { title: string; text: string }[] };
  benefits: { h2: string; items: { title: string; text: string }[] };
  local: { h2: string; paragraphs: string[] };
  faqs: { q: string; a: string }[];
};

export type PollutantSection = {
  badge: string;
  h2: string;
  intro: string;
  steps: { title: string; text: string }[];
  binding: { h2: string; items: { title: string; text: string }[]; note: string };
  areas: { h2: string; items: { title: string; text: string }[] };
  mineralwool: { title: string; text: string };
  reasons: { title: string; items: string[] };
};

export const entkernung: SubPage = {
  path: pages.entkernung.href,
  name: pages.entkernung.full,
  title: "Entkernung, Rückbau & Asbestsanierung in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entkernung bis auf den Rohbau, Abbruch, Rückbau und Schadstoffsanierung nach TRGS 519 – in Landsberg, Kaufering, Buchloe, Augsburg und Umgebung. Festpreis nach Besichtigung.",
  h1: "Entkernung, Rückbau & Schadstoffsanierung in Landsberg am Lech",
  intro:
    "Wir schaffen die Grundlage für Ihre Sanierung: J&L Bauprojekte entkernt Wohnungen und Häuser, baut Bauteile kontrolliert zurück und übernimmt kleinere Abbrucharbeiten. Stecken Asbest oder alte Mineralwolle im Bestand, bauen wir sie nach den Technischen Regeln für Gefahrstoffe fachgerecht aus – sortenrein getrennt, sicher entsorgt, besenrein übergeben.",
  hero: "entkernung",
  preselect: ["entkernung"],
  services: {
    h2: "Unsere Leistungen rund um Entkernung und Rückbau",
    intro:
      "Ob Kernsanierung im Altbau, neues Bad oder Umbau vor dem Einzug: Wir entfernen, was weichen muss, und bereiten die Räume für die nachfolgenden Handwerker vor.",
    items: [
      {
        h3: "Entkernung von Wohnungen und Häusern",
        text: "Wir entfernen Bodenbeläge, Fliesen, Wand- und Deckenverkleidungen, Küchen, Bad- und Sanitärobjekte sowie nichttragende Bauteile – bis der Rohbau für die Kernsanierung frei liegt. So beginnt Ihre Sanierung in Landsberg am Lech auf einer sauberen Grundlage.",
      },
      {
        h3: "Demontage von Einbauten",
        text: "Heizkörper, Türen und Zargen, Einbauschränke, Küchenzeilen und Möbel demontieren wir sorgfältig und transportieren alles ab. Was wiederverwendet werden soll, bauen wir auf Wunsch schonend aus.",
      },
      {
        h3: "Fliesen- und Bodenabbruch",
        text: "Fliesen, Estrich, Laminat, Parkett, Teppich und PVC – inklusive Kleber- und Spachtelresten. Damit ist der Untergrund bereit für neuen Estrich, Fußbodenheizung oder den neuen Bodenbelag.",
      },
      {
        h3: "Rückbau von Bauteilen und Innenausbau",
        text: "Rückbau einzelner Bauteile oder ganzer Innenausbauten für Umbau, Renovierung, Mieterwechsel oder als Vorbereitung für Elektro, Sanitär und Trockenbau. Kontrolliert, Schritt für Schritt und mit Rücksicht auf den Bestand.",
      },
      {
        h3: "Wanddurchbrüche und tragende Wände",
        text: "Neue Türöffnungen und Raumverbindungen schaffen wir mit Wanddurchbrüchen. Tragende Wände entfernen wir ausschließlich in Zusammenarbeit mit einem Statiker, der die Abfangung – etwa mit einem Stahlträger – festlegt.",
      },
      {
        h3: "Kleinere Abbrucharbeiten",
        text: "Gartenhäuser, Schuppen, kleine Nebengebäude und einzelne Wände brechen wir ab und entsorgen den Bauschutt. Komplette Hausabrisse übernehmen wir nicht.",
      },
      {
        h3: "Entsorgung aus einer Hand",
        text: "Container stellen, Bauschutt, Holz, Metall, Gips und Restmüll sortenrein trennen und fachgerecht entsorgen: Sie haben keinen zusätzlichen Aufwand und erhalten die Räume besenrein zurück.",
      },
      {
        h3: "Schadstoffsanierung: Asbest und Mineralwolle",
        text: "Stecken Asbest oder alte Mineralwolle im Bestand, bauen wir sie nach TRGS 519 und TRGS 521 aus – mit Gefährdungsbeurteilung, festgelegten Schutzmaßnahmen und Entsorgung mit Nachweis. Alles Wichtige dazu lesen Sie im nächsten Abschnitt.",
      },
    ],
  },
  // Vorsichtig formuliert: Laborproben, Raumluftmessungen und Arbeiten mit hoher Exposition werden nicht als eigene Leistung versprochen.
  // PLATZHALTER: Liegt eine behördliche Zulassung für Arbeiten mit schwach gebundenem Asbest vor, können die Texte zu Isolierungen und Unterdruck konkreter werden.
  pollutants: {
    badge: "Sachkunde nach TRGS 519, Anlage 4",
    h2: "Schadstoffsanierung: Asbest und alte Mineralwolle sicher entfernen",
    intro:
      "Viele Häuser aus den 1950er- bis 1990er-Jahren enthalten Asbest – im Boden, im Putz, auf dem Dach. Solange die Materialien unberührt bleiben, merkt man davon nichts. Gefährlich wird es, wenn bei Umbau, Renovierung oder Entkernung Fasern frei werden. Genau dafür sind wir da: mit Sachkunde nach TRGS 519, klaren Abläufen und konsequentem Schutz für Sie, Ihre Nachbarn und unser Team.",
    steps: [
      {
        title: "Verdacht klären",
        text: "Wir prüfen Baujahr und verbaute Materialien. Bleiben Zweifel, empfehlen wir eine Materialprobe mit Laboranalyse – so wissen Sie vor Beginn, woran Sie sind.",
      },
      {
        title: "Gefährdung beurteilen, Schutz festlegen",
        text: "Wir erstellen Gefährdungsbeurteilung und Arbeitsplan: Wie fest ist der Asbest gebunden, welches Verfahren ist das richtige? Daraus folgen die Schutzmaßnahmen. Die Arbeiten zeigen wir vorab bei der zuständigen Behörde an.",
      },
      {
        title: "Geschützt zurückbauen",
        text: "Je nach Gefährdung arbeiten wir staubarm und feucht, saugen mit Industriesaugern der Staubklasse H direkt an der Quelle ab, schotten den Arbeitsbereich ab und tragen Atemschutz und Schutzkleidung.",
      },
      {
        title: "Fachgerecht entsorgen",
        text: "Asbesthaltige Abfälle verpacken wir staubdicht, kennzeichnen sie und geben sie bei zugelassenen Entsorgungsanlagen ab. Die Entsorgungsnachweise erhalten Sie von uns.",
      },
    ],
    binding: {
      h2: "Fest gebunden oder schwach gebunden – der Unterschied ist entscheidend",
      items: [
        {
          title: "Fest gebundener Asbest",
          text: "Bei Asbestzement, etwa Eternit-Platten, sind die Fasern fest im Material eingebunden. Solange die Platten heil sind, ist die Gefahr gering. Beim Brechen, Bohren, Schleifen oder Abstrahlen mit dem Hochdruckreiniger werden jedoch Fasern frei. Deshalb bauen wir solche Platten zerstörungsfrei aus – Stück für Stück, ohne zu brechen.",
        },
        {
          title: "Schwach gebundener Asbest und staubintensive Arbeiten",
          text: "In Isolierungen, Leichtbauplatten oder der Unterseite mancher alter Bodenbeläge ist Asbest nur locker gebunden. Beim Ausbau können sehr hohe Faserkonzentrationen entstehen. Ähnliches gilt, wenn asbesthaltiger Putz, Spachtel oder Kleber abgeschlagen oder abgeschliffen wird. Dafür gelten die strengsten Vorgaben, bis hin zu Unterdruck, Schleuse und Freimessung. Nach der Besichtigung sagen wir Ihnen offen, welcher Weg in Ihrem Fall vorgeschrieben ist und was das für Ablauf und Kosten bedeutet.",
        },
      ],
      note: "Welcher Fall vorliegt, entscheidet nicht das Bauchgefühl, sondern die Gefährdungsbeurteilung. Danach richtet sich jeder weitere Schritt – immer streng nach den behördlichen Vorgaben.",
    },
    areas: {
      h2: "Hier steckt Asbest am häufigsten",
      items: [
        {
          title: "Estrich, Fliesenkleber und alte Bodenbeläge",
          text: "Floor-Flex-Platten, Cushion-Vinyl, schwarzer Bitumenkleber und asbesthaltige Ausgleichsmassen: Alte Böden sind in Wohnungen die häufigste Fundstelle. Wir nehmen Beläge und Kleberschichten mit emissionsarmen Verfahren auf und bereiten den Untergrund für den neuen Boden vor.",
        },
        {
          title: "Asbestzementplatten (z. B. Eternit)",
          text: "Dach- und Fassadenplatten, Garagen- und Schuppendächer, Fensterbänke, Blumenkästen und Lüftungsrohre: fest gebunden, aber nur ungefährlich, solange sie heil bleiben. Wir bauen sie zerstörungsfrei aus, verpacken sie staubdicht und entsorgen sie fachgerecht.",
        },
        {
          title: "Putz und Spachtelmasse",
          text: "Bis in die 1990er-Jahre wurden manchen Putzen, Spachtelmassen und Fliesenklebern Asbestfasern beigemischt – unsichtbar und nur im Labor nachweisbar. Wer hier schleift, stemmt oder bohrt, setzt Fasern frei. Wir klären den Verdacht vorab und arbeiten mit Verfahren, die den Staub direkt an der Quelle absaugen.",
        },
        {
          title: "Asbesthaltige Isolierungen",
          text: "Rohr- und Kesselisolierungen, Brandschutzverkleidungen, alte Nachtspeicheröfen: Hier ist Asbest oft schwach gebunden und gibt schon bei Berührung Fasern ab. Fassen Sie solche Bauteile nicht an. Wir sehen sie uns an und sagen Ihnen, welches Vorgehen vorgeschrieben ist.",
        },
      ],
    },
    mineralwool: {
      title: "Alte Mineralwolle",
      text: "Glas- und Steinwolle aus der Zeit vor 1996 – ohne Gütezeichen auch bis zum Jahr 2000 – gilt als krebsverdächtig. Den Ausbau aus Dach, Decken und Wänden erledigen wir nach TRGS 521: staubarm, mit Schutzausrüstung, in reißfesten Säcken verpackt und fachgerecht entsorgt.",
    },
    reasons: {
      title: "Warum J&L Bauprojekte bei Schadstoffen",
      items: [
        "Sachkunde nach TRGS 519, Anlage 4 – nachgewiesen, nicht nur behauptet",
        "Gefährdungsbeurteilung, Arbeitsplan, Anzeige bei der Behörde, Rückbau und Entsorgung aus einer Hand",
        "Konsequenter Schutz für Sie, Ihre Nachbarn und unser Team",
        "Nach der Sanierung geht es nahtlos weiter: neuer Boden, neue Wände – ohne Wechsel der Firma",
      ],
    },
  },
  occasions: {
    h2: "Wann eine Entkernung sinnvoll ist",
    items: [
      { h3: "Kernsanierung im Altbau", text: "Vor der energetischen oder vollständigen Sanierung wird das Gebäude bis auf den Rohbau freigelegt." },
      { h3: "Bad- und Küchensanierung", text: "Fliesen, Sanitärobjekte und Küchenzeile raus – damit Installateur und Fliesenleger direkt loslegen können." },
      { h3: "Mieterwechsel und Renovierung", text: "Alte Böden, Verkleidungen und Einbauten entfernen, damit die Wohnung schnell wieder vermietet werden kann." },
      { h3: "Umbau und neue Raumaufteilung", text: "Wände versetzen, Durchbrüche schaffen, Räume zusammenlegen – mit Statiker, wo es nötig ist." },
      { h3: "Nach dem Kauf einer Bestandsimmobilie", text: "Bevor Sie einziehen, schaffen wir Platz für Ihre eigenen Pläne – vom Einfamilienhaus bis zur Eigentumswohnung." },
      { h3: "Vorbereitung für Handwerker", text: "Wir räumen den Weg frei für Elektro, Sanitär, Heizung und Trockenbau, damit keine Wartezeiten entstehen." },
    ],
  },
  checklist: {
    h2: "Was bei einer Entkernung entfernt wird",
    intro: "Der Umfang richtet sich nach Ihrem Vorhaben. Typischerweise bauen wir aus:",
    items: [
      "Fliesen an Wand und Boden",
      "Estrich und Trittschalldämmung",
      "Parkett, Laminat, Teppich und PVC",
      "Tapeten, Putz und Verkleidungen",
      "Abgehängte Decken und Trockenbauwände",
      "Türen und Zargen",
      "Küchen und Einbauschränke",
      "Waschbecken, WC, Dusche und Badewanne",
      "Heizkörper",
      "Nichttragende Innenwände",
    ],
  },
  steps: {
    h2: "So läuft Ihre Entkernung ab",
    items: [
      { title: "Anfrage", text: "Sie beschreiben uns kurz Ihr Vorhaben und Ihren Wunschtermin – telefonisch, per WhatsApp oder über das Formular." },
      { title: "Besichtigung vor Ort", text: "Wir sehen uns Umfang, Materialien und Zugang an und klären, was entsorgt werden muss." },
      { title: "Angebot mit Festpreis", text: "Sie erhalten ein schriftliches Angebot mit festem Preis und Termin – ohne spätere Nachforderungen." },
      { title: "Ausführung und Übergabe", text: "Wir entkernen, trennen und entsorgen fachgerecht und übergeben die Räume besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Entkernen, Trennen und Entsorgen über einen Ansprechpartner – ohne Abstimmung zwischen mehreren Firmen." },
      { title: "Schnelle Termine", text: "Besichtigung meist kurzfristig, die Ausführung oft innerhalb weniger Tage." },
      { title: "Klare Kosten", text: "Der Preis wird vorab festgelegt. Was im Angebot steht, gilt." },
    ],
  },
  local: {
    h2: "Entkernung und Rückbau in Landsberg und Umgebung",
    paragraphs: [
      "Von unseren Standorten in Landsberg am Lech und Vilgertshofen aus sind wir in der ganzen Region im Einsatz: in Landsberg und Kaufering, in Buchloe und der Ammersee-Region, in Mindelheim, Augsburg, Schongau und im Allgäu.",
      "Ob Altbau in der Landsberger Innenstadt, Reihenhaus in Kaufering oder Gewerbeobjekt in Augsburg: Wir übernehmen Entkernung, Rückbau, Wanddurchbrüche, kleinere Abbrucharbeiten und die Schadstoffsanierung. Ihr Ort fehlt? Rufen Sie einfach an.",
    ],
  },
  faqs: [
    {
      q: "Was gehört zu einer Entkernung?",
      a: "Bei einer Entkernung entfernen wir Böden, Fliesen, Decken, Trockenbau, Türen, Sanitäranlagen und weitere Innenausbauten. Übrig bleibt der Rohbau, auf dem die Sanierung aufbauen kann.",
    },
    {
      q: "Was ist der Unterschied zwischen Entkernung und Rückbau?",
      a: "Die Entkernung befreit ein Gebäude weitgehend vom gesamten Innenausbau. Rückbau kann auch nur einzelne Bauteile umfassen, zum Beispiel eine Wand, eine Treppe oder einen Kamin.",
    },
    {
      q: "Können Sie auch tragende Wände entfernen?",
      a: "Ja, in Zusammenarbeit mit einem Statiker. Er legt fest, wie die Last abgefangen wird, zum Beispiel mit einem Stahlträger. Erst danach öffnen wir die Wand.",
    },
    {
      q: "Übernehmen Sie auch den Abriss eines ganzen Hauses?",
      a: "Nein. Wir übernehmen kleinere Abbrucharbeiten wie Gartenhäuser, Schuppen, Nebengebäude und einzelne Wände. Komplette Hausabrisse führen wir nicht aus.",
    },
    {
      q: "Was kostet eine Entkernung?",
      a: "Das hängt von Fläche, Materialien, Zugänglichkeit und Entsorgungsmenge ab. Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis – ohne spätere Nachforderung.",
    },
    {
      q: "Wer kümmert sich um Container und Entsorgung?",
      a: "Das übernehmen wir vollständig: Container stellen, Bauschutt und Wertstoffe sortenrein trennen und fachgerecht entsorgen.",
    },
    {
      q: "Darf ich asbesthaltige Platten selbst abbauen?",
      a: "Davon raten wir dringend ab. Schon kleine Fehler beim Ausbau setzen Fasern frei, die sich im ganzen Haus verteilen können. Außerdem gelten für Verpackung, Transport und Entsorgung strenge Vorgaben. Lassen Sie den Ausbau von einem Betrieb mit Sachkunde erledigen.",
    },
    {
      q: "Müssen Asbestarbeiten angemeldet werden?",
      a: "In der Regel ja: Arbeiten mit Asbest müssen vorab bei der zuständigen Behörde angezeigt werden. Das übernehmen wir für Sie – zusammen mit Gefährdungsbeurteilung und Arbeitsplan.",
    },
    {
      q: "Was kostet eine Asbestsanierung?",
      a: "Das hängt von Material, Menge und Gefährdung ab: Fest gebundene Eternit-Platten sind deutlich weniger aufwendig als eine Isolierung mit schwach gebundenem Asbest. Nach der kostenlosen Besichtigung – und wenn nötig einer Laboranalyse – erhalten Sie ein verbindliches Angebot inklusive Schutzmaßnahmen und Entsorgung.",
    },
  ],
};

export const entruempelung: SubPage = {
  path: pages.entruempelung.href,
  name: pages.entruempelung.full,
  title: "Entrümpelung & Haushaltsauflösung in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entrümpelung und Haushaltsauflösung in Landsberg am Lech, Kaufering, Buchloe, Augsburg, am Ammersee und im Allgäu. Besenrein, Festpreis nach Besichtigung.",
  h1: "Entrümpelung & Haushaltsauflösung in Landsberg am Lech",
  intro:
    "Wir räumen Wohnungen, Häuser, Keller, Dachböden und Garagen – diskret, termingerecht und zum vorher vereinbarten Festpreis. Container, Abtransport und Entsorgung übernehmen wir selbst.",
  hero: "sperrmuell",
  preselect: ["entruempelung", "haushaltsaufloesung"],
  services: {
    h2: "Wenn ein Haushalt aufgelöst werden muss",
    intro:
      "Eine Haushaltsauflösung kommt selten geplant. Wir nehmen Ihnen die Arbeit ab – vom ersten Gespräch bis zur besenreinen Übergabe der Räume in Landsberg am Lech und Umgebung. Danach geht es nahtlos weiter: Wir renovieren, verlegen neue Böden und packen auf Wunsch beim Umzug mit an.",
    items: [
      {
        h3: "Wohnungsauflösung",
        text: "Komplette Räumung von Mietwohnungen und Eigentumswohnungen, zum Beispiel vor der Wohnungsübergabe an den Vermieter. Wir räumen, entsorgen und übergeben die Wohnung besenrein.",
      },
      {
        h3: "Haushaltsauflösung",
        text: "Wir lösen den gesamten Haushalt auf – Möbel, Küche, Elektrogeräte, Hausrat, Keller und Dachboden. Diskret, zuverlässig und mit einem festen Ansprechpartner.",
      },
      {
        h3: "Nachlassauflösung nach einem Todesfall",
        text: "Für Erben und Angehörige übernehmen wir die Räumung im Nachlass mit Ruhe und Rücksicht. Was Sie behalten möchten, legen wir vorher gemeinsam fest.",
      },
      {
        h3: "Entrümpelung von Messie-Wohnungen",
        text: "Auch stark vermüllte Wohnungen räumen wir diskret und ohne Aufsehen in der Nachbarschaft – sortiert, entsorgt und besenrein.",
      },
      {
        h3: "Keller-, Dachboden- und Garagenentrümpelung",
        text: "Kleine Aufträge sind willkommen: einzelne Keller, Dachböden, Garagen, Abstellräume, Gartenhäuser und Schuppen räumen wir genauso zuverlässig.",
      },
      {
        h3: "Gewerbe- und Objekträumung",
        text: "Büros, Lager und Gewerbeflächen räumen wir termingerecht, damit Übergabe oder Umbau ohne Verzögerung starten können.",
      },
    ],
  },
  occasions: {
    h2: "Wann Sie uns rufen",
    items: [
      { h3: "Nach dem Umzug ins Pflegeheim", text: "Wenn Eltern oder Angehörige in ein Heim ziehen, räumen wir die bisherige Wohnung vollständig." },
      { h3: "Im Erbfall", text: "Wir übernehmen die Nachlassauflösung, auch wenn Sie nicht in der Nähe wohnen – Abstimmung per Telefon oder WhatsApp." },
      { h3: "Vor Verkauf oder Vermietung", text: "Leere, besenreine Räume sind die Voraussetzung für Besichtigungen, Verkauf und neue Mieter." },
      { h3: "Vor einer Sanierung", text: "Erst räumen, dann entkernen: Auf Wunsch übernehmen wir anschließend auch die Entkernung." },
      { h3: "Nach dem eigenen Umzug", text: "Was nicht mit in die neue Wohnung soll, holen wir ab und entsorgen es fachgerecht." },
      { h3: "Wenn es einfach zu viel wird", text: "Volle Keller, Dachböden und Garagen räumen wir – schnell und ohne großen Aufwand für Sie." },
    ],
  },
  checklist: {
    h2: "Was wir für Sie räumen",
    intro: "Wir räumen alles, was raus soll, und entsorgen es fachgerecht:",
    items: [
      "Möbel und Sperrmüll",
      "Küchen und Elektrogeräte",
      "Teppiche und Hausrat",
      "Keller, Dachboden und Garage",
      "Abstellräume",
      "Gartenhäuser und Schuppen",
      "Büro- und Gewerbeinventar",
      "Kleinteile, Kartons und Restmüll",
    ],
  },
  steps: {
    h2: "Von der Besichtigung bis zur Übergabe",
    items: [
      { title: "Besichtigung oder Fotos", text: "Wir kommen vorbei – oder Sie schicken uns Fotos per WhatsApp für eine schnelle Einschätzung." },
      { title: "Umfang besprechen", text: "Gemeinsam legen wir fest, was geräumt wird und was bleiben soll." },
      { title: "Angebot mit Festpreis", text: "Sie erhalten ein verbindliches Angebot. Der Preis steht vorher fest." },
      { title: "Termin vereinbaren", text: "Wir planen die Räumung zu Ihrem Wunschtermin, oft schon innerhalb weniger Tage." },
      { title: "Räumung und Abtransport", text: "Wir räumen zügig und sorgen für Container und Abtransport." },
      { title: "Sortierung und Entsorgung", text: "Holz, Metall, Elektrogeräte und Restmüll werden getrennt und fachgerecht entsorgt." },
      { title: "Besenreine Übergabe", text: "Sie erhalten die geräumten Räume besenrein zurück." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Räumen, Entkernen, Trennen und Entsorgen über einen Ansprechpartner." },
      { title: "Schnelle Termine", text: "Oft innerhalb weniger Tage – auch wenn es eilt, etwa vor einer Wohnungsübergabe." },
      { title: "Klare Kosten", text: "Der Preis wird vorab festgelegt, ohne spätere Nachforderung." },
    ],
  },
  local: {
    h2: "Entrümpelung in Landsberg am Lech und Umgebung",
    paragraphs: [
      "Von unseren Standorten in Landsberg am Lech (Max-Planck-Straße 13) und Vilgertshofen aus entrümpeln wir und lösen Haushalte auf: in Landsberg und Kaufering, in Buchloe und der Ammersee-Region, in Mindelheim, Augsburg, Schongau und im Allgäu.",
      "Ob Kellerabteil in Kaufering, Elternhaus am Ammersee oder Mietwohnung in Augsburg: Wir räumen, sortieren und übergeben besenrein. Ihr Ort fehlt? Rufen Sie an – wir sagen Ihnen sofort, ob wir kommen.",
    ],
  },
  faqs: [
    {
      q: "In welchem Umkreis arbeiten Sie?",
      a: "Wir sind in Landsberg am Lech und Kaufering, in Buchloe, in der Ammersee-Region, in Mindelheim, Augsburg, Schongau und im Allgäu im Einsatz. Ihr Ort ist nicht dabei? Fragen Sie gern nach.",
    },
    {
      q: "Was kostet eine Entrümpelung?",
      a: "Der Preis hängt von Menge, Zugang und Entsorgungsart ab. Nach einer Besichtigung oder anhand von Fotos erhalten Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Wie schnell bekomme ich einen Termin?",
      a: "Eine Besichtigung ist meist kurzfristig möglich. Der Räumtermin richtet sich nach Umfang und Auslastung – oft innerhalb weniger Tage.",
    },
    {
      q: "Übernehmen Sie auch kleine Aufträge?",
      a: "Ja. Auch einzelne Keller, Garagen, Dachböden oder Gartenhäuser räumen wir gern.",
    },
    {
      q: "Wer kümmert sich um Container und Entsorgung?",
      a: "Das übernehmen wir vollständig: Container, Abtransport, Sortierung und fachgerechte Entsorgung.",
    },
    {
      q: "Muss ich bei der Räumung anwesend sein?",
      a: "Nicht unbedingt. Nach der Besichtigung und der Schlüsselübergabe können wir die Räumung selbstständig durchführen und uns per Telefon oder WhatsApp mit Ihnen abstimmen.",
    },
  ],
};

// Umzüge und Klebevinyl bewusst vorsichtig formuliert: Umfang, Fahrzeuge und Verlegeart werden bei der Besichtigung geklärt.
export const renovierung: SubPage = {
  path: pages.renovierung.href,
  name: pages.renovierung.full,
  title: "Renovierung in Landsberg am Lech: Trockenbau, Boden & Umzug | J&L Bauprojekte",
  description:
    "Renovierung aus einer Hand: Trockenbau, Laminat- und Vinylböden, Umzüge – in Landsberg, Kaufering, Buchloe, Augsburg, am Ammersee und im Allgäu. Festpreis nach Besichtigung.",
  h1: "Renovierung in Landsberg am Lech – Trockenbau, Böden & Umzug aus einer Hand",
  intro:
    "Ob vor dem Einzug, nach dem Auszug der Mieter oder vor dem Verkauf: Wir bringen Wohnungen und Häuser wieder in Schuss. Neue Wände und Decken im Trockenbau, frisch verlegte Laminat- und Vinylböden und auf Wunsch der Umzug – mit einem Ansprechpartner und einem Festpreis nach kostenloser Besichtigung.",
  hero: "trockenbau",
  preselect: ["renovierung"],
  services: {
    h2: "Unsere Leistungen in der Renovierung",
    intro:
      "Wände, Decken und Böden – und wenn es sein muss, der Umzug gleich dazu. Sie beauftragen einzeln oder alles zusammen, mit einem Ansprechpartner und einem Zeitplan.",
    items: [
      {
        id: "trockenbau",
        h3: "Trockenbau: neue Räume, schnell und sauber",
        text: "Mit Trockenbau verändern Sie Räume ohne großen Aufwand: neue Wände für eine andere Raumaufteilung, abgehängte Decken, Vorsatzschalen für Leitungen und Dämmung oder der Ausbau des Dachgeschosses. Wir bauen vom Ständerwerk bis zur streichfertig gespachtelten Oberfläche.",
        points: [
          "Trennwände und neue Raumaufteilung",
          "Abgehängte Decken",
          "Vorsatzschalen und Installationswände",
          "Dachgeschossausbau",
          "Spachtelung in der gewünschten Qualitätsstufe",
        ],
      },
      {
        id: "bodenverlegung",
        h3: "Bodenverlegung: Laminat und Vinyl",
        text: "Ein neuer Boden verändert einen Raum am schnellsten. Wir verlegen Laminat und Vinyl inklusive Trittschalldämmung, Sockelleisten und Übergangsprofilen und entfernen vorher den alten Belag. Welche Verlegeart zu Ihrem Untergrund passt, klären wir bei der Besichtigung. Alte Beläge aus der Zeit vor 1993 prüfen wir vor dem Herausreißen auf Asbestverdacht.",
        points: ["Laminat", "Vinyl", "Alten Belag entfernen", "Trittschalldämmung, Sockelleisten, Übergangsprofile"],
      },
      {
        id: "umzuege",
        h3: "Umzüge: ein Team für Räumen, Transport und Aufbau",
        text: "Wenn ohnehin geräumt oder renoviert wird, liegt der Umzug nahe. Wir packen mit an, bauen Möbel ab und wieder auf, transportieren Ihr Hab und Gut und entsorgen, was nicht mitsoll. Was genau dazugehört, besprechen wir bei der Besichtigung.",
        points: [
          "Möbel ab- und aufbauen",
          "Transport in der Region",
          "Kombiniert mit Entrümpelung und Renovierung",
          "Besenreine Übergabe der alten Wohnung",
        ],
      },
      {
        h3: "Vorher: Platz schaffen",
        text: "Bevor renoviert wird, muss oft erst etwas raus: alte Böden, Verkleidungen, Einbauten oder ein ganzer Hausrat. Das übernehmen wir gleich mit – von der Entrümpelung bis zur Entkernung, bei Asbestverdacht nach TRGS 519.",
      },
    ],
  },
  occasions: {
    h2: "Wann sich eine Renovierung lohnt",
    items: [
      { h3: "Vor dem Einzug", text: "Nach dem Kauf einer Bestandsimmobilie machen wir die Räume bezugsfertig, bevor die Möbel kommen." },
      { h3: "Nach dem Mieterwechsel", text: "Neuer Boden, glatte Wände: Die Wohnung ist schnell wieder vermietbar." },
      { h3: "Vor dem Verkauf", text: "Frische Böden und saubere Wände machen Besichtigungen leichter." },
      { h3: "Neue Raumaufteilung", text: "Aus einem großen Raum werden zwei – oder umgekehrt. Mit Trockenbau geht das ohne viel Schmutz." },
      { h3: "Dachgeschoss ausbauen", text: "Aus dem ungenutzten Dachboden wird Wohnraum, mit Trockenbau und neuem Boden." },
      { h3: "Umzug in eine kleinere Wohnung", text: "Räumung, Umzug und Renovierung der alten Wohnung kommen aus einer Hand – auch beim Umzug ins Pflegeheim." },
    ],
  },
  checklist: {
    h2: "Was wir bei einer Renovierung übernehmen",
    intro: "Je nach Vorhaben kombinieren wir:",
    items: [
      "Trennwände im Trockenbau",
      "Abgehängte Decken",
      "Vorsatzschalen und Installationswände",
      "Dachgeschossausbau",
      "Spachteln bis streichfertig",
      "Laminat verlegen",
      "Vinyl verlegen",
      "Alten Bodenbelag entfernen",
      "Sockelleisten und Übergangsprofile",
      "Möbel ab- und aufbauen",
    ],
  },
  steps: {
    h2: "So läuft Ihre Renovierung ab",
    items: [
      { title: "Anruf oder Anfrage", text: "Sie beschreiben kurz Ihr Vorhaben, gern mit Fotos per WhatsApp." },
      { title: "Kostenlose Besichtigung", text: "Wir sehen uns Räume, Böden und Wände vor Ort an." },
      { title: "Festpreis und Termin", text: "Sie erhalten ein verbindliches Angebot und einen festen Starttermin." },
      { title: "Ausführung und Übergabe", text: "Wir arbeiten sauber und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Entrümpelung, Entkernung, Schadstoffsanierung, Renovierung und Umzug über einen Ansprechpartner." },
      { title: "Festpreis nach Besichtigung", text: "Was im Angebot steht, gilt – ohne spätere Nachforderung." },
      { title: "Termintreu und sauber", text: "Wir nennen einen Termin, halten ihn und übergeben besenrein – bereit für Einzug oder Verkauf." },
    ],
  },
  local: {
    h2: "Renovierung in Landsberg am Lech und Umgebung",
    paragraphs: [
      "Von unseren Standorten in Landsberg am Lech und Vilgertshofen aus renovieren wir in der ganzen Region: in Landsberg und Kaufering, in Buchloe und der Ammersee-Region, in Mindelheim, Augsburg, Schongau und im Allgäu.",
      "Ob Mietwohnung in Kaufering, Reihenhaus in Buchloe oder Dachgeschoss am Ammersee: Wir übernehmen Trockenbau und Bodenverlegung, auf Wunsch den Umzug – und vorher, wenn nötig, die Entrümpelung oder Entkernung. Ihr Ort fehlt? Rufen Sie einfach an.",
    ],
  },
  faqs: [
    {
      q: "Verlegen Sie auch Parkett oder Fliesen?",
      a: "Nein. Wir haben uns auf Laminat und Vinyl spezialisiert – dafür mit allem, was dazugehört, vom Entfernen des alten Belags bis zur letzten Sockelleiste.",
    },
    {
      q: "Können Sie Renovierung und Umzug verbinden?",
      a: "Ja. Gerade beim Umzug in eine kleinere Wohnung oder ins Pflegeheim übernehmen wir Räumung, Transport und die Renovierung der alten Wohnung in einem Zug. Den genauen Umfang klären wir bei der Besichtigung.",
    },
    {
      q: "Wie lange dauert eine Trockenbauwand?",
      a: "Das hängt von Größe, Dämmung und Spachtelstufe ab. Den Zeitplan bekommen Sie zusammen mit dem Festpreis nach der Besichtigung.",
    },
    {
      q: "Was kostet eine Renovierung?",
      a: "Das hängt von Fläche, Material und Zustand des Untergrunds ab. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis und einen festen Starttermin.",
    },
    {
      q: "Was passiert mit dem alten Boden?",
      a: "Den alten Belag entfernen wir und entsorgen ihn fachgerecht. Stammt er aus der Zeit vor 1993, klären wir vorher, ob Asbest im Spiel sein kann.",
    },
  ],
};
