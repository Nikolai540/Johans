import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Impressum | ${site.name}`,
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

// PLATZHALTER: Pflichtangaben nach § 5 DDG vor dem Livegang vollständig ergänzen.
export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.legalName}
        <br />
        [Inhaber/in, Straße und Hausnummer]
        <br />
        {site.address.postalCode} {site.address.locality}
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: {site.phone.display}
        <br />
        E-Mail: {site.email}
      </p>
      <h2>Weitere Angaben</h2>
      <p>[Umsatzsteuer-ID, Handwerkskammer/Handelsregister, zuständige Aufsichtsbehörde – sofern zutreffend]</p>
    </LegalPage>
  );
}
