import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { MobileActions } from "@/components/MobileActions";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { serviceOrder, services } from "@/lib/content";
import { euro, prices } from "@/lib/preise";
import { pricesPage, site } from "@/lib/site";

const path = pricesPage.href;
const title = `Preise für Entrümpelung, Entkernung & Sanierung in Landsberg am Lech | ${site.name}`;
const description = `Ab-Preise von ${site.name} für Entrümpelung, Haushaltsauflösung, Entkernung, Abbruch, Asbestsanierung, Renovierung, Böden und Container. Inklusive MwSt., verbindlicher Festpreis nach kostenloser Besichtigung.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", locale: "de_DE", url: path, title, description },
};

const rows = serviceOrder.flatMap((id) => {
  const price = prices[id];
  return price ? [{ id, name: services[id].name, ...price }] : [];
});

export default function Preise() {
  const url = `${site.url}${path}`;
  const schema = [
    { "@type": "WebPage", "@id": `${url}#seite`, url, name: title, description },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: pricesPage.label, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <a href="#inhalt" className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-xs focus:left-xs focus:z-[60]">
        Zum Inhalt springen
      </a>
      <SiteHeader />
      <main id="inhalt">
        <PageHero
          crumb={pricesPage.label}
          h1="Was kostet Entrümpelung, Entkernung oder Renovierung?"
          intro="Hier sehen Sie, ab welchem Preis wir die einzelnen Leistungen übernehmen, inklusive Mehrwertsteuer. Den verbindlichen Festpreis bekommen Sie nach der kostenlosen Besichtigung."
          cta="Kostenlose Besichtigung anfragen"
        />

        <section aria-labelledby="preise-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-4">
              <h2 id="preise-titel" data-reveal className="text-display-md lg:text-display-lg">
                Ab-Preise je Leistung
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md max-w-[44ch] text-body-md">
                Alle Preise sind Endpreise für Privatkunden inklusive 19&nbsp;% MwSt. Was es am Ende kostet, hängt von
                Menge, Zugang, Stockwerk und Entsorgung ab.
              </p>
            </div>
            <table className="w-full border-collapse text-left lg:col-span-8">
              <caption className="sr-only">Ab-Preise je Leistung, inklusive MwSt.</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Leistung</th>
                  <th scope="col">Preis</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="border-t border-hairline last:border-b">
                    <th scope="row" className="py-md pr-md align-top font-normal">
                      <span className="block text-title-lg text-ink">{r.name}</span>
                      {r.note && <span className="mt-xxs block text-body-md">{r.note}</span>}
                    </th>
                    <td className="w-[9.5rem] py-md text-right align-top sm:w-[14rem]">
                      <span className="block text-title-lg whitespace-nowrap text-ink tabular">ab {euro(r.from)}</span>
                      <span className="mt-xxs block text-body-sm">{r.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="festpreis-titel" className="on-dark bg-putz py-section text-on-dark">
          <div className="page-x mx-auto grid max-w-page gap-xl lg:grid-cols-12 lg:items-end lg:gap-lg">
            <div className="lg:col-span-7">
              <h2 id="festpreis-titel" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
                Verbindlich wird es nach der Besichtigung.
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md max-w-[56ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
                Die Preise oben sind Richtwerte. Wir kommen kostenlos vorbei oder schauen uns Fotos per WhatsApp an. Danach
                bekommen Sie einen Festpreis, Abtransport und Entsorgung sind darin enthalten.
              </p>
            </div>
            <div data-reveal style={{ ["--i" as string]: 2 }} className="flex lg:col-span-5 lg:justify-end">
              <a href="#kontakt-formular" className="btn btn-primary">
                Zum Kontaktformular
                <ArrowIcon className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />
      <MobileActions />
    </>
  );
}
