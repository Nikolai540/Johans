import type { ServiceId } from "./content";

// Ab-Preise für die Seite /preise/, Endkundenpreise inklusive 19 % MwSt. Hier ändern, die Seite übernimmt alles.
// Namen und Reihenfolge kommen aus lib/content.ts (services, serviceOrder).
// PLATZHALTER: Richtwerte für die Region Landsberg am Lech / Oberbayern 2026, mit dem Inhaber abstimmen.
export const prices: Partial<Record<ServiceId, { from: number; unit: string; note?: string }>> = {
  entruempelung: { from: 45, unit: "pro m³", note: "Räumen, Abtransport und Entsorgung" },
  haushaltsaufloesung: { from: 25, unit: "pro m² Wohnfläche", note: "Ganze Wohnung, besenrein übergeben" },
  entkernung: { from: 45, unit: "pro m² Wohnfläche", note: "Bis auf den Rohbau, inklusive Entsorgung" },
  abbruch: { from: 50, unit: "pro m² Wandfläche", note: "Nichttragende Wände, Fliesen, Estrich" },
  rueckbau: { from: 35, unit: "pro m²", note: "Innenausbau wie Decken, Verkleidungen, Trockenbau" },
  schadstoffsanierung: { from: 65, unit: "pro m²", note: "Asbest nach TRGS 519, mit Entsorgungsnachweis" },
  renovierung: { from: 25, unit: "pro m² Wand- und Deckenfläche", note: "Spachteln und Streichen" },
  trockenbau: { from: 55, unit: "pro m² Wandfläche", note: "Ständerwand, beidseitig beplankt, streichfertig" },
  bodenverlegung: { from: 25, unit: "pro m²", note: "Laminat oder Vinyl verlegen, Belag zuzüglich" },
  umzug: { from: 490, unit: "pauschal", note: "Zwei Helfer mit Transporter, im Landkreis" },
  "Container & Entsorgung": { from: 390, unit: "pauschal", note: "5-m³-Container Bauschutt mit Stellen, Abholen und Entsorgung" },
};

export const euro = (n: number) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
