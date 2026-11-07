import type { SubPage } from "./subpages";

// Spezialseiten zu Haushaltsauflösung (Gewerbe, Messie, Container) und Entkernung (Wanddurchbruch).
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
