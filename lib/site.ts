// Zentrale Firmendaten (NAP: Name, Adresse, Telefon) – übernommen von jlbauprojekte.de.
// Mit "PLATZHALTER" markierte Werte vor dem Livegang bestätigen bzw. ergänzen.

export const site = {
  name: "J&L Bauprojekte",
  legalName: "J&L Bauprojekte, Inhaber Johann Schmidt", // PLATZHALTER: Rechtsform bestätigen
  owner: "Johann Schmidt",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jlbauprojekte.de").replace(/\/$/, ""),
  phone: {
    display: "0151\u00a055450377", // geschütztes Leerzeichen: Nummer bricht nie um
    href: "tel:+4915155450377",
    e164: "+49 151 55450377",
  },
  whatsapp: "https://wa.me/4915155450377",
  email: "info@jlbauprojekte.de",
  address: {
    street: "", // PLATZHALTER: Straße und Hausnummer
    postalCode: "86946",
    locality: "Vilgertshofen",
    region: "Bayern",
    country: "DE",
  },
  geo: { latitude: 47.9497, longitude: 10.9147 }, // Vilgertshofen
  // Zweiter Standort (Koordinaten: OpenStreetMap)
  branch: {
    label: "Standort Landsberg am Lech",
    street: "Max-Planck-Straße 13",
    postalCode: "86899",
    locality: "Landsberg am Lech",
    geo: { latitude: 48.0623, longitude: 10.8566 },
  },
  // Angaben von der bisherigen Website
  proof: { years: 7, projects: 270, rating: "4,8", reviews: 42 },
  // PLATZHALTER: Erreichbarkeit bestätigen
  hours: [
    { label: "Montag – Freitag", value: "7:00 – 18:00", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
    { label: "Samstag", value: "nach Vereinbarung" },
  ],
} as const;

/** Unterseiten (gleiche URLs wie auf der bisherigen Website) */
export const pages = {
  entkernung: { href: "/entkernung-abbruch-rueckbau/", label: "Entkernung & Abbruch", full: "Entkernung, Abbruch & Rückbau" },
  entruempelung: { href: "/entruempelung-haushaltsaufloesung/", label: "Entrümpelung", full: "Entrümpelung & Haushaltsauflösung" },
} as const;

export const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: pages.entruempelung.href, label: pages.entruempelung.label },
  { href: pages.entkernung.href, label: pages.entkernung.label },
  { href: "/#einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;
