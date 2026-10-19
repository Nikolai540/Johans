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
  services: { h2: string; intro: string; items: { h3: string; text: string }[] };
  occasions: { h2: string; items: { h3: string; text: string }[] };
  checklist: { h2: string; intro: string; items: string[] };
  steps: { h2: string; items: { title: string; text: string }[] };
  benefits: { h2: string; items: { title: string; text: string }[] };
  local: { h2: string; paragraphs: string[] };
  faqs: { q: string; a: string }[];
};

export const entkernung: SubPage = {
  path: pages.entkernung.href,
  name: pages.entkernung.full,
  title: "Entkernung, Abbruch & Rückbau in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entkernung, Rückbau, Wanddurchbrüche und kleinere Abbrucharbeiten in Landsberg am Lech, Kaufering, Buchloe und am Ammersee. Festpreis nach Besichtigung, Entsorgung inklusive.",
  h1: "Entkernung, Abbruch & Rückbau in Landsberg am Lech",
  intro:
    "Wir schaffen Platz für Ihre Sanierung: J&L Bauprojekte entkernt Wohnungen und Häuser, baut Bauteile zurück und übernimmt kleinere Abbrucharbeiten – sortenrein getrennt, fachgerecht entsorgt und besenrein übergeben.",
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
        text: "Gartenhäuser, Schuppen, kleine Nebengebäude und einzelne Wände brechen wir ab und entsorgen den Bauschutt. Komplette Hausabrisse übernehmen wir nicht – hier vermitteln wir Ihnen bei Bedarf einen passenden Fachbetrieb.",
      },
      {
        h3: "Entsorgung aus einer Hand",
        text: "Container stellen, Bauschutt, Holz, Metall, Gips und Restmüll sortenrein trennen und fachgerecht entsorgen: Sie haben keinen zusätzlichen Aufwand und erhalten die Räume besenrein zurück.",
      },
    ],
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
      "Von unseren Standorten in Landsberg am Lech und Vilgertshofen aus sind wir im gesamten Landkreis Landsberg am Lech im Einsatz: in der Landsberger Altstadt genauso wie in Kaufering, Penzing, Igling, Fuchstal, Denklingen, Windach und Geltendorf.",
      "Auch am Ammersee – in Dießen, Utting und Schondorf – sowie in Buchloe übernehmen wir Entkernung, Rückbau, Wanddurchbrüche und kleinere Abbrucharbeiten. Ihr Ort fehlt? Rufen Sie einfach an.",
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
      a: "Nein. Wir übernehmen kleinere Abbrucharbeiten wie Gartenhäuser, Schuppen, Nebengebäude und einzelne Wände. Für komplette Hausabrisse vermitteln wir Ihnen gern einen passenden Fachbetrieb.",
    },
    {
      q: "Was kostet eine Entkernung?",
      a: "Das hängt von Fläche, Materialien, Zugänglichkeit und Entsorgungsmenge ab. Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis – ohne spätere Nachforderung.",
    },
    {
      q: "Wer kümmert sich um Container und Entsorgung?",
      a: "Das übernehmen wir vollständig: Container stellen, Bauschutt und Wertstoffe sortenrein trennen und fachgerecht entsorgen.",
    },
  ],
};

export const entruempelung: SubPage = {
  path: pages.entruempelung.href,
  name: pages.entruempelung.full,
  title: "Entrümpelung & Haushaltsauflösung in Landsberg am Lech | J&L Bauprojekte",
  description:
    "Entrümpelung, Haushaltsauflösung, Wohnungs- und Nachlassauflösung in Landsberg am Lech und Umgebung. Festpreis, Container und Entsorgung inklusive, besenreine Übergabe.",
  h1: "Entrümpelung & Haushaltsauflösung in Landsberg am Lech",
  intro:
    "Wir räumen Wohnungen, Häuser, Keller, Dachböden und Garagen – diskret, termingerecht und zum vorher vereinbarten Festpreis. Container, Abtransport und Entsorgung übernehmen wir selbst.",
  hero: "sperrmuell",
  preselect: ["entruempelung", "haushaltsaufloesung"],
  services: {
    h2: "Wenn ein Haushalt aufgelöst werden muss",
    intro:
      "Eine Haushaltsauflösung kommt selten geplant. Wir nehmen Ihnen die Arbeit ab – vom ersten Gespräch bis zur besenreinen Übergabe der Räume in Landsberg am Lech und Umgebung.",
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
      "Wir entrümpeln und lösen Haushalte im gesamten Landkreis Landsberg am Lech auf – von unseren Standorten in Landsberg (Max-Planck-Straße 13) und Vilgertshofen aus, in Landsberg, Kaufering, Penzing, Igling, Fuchstal, Denklingen, Windach und Geltendorf.",
      "Auch am Ammersee in Dießen, Utting und Schondorf sowie in Buchloe sind wir für Wohnungsauflösungen, Haushaltsauflösungen und Kellerentrümpelungen unterwegs. Weiter entfernte Objekte können Sie gern anfragen.",
    ],
  },
  faqs: [
    {
      q: "In welchem Umkreis arbeiten Sie?",
      a: "Wir sind im Landkreis Landsberg am Lech und in den angrenzenden Gemeinden im Einsatz, unter anderem in Kaufering, Buchloe und am Ammersee. Auch weiter entfernte Objekte können Sie anfragen.",
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
