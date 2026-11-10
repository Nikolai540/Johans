import type { SubPage } from "./subpages";

// Spezialseiten zu Haushaltsauflösung (Gewerbe, Messie, Wohnung, Nachlass, Keller, Container) und Entkernung
// (Wanddurchbruch, Demontage, Fliesen und Boden, Rückbau, kleinere Abbrucharbeiten).
// Container stellen Partnerbetriebe, J&L organisiert. Größen sind übliche Standardgrößen, keine Zusage für jede Größe.

const region =
  "in Landsberg am Lech, Kaufering, Buchloe, Augsburg, am Ammersee und im Allgäu";

export const gewerbeaufloesung: SubPage = {
  path: "/gewerbeaufloesung/",
  name: "Gewerbeauflösung & Betriebsauflösung",
  title: "Gewerbeauflösung & Betriebsauflösung in Landsberg und Augsburg | J&L Bauprojekte",
  description:
    "Gewerbeauflösung, Firmenauflösung und Büroentrümpelung in Landsberg am Lech, Augsburg und im Allgäu: Lager räumen, Demontage, Akten fachgerecht entsorgen, besenreine Übergabe zum Festpreis.",
  h1: "Gewerbeauflösung & Betriebsauflösung in Landsberg am Lech und Augsburg",
  intro:
    "Büro, Praxis, Werkstatt oder Lager: Wir lösen Ihren Betrieb diskret und pünktlich auf. Inventar raus, Einbauten abbauen, Akten und Wertstoffe fachgerecht entsorgen. Zum Übergabetermin ist die Fläche besenrein. Den Festpreis bekommen Sie nach der kostenlosen Besichtigung.",
  hero: "entkernung",
  preselect: ["entruempelung"],
  services: {
    h2: "Was zu einer Gewerbeauflösung gehört",
    intro:
      "Bei einer Firmenauflösung kostet jeder Tag Miete. Wir planen rückwärts vom Übergabetermin und erledigen alles mit einem Team, vom ersten Karton bis zur besenreinen Fläche.",
    items: [
      {
        h3: "Büroentrümpelung",
        text: "Schreibtische, Schränke, Stühle, Teeküche und Technik: Wir räumen Büros und Praxen vollständig und trennen dabei Holz, Metall, Elektroaltgeräte und Restmüll.",
      },
      {
        h3: "Lager räumen",
        text: "Regale voller Restbestände, Paletten, Verpackungen und Altmaterial: Wir räumen Lager und Hallen auch bei großen Mengen und kümmern uns um den Abtransport.",
      },
      {
        h3: "Demontage und Industrie-Demontage",
        text: "Regalanlagen, Werkbänke, Einbauküchen, Trennwände und kleinere Anlagen bauen wir ab. Was verkauft oder mitgenommen werden soll, bauen wir vorsichtig aus.",
      },
      {
        h3: "Akten und Datenträger",
        text: "Geschäftsunterlagen gehören nicht in den Container. Akten und Datenträger entsorgen wir getrennt und datenschutzgerecht.",
      },
      {
        h3: "Fachgerechte Entsorgung",
        text: "Inventar, Elektroaltgeräte und Gewerbeabfall trennen wir nach Wertstoffen und geben sie bei zugelassenen Entsorgern ab.",
      },
      {
        h3: "Besenreine Übergabe",
        text: "Am Ende ist die Fläche besenrein, fertig für Vermieter, Nachmieter oder Umbau.",
      },
    ],
  },
  occasions: {
    h2: "Wann Unternehmen uns rufen",
    items: [
      { h3: "Betriebsaufgabe", text: "Ruhestand ohne Nachfolger oder Geschäftsaufgabe: Wir räumen, damit Sie sich um den Rest kümmern können." },
      { h3: "Umzug in neue Räume", text: "Was nicht mitkommt, räumen wir aus den alten Räumen, pünktlich zum Mietende." },
      { h3: "Insolvenz und Nachlass", text: "Für Insolvenzverwalter, Erben und Vermieter räumen wir diskret und dokumentieren auf Wunsch den Ablauf." },
      { h3: "Mieterwechsel", text: "Vermieter von Gewerbeflächen bekommen die Fläche schnell wieder leer und vermietbar." },
      { h3: "Umbau", text: "Vor der Sanierung räumen wir die Fläche und übernehmen auf Wunsch gleich die Entkernung." },
      { h3: "Verkleinerung", text: "Lagerfläche verkleinern, Archive auflösen, alte Technik loswerden. Auch in Etappen." },
    ],
  },
  checklist: {
    h2: "Was wir bei einer Betriebsauflösung räumen",
    intro: "Typischerweise räumen und entsorgen wir:",
    items: [
      "Büromöbel und Schränke",
      "Computer, Drucker und Elektroaltgeräte",
      "Akten und Archive",
      "Regale und Regalanlagen",
      "Werkbänke und Werkstatteinrichtung",
      "Restbestände und Verpackungen",
      "Teeküchen und Einbauten",
      "Teppiche und Bodenbeläge",
    ],
  },
  steps: {
    h2: "So läuft Ihre Gewerbeauflösung ab",
    items: [
      { title: "Anfrage", text: "Sie nennen uns Fläche, Art des Betriebs und Übergabetermin. Per Telefon, WhatsApp oder Formular." },
      { title: "Besichtigung", text: "Wir sehen uns die Räume an und klären, was entsorgt, demontiert oder übernommen wird." },
      { title: "Festpreis und Zeitplan", text: "Sie bekommen ein schriftliches Angebot mit festem Preis und einem Zeitplan, der zum Übergabetermin passt." },
      { title: "Räumung und Übergabe", text: "Wir räumen, demontieren, entsorgen und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Diskret", text: "Neutrales Auftreten, kein Aufsehen bei Kunden, Nachbarn oder Mitarbeitenden." },
      { title: "Schnell", text: "Besichtigung meist kurzfristig, Räumung oft innerhalb weniger Tage. Auch kurz vor Mietende." },
      { title: "Alles aus einer Hand", text: "Räumen, Abbau, Entsorgung und auf Wunsch die Entkernung, mit einem Ansprechpartner und einem Festpreis." },
    ],
  },
  local: {
    h2: "Gewerbeauflösung in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Von unseren Standorten in Landsberg am Lech und Vilgertshofen aus übernehmen wir Gewerbeauflösungen ${region}.`,
      "Arztpraxis in Landsberg, Handwerksbetrieb im Allgäu oder Lagerhalle in Augsburg: Wir räumen zum Termin und übergeben besenrein.",
    ],
  },
  faqs: [
    {
      q: "Was kostet eine Gewerbeauflösung?",
      a: "Das hängt von Fläche, Menge, Abbauaufwand und Entsorgung ab. Nach der kostenlosen Besichtigung bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Wie schnell können Sie räumen?",
      a: "Die Besichtigung geht meist kurzfristig, die Räumung oft innerhalb weniger Tage. Nennen Sie uns den Übergabetermin, wir planen danach.",
    },
    {
      q: "Was passiert mit Akten und Datenträgern?",
      a: "Wir entsorgen sie getrennt vom übrigen Inventar und datenschutzgerecht.",
    },
    {
      q: "Können Sie auch während des laufenden Betriebs räumen?",
      a: "Ja. Wir räumen in Etappen oder außerhalb Ihrer Öffnungszeiten, damit der Betrieb so wenig wie möglich gestört wird.",
    },
    {
      q: "Übernehmen Sie auch die Entkernung danach?",
      a: "Ja. Nach der Räumung entkernen wir die Fläche auf Wunsch für den Umbau oder den Nachmieter.",
    },
  ],
};

export const messie: SubPage = {
  path: "/messie-wohnung-entruempeln/",
  name: "Messie-Wohnung entrümpeln",
  title: "Messie-Wohnung räumen in Landsberg und Augsburg, diskret | J&L Bauprojekte",
  description:
    "Messie-Entrümpelung und Spezialentrümpelung in Landsberg am Lech, Augsburg und im Allgäu: diskrete Räumung, komplette Entsorgung auch bei Extrem-Müll, fachgerechte Mülltrennung, Festpreis.",
  h1: "Messie-Wohnung räumen in Landsberg am Lech und Augsburg: diskret und respektvoll",
  intro:
    "Eine stark vermüllte Wohnung belastet Betroffene, Angehörige und Vermieter. Wir räumen diskret und ohne Vorwürfe, die Nachbarn bekommen wenig mit. Alles wird sortiert und fachgerecht entsorgt. Danach kann gereinigt und renoviert werden.",
  hero: "sperrmuell",
  preselect: ["entruempelung"],
  services: {
    h2: "Unsere Messie-Entrümpelung",
    intro:
      "Eine Spezialentrümpelung ist mehr als Möbel tragen. Wir arbeiten mit Schutzausrüstung, in Ruhe und mit Respekt vor den Bewohnern.",
    items: [
      {
        h3: "Diskrete Räumung",
        text: "Unauffälliges Auftreten, kurze Wege zum Container, Arbeiten zu Zeiten, die wenig Aufsehen erregen. Was wir sehen, bleibt unter uns.",
      },
      {
        h3: "Respektvoller Umgang",
        text: "Wir urteilen nicht. Gemeinsam legen wir vorher fest, was bleibt. Dokumente, Fotos und Wertsachen legen wir beim Räumen für Sie beiseite.",
      },
      {
        h3: "Komplette Räumung",
        text: "Wir räumen die Wohnung komplett, auch bei Extrem-Müll, verdorbenen Lebensmitteln und Räumen, die bis unter die Decke zugestellt sind.",
      },
      {
        h3: "Fachgerechte Mülltrennung",
        text: "Restmüll, Wertstoffe, Elektroaltgeräte und Sperrmüll trennen wir und entsorgen sie über zugelassene Entsorger.",
      },
      {
        h3: "Vorbereitung für Reinigung",
        text: "Am Ende ist die Wohnung leer und besenrein, fertig für Grundreinigung, Geruchsneutralisation und Renovierung. Wie es danach weitergeht, besprechen wir bei der Besichtigung.",
      },
      {
        h3: "Danach renovieren",
        text: "Auf Wunsch entfernen wir anschließend alte Böden und Verkleidungen und verlegen neue Böden, damit die Wohnung wieder bewohnbar oder vermietbar wird.",
      },
    ],
  },
  occasions: {
    h2: "Wer uns ruft",
    items: [
      { h3: "Angehörige", text: "Wenn Eltern oder Geschwister es allein nicht mehr schaffen, räumen wir behutsam und in Absprache mit der Familie." },
      { h3: "Vermieter", text: "Nach Auszug oder Räumungsklage bringen wir die Wohnung wieder in einen vermietbaren Zustand." },
      { h3: "Betreuer", text: "Für gesetzliche Betreuer übernehmen wir die Räumung und stimmen jeden Schritt ab." },
      { h3: "Erben", text: "Im Nachlass räumen wir auch stark vermüllte Wohnungen, wenn Sie selbst nicht vor Ort sein können." },
      { h3: "Hausverwaltungen", text: "Bei Geruch, Ungeziefer oder Beschwerden im Haus handeln wir schnell und diskret." },
      { h3: "Betroffene selbst", text: "Wer einen Neuanfang will, bekommt bei uns Hilfe ohne Vorwürfe." },
    ],
  },
  checklist: {
    h2: "Was wir aus Messie-Wohnungen räumen",
    intro: "Wir räumen alles, was raus soll:",
    items: [
      "Hausmüll und verdorbene Lebensmittel",
      "Zeitungen, Kartons und Verpackungen",
      "Sperrmüll und Möbel",
      "Kleidung und Textilien",
      "Elektroaltgeräte",
      "Teppiche und alte Bodenbeläge",
      "Keller, Dachboden und Balkon",
      "Gegenstände im Treppenhaus",
    ],
  },
  steps: {
    h2: "So läuft die Messie-Entrümpelung ab",
    items: [
      { title: "Vertrauliches Gespräch", text: "Sie schildern die Lage am Telefon oder per WhatsApp, gern mit Fotos. Alles bleibt vertraulich." },
      { title: "Besichtigung", text: "Wir sehen uns die Wohnung an und klären, was bleiben soll und was beiseitegelegt wird." },
      { title: "Festpreis", text: "Sie bekommen ein verbindliches Angebot. Das gilt auch bei Extrem-Müll." },
      { title: "Räumung und Übergabe", text: "Wir räumen diskret, trennen und entsorgen fachgerecht und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Diskret", text: "Kein Aufsehen in der Nachbarschaft und Stillschweigen über das, was wir sehen." },
      { title: "Erfahren", text: "Über 270 Projekte in der Region, schwierige Räumungen eingeschlossen." },
      { title: "Ein Festpreis", text: "Der Preis steht nach der Besichtigung fest, inklusive Abtransport und Entsorgung." },
    ],
  },
  local: {
    h2: "Messie-Entrümpelung in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus räumen wir Messie-Wohnungen ${region}.`,
      "Sie wohnen weiter weg? Schlüsselübergabe, Fotos vom Zwischenstand und Abnahme stimmen wir per Telefon oder WhatsApp ab.",
    ],
  },
  faqs: [
    {
      q: "Was kostet es, eine Messie-Wohnung zu räumen?",
      a: "Das hängt von Größe, Menge und Art des Mülls ab. Nach der Besichtigung oder anhand von Fotos erhalten Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Bekommen die Nachbarn etwas mit?",
      a: "So wenig wie möglich. Wir arbeiten neutral, zügig und zu Zeiten, die wenig Aufsehen erregen.",
    },
    {
      q: "Muss ich bei der Räumung dabei sein?",
      a: "Nein. Nach der Besichtigung und der Schlüsselübergabe räumen wir selbstständig und halten Sie per Telefon oder WhatsApp auf dem Laufenden.",
    },
    {
      q: "Was passiert mit Dokumenten und Wertsachen?",
      a: "Papiere, Fotos, Schmuck oder Bargeld, die wir beim Räumen finden, legen wir beiseite und geben sie Ihnen.",
    },
    {
      q: "Reinigen Sie die Wohnung auch?",
      a: "Wir übergeben die Wohnung leer und besenrein, vorbereitet für Grundreinigung und Geruchsneutralisation. Wie die Reinigung danach erfolgt, klären wir bei der Besichtigung.",
    },
  ],
};

export const wohnungsaufloesung: SubPage = {
  path: "/wohnungsaufloesung/",
  name: "Wohnungsauflösung",
  title: "Wohnungsauflösung in Landsberg am Lech und Augsburg | J&L Bauprojekte",
  description:
    "Wohnungsauflösung in Landsberg am Lech, Kaufering, Augsburg, am Ammersee und im Allgäu: Mietwohnung oder Eigentumswohnung komplett räumen, Entsorgung inklusive, besenrein zum Übergabetermin, Festpreis nach Besichtigung.",
  h1: "Wohnungsauflösung in Landsberg am Lech: leer und besenrein zum Übergabetermin",
  intro:
    "Wir räumen Miet- und Eigentumswohnungen komplett, vom Wohnzimmer bis zum Kellerabteil. Container, Abtransport und Entsorgung übernehmen wir. Zum vereinbarten Termin ist die Wohnung leer und besenrein. Den Festpreis kennen Sie vorher.",
  hero: "sperrmuell",
  preselect: ["haushaltsaufloesung"],
  services: {
    h2: "Was zu einer Wohnungsauflösung gehört",
    intro:
      "Bei einer Wohnungsauflösung drängt meist ein Termin, etwa die Übergabe an den Vermieter oder der Verkauf. Wir planen vom Übergabetermin aus und erledigen alles mit einem Team.",
    items: [
      {
        h3: "Möbel und Hausrat",
        text: "Schränke, Betten, Sofas, Geschirr, Kleidung und Bücher: Wir räumen alles, was nicht mehr gebraucht wird, und tragen es aus der Wohnung.",
      },
      {
        h3: "Küche und Elektrogeräte",
        text: "Einbauküchen bauen wir ab, Herd, Kühlschrank und Waschmaschine geben wir als Elektroaltgeräte getrennt zur Entsorgung.",
      },
      {
        h3: "Keller, Dachboden und Balkon",
        text: "Zur Wohnung gehörende Kellerabteile, Dachbodenverschläge und Balkone räumen wir mit, damit bei der Übergabe nichts übrig bleibt.",
      },
      {
        h3: "Was bleibt, legen wir fest",
        text: "Vor der Räumung klären wir gemeinsam, was Sie behalten möchten. Papiere, Fotos und Wertsachen, die wir beim Räumen finden, legen wir für Sie beiseite.",
      },
      {
        h3: "Fachgerechte Entsorgung",
        text: "Holz, Metall, Elektrogeräte und Restmüll trennen wir und geben sie bei zugelassenen Entsorgern ab.",
      },
      {
        h3: "Danach renovieren",
        text: "Auf Wunsch entfernen wir alte Böden und Verkleidungen, verlegen neue Böden oder übernehmen Trockenbauarbeiten. So ist die Wohnung schnell wieder vermietbar.",
      },
    ],
  },
  occasions: {
    h2: "Wann eine Wohnungsauflösung ansteht",
    items: [
      { h3: "Umzug ins Pflegeheim", text: "Wenn Eltern oder Angehörige in ein Heim ziehen, räumen wir die bisherige Wohnung vollständig." },
      { h3: "Kündigung und Auszug", text: "Vor der Übergabe an den Vermieter räumen wir die Wohnung leer und besenrein." },
      { h3: "Verkauf", text: "Leere Räume braucht es für Besichtigungen, Fotos und die Übergabe an die Käufer." },
      { h3: "Mieterwechsel", text: "Vermieter bekommen die Wohnung nach dem Auszug schnell wieder leer, auch wenn der Vormieter viel zurückgelassen hat." },
      { h3: "Zusammenziehen", text: "Zwei Haushalte werden einer. Was doppelt ist, holen wir ab und entsorgen es." },
      { h3: "Vor einer Sanierung", text: "Erst räumen, dann entkernen. Beides machen wir auf Wunsch nacheinander." },
    ],
  },
  checklist: {
    h2: "Was wir aus der Wohnung räumen",
    intro: "Typischerweise räumen und entsorgen wir:",
    items: [
      "Möbel und Sperrmüll",
      "Einbauküchen",
      "Elektrogeräte",
      "Teppiche und Gardinen",
      "Kleidung und Textilien",
      "Geschirr, Bücher und Hausrat",
      "Kellerabteil und Dachbodenverschlag",
      "Balkonmöbel und Pflanzkübel",
    ],
  },
  steps: {
    h2: "So läuft Ihre Wohnungsauflösung ab",
    items: [
      { title: "Besichtigung oder Fotos", text: "Wir kommen vorbei, oder Sie schicken Fotos per WhatsApp für eine erste Einschätzung." },
      { title: "Festpreis", text: "Sie bekommen ein verbindliches Angebot mit festem Preis, Entsorgung inklusive." },
      { title: "Termin", text: "Wir planen die Räumung passend zum Übergabetermin, oft schon innerhalb weniger Tage." },
      { title: "Räumung und Übergabe", text: "Wir räumen, trennen und entsorgen und übergeben die Wohnung besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Pünktlich zum Termin", text: "Wir richten uns nach dem Übergabetermin, auch wenn es kurzfristig wird." },
      { title: "Ein Festpreis", text: "Der Preis steht nach der Besichtigung fest, Abtransport und Entsorgung sind enthalten." },
      { title: "Alles aus einer Hand", text: "Räumen, entsorgen und auf Wunsch renovieren, mit einem Ansprechpartner." },
    ],
  },
  local: {
    h2: "Wohnungsauflösung in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus lösen wir Wohnungen auf, ${region}.`,
      "Sie wohnen weiter weg? Schlüsselübergabe, Fotos vom Zwischenstand und Abnahme stimmen wir per Telefon oder WhatsApp ab.",
    ],
  },
  faqs: [
    {
      q: "Was kostet eine Wohnungsauflösung?",
      a: "Das hängt von Größe, Menge, Stockwerk und Entsorgung ab. Nach der Besichtigung oder anhand von Fotos bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Wie schnell können Sie räumen?",
      a: "Eine Besichtigung geht meist kurzfristig, die Räumung oft innerhalb weniger Tage. Nennen Sie uns den Übergabetermin, wir planen danach.",
    },
    {
      q: "Muss ich bei der Räumung dabei sein?",
      a: "Nein. Nach Besichtigung und Schlüsselübergabe räumen wir allein und halten Sie per Telefon oder WhatsApp auf dem Laufenden.",
    },
    {
      q: "Bauen Sie auch die Einbauküche ab?",
      a: "Ja. Wir bauen Küchen und andere Einbauten ab und entsorgen sie, auf Wunsch auch alte Böden und Verkleidungen.",
    },
    {
      q: "Räumen Sie Keller und Dachboden mit?",
      a: "Ja. Kellerabteil, Dachbodenverschlag und Balkon gehören bei uns zur Wohnungsauflösung dazu, wenn Sie das möchten.",
    },
  ],
};

export const nachlassaufloesung: SubPage = {
  path: "/nachlassaufloesung/",
  name: "Nachlassauflösung nach einem Todesfall",
  title: "Nachlassauflösung in Landsberg am Lech und Augsburg | J&L Bauprojekte",
  description:
    "Nachlassauflösung und Haushaltsauflösung im Todesfall in Landsberg am Lech, Augsburg, am Ammersee und im Allgäu: Wir räumen mit Rücksicht, legen Dokumente und Erinnerungsstücke beiseite und übergeben besenrein zum Festpreis.",
  h1: "Nachlassauflösung in Landsberg am Lech: in Ruhe und mit Rücksicht",
  intro:
    "Nach einem Todesfall müssen Erben und Angehörige oft eine ganze Wohnung oder ein Haus räumen, neben allem anderen, was gerade zu tun ist. Wir nehmen Ihnen diese Arbeit ab. Was Sie behalten möchten, legen wir vorher gemeinsam fest. Den Rest räumen und entsorgen wir, und am Ende sind die Räume besenrein.",
  hero: "sperrmuell",
  preselect: ["haushaltsaufloesung"],
  services: {
    h2: "Was wir bei einer Nachlassauflösung übernehmen",
    intro:
      "Ein Nachlass ist mehr als Möbel. Wir arbeiten in Ruhe, sprechen jeden Schritt mit Ihnen ab und gehen mit den Sachen des Verstorbenen sorgfältig um.",
    items: [
      {
        h3: "Erst sichten, dann räumen",
        text: "Bei der Besichtigung gehen wir mit Ihnen durch die Räume. Was in der Familie bleiben soll, markieren wir oder stellen es zur Seite.",
      },
      {
        h3: "Dokumente und Erinnerungsstücke",
        text: "Papiere, Fotos, Briefe, Schmuck oder Bargeld, die wir beim Räumen finden, legen wir beiseite und geben sie Ihnen.",
      },
      {
        h3: "Haus oder Wohnung komplett",
        text: "Wir räumen alle Zimmer, Keller, Dachboden, Garage und Gartenhaus. Danach ist das Gebäude leer.",
      },
      {
        h3: "Fachgerechte Entsorgung",
        text: "Möbel, Hausrat, Elektrogeräte und Restmüll trennen wir und geben sie bei zugelassenen Entsorgern ab. Container und Abtransport organisieren wir.",
      },
      {
        h3: "Auch aus der Ferne",
        text: "Sie wohnen weit weg? Wir stimmen uns per Telefon oder WhatsApp ab und schicken Ihnen Fotos vom Zwischenstand und von der fertigen Räumung.",
      },
      {
        h3: "Vorbereiten für Verkauf oder Vermietung",
        text: "Auf Wunsch entfernen wir anschließend alte Böden und Verkleidungen oder renovieren, damit das Haus oder die Wohnung verkauft oder vermietet werden kann.",
      },
    ],
  },
  occasions: {
    h2: "Wer uns ruft",
    items: [
      { h3: "Erben", text: "Wir räumen die geerbte Wohnung oder das Elternhaus, auch wenn Sie selbst nicht vor Ort sein können." },
      { h3: "Angehörige", text: "Wenn die Kraft fehlt, alles selbst durchzugehen, übernehmen wir die Arbeit in Absprache mit der Familie." },
      { h3: "Vermieter", text: "Nach dem Tod eines Mieters räumen wir die Wohnung in Abstimmung mit den Erben." },
      { h3: "Betreuer", text: "Für gesetzliche Betreuer übernehmen wir die Räumung und stimmen jeden Schritt ab." },
      { h3: "Vor dem Hausverkauf", text: "Leere Räume braucht es für Besichtigungen und die Übergabe an die Käufer." },
      { h3: "Bei stark vermüllten Wohnungen", text: "Auch wenn eine Wohnung im Nachlass stark vermüllt ist, räumen wir sie diskret." },
    ],
  },
  checklist: {
    h2: "Was wir im Nachlass räumen",
    intro: "Wir räumen alles, was nicht in der Familie bleibt:",
    items: [
      "Möbel und Sperrmüll",
      "Küchen und Elektrogeräte",
      "Kleidung und Wäsche",
      "Geschirr, Bücher und Hausrat",
      "Teppiche und Gardinen",
      "Keller und Dachboden",
      "Garage, Werkstatt und Gartenhaus",
      "Kleinteile, Kartons und Restmüll",
    ],
  },
  steps: {
    h2: "So läuft die Nachlassauflösung ab",
    items: [
      { title: "Gespräch", text: "Sie schildern uns die Lage am Telefon oder per WhatsApp, gern mit Fotos." },
      { title: "Besichtigung", text: "Wir sehen uns die Räume an und legen mit Ihnen fest, was bleibt und was beiseitegelegt wird." },
      { title: "Festpreis", text: "Sie bekommen ein verbindliches Angebot. Der Preis steht vorher fest." },
      { title: "Räumung und Übergabe", text: "Wir räumen, trennen und entsorgen und übergeben die Räume besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Mit Rücksicht", text: "Wir nehmen uns Zeit und gehen sorgfältig mit dem um, was der Verstorbene hinterlassen hat." },
      { title: "Erfahren", text: "Über 270 Projekte in der Region." },
      { title: "Ein Festpreis", text: "Der Preis steht nach der Besichtigung fest, Abtransport und Entsorgung sind enthalten." },
    ],
  },
  local: {
    h2: "Nachlassauflösung in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus übernehmen wir Nachlassauflösungen ${region}.`,
      "Elternhaus am Ammersee, Wohnung in Augsburg oder Bauernhaus im Allgäu: Wir räumen und übergeben besenrein, auch wenn Sie selbst weit weg wohnen.",
    ],
  },
  faqs: [
    {
      q: "Was kostet eine Nachlassauflösung?",
      a: "Das hängt von Größe, Menge, Zugang und Entsorgung ab. Nach der Besichtigung oder anhand von Fotos bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Muss ich bei der Räumung dabei sein?",
      a: "Nein. Nach Besichtigung und Schlüsselübergabe räumen wir allein und halten Sie per Telefon oder WhatsApp auf dem Laufenden.",
    },
    {
      q: "Was passiert mit persönlichen Dokumenten und Fotos?",
      a: "Papiere, Fotos, Briefe und Wertsachen, die wir finden, legen wir beiseite und geben sie Ihnen. Was Sie vorab markiert haben, bleibt ohnehin stehen.",
    },
    {
      q: "Wie schnell können Sie räumen?",
      a: "Eine Besichtigung geht meist kurzfristig. Den Räumtermin legen wir nach Ihren Wünschen fest, oft sind es nur wenige Tage.",
    },
    {
      q: "Räumen Sie auch ein ganzes Haus?",
      a: "Ja. Wir räumen Wohnungen und Häuser komplett, mit Keller, Dachboden, Garage und Gartenhaus.",
    },
  ],
};

export const kellerEntruempelung: SubPage = {
  path: "/keller-dachboden-garage-entruempeln/",
  name: "Keller, Dachboden und Garage entrümpeln",
  title: "Keller, Dachboden & Garage entrümpeln in Landsberg | J&L Bauprojekte",
  description:
    "Kellerentrümpelung, Dachboden räumen und Garage entrümpeln in Landsberg am Lech, Kaufering, Augsburg, am Ammersee und im Allgäu. Auch kleine Aufträge, Entsorgung inklusive, Festpreis nach Fotos oder Besichtigung.",
  h1: "Keller, Dachboden und Garage entrümpeln in Landsberg am Lech",
  intro:
    "Ein voller Keller, ein zugestellter Dachboden oder eine Garage, in die kein Auto mehr passt: Wir räumen auch einzelne Räume. Sie zeigen uns, was raus soll, wir tragen es weg und entsorgen es fachgerecht. Den Festpreis bekommen Sie vorher, oft schon anhand von Fotos.",
  hero: "sperrmuell",
  preselect: ["entruempelung"],
  services: {
    h2: "Was wir für Sie räumen",
    intro:
      "Kleine Aufträge nehmen wir gern. Ob ein einzelnes Kellerabteil oder Keller, Dachboden und Garage zusammen: Sie haben einen Ansprechpartner und einen Preis.",
    items: [
      {
        h3: "Kellerentrümpelung",
        text: "Kellerräume und Kellerabteile im Mehrfamilienhaus räumen wir leer, auch wenn der Weg nach oben eng und verwinkelt ist.",
      },
      {
        h3: "Dachboden räumen",
        text: "Alte Möbel, Kisten und Kartons tragen wir vom Dachboden, auch über steile Treppen. Danach ist der Boden besenrein.",
      },
      {
        h3: "Garage entrümpeln",
        text: "Altreifen, Werkzeug, Gerümpel und alte Regale: Wir räumen die Garage, damit das Auto wieder hineinpasst.",
      },
      {
        h3: "Abstellräume und Schuppen",
        text: "Abstellkammern, Gartenhäuser und Schuppen räumen wir genauso. Ein altes Gartenhaus brechen wir auf Wunsch gleich mit ab.",
      },
      {
        h3: "Was bleibt, entscheiden Sie",
        text: "Sie zeigen uns, was raus soll. Alles andere bleibt stehen. Fotos, Papiere und Wertsachen, die wir finden, legen wir beiseite.",
      },
      {
        h3: "Fachgerechte Entsorgung",
        text: "Holz, Metall, Elektrogeräte und Restmüll trennen wir und geben sie bei zugelassenen Entsorgern ab. Sie müssen nichts zum Wertstoffhof fahren.",
      },
    ],
  },
  occasions: {
    h2: "Wann Sie uns rufen",
    items: [
      { h3: "Wenn es einfach zu viel wird", text: "Über Jahre sammelt sich viel an. Wir räumen es weg, Sie müssen nichts selbst tragen." },
      { h3: "Vor dem Umzug", text: "Was nicht mit in die neue Wohnung soll, holen wir vorher ab." },
      { h3: "Vor dem Hausverkauf", text: "Leere Nebenräume braucht es für Besichtigungen und die Übergabe." },
      { h3: "Vor dem Dachausbau", text: "Erst räumen wir den Dachboden, dann kann der Ausbau starten. Den Trockenbau übernehmen wir auf Wunsch auch." },
      { h3: "Auf Wunsch der Hausverwaltung", text: "Wenn Kellerabteile oder Gemeinschaftsräume geräumt werden müssen, erledigen wir das zum Termin." },
      { h3: "Im Erbfall", text: "Keller, Dachboden und Garage im Elternhaus räumen wir auch als Teil einer Nachlassauflösung." },
    ],
  },
  checklist: {
    h2: "Was typischerweise raus muss",
    intro: "Wir räumen und entsorgen zum Beispiel:",
    items: [
      "Alte Möbel und Sperrmüll",
      "Kisten, Kartons und Kleinteile",
      "Elektrogeräte",
      "Altreifen und Fahrräder",
      "Werkzeug und Regale",
      "Holz und Altmetall",
      "Gartenmöbel und Gartengeräte",
      "Teppiche und Matratzen",
    ],
  },
  steps: {
    h2: "So läuft die Entrümpelung ab",
    items: [
      { title: "Fotos schicken", text: "Schicken Sie uns Fotos per WhatsApp. Für kleine Räume reicht das oft für ein Angebot." },
      { title: "Festpreis", text: "Sie bekommen ein verbindliches Angebot, Abtransport und Entsorgung inklusive. Bei größeren Mengen sehen wir es uns vorher an." },
      { title: "Termin", text: "Wir kommen zum vereinbarten Termin, oft schon innerhalb weniger Tage." },
      { title: "Räumen und übergeben", text: "Wir räumen, trennen und entsorgen und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Auch kleine Aufträge", text: "Ein einzelnes Kellerabteil ist uns nicht zu wenig." },
      { title: "Schnelle Termine", text: "Die Räumung klappt oft schon innerhalb weniger Tage." },
      { title: "Ein Festpreis", text: "Der Preis steht vorher fest, Abtransport und Entsorgung sind enthalten." },
    ],
  },
  local: {
    h2: "Entrümpelung in Landsberg, Kaufering und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus räumen wir Keller, Dachböden und Garagen ${region}.`,
      "Kellerabteil in Kaufering, Dachboden am Ammersee oder Doppelgarage in Buchloe: Schicken Sie uns Fotos, wir melden uns mit einem Preis.",
    ],
  },
  faqs: [
    {
      q: "Lohnt sich das auch für ein einzelnes Kellerabteil?",
      a: "Ja. Kleine Aufträge nehmen wir gern. Für ein Kellerabteil reichen oft Fotos für ein Angebot.",
    },
    {
      q: "Was kostet es, einen Keller zu entrümpeln?",
      a: "Das hängt von Menge, Zugang und Entsorgung ab. Anhand von Fotos oder nach einer Besichtigung bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Muss ich dabei sein?",
      a: "Nein. Wenn klar ist, was raus soll, räumen wir auch allein. Den Schlüssel können Sie uns vorher geben.",
    },
    {
      q: "Brechen Sie auch das alte Gartenhaus ab?",
      a: "Ja. Gartenhäuser und Schuppen räumen wir und brechen sie auf Wunsch ab. Den Bauschutt entsorgen wir mit.",
    },
    {
      q: "Wer entsorgt die Sachen?",
      a: "Wir. Abtransport, Trennung und fachgerechte Entsorgung sind im Festpreis enthalten.",
    },
  ],
};

// Kein eigenständiger Containerdienst: Container gibt es nur bei Entrümpelungen und Entkernungen, die wir selbst ausführen.
export const containerdienst: SubPage = {
  path: "/containerdienst/",
  name: "Container & Entsorgung",
  title: "Container & Entsorgung bei Entrümpelung und Entkernung in Landsberg | J&L Bauprojekte",
  description:
    "Container und Entsorgung inklusive: Bei jeder Entrümpelung und Entkernung in Landsberg am Lech, Augsburg und im Allgäu bestellen wir den passenden Container, befüllen ihn selbst und entsorgen fachgerecht. Im Festpreis enthalten.",
  h1: "Container & Entsorgung bei Entrümpelung und Entkernung",
  intro:
    "Wenn wir entrümpeln oder entkernen, kümmern wir uns auch um den Abfall. Den Container bestellen wir bei Partnern aus der Region, befüllen ihn selbst und lassen alles fachgerecht entsorgen. Das ist im Festpreis enthalten. Container ohne unsere Arbeiten vermieten wir nicht.",
  hero: "abbruch",
  preselect: ["entruempelung", "entkernung"],
  services: {
    h2: "Container für jeden Abfall",
    intro:
      "Welcher Container passt, hängt von Abfallart und Menge ab. Das schätzen wir bei der Besichtigung ein und bestellen die passende Größe.",
    items: [
      {
        h3: "Bauschutt-Container",
        text: "Für Ziegel, Beton, Fliesen, Mörtel und Estrich aus Entkernung, Abbruch und Rückbau. Sauberer Bauschutt ist günstiger zu entsorgen, deshalb trennen wir schon beim Ausbau.",
      },
      {
        h3: "Sperrmüll-Container",
        text: "Für Möbel, Matratzen, Teppiche und Hausrat bei Entrümpelung und Haushaltsauflösung.",
      },
      {
        h3: "Mischabfall-Container",
        text: "Für gemischte Bau- und Gewerbeabfälle, wenn sich nicht alles vor Ort trennen lässt.",
      },
      {
        h3: "Im Festpreis enthalten",
        text: "Container, Abholung und Entsorgung sind Teil unseres Angebots für die Entrümpelung oder Entkernung. Sie bekommen keine zweite Rechnung.",
      },
    ],
  },
  sizes: {
    h2: "Welche Containergröße wir einsetzen",
    intro:
      "Üblich sind Absetzcontainer mit 3, 5, 7 oder 10 m³, für große Mengen Abrollcontainer mit 10 bis 40 m³. Welche Größe wir für Ihr Projekt bestellen, hängt von der Menge ab. Wählen Sie eine Größe, um zu sehen, wofür sie typischerweise reicht.",
    items: [
      { volume: "3 m³", kind: "Absetzcontainer", use: "Keller oder Garage, Bauschutt aus Bad, Fliesen oder Estrich", length: 260, base: 170, height: 100 },
      { volume: "5 m³", kind: "Absetzcontainer", use: "Wohnungsentrümpelung, Bauschutt aus Bad, Fliesen oder Estrich", length: 310, base: 200, height: 120 },
      { volume: "7 m³", kind: "Absetzcontainer", use: "Wohnungsentrümpelung, Haushaltsauflösung (Haus)", length: 360, base: 240, height: 140 },
      { volume: "10 m³", kind: "Absetzcontainer", use: "Haushaltsauflösung (Haus)", length: 390, base: 260, height: 165 },
      { volume: "10–40 m³", kind: "Abrollcontainer", use: "Gewerbeauflösung, große Entkernung", length: 600, height: 150 },
    ],
  },
  occasions: {
    h2: "Bei welchen Arbeiten wir Container stellen",
    items: [
      { h3: "Entkernung", text: "Böden, Fliesen, Putz und Leitungen bis auf den Rohbau. Der Schutt geht direkt in den Container." },
      { h3: "Abbruch und Rückbau", text: "Wände, Treppen oder Kamine kontrolliert zurückbauen und den Schutt gleich abfahren lassen." },
      { h3: "Abriss im Garten", text: "Gartenhaus, Schuppen oder Carport abbrechen, mit Container für Holz und Bauschutt." },
      { h3: "Entrümpelung", text: "Keller, Dachboden, Garage oder die ganze Wohnung räumen, ohne dass Sie zum Wertstoffhof fahren." },
      { h3: "Haushaltsauflösung", text: "Den kompletten Haushalt auflösen und den Sperrmüll auf einmal entsorgen." },
      { h3: "Gewerbeauflösung", text: "Büros, Lager und Ladenflächen räumen, bei großen Mengen mit Abrollcontainer." },
    ],
  },
  checklist: {
    h2: "Wie wir den Abfall trennen",
    intro: "Die Container befüllen wir selbst und trennen dabei so, wie es die Entsorgung verlangt:",
    items: [
      "Bauschutt: Beton, Ziegel, Fliesen, Steine",
      "Sperrmüll: Möbel, Matratzen, Teppiche",
      "Mischabfall: gemischte Bau- und Gewerbeabfälle",
      "Holz: unbehandelt und behandelt getrennt",
      "Metall: getrennt zur Verwertung",
      "Farben, Lacke, Öle, Batterien: gesondert",
      "Elektroaltgeräte: gesondert",
      "Asbest und alte Mineralwolle: verpackt und gesondert",
    ],
  },
  steps: {
    h2: "So läuft es ab",
    items: [
      { title: "Besichtigung", text: "Wir sehen uns Räume und Menge an, vor Ort oder anhand Ihrer Fotos per WhatsApp." },
      { title: "Festpreis", text: "Sie bekommen einen Festpreis für die Arbeiten, Container und Entsorgung inklusive." },
      { title: "Container und Arbeiten", text: "Wir lassen den Container zum Starttermin stellen und befüllen ihn selbst. Steht er auf öffentlichem Grund, klären wir die Genehmigung mit Ihnen." },
      { title: "Abholung und Entsorgung", text: "Der Container wird abgeholt und über zugelassene Anlagen entsorgt. Die Räume übergeben wir besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Wir räumen oder entkernen, befüllen den Container und kümmern uns um die Entsorgung. Sie haben einen Ansprechpartner." },
      { title: "Die richtige Größe", text: "Weil wir die Menge bei der Besichtigung selbst einschätzen, wird weder zu groß bestellt noch nachbestellt." },
      { title: "Festpreis", text: "Was im Angebot steht, gilt. Container und Entsorgung sind drin." },
    ],
  },
  local: {
    h2: "Container und Entsorgung in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus übernehmen wir Entrümpelungen und Entkernungen mit Container und Entsorgung ${region}.`,
      "Bauschutt aus der Entkernung in Kaufering, Sperrmüll aus der Haushaltsauflösung in Augsburg oder Holz vom Schuppen-Abriss im Allgäu: Rufen Sie an, wir besprechen Ihr Projekt.",
    ],
  },
  faqs: [
    {
      q: "Kann ich bei Ihnen nur einen Container mieten?",
      a: "Nein. Container stellen wir nur bei Entrümpelungen und Entkernungen, die wir selbst ausführen. Dann sind Container, Abholung und Entsorgung im Festpreis enthalten.",
    },
    {
      q: "Was kostet der Container?",
      a: "Er steckt im Festpreis für die Entrümpelung oder Entkernung. Wie hoch der Anteil ist, hängt von Größe, Abfallart und Menge ab. Aufschläge im Nachhinein gibt es nicht.",
    },
    {
      q: "Welche Containergröße wird gebraucht?",
      a: "Für Keller oder Garage reichen meist 3 m³, für eine Wohnung 5 bis 7 m³, für ein ganzes Haus 7 bis 10 m³. Bauschutt ist schwer, dafür nehmen wir kleinere Container mit 3 bis 5 m³. Die passende Größe legen wir bei der Besichtigung fest.",
    },
    {
      q: "Braucht es eine Genehmigung für den Container?",
      a: "Auf Ihrem Grundstück nicht. Auf öffentlichem Grund braucht es meist eine Erlaubnis der Gemeinde. Wir sagen Ihnen, was in Ihrem Fall zu tun ist.",
    },
    {
      q: "Was passiert mit Asbest und alter Mineralwolle?",
      a: "Sie kommen nicht in den Bauschutt-Container, sondern werden getrennt verpackt und gesondert entsorgt. Den Ausbau übernehmen wir mit Sachkunde nach TRGS 519.",
    },
  ],
};

export const wanddurchbruch: SubPage = {
  path: "/wanddurchbruch/",
  name: "Wanddurchbruch & Stahlträger",
  title: "Wanddurchbruch & tragende Wand entfernen in Landsberg | J&L Bauprojekte",
  description:
    "Wanddurchbruch in Landsberg am Lech, Augsburg und im Allgäu: tragende Wand entfernen mit Statiker, Stahlträger und Sturz einbauen, Grundriss im Altbau ändern. Staubarm, Entsorgung des Bauschutts inklusive.",
  h1: "Wanddurchbruch in Landsberg am Lech: tragende Wände öffnen, Stahlträger einbauen",
  intro:
    "Offene Küche, größeres Wohnzimmer, neue Tür: Mit einem Wanddurchbruch ändern Sie den Grundriss. Nichttragende Wände öffnen wir direkt. Tragende Wände nur mit Statik, also mit Stahlträger oder Sturz. Wir arbeiten staubarm und fahren den Bauschutt ab.",
  hero: "entkernung",
  preselect: ["abbruch"],
  services: {
    h2: "Unsere Leistungen rund um den Wanddurchbruch",
    intro:
      "Neuer Türdurchgang oder kompletter Umbau des Grundrisses: Alles hängt davon ab, ob die Wand trägt.",
    items: [
      {
        h3: "Nichttragende Wand entfernen",
        text: "Leichte Trennwände und nichttragende Mauern brechen wir ab oder öffnen sie für einen Durchgang. Sauber geschnitten, die Kanten vorbereitet für Putz und Zarge.",
      },
      {
        h3: "Tragende Wand entfernen",
        text: "Tragende Wände öffnen wir nur nach der Berechnung eines Statikers. Er legt fest, wie die Last abgefangen wird. Erst dann stützen wir ab und brechen durch.",
      },
      {
        h3: "Stahlträger einbauen",
        text: "Bei größeren Öffnungen in tragenden Wänden übernimmt ein Stahlträger die Last. Wir sichern die Decke ab, setzen den Träger nach Vorgabe der Statik und mauern die Auflager.",
      },
      {
        h3: "Sturz einbauen",
        text: "Über Tür- und Fensteröffnungen setzen wir einen Sturz, passend zur Wand und zur Breite der Öffnung.",
      },
      {
        h3: "Staubschutz",
        text: "Wir schotten den Arbeitsbereich mit Staubschutzwänden ab, decken Böden ab und saugen direkt ab. Im Rest des Hauses können Sie weiter wohnen.",
      },
      {
        h3: "Bauschutt abtransportieren",
        text: "Den Bauschutt fahren wir ab und entsorgen ihn fachgerecht. Sie bekommen die Räume besenrein zurück.",
      },
    ],
  },
  occasions: {
    h2: "Wann sich ein Wanddurchbruch lohnt",
    items: [
      { h3: "Offene Küche", text: "Küche und Wohnzimmer verbinden. Das ist der häufigste Wunsch bei der Altbausanierung." },
      { h3: "Größere Räume", text: "Zwei kleine Zimmer zu einem großen zusammenlegen." },
      { h3: "Neue Türöffnung", text: "Einen zusätzlichen Durchgang schaffen oder eine Tür versetzen." },
      { h3: "Grundrissänderung nach dem Kauf", text: "Einen älteren Grundriss an die eigene Familie anpassen." },
      { h3: "Altbausanierung", text: "Im Zuge der Kernsanierung den Grundriss gleich mit modernisieren." },
      { h3: "Barrierefreiheit", text: "Breitere Durchgänge für Rollstuhl oder Rollator schaffen." },
    ],
  },
  checklist: {
    h2: "Was zu einem Wanddurchbruch gehört",
    intro: "Je nach Wand und Öffnung übernehmen wir:",
    items: [
      "Prüfung, ob die Wand trägt",
      "Abstimmung mit dem Statiker",
      "Abstützen der Decke",
      "Einbau von Stahlträger oder Sturz",
      "Statischer Abbruch der Öffnung",
      "Staubschutzwände und Bodenschutz",
      "Leitungen im Mauerwerk beachten",
      "Abtransport des Bauschutts",
    ],
  },
  steps: {
    h2: "So läuft Ihr Wanddurchbruch ab",
    items: [
      { title: "Besichtigung", text: "Wir sehen uns Wand, Decke und Leitungen an und klären, ob die Wand trägt." },
      { title: "Statik", text: "Bei tragenden Wänden berechnet ein Statiker die Abfangung, etwa mit Stahlträger oder Sturz." },
      { title: "Festpreis", text: "Sie bekommen ein verbindliches Angebot, Staubschutz und Entsorgung inklusive." },
      { title: "Durchbruch und Übergabe", text: "Wir sichern ab, brechen durch, setzen den Träger und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Sicher", text: "Tragende Wände nur mit Statiker. An Ihrem Haus wird nicht experimentiert." },
      { title: "Sauber", text: "Staubschutz, Bodenschutz und Absaugung, damit der Rest des Hauses bewohnbar bleibt." },
      { title: "Aus einer Hand", text: "Durchbruch, Entsorgung und auf Wunsch der neue Boden, alles mit einem Ansprechpartner." },
    ],
  },
  local: {
    h2: "Wanddurchbruch in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Wanddurchbrüche machen wir ${region}: im Altbau in der Landsberger Innenstadt genauso wie im Reihenhaus in Kaufering oder im Einfamilienhaus im Allgäu.`,
      "Altbausanierung mit Durchbruch? Auf Wunsch entkernen wir vorher und verlegen danach den neuen Boden.",
    ],
  },
  faqs: [
    {
      q: "Darf ich eine tragende Wand entfernen?",
      a: "Ja, aber nur mit Statik. Ein Statiker berechnet, wie die Last abgefangen wird. Ob zusätzlich eine Genehmigung nötig ist, klärt er mit Ihnen.",
    },
    {
      q: "Woran erkenne ich, ob eine Wand trägt?",
      a: "Hinweise sind Dicke, Material und Lage der Wand, etwa unter einem Deckenbalken oder unter einer Wand im Stockwerk darüber. Sicher sagt es erst die Prüfung vor Ort.",
    },
    {
      q: "Was kostet ein Wanddurchbruch?",
      a: "Das hängt von Wandart, Öffnungsbreite und Statik ab. Nach der Besichtigung bekommen Sie einen Festpreis, Staubschutz und Entsorgung inklusive.",
    },
    {
      q: "Wie viel Staub entsteht?",
      a: "Durch Staubschutzwände, Absaugung und Bodenschutz bleibt der Staub weitgehend im Arbeitsbereich.",
    },
    {
      q: "Wie lange dauert ein Wanddurchbruch?",
      a: "Ein einfacher Durchgang in einer nichttragenden Wand ist oft an einem Tag erledigt. Mit Stahlträger dauert es länger. Den Zeitplan bekommen Sie mit dem Angebot.",
    },
  ],
};

export const demontage: SubPage = {
  path: "/demontage-einbauten/",
  name: "Demontage von Einbauten",
  title: "Demontage von Einbauten in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Küche, Einbauschränke, Türen, Heizkörper und Sanitärobjekte abbauen lassen in Landsberg am Lech, Augsburg, am Ammersee und im Allgäu. Abtransport und Entsorgung inklusive, Festpreis nach Besichtigung.",
  h1: "Demontage von Einbauten in Landsberg am Lech: Küche, Türen, Schränke und mehr",
  intro:
    "Bevor umgebaut oder renoviert wird, muss das Alte raus. Wir bauen Küchen, Einbauschränke, Türen und Zargen, Heizkörper und Sanitärobjekte ab und fahren alles weg. Was Sie wiederverwenden möchten, bauen wir vorsichtig aus.",
  hero: "entkernung",
  preselect: ["rueckbau"],
  services: {
    h2: "Was wir abbauen",
    intro:
      "Ob ein einzelner Raum oder das ganze Haus: Wir demontieren, tragen raus und entsorgen, mit einem Ansprechpartner und einem Festpreis.",
    items: [
      {
        h3: "Küchen und Küchenzeilen",
        text: "Oberschränke, Unterschränke und Arbeitsplatte bauen wir ab. Herd, Kühlschrank und Spülmaschine geben wir getrennt als Elektroaltgeräte zur Entsorgung.",
      },
      {
        h3: "Einbauschränke und Möbel",
        text: "Einbauschränke, Regale und Möbel bauen wir auseinander und tragen sie aus dem Haus.",
      },
      {
        h3: "Türen und Zargen",
        text: "Innentüren bauen wir samt Zargen aus, zum Beispiel wenn neue Türen kommen oder ein Durchgang breiter werden soll.",
      },
      {
        h3: "Heizkörper und Sanitärobjekte",
        text: "Heizkörper, Waschbecken, WC, Dusche und Badewanne bauen wir aus, damit Installateur und Fliesenleger direkt anfangen können.",
      },
      {
        h3: "Vorsichtig ausbauen",
        text: "Was Sie behalten, verkaufen oder woanders einbauen möchten, bauen wir vorsichtig aus und stellen es für Sie zur Seite.",
      },
      {
        h3: "Büro, Praxis und Werkstatt",
        text: "Regalanlagen, Werkbänke, Einbauküchen und Trennwände in Gewerbeflächen bauen wir genauso ab, auf Wunsch zum Übergabetermin.",
        link: { href: "/gewerbeaufloesung/", label: "Alles zur Gewerbeauflösung" },
      },
    ],
  },
  occasions: {
    h2: "Wann eine Demontage ansteht",
    items: [
      { h3: "Neue Küche", text: "Die alte Küche kommt raus, damit der Küchenbauer am vereinbarten Tag aufbauen kann." },
      { h3: "Badsanierung", text: "Sanitärobjekte und Heizkörper raus, danach können Fliesen und Leitungen erneuert werden." },
      { h3: "Mieterwechsel", text: "Alte Einbauten raus, damit die Wohnung schnell wieder vermietet werden kann." },
      { h3: "Nach dem Kauf", text: "Bevor Sie einziehen, bauen wir aus, was nicht zu Ihren Plänen passt." },
      { h3: "Vor dem Umbau", text: "Türen, Schränke und Verkleidungen weg, damit die Handwerker freie Räume vorfinden." },
      { h3: "Auszug aus Gewerbeflächen", text: "Einbauten raus, Fläche besenrein, pünktlich zum Mietende." },
    ],
  },
  checklist: {
    h2: "Was wir typischerweise demontieren",
    intro: "Wir bauen ab, tragen raus und entsorgen zum Beispiel:",
    items: [
      "Einbauküchen und Küchenzeilen",
      "Einbauschränke und Regale",
      "Innentüren und Zargen",
      "Heizkörper",
      "Waschbecken, WC, Dusche und Badewanne",
      "Möbel",
      "Regalanlagen und Werkbänke",
      "Trennwände in Gewerbeflächen",
    ],
  },
  steps: {
    h2: "So läuft die Demontage ab",
    items: [
      { title: "Anfrage", text: "Sie sagen uns, was raus soll und bis wann. Per Telefon, WhatsApp oder Formular, gern mit Fotos." },
      { title: "Besichtigung", text: "Wir sehen uns die Einbauten an und klären, was entsorgt und was vorsichtig ausgebaut wird." },
      { title: "Festpreis", text: "Sie bekommen ein schriftliches Angebot mit festem Preis und Termin." },
      { title: "Demontage und Übergabe", text: "Wir bauen ab, trennen und entsorgen fachgerecht und übergeben die Räume besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Abbauen, raustragen, entsorgen und auf Wunsch die Entkernung, mit einem Ansprechpartner." },
      { title: "Vorsichtig, wo nötig", text: "Was weiterverwendet werden soll, bauen wir so aus, dass es heil bleibt." },
      { title: "Klare Kosten", text: "Der Preis steht nach der Besichtigung fest, Abtransport und Entsorgung inklusive." },
    ],
  },
  local: {
    h2: "Demontage in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus bauen wir Einbauten ab, ${region}.`,
      "Küche im Reihenhaus in Kaufering, Bad im Altbau in Landsberg oder Praxis in Augsburg: Wir bauen ab und übergeben besenrein.",
    ],
  },
  faqs: [
    {
      q: "Was kostet die Demontage einer Küche?",
      a: "Das hängt von Größe, Zugang und Entsorgung ab. Nach der Besichtigung oder anhand von Fotos bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Können Sie Teile so ausbauen, dass ich sie wiederverwenden kann?",
      a: "Ja. Sagen Sie uns vorher, was bleiben soll. Diese Teile bauen wir vorsichtig aus und stellen sie zur Seite.",
    },
    {
      q: "Übernehmen Sie auch einzelne Räume?",
      a: "Ja. Ob nur die Küche oder das ganze Haus: Wir richten uns nach Ihrem Vorhaben.",
    },
    {
      q: "Wer kümmert sich um die Entsorgung?",
      a: "Wir. Abtransport, Trennung und fachgerechte Entsorgung sind im Festpreis enthalten.",
    },
    {
      q: "Was passiert nach der Demontage?",
      a: "Auf Wunsch machen wir weiter: Fliesen und Böden raus, Wände zurückbauen oder renovieren mit Trockenbau und neuem Boden.",
    },
  ],
};

export const bodenEntfernen: SubPage = {
  path: "/fliesen-boden-entfernen/",
  name: "Fliesen und Boden entfernen",
  title: "Fliesen & Boden entfernen in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Fliesen, Estrich, Parkett, Laminat, Teppich und PVC entfernen lassen in Landsberg am Lech, Augsburg, am Ammersee und im Allgäu. Mit Kleber- und Spachtelresten, Entsorgung inklusive, Festpreis nach Besichtigung.",
  h1: "Fliesen und Boden entfernen in Landsberg am Lech",
  intro:
    "Alte Fliesen, Estrich oder Bodenbeläge müssen raus, bevor Neues kommt. Wir brechen sie ab, entfernen Kleber- und Spachtelreste und entsorgen den Schutt. Danach ist der Untergrund bereit für neuen Estrich, eine Fußbodenheizung oder den neuen Belag.",
  hero: "entkernung",
  preselect: ["entkernung"],
  services: {
    h2: "Was wir entfernen",
    intro:
      "Ob ein Bad oder die ganze Wohnung: Wir nehmen den alten Boden heraus und hinterlassen einen sauberen Untergrund für die nächsten Handwerker.",
    items: [
      {
        h3: "Fliesen an Wand und Boden",
        text: "In Bad, Küche und Flur schlagen wir alte Fliesen ab, an der Wand genauso wie am Boden, samt Kleber.",
      },
      {
        h3: "Estrich und Trittschalldämmung",
        text: "Soll der Bodenaufbau komplett neu werden, entfernen wir Estrich und Trittschalldämmung, bis der Rohbau frei liegt.",
      },
      {
        h3: "Parkett und Laminat",
        text: "Parkett und Laminat nehmen wir auf und entfernen die Reste, damit der neue Belag auf glattem Untergrund liegt.",
      },
      {
        h3: "Teppich und PVC",
        text: "Teppich und PVC lösen wir vom Untergrund und entfernen Kleber- und Spachtelreste.",
      },
      {
        h3: "Vorsicht bei altem Kleber",
        text: "Schwarzer Kleber unter Parkett oder kleine quadratische Bodenplatten können PAK oder Asbest enthalten. Verdachtsstellen sprechen wir bei der Besichtigung an und klären die Schutzmaßnahmen, bevor der alte Boden herauskommt.",
        link: { href: "/schadstoffe/", label: "Alles zur Schadstoffsanierung" },
      },
      {
        h3: "Danach der neue Boden",
        text: "Auf Wunsch verlegen wir anschließend Laminat oder Vinyl, mit Trittschalldämmung, Sockelleisten und Übergangsprofilen.",
        link: { href: "/renovierung/", label: "Alles zur Renovierung" },
      },
    ],
  },
  occasions: {
    h2: "Wann der alte Boden raus muss",
    items: [
      { h3: "Badsanierung", text: "Fliesen an Wand und Boden raus, damit Installateur und Fliesenleger direkt loslegen können." },
      { h3: "Fußbodenheizung", text: "Für eine neue Fußbodenheizung muss oft der alte Aufbau samt Estrich weichen." },
      { h3: "Neuer Bodenbelag", text: "Alter Teppich, PVC oder Laminat raus, bevor der neue Boden verlegt wird." },
      { h3: "Mieterwechsel", text: "Abgenutzte Böden raus, neuer Belag rein, und die Wohnung ist schnell wieder vermietbar." },
      { h3: "Kernsanierung im Altbau", text: "Bei der Entkernung kommt der komplette Bodenaufbau mit raus." },
      { h3: "Nach dem Kauf", text: "Bevor Sie einziehen, kommt raus, was Ihnen nicht gefällt." },
    ],
  },
  checklist: {
    h2: "Was wir entfernen",
    intro: "Typischerweise entfernen und entsorgen wir:",
    items: [
      "Wandfliesen und Bodenfliesen",
      "Fliesenkleber und Mörtelreste",
      "Estrich",
      "Trittschalldämmung",
      "Parkett und Laminat",
      "Teppich",
      "PVC-Beläge",
      "Kleber- und Spachtelreste",
    ],
  },
  steps: {
    h2: "So läuft es ab",
    items: [
      { title: "Anfrage", text: "Sie sagen uns, welche Böden raus sollen und wie groß die Fläche ist. Gern mit Fotos per WhatsApp." },
      { title: "Besichtigung", text: "Wir sehen uns Belag, Aufbau und Untergrund an und sprechen verdächtige Materialien an." },
      { title: "Festpreis", text: "Sie bekommen ein schriftliches Angebot mit festem Preis und Termin." },
      { title: "Ausbau und Übergabe", text: "Wir entfernen den Boden, entsorgen den Schutt fachgerecht und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Raus und neu aus einer Hand", text: "Alten Boden entfernen und neuen verlegen, mit einem Ansprechpartner." },
      { title: "Sachkunde bei Schadstoffen", text: "Asbesthaltige Beläge und Kleber bauen wir mit Sachkunde nach TRGS 519 aus." },
      { title: "Klare Kosten", text: "Der Preis steht nach der Besichtigung fest, die Entsorgung ist enthalten." },
    ],
  },
  local: {
    h2: "Fliesen und Böden entfernen in Landsberg und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus entfernen wir Fliesen und Böden, ${region}.`,
      "Bad in Kaufering, Altbauwohnung in Landsberg oder Einfamilienhaus am Ammersee: Wir nehmen den alten Boden raus und bereiten den Untergrund für das Neue vor.",
    ],
  },
  faqs: [
    {
      q: "Was kostet es, Fliesen oder einen Boden entfernen zu lassen?",
      a: "Das hängt von Fläche, Belag, Aufbau und Entsorgung ab. Nach der Besichtigung oder anhand von Fotos bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Muss der Estrich mit raus?",
      a: "Das klären wir bei der Besichtigung. Ist er in Ordnung, entfernen wir nur den Belag. Soll der Aufbau neu werden, etwa für eine Fußbodenheizung, kommt er mit raus.",
    },
    {
      q: "Was ist, wenn im alten Boden Asbest steckt?",
      a: "Bei Häusern, die vor 1993 gebaut oder modernisiert wurden, sprechen wir verdächtige Beläge und Kleber schon bei der Besichtigung an. Asbesthaltige Materialien bauen wir mit Sachkunde nach TRGS 519 aus und entsorgen sie mit Nachweis.",
    },
    {
      q: "Verlegen Sie danach auch den neuen Boden?",
      a: "Ja, Laminat und Vinyl verlegen wir selbst. Welche Verlegeart zum Untergrund passt, klären wir bei der Besichtigung.",
    },
    {
      q: "Wer entsorgt den Schutt?",
      a: "Wir. Container, Abtransport und fachgerechte Entsorgung sind im Festpreis enthalten.",
    },
  ],
};

export const rueckbau: SubPage = {
  path: "/rueckbau-innenausbau/",
  name: "Rückbau von Innenausbau",
  title: "Rückbau von Innenausbau & Trockenbau in Landsberg | J&L Bauprojekte",
  description:
    "Trockenbauwände, abgehängte Decken, Verkleidungen, Putz und nichttragende Wände zurückbauen in Landsberg am Lech, Augsburg, am Ammersee und im Allgäu. Schritt für Schritt, Entsorgung inklusive, Festpreis nach Besichtigung.",
  h1: "Rückbau von Innenausbau in Landsberg am Lech: Wände, Decken, Verkleidungen",
  intro:
    "Nicht jedes Projekt braucht eine komplette Entkernung. Oft müssen nur einzelne Bauteile weg, etwa eine Trockenbauwand, eine abgehängte Decke oder alte Verkleidungen. Wir bauen genau das zurück, Schritt für Schritt und ohne den Bestand zu beschädigen.",
  hero: "trockenbau",
  preselect: ["rueckbau"],
  services: {
    h2: "Was wir zurückbauen",
    intro:
      "Wir bauen so viel zurück, wie Ihr Vorhaben braucht, und lassen stehen, was bleiben soll. Danach können Elektriker, Installateur und Trockenbauer sofort anfangen.",
    items: [
      {
        h3: "Trockenbauwände",
        text: "Ständerwände aus Gipskarton bauen wir samt Unterkonstruktion und Dämmung zurück, zum Beispiel für eine neue Raumaufteilung.",
      },
      {
        h3: "Abgehängte Decken",
        text: "Abgehängte Decken nehmen wir ab, damit die alte Decke wieder frei liegt oder neue Leitungen verlegt werden können.",
      },
      {
        h3: "Verkleidungen an Wand und Decke",
        text: "Alte Verkleidungen an Wänden und Decken bauen wir ab und entsorgen sie getrennt nach Material.",
      },
      {
        h3: "Tapeten und Putz",
        text: "Tapeten und alten Putz entfernen wir, wenn die Wände neu aufgebaut oder gespachtelt werden sollen.",
      },
      {
        h3: "Nichttragende Innenwände",
        text: "Gemauerte Innenwände ohne tragende Funktion brechen wir ab. Ob eine Wand trägt, klären wir vorher, bei tragenden Wänden mit einem Statiker.",
        link: { href: "/wanddurchbruch/", label: "Alles zum Wanddurchbruch" },
      },
      {
        h3: "Einzelne Bauteile",
        text: "Auch einzelne Bauteile wie eine Treppe oder einen Kamin bauen wir zurück, wenn sie dem Umbau im Weg sind.",
      },
    ],
  },
  occasions: {
    h2: "Wann sich ein Rückbau lohnt",
    items: [
      { h3: "Neue Raumaufteilung", text: "Wände versetzen, Räume zusammenlegen, Durchgänge schaffen. Wo nötig mit Statiker." },
      { h3: "Vor den Handwerkern", text: "Wir machen den Weg frei für Elektro, Sanitär, Heizung und Trockenbau, damit niemand warten muss." },
      { h3: "Mieterwechsel", text: "Einbauten des Vormieters zurückbauen, damit die Fläche wieder vermietbar ist." },
      { h3: "Umbau von Gewerbeflächen", text: "Trennwände und Decken raus, damit die Fläche neu geplant werden kann." },
      { h3: "Teilsanierung", text: "Nur ein Raum oder ein Stockwerk wird erneuert, der Rest bleibt unberührt." },
      { h3: "Nach dem Kauf", text: "Bevor Sie einziehen, bauen wir zurück, was nicht zu Ihren Plänen passt." },
    ],
  },
  checklist: {
    h2: "Was wir typischerweise zurückbauen",
    intro: "Je nach Vorhaben bauen wir aus:",
    items: [
      "Trockenbauwände",
      "Abgehängte Decken",
      "Wand- und Deckenverkleidungen",
      "Tapeten",
      "Putz",
      "Nichttragende Innenwände",
      "Dämmung in Wänden und Decken",
      "Treppen und Kamine",
    ],
  },
  steps: {
    h2: "So läuft der Rückbau ab",
    items: [
      { title: "Anfrage", text: "Sie sagen uns, was weg soll und was stehen bleibt. Per Telefon, WhatsApp oder Formular." },
      { title: "Besichtigung", text: "Wir sehen uns die Bauteile an, klären die Statik und sprechen verdächtige Materialien an." },
      { title: "Festpreis", text: "Sie bekommen ein schriftliches Angebot mit festem Preis und Termin." },
      { title: "Rückbau und Übergabe", text: "Wir bauen zurück, trennen und entsorgen fachgerecht und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Schritt für Schritt", text: "Wir bauen kontrolliert zurück, damit der Bestand keinen Schaden nimmt." },
      { title: "Alles aus einer Hand", text: "Zurückbauen, entsorgen und auf Wunsch neu aufbauen im Trockenbau." },
      { title: "Klare Kosten", text: "Der Preis steht nach der Besichtigung fest, die Entsorgung ist enthalten." },
    ],
  },
  local: {
    h2: "Rückbau in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus bauen wir Innenausbau zurück, ${region}.`,
      "Altbauwohnung in Landsberg, Büro in Augsburg oder Einfamilienhaus im Allgäu: Wir bauen zurück, was weg muss, und übergeben besenrein.",
    ],
  },
  faqs: [
    {
      q: "Was ist der Unterschied zur Entkernung?",
      a: "Bei der Entkernung kommt fast der ganze Innenausbau raus, bis der Rohbau frei liegt. Beim Rückbau entfernen wir nur einzelne Bauteile, zum Beispiel eine Wand, eine Decke, eine Treppe oder einen Kamin.",
    },
    {
      q: "Woher wissen Sie, ob eine Wand trägt?",
      a: "Das klären wir bei der Besichtigung. Bei tragenden Wänden arbeiten wir mit einem Statiker, der festlegt, wie die Last abgefangen wird.",
    },
    {
      q: "Was ist mit alter Mineralwolle in Wänden und Decken?",
      a: "Alte Mineralwolle kann gesundheitsschädliche Fasern enthalten. Wir sprechen sie bei der Besichtigung an und bauen sie mit den nötigen Schutzmaßnahmen aus.",
    },
    {
      q: "Was kostet ein Rückbau?",
      a: "Das hängt von Bauteilen, Material, Zugang und Schuttmenge ab. Nach der Besichtigung bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Bauen Sie danach auch neu auf?",
      a: "Ja. Neue Wände und Decken im Trockenbau und neue Böden übernehmen wir auf Wunsch gleich mit.",
    },
  ],
};

export const abbrucharbeiten: SubPage = {
  path: "/kleinere-abbrucharbeiten/",
  name: "Kleinere Abbrucharbeiten",
  title: "Gartenhaus, Schuppen & Nebengebäude abreißen in Landsberg | J&L Bauprojekte",
  description:
    "Gartenhaus abreißen, Schuppen abbrechen, kleine Nebengebäude und einzelne Wände abbrechen in Landsberg am Lech, Augsburg, am Ammersee und im Allgäu. Bauschutt entsorgen wir mit, Festpreis nach Besichtigung.",
  h1: "Kleinere Abbrucharbeiten in Landsberg am Lech: Gartenhaus, Schuppen, Nebengebäude",
  intro:
    "Das alte Gartenhaus, ein baufälliger Schuppen oder eine einzelne Wand: Wir brechen kleinere Gebäude und Bauteile ab und entsorgen den Bauschutt. Komplette Hausabrisse übernehmen wir nicht.",
  hero: "abbruch",
  preselect: ["abbruch"],
  services: {
    h2: "Was wir abbrechen",
    intro:
      "Kleine Abbrüche erledigen wir mit einem Team, vom Ausräumen bis zum letzten Schuttsack. Sie haben einen Ansprechpartner und einen Festpreis.",
    items: [
      {
        h3: "Gartenhäuser",
        text: "Gartenhäuser räumen wir aus, brechen sie ab und fahren alles weg. Danach ist der Platz frei für Neues.",
      },
      {
        h3: "Schuppen",
        text: "Baufällige oder überflüssige Schuppen brechen wir ab, den Inhalt räumen wir auf Wunsch vorher mit.",
        link: { href: "/keller-dachboden-garage-entruempeln/", label: "Alles zu Keller, Dachboden & Garage" },
      },
      {
        h3: "Kleine Nebengebäude",
        text: "Kleine Nebengebäude auf dem Grundstück brechen wir ab. Was dafür vorher zu klären ist, besprechen wir bei der Besichtigung.",
      },
      {
        h3: "Einzelne Wände",
        text: "Einzelne Wände brechen wir ab und entsorgen den Schutt. Bei tragenden Wänden arbeiten wir mit einem Statiker.",
        link: { href: "/wanddurchbruch/", label: "Alles zum Wanddurchbruch" },
      },
      {
        h3: "Dächer aus Asbestzement",
        text: "Viele alte Schuppen und Gartenhäuser haben Dachplatten aus Asbestzement (Eternit). Diese Platten bauen wir mit Sachkunde nach TRGS 519 aus und entsorgen sie mit Nachweis.",
        link: { href: "/schadstoffe/", label: "Alles zur Schadstoffsanierung" },
      },
      {
        h3: "Bauschutt und Entsorgung",
        text: "Holz, Metall, Bauschutt und Restmüll trennen wir und entsorgen sie fachgerecht. Den Container organisieren wir.",
        link: { href: "/containerdienst/", label: "Alles zu Container & Entsorgung" },
      },
    ],
  },
  occasions: {
    h2: "Wann ein kleiner Abbruch ansteht",
    items: [
      { h3: "Garten neu gestalten", text: "Das alte Gartenhaus muss weg, damit Platz für Neues ist." },
      { h3: "Baufällige Gebäude", text: "Morsches Holz, undichtes Dach: Bevor etwas einstürzt, brechen wir es kontrolliert ab." },
      { h3: "Vor dem Hausverkauf", text: "Ein aufgeräumtes Grundstück ohne baufällige Schuppen verkauft sich leichter." },
      { h3: "Anbau oder Neubau", text: "Ein altes Nebengebäude steht im Weg? Wir machen den Platz frei." },
      { h3: "Im Erbfall", text: "Wir räumen Haus und Garten und brechen auf Wunsch auch alte Nebengebäude ab." },
      { h3: "Bei Asbestverdacht", text: "Graue Faserzementplatten auf dem Dach bauen wir mit Sachkunde aus." },
    ],
  },
  checklist: {
    h2: "Was wir abbrechen und entsorgen",
    intro: "Typischerweise übernehmen wir:",
    items: [
      "Gartenhäuser aus Holz",
      "Schuppen",
      "Kleine Nebengebäude",
      "Einzelne Wände",
      "Dachplatten aus Asbestzement",
      "Inhalt von Gartenhaus und Schuppen",
      "Holz und Altmetall",
      "Bauschutt",
    ],
  },
  steps: {
    h2: "So läuft der Abbruch ab",
    items: [
      { title: "Anfrage", text: "Sie sagen uns, was weg soll. Am besten mit Fotos per WhatsApp." },
      { title: "Besichtigung", text: "Wir sehen uns Gebäude, Material und Zufahrt an und sprechen verdächtige Baustoffe an." },
      { title: "Festpreis", text: "Sie bekommen ein schriftliches Angebot mit festem Preis und Termin." },
      { title: "Abbruch und Übergabe", text: "Wir brechen ab, trennen und entsorgen fachgerecht und hinterlassen den Platz aufgeräumt." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Ausräumen, abbrechen, Asbest ausbauen und entsorgen, mit einem Ansprechpartner." },
      { title: "Sachkunde nach TRGS 519", text: "Eternit-Platten und andere asbesthaltige Bauteile bauen wir vorschriftsgemäß aus." },
      { title: "Klare Kosten", text: "Der Preis steht nach der Besichtigung fest, die Entsorgung ist enthalten." },
    ],
  },
  local: {
    h2: "Kleinere Abbrucharbeiten in Landsberg und Umgebung",
    paragraphs: [
      `Von Landsberg am Lech und Vilgertshofen aus übernehmen wir kleinere Abbrucharbeiten, ${region}.`,
      "Gartenhaus in Kaufering, Schuppen am Ammersee oder Nebengebäude im Allgäu: Schicken Sie uns Fotos, wir melden uns mit einem Preis.",
    ],
  },
  faqs: [
    {
      q: "Reißen Sie auch ganze Häuser ab?",
      a: "Nein. Wir übernehmen kleinere Abbrucharbeiten wie Gartenhäuser, Schuppen, Nebengebäude und einzelne Wände. Komplette Hausabrisse führen wir nicht aus.",
    },
    {
      q: "Brauche ich für den Abbruch eine Genehmigung?",
      a: "Das hängt vom Gebäude ab. Für kleine Gartenhäuser und Schuppen ist oft keine nötig, für größere Gebäude kann eine Anzeige oder Genehmigung bei der Gemeinde vorgeschrieben sein. Im Zweifel fragen Sie beim Bauamt nach, wir sprechen das bei der Besichtigung an.",
    },
    {
      q: "Was passiert mit einem Dach aus Eternit?",
      a: "Asbestzementplatten bauen wir mit Sachkunde nach TRGS 519 aus und entsorgen sie mit Nachweis. Nicht zerbrechen und nicht selbst abbauen, denn dabei werden Fasern frei.",
    },
    {
      q: "Räumen Sie das Gartenhaus vorher aus?",
      a: "Ja. Den Inhalt von Gartenhaus oder Schuppen räumen wir auf Wunsch mit und entsorgen ihn.",
    },
    {
      q: "Was kostet der Abriss eines Gartenhauses?",
      a: "Das hängt von Größe, Material, Zufahrt und Entsorgung ab. Anhand von Fotos oder nach der Besichtigung bekommen Sie einen verbindlichen Festpreis.",
    },
  ],
};
