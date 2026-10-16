// Zentrale Firmendaten (NAP: Name, Adresse, Telefon).
// Alle mit "PLATZHALTER" markierten Werte vor dem Livegang durch echte Daten ersetzen –
// sie werden in Navigation, Kontakt, Footer und im Schema.org-Markup verwendet.

export const site = {
  name: "JL Bauprojekte",
  legalName: "JL Bauprojekte", // PLATZHALTER: Rechtsform ergänzen (z. B. Inhaber, e. K., GmbH)
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jl-bauprojekte.de").replace(/\/$/, ""),
  phone: {
    display: "08191 000 000", // PLATZHALTER
    href: "tel:+498191000000", // PLATZHALTER
    e164: "+49 8191 000000", // PLATZHALTER
  },
  email: "info@jl-bauprojekte.de", // PLATZHALTER
  address: {
    street: "", // PLATZHALTER: Straße und Hausnummer
    postalCode: "86899",
    locality: "Landsberg am Lech",
    region: "Bayern",
    country: "DE",
  },
  geo: { latitude: 48.0479, longitude: 10.8706 }, // Landsberg am Lech, Stadtmitte
  // PLATZHALTER: Erreichbarkeit bestätigen
  hours: [
    { label: "Montag – Freitag", value: "7:00 – 18:00", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
    { label: "Samstag", value: "nach Vereinbarung" },
  ],
} as const;

export const nav = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#einsatzgebiet", label: "Einsatzgebiet" },
  { href: "#netzwerk", label: "Netzwerk" },
  { href: "#faq", label: "FAQ" },
] as const;
