import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum/" },
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <p>
        Johann Schmidt
        <br />
        J&amp;L Bauprojekte
        <br />
        Schmuzerstraße 6
        <br />
        86946 Vilgertshofen
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+4915155450377" className="link link-underlined text-ink">015155450377</a>
        <br />
        E-Mail: <a href="mailto:info@jlbauprojekte.de" className="link link-underlined text-ink">info@jlbauprojekte.de</a>
      </p>
      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" className="link link-underlined break-all text-ink" rel="noopener">
          https://ec.europa.eu/consumers/odr/
        </a>
        .
        <br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
      <h2>
        Verbraucher­streit­beilegung/<wbr />
        Universal­schlichtungs­stelle
      </h2>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <p className="text-body-sm">Quelle: e-recht24.de</p>
    </LegalPage>
  );
}
