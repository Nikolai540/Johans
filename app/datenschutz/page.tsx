import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz/" },
  robots: { index: false, follow: true },
};

// PLATZHALTER: Datenschutzerklärung vor dem Livegang rechtlich prüfen und vervollständigen
// (Hosting-Anbieter, E-Mail-Versand über Resend, Server-Logfiles, Rechte der Betroffenen, Google Maps, Google-Bewertungen).
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
      <h2>Einwilligung und Speicherung Ihrer Wahl</h2>
      <p>
        Google Maps laden wir erst, wenn Sie zustimmen, über den Hinweis beim ersten Besuch oder über „Karte laden“.
        Ihre Wahl speichern wir im lokalen Speicher Ihres Browsers (Eintrag „jl-consent“), damit wir nicht bei jedem
        Seitenaufruf erneut fragen. Diese Speicherung ist technisch erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Über
        „Cookie-Einstellungen“ im Fußbereich jeder Seite können Sie Ihre Wahl jederzeit ändern oder eine Einwilligung
        widerrufen.
      </p>
      <h2>Karte (Google Maps)</h2>
      <p>
        Auf der Startseite zeigen wir unseren Standort auf einer Karte von Google Maps. Anbieter ist die Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Erst nach Ihrer Einwilligung lädt Ihr Browser
        die Karte von Servern von Google. Dabei werden unter anderem Ihre IP-Adresse und Informationen zu Ihrem
        Browser übertragen, und Google kann Cookies oder ähnliche Techniken einsetzen. Die Daten können auch an die
        Google LLC in den USA übermittelt werden. Die Google LLC ist nach dem EU-US Data Privacy Framework
        zertifiziert. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Details
        finden Sie in der{" "}
        <a href="https://policies.google.com/privacy?hl=de" className="link link-underlined text-ink">
          Datenschutzerklärung von Google
        </a>
        .
      </p>
      <h2>Google-Bewertungen</h2>
      <p>
        Auf der Startseite zeigen wir aktuelle Bewertungen aus unserem Google-Unternehmensprofil. Unser Server ruft
        sie über eine Schnittstelle von Google ab. Ihr Browser baut dafür keine Verbindung zu Google auf, und es
        werden keine Daten von Ihnen an Google übertragen. Das gilt auch für die Profilbilder: Unser Server lädt sie
        und liefert sie selbst aus. Erst wenn Sie einen Link zu Google anklicken, etwa
        „Alle Bewertungen auf Google“ oder den Namen einer verfassenden Person, öffnet sich die Seite von Google.
      </p>
      <p>
        Der Link „Route planen“ öffnet Google Maps in einem neuen Fenster. Daten an Google werden erst übertragen,
        wenn Sie den Link anklicken.
      </p>
      <p>[Weitere Abschnitte: Hosting, Server-Logfiles, E-Mail-Versand, Ihre Rechte, Beschwerderecht]</p>
    </LegalPage>
  );
}
