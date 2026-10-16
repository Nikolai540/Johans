import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Anfrage | ${site.name}`,
  robots: { index: false, follow: false },
};

// Rückmeldung für das Kontaktformular ohne JavaScript
export default async function Anfrage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const ok = status === "ok";
  return (
    <LegalPage title={ok ? "Danke für Ihre Anfrage" : "Anfrage nicht gesendet"}>
      {ok ? (
        <p>Ihre Anfrage ist angekommen. Wir melden uns so bald wie möglich bei Ihnen.</p>
      ) : (
        <p>
          Bitte prüfen Sie Ihre Angaben und versuchen Sie es erneut – oder rufen Sie uns direkt an:{" "}
          <a href={site.phone.href} className="link link-underlined font-bold text-ink">
            {site.phone.display}
          </a>
        </p>
      )}
    </LegalPage>
  );
}
