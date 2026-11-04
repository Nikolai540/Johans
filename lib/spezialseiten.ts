import type { SubPage } from "./subpages";

// Spezialseiten zu Haushaltsauflösung (Gewerbe, Messie, Container) und Entkernung (Wanddurchbruch).
// Container stellen Partnerbetriebe, J&L organisiert. PLATZHALTER: konkrete Containergrößen ergänzen, falls gewünscht.

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
    "Büro, Praxis, Werkstatt oder Lager: Wir lösen Ihren Betrieb diskret und termingerecht auf. Inventar raus, Einbauten demontiert, Akten und Wertstoffe fachgerecht entsorgt – und die Fläche besenrein zum Übergabetermin. Mit festem Ansprechpartner und Festpreis nach kostenloser Besichtigung.",
  hero: "entkernung",
  preselect: ["entruempelung"],
  services: {
    h2: "Was zu einer Gewerbeauflösung gehört",
    intro:
      "Bei einer Firmenauflösung zählt jeder Tag Miete. Wir planen die Räumung rückwärts vom Übergabetermin und erledigen alles mit einem Team – vom ersten Karton bis zur besenreinen Fläche.",
    items: [
      {
        h3: "Büroentrümpelung",
        text: "Schreibtische, Schränke, Stühle, Teeküche und Technik: Wir räumen Büros und Praxen vollständig und trennen dabei Holz, Metall, Elektroaltgeräte und Restmüll.",
      },
      {
        h3: "Lager räumen",
        text: "Regale voller Restbestände, Paletten, Verpackungen und Altmaterial – wir räumen Lager und Hallen auch bei großen Mengen und organisieren den Abtransport.",
      },
      {
        h3: "Demontage und Industrie-Demontage",
        text: "Regalanlagen, Werkbänke, Einbauküchen, Trennwände und kleinere Anlagen bauen wir fachgerecht ab. Was weiterverkauft oder mitgenommen werden soll, demontieren wir schonend.",
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
        text: "Am Ende übergeben wir die Fläche besenrein – bereit für den Vermieter, den Nachmieter oder den Umbau.",
      },
    ],
  },
  occasions: {
    h2: "Wann Unternehmen uns rufen",
    items: [
      { h3: "Betriebsaufgabe", text: "Ruhestand ohne Nachfolger oder Geschäftsaufgabe: Wir räumen, damit Sie sich um den Rest kümmern können." },
      { h3: "Umzug in neue Räume", text: "Was nicht mitkommt, räumen wir aus den alten Räumen – termingenau zum Mietende." },
      { h3: "Insolvenz und Nachlass", text: "Für Insolvenzverwalter, Erben und Vermieter räumen wir diskret und dokumentieren auf Wunsch den Ablauf." },
      { h3: "Mieterwechsel", text: "Vermieter von Gewerbeflächen bekommen die Fläche schnell wieder leer und vermietbar." },
      { h3: "Umbau", text: "Vor der Sanierung räumen wir die Fläche und übernehmen auf Wunsch gleich die Entkernung." },
      { h3: "Verkleinerung", text: "Lagerflächen reduzieren, Archive auflösen, alte Technik loswerden – auch in Etappen." },
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
      { title: "Anfrage", text: "Sie nennen uns Fläche, Art des Betriebs und Ihren Übergabetermin – telefonisch, per WhatsApp oder über das Formular." },
      { title: "Besichtigung", text: "Wir sehen uns die Räume an und klären, was entsorgt, demontiert oder übernommen wird." },
      { title: "Festpreis und Zeitplan", text: "Sie erhalten ein schriftliches Angebot mit festem Preis und einem Zeitplan, der zum Übergabetermin passt." },
      { title: "Räumung und Übergabe", text: "Wir räumen, demontieren, entsorgen und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Diskret", text: "Neutrales Auftreten, kein Aufsehen bei Kunden, Nachbarn oder Mitarbeitenden." },
      { title: "Schnell", text: "Besichtigung meist kurzfristig, die Räumung oft innerhalb weniger Tage – auch kurz vor dem Mietende." },
      { title: "Alles aus einer Hand", text: "Räumen, Demontage, Entsorgung und auf Wunsch die Entkernung – ein Ansprechpartner, ein Festpreis." },
    ],
  },
  local: {
    h2: "Gewerbeauflösung in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Von unseren Standorten in Landsberg am Lech und Vilgertshofen aus übernehmen wir Gewerbeauflösungen ${region}.`,
      "Ob Arztpraxis in Landsberg, Handwerksbetrieb im Allgäu oder Lagerhalle in Augsburg: Wir räumen termingenau und übergeben besenrein.",
    ],
  },
  faqs: [
    {
      q: "Was kostet eine Gewerbeauflösung?",
      a: "Das hängt von Fläche, Menge, Demontageaufwand und Entsorgung ab. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Wie schnell können Sie räumen?",
      a: "Die Besichtigung ist meist kurzfristig möglich, die Räumung oft innerhalb weniger Tage. Nennen Sie uns Ihren Übergabetermin, wir planen danach.",
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
  title: "Messie-Wohnung räumen in Landsberg und Augsburg – diskret | J&L Bauprojekte",
  description:
    "Messie-Entrümpelung und Spezialentrümpelung in Landsberg am Lech, Augsburg und im Allgäu: diskrete Räumung, komplette Entsorgung auch bei Extrem-Müll, fachgerechte Mülltrennung, Festpreis.",
  h1: "Messie-Wohnung räumen in Landsberg am Lech und Augsburg – diskret und respektvoll",
  intro:
    "Eine stark vermüllte Wohnung ist für Betroffene, Angehörige und Vermieter eine Belastung. Wir räumen diskret, ohne Vorwürfe und ohne Aufsehen in der Nachbarschaft – komplett, sortiert und fachgerecht entsorgt. Danach ist die Wohnung bereit für Reinigung und Renovierung.",
  hero: "sperrmuell",
  preselect: ["entruempelung"],
  services: {
    h2: "Unsere Messie-Entrümpelung",
    intro:
      "Bei einer Spezialentrümpelung geht es um mehr als Möbel tragen. Wir arbeiten mit Schutzausrüstung, in Ruhe und so, dass die Würde der Bewohner gewahrt bleibt.",
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
        text: "Wir räumen die Wohnung vollständig – auch bei Extrem-Müll, verdorbenen Lebensmitteln und zugestellten Räumen bis unter die Decke.",
      },
      {
        h3: "Fachgerechte Mülltrennung",
        text: "Restmüll, Wertstoffe, Elektroaltgeräte und Sperrmüll trennen wir und entsorgen sie über zugelassene Entsorger.",
      },
      {
        h3: "Vorbereitung für Reinigung",
        text: "Am Ende ist die Wohnung leer und besenrein – bereit für Grundreinigung, Geruchsneutralisation und Renovierung. Wie es danach weitergeht, besprechen wir bei der Besichtigung.",
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
      { title: "Festpreis", text: "Sie erhalten ein verbindliches Angebot – keine Überraschungen, auch nicht bei Extrem-Müll." },
      { title: "Räumung und Übergabe", text: "Wir räumen diskret, trennen und entsorgen fachgerecht und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Diskret", text: "Kein Aufsehen in der Nachbarschaft und Stillschweigen über das, was wir sehen." },
      { title: "Erfahren", text: "Über 270 Projekte in der Region – auch schwierige Räumungen gehören dazu." },
      { title: "Ein Festpreis", text: "Der Preis steht nach der Besichtigung fest, inklusive Abtransport und Entsorgung." },
    ],
  },
  local: {
    h2: "Messie-Entrümpelung in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Wir räumen Messie-Wohnungen ${region} – von unseren Standorten in Landsberg am Lech und Vilgertshofen aus.`,
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
      a: "Was wir beim Räumen finden – Papiere, Fotos, Schmuck, Bargeld – legen wir beiseite und übergeben es Ihnen.",
    },
    {
      q: "Reinigen Sie die Wohnung auch?",
      a: "Wir übergeben die Wohnung leer und besenrein, vorbereitet für Grundreinigung und Geruchsneutralisation. Wie die Reinigung danach erfolgt, klären wir bei der Besichtigung.",
    },
  ],
};

export const containerdienst: SubPage = {
  path: "/containerdienst/",
  name: "Containerdienst",
  title: "Containerdienst in Landsberg am Lech – Container mieten | J&L Bauprojekte",
  description:
    "Container mieten in Landsberg am Lech, Augsburg und im Allgäu: Container für Bauschutt, Sperrmüll und Mischabfall, flexible Stell- und Abholzeiten, transparente Festpreise inklusive Entsorgung.",
  h1: "Containerdienst in Landsberg am Lech und Augsburg – Container mieten zum Festpreis",
  intro:
    "Bauschutt entsorgen, Sperrmüll loswerden oder Mischabfall von der Baustelle: Wir organisieren den passenden Container über unsere Partner aus der Region – gestellt und abgeholt zum vereinbarten Termin, der Inhalt fachgerecht entsorgt. Der Preis steht vorher fest – inklusive Stellung, Abholung und Entsorgung.",
  hero: "abbruch",
  preselect: ["containerdienst"],
  services: {
    h2: "Container für jeden Abfall",
    intro:
      "Welcher Container passt, hängt von Abfallart und Menge ab. Wir beraten Sie vorher, damit Sie weder zu viel bezahlen noch nachbestellen müssen.",
    items: [
      {
        h3: "Bauschutt-Container",
        text: "Für Ziegel, Beton, Fliesen, Mörtel und Steine aus Abbruch oder Umbau. Sauberer Bauschutt wird günstiger entsorgt – wir sagen Ihnen, was hinein darf.",
      },
      {
        h3: "Sperrmüll-Container",
        text: "Für Möbel, Matratzen, Teppiche und Hausrat bei Entrümpelung, Umzug oder Haushaltsauflösung.",
      },
      {
        h3: "Mischabfall-Container",
        text: "Für gemischte Bau- und Gewerbeabfälle, wenn die Trennung vor Ort nicht möglich ist.",
      },
      {
        h3: "Passende Containergröße",
        text: "Vom kleinen Container für die Kellerentrümpelung bis zur großen Mulde für den Umbau. Welche Größe passt, klären wir anhand von Fotos oder bei der Besichtigung.",
      },
      {
        h3: "Flexible Stell- und Abholzeiten",
        text: "Der Container kommt zu Ihrem Wunschtermin und wird abgeholt, sobald er voll ist – oder zum vereinbarten Tag.",
      },
      {
        h3: "Transparente Preise",
        text: "Ein Festpreis für Stellung, Mietzeit, Abholung und Entsorgung. Keine versteckten Zuschläge.",
      },
    ],
  },
  occasions: {
    h2: "Wofür Sie einen Container brauchen",
    items: [
      { h3: "Umbau und Sanierung", text: "Bauschutt aus Abbruch und Entkernung direkt vor Ort entsorgen." },
      { h3: "Entrümpelung", text: "Keller, Dachboden oder ganze Wohnungen räumen, ohne zehnmal zum Wertstoffhof zu fahren." },
      { h3: "Haushaltsauflösung", text: "Sperrmüll aus dem ganzen Haushalt auf einmal loswerden." },
      { h3: "Gewerbe", text: "Gewerbeabfall und alte Einrichtung bei Umzug oder Betriebsauflösung." },
      { h3: "Abriss im Garten", text: "Gartenhaus, Schuppen oder Carport abbrechen und den Schutt gleich abfahren." },
      { h3: "Renovierung", text: "Alte Böden, Fliesen und Verkleidungen sammeln, solange renoviert wird." },
    ],
  },
  checklist: {
    h2: "Was in welchen Container darf",
    intro: "Die wichtigsten Regeln für die Abfallentsorgung:",
    items: [
      "Bauschutt: Beton, Ziegel, Fliesen, Steine",
      "Sperrmüll: Möbel, Matratzen, Teppiche",
      "Mischabfall: gemischte Bau- und Gewerbeabfälle",
      "Holz: unbehandeltes und behandeltes Holz getrennt",
      "Nicht hinein: Farben, Lacke, Öle, Batterien",
      "Nicht hinein: Asbest und alte Mineralwolle",
      "Nicht hinein: Elektroaltgeräte",
      "Im Zweifel vorher fragen",
    ],
  },
  steps: {
    h2: "So einfach mieten Sie einen Container",
    items: [
      { title: "Anfrage", text: "Abfallart, ungefähre Menge, Adresse und Wunschtermin nennen – gern mit Fotos." },
      { title: "Festpreis", text: "Wir empfehlen die passende Größe und nennen Ihnen den Festpreis inklusive Entsorgung." },
      { title: "Stellung", text: "Der Container wird zum Wunschtermin gestellt. Steht er auf öffentlichem Grund, sagen wir Ihnen, welche Genehmigung nötig ist." },
      { title: "Abholung und Entsorgung", text: "Der Container wird abgeholt und fachgerecht über zugelassene Anlagen entsorgt." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Auf Wunsch füllen wir den Container auch selbst – bei Entrümpelung, Abbruch oder Entkernung." },
      { title: "Flexibel", text: "Stell- und Abholtermine richten sich nach Ihrem Projekt, nicht nach unserem Fahrplan." },
      { title: "Festpreis", text: "Was im Angebot steht, gilt – inklusive Entsorgung." },
    ],
  },
  local: {
    h2: "Container mieten in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Unseren Containerdienst bieten wir ${region} an – von unseren Standorten in Landsberg am Lech und Vilgertshofen aus.`,
      "Ob Muldendienst für die Baustelle in Kaufering, Sperrmüll-Container für die Haushaltsauflösung in Augsburg oder Bauschutt-Container im Allgäu: Rufen Sie an, wir nennen Ihnen Größe, Termin und Preis.",
    ],
  },
  faqs: [
    {
      q: "Was kostet es, einen Container zu mieten?",
      a: "Das hängt von Größe, Abfallart und Mietdauer ab. Sie erhalten vorab einen Festpreis inklusive Stellung, Abholung und Entsorgung.",
    },
    {
      q: "Welche Containergröße brauche ich?",
      a: "Schicken Sie uns Fotos oder beschreiben Sie Abfallart und Menge. Wir empfehlen die Größe, die passt – ohne Reserve, die Sie bezahlen müssen.",
    },
    {
      q: "Brauche ich eine Genehmigung für den Container?",
      a: "Auf Ihrem Grundstück nicht. Auf öffentlichem Grund braucht es meist eine Erlaubnis der Gemeinde. Wir sagen Ihnen, was in Ihrem Fall zu tun ist.",
    },
    {
      q: "Darf Asbest in den Bauschutt-Container?",
      a: "Nein. Asbest und alte Mineralwolle müssen getrennt verpackt und gesondert entsorgt werden. Das übernehmen wir mit Sachkunde nach TRGS 519.",
    },
    {
      q: "Wie lange darf der Container stehen?",
      a: "Die Mietdauer legen wir mit Ihnen fest. Ist er früher voll, wird er früher abgeholt.",
    },
  ],
};

export const wanddurchbruch: SubPage = {
  path: "/wanddurchbruch/",
  name: "Wanddurchbruch & Stahlträger",
  title: "Wanddurchbruch & tragende Wand entfernen in Landsberg | J&L Bauprojekte",
  description:
    "Wanddurchbruch in Landsberg am Lech, Augsburg und im Allgäu: tragende Wand entfernen mit Statiker, Stahlträger und Sturz einbauen, Grundrissänderung im Altbau – staubarm, inklusive Bauschutt-Entsorgung.",
  h1: "Wanddurchbruch in Landsberg am Lech – tragende Wände öffnen, Stahlträger einbauen",
  intro:
    "Offene Küche, größeres Wohnzimmer, neue Tür: Mit einem Wanddurchbruch ändern Sie den Grundriss Ihres Hauses. Wir öffnen nichttragende Wände sauber und tragende Wände nur mit statischer Absicherung – mit Stahlträger oder Sturz, staubarm und inklusive Abtransport des Bauschutts.",
  hero: "entkernung",
  preselect: ["abbruch"],
  services: {
    h2: "Unsere Leistungen rund um den Wanddurchbruch",
    intro:
      "Ob ein neuer Türdurchgang oder die komplette Grundrissänderung: Entscheidend ist, ob die Wand trägt. Danach richtet sich jeder Schritt.",
    items: [
      {
        h3: "Nichttragende Wand entfernen",
        text: "Leichte Trennwände und nichttragende Mauern brechen wir ab oder öffnen sie für einen Durchgang – sauber geschnitten, Kanten vorbereitet für Putz und Zarge.",
      },
      {
        h3: "Tragende Wand entfernen",
        text: "Tragende Wände öffnen wir nur nach der Berechnung eines Statikers. Er legt fest, wie die Last abgefangen wird – erst dann fangen wir ab und brechen durch.",
      },
      {
        h3: "Stahlträger einbauen",
        text: "Bei größeren Öffnungen in tragenden Wänden übernimmt ein Stahlträger die Last. Wir sichern die Decke ab, setzen den Träger nach Vorgabe der Statik und mauern die Auflager.",
      },
      {
        h3: "Sturz einbauen",
        text: "Für Tür- und Fensteröffnungen setzen wir einen Sturz als Abfangung – passend zur Wand und zur Öffnungsbreite.",
      },
      {
        h3: "Staubschutz",
        text: "Wir schotten den Arbeitsbereich mit Staubschutzwänden ab, schützen Böden und arbeiten mit Absaugung – damit der Rest des Hauses bewohnbar bleibt.",
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
      { h3: "Offene Küche", text: "Küche und Wohnzimmer verbinden – der häufigste Wunsch bei der Altbausanierung." },
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
      { title: "Statik", text: "Bei tragenden Wänden berechnet ein Statiker die Abfangung – etwa Stahlträger oder Sturz." },
      { title: "Festpreis", text: "Sie erhalten ein verbindliches Angebot inklusive Staubschutz und Entsorgung." },
      { title: "Durchbruch und Übergabe", text: "Wir sichern ab, brechen durch, setzen den Träger und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Sicher", text: "Tragende Wände nur mit Statiker – keine Experimente an Ihrem Haus." },
      { title: "Sauber", text: "Staubschutz, Bodenschutz und Absaugung, damit der Rest des Hauses bewohnbar bleibt." },
      { title: "Aus einer Hand", text: "Durchbruch, Entsorgung und auf Wunsch der neue Boden – ein Ansprechpartner." },
    ],
  },
  local: {
    h2: "Wanddurchbruch in Landsberg, Augsburg und Umgebung",
    paragraphs: [
      `Wanddurchbrüche übernehmen wir ${region} – im Altbau in der Landsberger Innenstadt genauso wie im Reihenhaus in Kaufering oder im Einfamilienhaus im Allgäu.`,
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
      a: "Hinweise sind Dicke, Material und Lage der Wand – etwa unter einem Deckenbalken oder einer Wand im Stockwerk darüber. Sicher sagt es erst die Prüfung vor Ort.",
    },
    {
      q: "Was kostet ein Wanddurchbruch?",
      a: "Das hängt von Wandart, Öffnungsbreite und Statik ab. Nach der Besichtigung erhalten Sie einen Festpreis inklusive Staubschutz und Entsorgung.",
    },
    {
      q: "Wie viel Staub entsteht?",
      a: "Durch Staubschutzwände, Absaugung und Bodenschutz bleibt der Staub weitgehend im Arbeitsbereich.",
    },
    {
      q: "Wie lange dauert ein Wanddurchbruch?",
      a: "Ein einfacher Durchgang in einer nichttragenden Wand ist oft an einem Tag erledigt. Mit Stahlträger planen wir mehr Zeit ein – den Zeitplan erhalten Sie mit dem Angebot.",
    },
  ],
};
