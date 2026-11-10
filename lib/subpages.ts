import type { ServiceId } from "./content";
import type { PhotoKey } from "./images";
import { pages } from "./site";

/** Maße in cm sind Richtwerte und dienen nur der maßstäblichen Zeichnung */
export type ContainerSize = {
  volume: string;
  kind: "Absetzcontainer" | "Abrollcontainer";
  use: string;
  length: number;
  /** Bodenlänge, nur beim Absetzcontainer mit schrägen Stirnseiten */
  base?: number;
  height: number;
};

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
  services: { h2: string; intro: string; items: { h3: string; text: string; id?: string; points?: string[]; link?: { href: string; label: string } }[] };
  /** Containergrößen als Grafik, zwischen Leistungen und Anlässen */
  sizes?: { h2: string; intro: string; items: ContainerSize[] };
  occasions: { h2: string; items: { h3: string; text: string }[] };
  checklist: { h2: string; intro: string; items: string[] };
  steps: { h2: string; items: { title: string; text: string }[] };
  benefits: { h2: string; items: { title: string; text: string }[] };
  local: { h2: string; paragraphs: string[] };
  faqs: { q: string; a: string }[];
  /** Spezialseiten zu diesem Bereich, verlinkt im Abschnitt "Lokal" */
  related?: { href: string; label: string }[];
};

export const entkernung: SubPage = {
  path: pages.entkernung.href,
  name: pages.entkernung.full,
  title: "Entkernung, Abbruch & Rückbau in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entkernung bis auf den Rohbau, Abbruch und Rückbau in Landsberg am Lech, Kaufering, Buchloe, Augsburg und im Allgäu. Sortenrein entsorgt, besenrein übergeben, Festpreis nach Besichtigung.",
  h1: "Entkernung, Abbruch & Rückbau in Landsberg am Lech",
  intro:
    "Bevor saniert wird, muss das Alte raus. Wir entkernen Wohnungen und Häuser, bauen Bauteile kontrolliert zurück und übernehmen kleinere Abbrucharbeiten. Den Schutt trennen und entsorgen wir selbst, übergeben wird besenrein.",
  hero: "entkernung",
  preselect: ["entkernung"],
  related: [{ href: "/wanddurchbruch/", label: "Wanddurchbruch & Stahlträger" }],
  services: {
    h2: "Unsere Leistungen rund um Entkernung und Rückbau",
    intro:
      "Kernsanierung im Altbau, neues Bad oder Umbau vor dem Einzug: Wir holen raus, was weg muss, und hinterlassen die Räume so, dass die nächsten Handwerker sofort anfangen können.",
    items: [
      {
        h3: "Entkernung von Wohnungen und Häusern",
        text: "Bodenbeläge, Fliesen, Verkleidungen an Wand und Decke, Küche, Bad und nichttragende Bauteile kommen raus, bis der Rohbau frei liegt. Damit kann die Kernsanierung in Landsberg am Lech direkt starten.",
      },
      {
        h3: "Demontage von Einbauten",
        text: "Heizkörper, Türen und Zargen, Einbauschränke, Küchenzeilen und Möbel bauen wir ab und fahren sie weg. Was Sie wiederverwenden wollen, bauen wir vorsichtig aus.",
      },
      {
        h3: "Fliesen- und Bodenabbruch",
        text: "Fliesen, Estrich, Laminat, Parkett, Teppich und PVC, samt Kleber- und Spachtelresten. Danach ist der Untergrund bereit für neuen Estrich, Fußbodenheizung oder neuen Belag.",
      },
      {
        h3: "Rückbau von Bauteilen und Innenausbau",
        text: "Wir bauen einzelne Bauteile oder den ganzen Innenausbau zurück, zum Beispiel vor Umbau, Mieterwechsel oder bevor Elektriker, Installateur und Trockenbauer kommen. Schritt für Schritt, ohne den Bestand zu beschädigen.",
      },
      {
        h3: "Wanddurchbrüche und tragende Wände",
        text: "Für neue Türen und Durchgänge brechen wir Wände durch. Tragende Wände öffnen wir nur mit einem Statiker, der die Abfangung festlegt, etwa mit einem Stahlträger.",
        link: { href: "/wanddurchbruch/", label: "Alles zum Wanddurchbruch" },
      },
      {
        h3: "Kleinere Abbrucharbeiten",
        text: "Gartenhäuser, Schuppen, kleine Nebengebäude und einzelne Wände brechen wir ab und entsorgen den Bauschutt. Komplette Hausabrisse übernehmen wir nicht.",
      },
      {
        h3: "Entsorgung aus einer Hand",
        text: "Wir stellen den Container, trennen Bauschutt, Holz, Metall, Gips und Restmüll und entsorgen alles fachgerecht. Sie haben damit keine Arbeit und bekommen die Räume besenrein zurück.",
        link: { href: "/containerdienst/", label: "Alles zu Container & Entsorgung" },
      },
      {
        id: "schadstoffsanierung",
        h3: "Asbest und alte Mineralwolle",
        text: "Steckt Asbest oder alte Mineralwolle im Bestand, bauen wir sie mit Sachkunde nach TRGS 519 aus. Schutzmaßnahmen und Entsorgungsnachweis gehören dazu. Verdächtige Baustoffe sprechen wir schon bei der Besichtigung an.",
        link: { href: pages.schadstoffe.href, label: "Alles zur Schadstoffsanierung" },
      },
    ],
  },
  occasions: {
    h2: "Wann eine Entkernung sinnvoll ist",
    items: [
      { h3: "Kernsanierung im Altbau", text: "Vor der energetischen oder vollständigen Sanierung wird das Gebäude bis auf den Rohbau freigelegt." },
      { h3: "Bad- und Küchensanierung", text: "Fliesen, Sanitärobjekte und Küchenzeile raus, damit Installateur und Fliesenleger direkt loslegen können." },
      { h3: "Mieterwechsel und Renovierung", text: "Alte Böden, Verkleidungen und Einbauten entfernen, damit die Wohnung schnell wieder vermietet werden kann." },
      { h3: "Umbau und neue Raumaufteilung", text: "Wände versetzen, Durchbrüche schaffen, Räume zusammenlegen. Wo nötig mit Statiker." },
      { h3: "Nach dem Kauf einer Bestandsimmobilie", text: "Bevor Sie einziehen, machen wir Platz für Ihre eigenen Pläne, im Einfamilienhaus wie in der Eigentumswohnung." },
      { h3: "Vorbereitung für Handwerker", text: "Wir machen den Weg frei für Elektro, Sanitär, Heizung und Trockenbau, damit niemand warten muss." },
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
      { title: "Anfrage", text: "Sie sagen uns kurz, was ansteht und wann. Per Telefon, WhatsApp oder Formular." },
      { title: "Besichtigung vor Ort", text: "Wir sehen uns Umfang, Materialien und Zugang an und klären, was entsorgt werden muss." },
      { title: "Angebot mit Festpreis", text: "Sie bekommen ein schriftliches Angebot mit festem Preis und Termin. Nachforderungen gibt es nicht." },
      { title: "Ausführung und Übergabe", text: "Wir entkernen, trennen und entsorgen fachgerecht und übergeben die Räume besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Entkernen, trennen, entsorgen: ein Ansprechpartner, keine Abstimmung zwischen mehreren Firmen." },
      { title: "Schnelle Termine", text: "Besichtigung meist kurzfristig, die Ausführung oft innerhalb weniger Tage." },
      { title: "Klare Kosten", text: "Der Preis wird vorab festgelegt. Was im Angebot steht, gilt." },
    ],
  },
  local: {
    h2: "Entkernung und Rückbau in Landsberg und Umgebung",
    paragraphs: [
      "Unsere Standorte sind Landsberg am Lech und Vilgertshofen. Von dort fahren wir nach Kaufering, Buchloe, in die Ammersee-Region, nach Mindelheim, Augsburg, Schongau und ins Allgäu.",
      "Altbau in der Landsberger Innenstadt, Reihenhaus in Kaufering oder Gewerbeobjekt in Augsburg: Wir übernehmen Entkernung, Rückbau, Wanddurchbrüche, kleinere Abbrucharbeiten und die Asbestsanierung nach TRGS 519. Ihr Ort fehlt? Rufen Sie einfach an.",
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
      a: "Das hängt von Fläche, Material, Zugang und Schuttmenge ab. Nach der Besichtigung bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Wer kümmert sich um Container und Entsorgung?",
      a: "Wir. Container stellen, Bauschutt und Wertstoffe trennen, fachgerecht entsorgen: Das ist alles im Auftrag enthalten.",
    },
    {
      q: "Was passiert, wenn bei der Entkernung Asbest auftaucht?",
      a: "Bei Häusern, die vor 1993 gebaut oder modernisiert wurden, sprechen wir verdächtige Baustoffe schon bei der Besichtigung an. Asbesthaltige Bauteile wie Eternit-Platten bauen wir mit Sachkunde nach TRGS 519 aus und entsorgen sie mit Nachweis.",
    },
  ],
};

export const entruempelung: SubPage = {
  path: pages.entruempelung.href,
  name: pages.entruempelung.full,
  title: "Entrümpelung & Haushaltsauflösung in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entrümpelung und Haushaltsauflösung in Landsberg am Lech, Kaufering, Buchloe, Augsburg, am Ammersee und im Allgäu. Besenreine Übergabe, Festpreis nach Besichtigung.",
  h1: "Entrümpelung & Haushaltsauflösung in Landsberg am Lech",
  intro:
    "Wir räumen Wohnungen, Häuser, Keller, Dachböden und Garagen. Diskret, pünktlich und zum Festpreis, der vorher feststeht. Container, Abtransport und Entsorgung machen wir selbst.",
  hero: "sperrmuell",
  preselect: ["entruempelung", "haushaltsaufloesung"],
  related: [
    { href: "/wohnungsaufloesung/", label: "Wohnungsauflösung" },
    { href: "/nachlassaufloesung/", label: "Nachlassauflösung" },
    { href: "/keller-dachboden-garage-entruempeln/", label: "Keller, Dachboden & Garage" },
    { href: "/gewerbeaufloesung/", label: "Gewerbeauflösung" },
    { href: "/messie-wohnung-entruempeln/", label: "Messie-Wohnung räumen" },
    { href: "/containerdienst/", label: "Container & Entsorgung" },
  ],
  services: {
    h2: "Wenn ein Haushalt aufgelöst werden muss",
    intro:
      "Eine Haushaltsauflösung kommt selten geplant. Wir übernehmen die Arbeit vom ersten Gespräch bis zur besenreinen Übergabe, in Landsberg am Lech und Umgebung. Auf Wunsch renovieren wir danach, verlegen neue Böden oder helfen beim Umzug.",
    items: [
      {
        h3: "Wohnungsauflösung",
        text: "Wir räumen Miet- und Eigentumswohnungen komplett, zum Beispiel vor der Übergabe an den Vermieter. Die Wohnung ist danach leer und besenrein.",
        link: { href: "/wohnungsaufloesung/", label: "Alles zur Wohnungsauflösung" },
      },
      {
        h3: "Haushaltsauflösung",
        text: "Möbel, Küche, Elektrogeräte, Hausrat, Keller und Dachboden: Wir lösen den ganzen Haushalt auf. Sie haben dabei einen festen Ansprechpartner.",
      },
      {
        h3: "Nachlassauflösung nach einem Todesfall",
        text: "Für Erben und Angehörige räumen wir den Nachlass in Ruhe und mit Rücksicht. Was Sie behalten möchten, legen wir vorher gemeinsam fest.",
        link: { href: "/nachlassaufloesung/", label: "Alles zur Nachlassauflösung" },
      },
      {
        h3: "Entrümpelung von Messie-Wohnungen",
        text: "Auch stark vermüllte Wohnungen räumen wir, ohne dass die Nachbarschaft viel mitbekommt. Danach ist alles sortiert, entsorgt und besenrein.",
        link: { href: "/messie-wohnung-entruempeln/", label: "Alles zur Messie-Wohnung" },
      },
      {
        h3: "Keller-, Dachboden- und Garagenentrümpelung",
        text: "Kleine Aufträge nehmen wir gern: einzelne Keller, Dachböden, Garagen, Abstellräume, Gartenhäuser und Schuppen.",
        link: { href: "/keller-dachboden-garage-entruempeln/", label: "Alles zu Keller, Dachboden & Garage" },
      },
      {
        h3: "Gewerbe- und Objekträumung",
        text: "Büros, Lager und Gewerbeflächen räumen wir zum vereinbarten Termin, damit Übergabe oder Umbau pünktlich starten.",
        link: { href: "/gewerbeaufloesung/", label: "Alles zur Gewerbeauflösung" },
      },
    ],
  },
  occasions: {
    h2: "Wann Sie uns rufen",
    items: [
      { h3: "Nach dem Umzug ins Pflegeheim", text: "Wenn Eltern oder Angehörige in ein Heim ziehen, räumen wir die bisherige Wohnung vollständig." },
      { h3: "Im Erbfall", text: "Wir übernehmen die Nachlassauflösung, auch wenn Sie weiter weg wohnen. Abgestimmt wird per Telefon oder WhatsApp." },
      { h3: "Vor Verkauf oder Vermietung", text: "Leere, besenreine Räume braucht es für Besichtigungen, Verkauf und neue Mieter." },
      { h3: "Vor einer Sanierung", text: "Erst räumen, dann entkernen. Beides machen wir auf Wunsch nacheinander." },
      { h3: "Nach dem eigenen Umzug", text: "Was nicht mit in die neue Wohnung soll, holen wir ab und entsorgen es fachgerecht." },
      { h3: "Wenn es einfach zu viel wird", text: "Volle Keller, Dachböden und Garagen räumen wir schnell und ohne Aufwand für Sie." },
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
      { title: "Besichtigung oder Fotos", text: "Wir kommen vorbei, oder Sie schicken Fotos per WhatsApp für eine schnelle Einschätzung." },
      { title: "Umfang besprechen", text: "Gemeinsam legen wir fest, was geräumt wird und was bleiben soll." },
      { title: "Angebot mit Festpreis", text: "Sie bekommen ein verbindliches Angebot. Der Preis steht vorher fest." },
      { title: "Termin vereinbaren", text: "Wir planen die Räumung zu Ihrem Wunschtermin, oft schon innerhalb weniger Tage." },
      { title: "Räumung und Abtransport", text: "Wir räumen zügig und sorgen für Container und Abtransport." },
      { title: "Sortierung und Entsorgung", text: "Holz, Metall, Elektrogeräte und Restmüll werden getrennt und fachgerecht entsorgt." },
      { title: "Besenreine Übergabe", text: "Sie erhalten die geräumten Räume besenrein zurück." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Räumen, entkernen, trennen und entsorgen mit einem Ansprechpartner." },
      { title: "Schnelle Termine", text: "Oft innerhalb weniger Tage, auch wenn es vor einer Wohnungsübergabe eilt." },
      { title: "Klare Kosten", text: "Der Preis steht vorher fest. Nachforderungen gibt es nicht." },
    ],
  },
  local: {
    h2: "Entrümpelung in Landsberg am Lech und Umgebung",
    paragraphs: [
      "Von Landsberg am Lech (Max-Planck-Straße 13) und Vilgertshofen aus entrümpeln wir und lösen Haushalte auf. Wir fahren nach Kaufering, Buchloe, in die Ammersee-Region, nach Mindelheim, Augsburg, Schongau und ins Allgäu.",
      "Kellerabteil in Kaufering, Elternhaus am Ammersee oder Mietwohnung in Augsburg: Wir räumen, sortieren und übergeben besenrein. Ihr Ort fehlt? Rufen Sie an, wir sagen Ihnen gleich, ob wir kommen.",
    ],
  },
  faqs: [
    {
      q: "In welchem Umkreis arbeiten Sie?",
      a: "Wir sind in Landsberg am Lech und Kaufering, in Buchloe, in der Ammersee-Region, in Mindelheim, Augsburg, Schongau und im Allgäu im Einsatz. Ihr Ort ist nicht dabei? Fragen Sie gern nach.",
    },
    {
      q: "Was kostet eine Entrümpelung?",
      a: "Der Preis hängt von Menge, Zugang und Entsorgung ab. Nach einer Besichtigung oder anhand von Fotos bekommen Sie einen verbindlichen Festpreis.",
    },
    {
      q: "Wie schnell bekomme ich einen Termin?",
      a: "Eine Besichtigung geht meist kurzfristig. Der Räumtermin hängt von Umfang und Auslastung ab, oft sind es nur wenige Tage.",
    },
    {
      q: "Übernehmen Sie auch kleine Aufträge?",
      a: "Ja. Auch einzelne Keller, Garagen, Dachböden oder Gartenhäuser räumen wir gern.",
    },
    {
      q: "Wer kümmert sich um Container und Entsorgung?",
      a: "Wir. Container, Abtransport, Sortieren und fachgerechte Entsorgung sind im Auftrag enthalten.",
    },
    {
      q: "Muss ich bei der Räumung anwesend sein?",
      a: "Nein. Nach Besichtigung und Schlüsselübergabe räumen wir allein und stimmen uns per Telefon oder WhatsApp mit Ihnen ab.",
    },
  ],
};

// Umzüge und Klebevinyl bewusst vorsichtig formuliert: Umfang, Fahrzeuge und Verlegeart werden bei der Besichtigung geklärt.
export const renovierung: SubPage = {
  path: pages.renovierung.href,
  name: pages.renovierung.full,
  title: "Renovierung in Landsberg am Lech: Trockenbau, Boden & Umzug | J&L Bauprojekte",
  description:
    "Renovierung aus einer Hand: Trockenbau, Laminat- und Vinylböden, Umzüge. In Landsberg am Lech, Kaufering, Buchloe, Augsburg, am Ammersee und im Allgäu, Festpreis nach Besichtigung.",
  h1: "Renovierung in Landsberg am Lech: Trockenbau, Böden & Umzug aus einer Hand",
  intro:
    "Vor dem Einzug, nach dem Auszug der Mieter oder vor dem Verkauf: Wir bringen Wohnungen und Häuser wieder in Schuss. Mit neuen Wänden und Decken im Trockenbau, Laminat- und Vinylböden und auf Wunsch dem Umzug. Den Festpreis bekommen Sie nach der kostenlosen Besichtigung.",
  hero: "trockenbau",
  preselect: ["renovierung"],
  services: {
    h2: "Unsere Leistungen in der Renovierung",
    intro:
      "Wände, Decken, Böden und bei Bedarf der Umzug. Sie können einzeln beauftragen oder alles zusammen, mit einem Ansprechpartner und einem Zeitplan.",
    items: [
      {
        id: "trockenbau",
        h3: "Trockenbau: neue Räume, schnell und sauber",
        text: "Mit Trockenbau ändern Sie Räume ohne großen Dreck: neue Wände, abgehängte Decken, Vorsatzschalen für Leitungen und Dämmung oder ein ausgebautes Dachgeschoss. Wir bauen vom Ständerwerk bis zur streichfertig gespachtelten Fläche.",
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
        text: "Nichts verändert einen Raum so schnell wie ein neuer Boden. Wir reißen den alten Belag raus und verlegen Laminat oder Vinyl mit Trittschalldämmung, Sockelleisten und Übergangsprofilen. Welche Verlegeart zum Untergrund passt, klären wir bei der Besichtigung. Beläge von vor 1993 prüfen wir vorher auf Asbestverdacht.",
        points: ["Laminat", "Vinyl", "Alten Belag entfernen", "Trittschalldämmung, Sockelleisten, Übergangsprofile"],
      },
      {
        id: "umzuege",
        h3: "Umzüge: ein Team für Räumen, Transport und Aufbau",
        text: "Wenn sowieso geräumt oder renoviert wird, nehmen wir den Umzug gleich mit. Wir bauen Möbel ab und wieder auf, transportieren und entsorgen, was nicht mitsoll. Den genauen Umfang besprechen wir bei der Besichtigung.",
        points: [
          "Möbel ab- und aufbauen",
          "Transport in der Region",
          "Kombiniert mit Entrümpelung und Renovierung",
          "Besenreine Übergabe der alten Wohnung",
        ],
      },
      {
        h3: "Vorher: Platz schaffen",
        text: "Vor der Renovierung muss oft erst etwas raus: alte Böden, Verkleidungen, Einbauten oder ein ganzer Hausrat. Entrümpelung und Entkernung übernehmen wir gleich mit.",
      },
    ],
  },
  occasions: {
    h2: "Wann sich eine Renovierung lohnt",
    items: [
      { h3: "Vor dem Einzug", text: "Nach dem Kauf einer Bestandsimmobilie machen wir die Räume bezugsfertig, bevor die Möbel kommen." },
      { h3: "Nach dem Mieterwechsel", text: "Neuer Boden, glatte Wände: Die Wohnung ist schnell wieder vermietbar." },
      { h3: "Vor dem Verkauf", text: "Frische Böden und saubere Wände machen Besichtigungen leichter." },
      { h3: "Neue Raumaufteilung", text: "Aus einem großen Raum werden zwei oder umgekehrt. Mit Trockenbau geht das ohne viel Schmutz." },
      { h3: "Dachgeschoss ausbauen", text: "Aus dem ungenutzten Dachboden wird Wohnraum, mit Trockenbau und neuem Boden." },
      { h3: "Umzug in eine kleinere Wohnung", text: "Räumung, Umzug und Renovierung der alten Wohnung aus einer Hand, auch beim Umzug ins Pflegeheim." },
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
      { title: "Festpreis und Termin", text: "Sie bekommen ein verbindliches Angebot und einen festen Starttermin." },
      { title: "Ausführung und Übergabe", text: "Wir arbeiten sauber und übergeben besenrein." },
    ],
  },
  benefits: {
    h2: "Was für J&L Bauprojekte spricht",
    items: [
      { title: "Alles aus einer Hand", text: "Entrümpelung, Entkernung, Renovierung und Umzug über einen Ansprechpartner." },
      { title: "Festpreis nach Besichtigung", text: "Was im Angebot steht, gilt. Nachforderungen gibt es nicht." },
      { title: "Termintreu und sauber", text: "Wir nennen einen Termin, halten ihn und übergeben besenrein, fertig für Einzug oder Verkauf." },
    ],
  },
  local: {
    h2: "Renovierung in Landsberg am Lech und Umgebung",
    paragraphs: [
      "Von Landsberg am Lech und Vilgertshofen aus renovieren wir in Kaufering, Buchloe, der Ammersee-Region, in Mindelheim, Augsburg, Schongau und im Allgäu.",
      "Mietwohnung in Kaufering, Reihenhaus in Buchloe oder Dachgeschoss am Ammersee: Wir übernehmen Trockenbau, Bodenverlegung und auf Wunsch den Umzug. Wenn vorher entrümpelt oder entkernt werden muss, machen wir das auch. Ihr Ort fehlt? Rufen Sie einfach an.",
    ],
  },
  faqs: [
    {
      q: "Verlegen Sie auch Parkett oder Fliesen?",
      a: "Nein. Wir verlegen Laminat und Vinyl, dafür mit allem, was dazugehört: vom Entfernen des alten Belags bis zur letzten Sockelleiste.",
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
      a: "Das hängt von Fläche, Material und Untergrund ab. Nach der kostenlosen Besichtigung bekommen Sie einen verbindlichen Festpreis und einen festen Starttermin.",
    },
    {
      q: "Was passiert mit dem alten Boden?",
      a: "Wir reißen ihn raus und entsorgen ihn fachgerecht. Stammt er von vor 1993, klären wir vorher, ob Asbest drin sein kann.",
    },
  ],
};
