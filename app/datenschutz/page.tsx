import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Datenschutz | ${site.name}`,
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

// PLATZHALTER: Datenschutzerklärung vor dem Livegang rechtlich prüfen und vervollständigen
// (Hosting-Anbieter, E-Mail-Versand über Resend, Server-Logfiles, Rechte der Betroffenen).
export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutz">
      <h2>Verantwortlicher</h2>
      <p>
        {site.legalName}, {site.address.postalCode} {site.address.locality}, E-Mail: {site.email}
      </p>
      <h2>Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse,
        optional Ihre Telefonnummer, die ausgewählten Leistungen und Ihre Nachricht ausschließlich zur Bearbeitung
        Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie dafür nicht mehr
        erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
      </p>
      <h2>Schriftarten und Bilder</h2>
      <p>
        Schriftarten und Bilder werden von unserem eigenen Server ausgeliefert. Es werden keine Inhalte von
        Drittanbietern nachgeladen und keine Tracking- oder Analysedienste eingesetzt.
      </p>
      <p>[Weitere Abschnitte: Hosting, Server-Logfiles, E-Mail-Versand, Ihre Rechte, Beschwerderecht]</p>
    </LegalPage>
  );
}
