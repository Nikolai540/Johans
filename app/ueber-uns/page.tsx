import Image from "next/image";
import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { businessId, JsonLd } from "@/components/JsonLd";
import { MobileActions } from "@/components/MobileActions";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { placeholders } from "@/lib/placeholders";
import { regions } from "@/lib/regions";
import { aboutPage, locations, pages, site } from "@/lib/site";

const path = aboutPage.href;
const firstName = site.owner.split(" ")[0];
const title = `Über uns: ${site.name} aus Landsberg am Lech | Abbruch, Entkernung & Sanierung`;
const description = `${site.owner} und ${site.name}: Entrümpelung, Entkernung, Abbruch, Schadstoffsanierung nach TRGS 519 und neue Böden aus einer Hand – zuverlässig, sauber und zum Festpreis. Aus Landsberg am Lech für die Region bis ins Allgäu.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", locale: "de_DE", url: path, title, description },
};

// PLATZHALTER: Aussagen zur Arbeitsweise mit dem Inhaber abstimmen; ein persönliches Zitat kann im Abschnitt Philosophie ergänzt werden.
const principles = [
  {
    title: "Anpacken statt verwalten",
    text: `${firstName} Schmidt besichtigt selbst, plant selbst und ist Ihr Ansprechpartner von der ersten Begehung bis zur Übergabe. Ein Gesicht, eine Telefonnummer, keine Warteschleife.`,
  },
  {
    title: "Zusagen, die halten",
    text: "Abbruch und Entkernung sind Vertrauenssache: Sie lassen uns in Ihr Haus. Deshalb gilt bei uns, was besprochen ist – Termin, Umfang und Preis stehen schriftlich fest, bevor es losgeht.",
  },
  {
    title: "Sauber hinterlassen",
    text: "Eine Baustelle darf laut sein, aber nicht chaotisch. Wir schützen Treppenhaus und Böden, trennen den Abfall sortenrein und übergeben besenrein – so, dass die nächsten Schritte sofort beginnen können.",
  },
];

const reasons = [
  {
    title: "Alles aus einer Hand",
    text: "Entrümpelung, Entkernung, Abbruch, Schadstoffsanierung, Renovierung, neue Böden und Umzug – ein Ansprechpartner statt vieler Firmen.",
  },
  {
    title: "Sachkunde nach TRGS 519",
    text: "Asbest und alte Mineralwolle bauen wir mit nachgewiesener Sachkunde aus, mit Gefährdungsbeurteilung, Anzeige bei der Behörde und Entsorgungsnachweis.",
  },
  {
    title: "Transparente Preise",
    text: "Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis. Abtransport und Entsorgung sind enthalten, Nachforderungen gibt es nicht.",
  },
  {
    title: "Saubere Baustellen",
    text: "Staubarm arbeiten, Wege schützen, sortenrein entsorgen und besenrein übergeben – bereit für Einzug, Verkauf oder die nächsten Handwerker.",
  },
  {
    title: "Aus der Region",
    text: `Mit Standorten in ${site.branch.locality} und ${site.address.locality} sind wir schnell vor Ort – von Augsburg über den Ammersee bis ins Allgäu.`,
  },
  {
    title: "Ausgezeichnet bewertet",
    text: `${site.proof.rating} von 5 Sternen bei ${site.proof.reviews} Google-Bewertungen und über ${site.proof.projects} abgeschlossene Projekte in ${site.proof.years} Jahren.`,
  },
];

export default function UeberUns() {
  const url = `${site.url}${path}`;
  const schema = [
    { "@type": "AboutPage", "@id": `${url}#seite`, url, name: title, description, about: { "@id": businessId } },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: aboutPage.label, item: url },
      ],
    },
  ];
  const baustelle = placeholders.baustelle;

  return (
    <>
      <JsonLd data={schema} />
      <a href="#inhalt" className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-xs focus:left-xs focus:z-[60]">
        Zum Inhalt springen
      </a>
      <SiteHeader />
      <main id="inhalt">
        <PageHero
          crumb={aboutPage.label}
          h1="Ihr Partner für sauberen Abbruch und sichere Sanierung – von Landsberg bis ins Allgäu"
          intro={`${site.name} ist der Betrieb von ${site.owner} aus dem Landkreis Landsberg am Lech. Wir räumen, entkernen, brechen ab, bauen Schadstoffe fachgerecht aus und bringen Räume mit neuen Böden wieder in Schuss – zuverlässig, sauber und zum Festpreis.`}
          cta="Kostenlose Besichtigung anfragen"
          photo={placeholders.johann}
          portrait
        />

        {/* Philosophie */}
        <section aria-labelledby="philosophie-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-6">
              <h2 id="philosophie-titel" data-reveal className="text-display-md lg:text-display-lg">
                {firstName}s Philosophie: machen, was man sagt
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg max-w-[56ch] text-title-md text-ink">
                Wer ein Haus erbt, kauft oder umbaut, braucht keinen weiteren Ansprechpartner, der nur vermittelt.
                Er braucht jemanden, der kommt, sich das ansieht und es dann erledigt.
              </p>
              <div className="mt-xxl grid gap-xl">
                {principles.map((p, i) => (
                  <article key={p.title} data-reveal style={{ ["--i" as string]: i }} className="border-t border-hairline pt-lg">
                    <h3 className="text-display-sm">{p.title}</h3>
                    <p className="mt-xs max-w-[60ch] text-body-md">{p.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <figure className="lg:col-span-5 lg:col-start-8 lg:self-center">
              <div data-reveal className="relative aspect-[4/3] overflow-hidden bg-surface-card">
                <Image src={baustelle.src} alt={baustelle.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-xs text-body-sm text-body">{baustelle.caption}</figcaption>
            </figure>
          </div>
        </section>

        {/* Zahlen */}
        <section aria-label="J&L Bauprojekte in Zahlen" className="bg-surface-soft py-xxl">
          <dl className="page-x mx-auto grid max-w-page gap-xl sm:grid-cols-3 sm:gap-lg">
            {[
              { v: String(site.proof.years), l: "Jahre Erfahrung im Landkreis Landsberg" },
              { v: `${site.proof.projects}+`, l: "abgeschlossene Projekte" },
              { v: site.proof.rating, l: `von 5 Sternen bei ${site.proof.reviews} Google-Bewertungen` },
            ].map((f, i) => (
              <div key={f.l} data-reveal style={{ ["--i" as string]: i }}>
                <dt className="sr-only">{f.l}</dt>
                <dd>
                  <span className="block text-display-lg text-ink tabular">{f.v}</span>
                  <span className="mt-xxs block text-body-md">{f.l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Warum J&L */}
        <section aria-labelledby="warum-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto max-w-page">
            <h2 id="warum-titel" data-reveal className="text-display-md lg:text-display-lg">
              Warum {site.name}?
            </h2>
            <ul className="mt-xxl grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r, i) => (
                <li key={r.title} data-reveal style={{ ["--i" as string]: i % 3 }} className="card p-lg">
                  <h3 className="flex items-start gap-sm text-title-lg">
                    <span aria-hidden className="mt-[0.45em] size-2 shrink-0 bg-primary" />
                    {r.title}
                  </h3>
                  <p className="mt-xs pl-md text-body-md">{r.text}</p>
                </li>
              ))}
            </ul>
            <p data-reveal className="mt-xl text-body-md">
              Mehr zu unseren Leistungen:{" "}
              {[pages.entruempelung, pages.entkernung, pages.schadstoffe].map((p) => (
                <span key={p.href}>
                  <a href={p.href} className="link link-underlined font-bold text-ink">
                    {p.full}
                  </a>
                  ,{" "}
                </span>
              ))}
              <a href={pages.renovierung.href} className="link link-underlined font-bold text-ink">
                Renovierung, Böden & Umzug
              </a>
              .
            </p>
          </div>
        </section>

        {/* Standorte */}
        <section aria-labelledby="standorte-titel" className="bg-surface-soft py-section">
          <div className="page-x mx-auto grid max-w-page gap-xl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-5">
              <h2 id="standorte-titel" data-reveal className="text-display-md">
                Zu Hause im Landkreis Landsberg
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md text-body-md">
                Von hier aus sind wir in der ganzen Region im Einsatz:
              </p>
              <ul data-reveal style={{ ["--i" as string]: 2 }} className="mt-md flex flex-wrap gap-xs">
                {regions.map((r) => (
                  <li key={r.id}>
                    <a href={r.href} className="link inline-flex min-h-11 items-center bg-canvas px-md text-title-sm text-ink">
                      {r.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="grid content-start gap-md sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {locations.map((loc) => (
                <li key={loc.id} data-reveal className="bg-canvas p-lg">
                  <address className="not-italic text-body-md text-ink">
                    <span className="block font-bold">{loc.label}</span>
                    {loc.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a href={loc.route} target="_blank" rel="noopener" className="link link-underlined mt-xs inline-flex min-h-11 items-center gap-xs text-title-sm text-ink">
                    Route planen
                    <ArrowIcon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Handlungsaufforderung */}
        <section aria-labelledby="cta-titel" className="on-dark bg-surface-dark py-section text-on-dark">
          <div className="page-x mx-auto grid max-w-page gap-xl lg:grid-cols-12 lg:items-end lg:gap-lg">
            <div className="lg:col-span-7">
              <h2 id="cta-titel" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
                Lernen Sie uns kennen – am besten direkt auf Ihrer Baustelle.
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md max-w-[56ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
                Rufen Sie an oder schreiben Sie uns. {firstName} Schmidt kommt zur kostenlosen Besichtigung und Sie
                erhalten einen Festpreis.
              </p>
            </div>
            <div data-reveal style={{ ["--i" as string]: 2 }} className="flex flex-col gap-sm sm:flex-row sm:flex-wrap sm:[&>.btn]:whitespace-nowrap lg:col-span-5 lg:justify-end">
              <a href="#kontakt-formular" className="btn btn-primary">
                Zum Kontaktformular
              </a>
              <a href={site.phone.href} className="btn btn-secondary">
                <PhoneIcon className="size-4" />
                Jetzt anrufen
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
