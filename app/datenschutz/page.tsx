import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz/" },
  robots: { index: false, follow: true },
};

// PLATZHALTER: Datenschutzerklärung vor dem Livegang rechtlich prüfen und vervollständigen
// (Hosting-Anbieter, E-Mail-Versand über Resend, Server-Logfiles, Rechte der Betroffenen, OpenStreetMap-Karte).
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
        Schriftarten und Bilder werden von unserem eigenen Server ausgeliefert. Tracking- oder Analysedienste
        setzen wir nicht ein.
      </p>
      <h2>Karte (OpenStreetMap)</h2>
      <p>
        Auf der Startseite zeigen wir unsere Standorte auf einer Karte von OpenStreetMap. Sobald Sie zur Karte
        scrollen, lädt Ihr Browser die Kartenkacheln von Servern der OpenStreetMap Foundation (St John’s Innovation
        Centre, Cowley Road, Cambridge, CB4 0WS, Vereinigtes Königreich). Dabei wird Ihre IP-Adresse übermittelt.
        Rechtsgrundlage ist unser berechtigtes Interesse an einer anschaulichen Darstellung unserer Standorte
        (Art. 6 Abs. 1 lit. f DSGVO). Für das Vereinigte Königreich besteht ein Angemessenheitsbeschluss der
        EU-Kommission. Details finden Sie in der{" "}
        <a href="https://osmfoundation.org/wiki/Privacy_Policy" className="link link-underlined text-ink">
          Datenschutzerklärung der OpenStreetMap Foundation
        </a>
        .
      </p>
      <p>
        Der Link „Route planen“ öffnet Google Maps in einem neuen Fenster. Daten an Google werden erst übertragen,
        wenn Sie den Link anklicken.
      </p>
      <p>[Weitere Abschnitte: Hosting, Server-Logfiles, E-Mail-Versand, Ihre Rechte, Beschwerderecht]</p>
    </LegalPage>
  );
}
