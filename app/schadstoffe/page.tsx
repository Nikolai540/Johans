import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { ChevronIcon, PhoneIcon } from "@/components/Icons";
import { areaServed, businessId, faqGraph, JsonLd } from "@/components/JsonLd";
import { MobileActions } from "@/components/MobileActions";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { placeholders } from "@/lib/placeholders";
import { schadstoffe as page } from "@/lib/schadstoffe";
import { pages, site } from "@/lib/site";

const path = pages.schadstoffe.href;

export const metadata: Metadata = {
  title: { absolute: page.title },
  description: page.description,
  alternates: { canonical: path },
  openGraph: { type: "article", locale: "de_DE", url: path, title: page.title, description: page.description },
};

export default function Schadstoffe() {
  const url = `${site.url}${path}`;
  const schema = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Schadstoffsanierung: Asbest, KMF und PAK",
      serviceType: "Schadstoffsanierung",
      description: page.description,
      url,
      provider: { "@id": businessId },
      areaServed: areaServed(),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: pages.schadstoffe.full, item: url },
      ],
    },
    faqGraph(`${url}#faq`, page.faqs),
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
          crumb={pages.schadstoffe.full}
          badge="Sachkunde nach TRGS 519, Anlage 4"
          h1={page.h1}
          intro={page.intro}
          cta="Kostenlose Erstbesichtigung"
          photo={placeholders.schadstoffe}
        />

        {/* Warum Profis */}
        <section aria-labelledby="warum-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto max-w-page">
            <div className="grid gap-xl lg:grid-cols-12 lg:gap-lg">
              <h2 id="warum-titel" data-reveal className="text-display-md lg:col-span-6 lg:text-display-lg">
                {page.why.h2}
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="text-title-md text-ink lg:col-span-5 lg:col-start-8">
                {page.why.intro}
              </p>
            </div>
            <div className="mt-xxl grid gap-lg sm:grid-cols-2 xl:grid-cols-4">
              {page.why.items.map((item, i) => (
                <article key={item.title} data-reveal style={{ ["--i" as string]: i % 4 }} className="card p-lg">
                  <h3 className="text-title-lg">{item.title}</h3>
                  <p className="mt-xs text-body-md">{item.text}</p>
                </article>
              ))}
            </div>
            <dl className="mt-xxl grid gap-xl border-t border-hairline pt-xl sm:grid-cols-3 sm:gap-lg">
              {page.why.years.map((y, i) => (
                <div key={y.value} data-reveal style={{ ["--i" as string]: i }}>
                  <dt className="text-display-lg text-ink tabular">{y.value}</dt>
                  <dd className="mt-xxs max-w-[32ch] text-body-md">{y.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Die großen Drei */}
        <section aria-labelledby="big3-titel" className="bg-surface-soft py-section">
          <div className="page-x mx-auto max-w-page">
            <h2 id="big3-titel" data-reveal className="max-w-[22ch] text-display-md lg:text-display-lg">
              {page.big3.h2}
            </h2>
            <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md max-w-[60ch] text-title-md text-ink">
              {page.big3.intro}
            </p>
            <div className="mt-xxl grid gap-xl">
              {page.big3.items.map((s) => (
                <article
                  key={s.id}
                  id={s.id}
                  aria-labelledby={`${s.id}-titel`}
                  data-reveal
                  className="card grid scroll-mt-[calc(var(--spacing-nav)+var(--spacing-lg))] gap-xl p-lg sm:p-xl lg:grid-cols-12 lg:gap-lg"
                >
                  <header className="lg:col-span-4">
                    <h3 id={`${s.id}-titel`} className="text-display-md">
                      {s.name}
                    </h3>
                    <p className="mt-xs text-title-md text-ink">{s.lead}</p>
                    <h4 className="mt-lg text-title-sm text-ink">Wo steckt es?</h4>
                    <ul className="mt-xs grid gap-xs">
                      {s.where.map((w) => (
                        <li key={w} className="flex gap-sm text-body-md">
                          <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 bg-primary" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </header>
                  <div className="grid content-start gap-lg sm:grid-cols-2 lg:col-span-8">
                    <div>
                      <h4 className="text-title-md">Warum gefährlich?</h4>
                      <p className="mt-xs text-body-md">{s.danger}</p>
                    </div>
                    <div>
                      <h4 className="text-title-md">Woran erkennen?</h4>
                      <p className="mt-xs text-body-md">{s.recognize}</p>
                    </div>
                    <div className="bg-surface-soft p-md sm:col-span-2">
                      <h4 className="text-title-md">So gehen wir vor</h4>
                      <p className="mt-xs text-body-md">{s.ours}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Checkliste Hauskauf */}
        <section aria-labelledby="checkliste-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto grid max-w-page gap-xl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-5">
              <h2 id="checkliste-titel" data-reveal className="text-display-md">
                {page.checklist.h2}
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md text-body-md">
                {page.checklist.intro}
              </p>
            </div>
            <ol data-reveal style={{ ["--i" as string]: 2 }} className="grid gap-sm lg:col-span-6 lg:col-start-7">
              {page.checklist.items.map((item, i) => (
                <li key={item} className="flex items-start gap-md border-b border-hairline pb-sm text-title-md text-ink">
                  <span aria-hidden className="w-7 shrink-0 text-muted tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ablauf nach TRGS 519 */}
        <section aria-labelledby="ablauf-titel" className="on-dark bg-surface-dark py-section text-on-dark">
          <div className="page-x mx-auto max-w-page">
            <div className="grid gap-xl lg:grid-cols-12 lg:gap-lg">
              <h2 id="ablauf-titel" data-reveal className="text-display-md text-on-dark lg:col-span-6 lg:text-display-lg">
                {page.process.h2}
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="text-body-md text-on-dark sm:text-title-md sm:font-light lg:col-span-5 lg:col-start-8">
                {page.process.intro}
              </p>
            </div>
            <ol className="mt-xxl grid gap-lg sm:grid-cols-2 lg:grid-cols-3 min-[80rem]:grid-cols-5">
              {page.process.steps.map((s, i) => (
                <li key={s.title} data-reveal style={{ ["--i" as string]: i }} className="card card-dark p-lg">
                  <span aria-hidden className="text-display-sm text-primary tabular">
                    {i + 1}
                  </span>
                  <h3 className="mt-xs text-title-lg text-on-dark">{s.title}</h3>
                  <p className="mt-xs text-body-md text-on-dark">{s.text}</p>
                </li>
              ))}
            </ol>
            <p data-reveal className="mt-xl max-w-[70ch] border-t border-surface-dark-elevated pt-lg text-body-md text-on-dark-soft">
              {page.process.note}
            </p>
          </div>
        </section>

        {/* Danach weiter */}
        <section aria-labelledby="danach-titel" className="bg-surface-soft py-section">
          <div className="page-x mx-auto grid max-w-page gap-xl lg:grid-cols-12 lg:gap-lg">
            <h2 id="danach-titel" data-reveal className="text-display-md lg:col-span-5">
              {page.after.h2}
            </h2>
            <div data-reveal style={{ ["--i" as string]: 1 }} className="lg:col-span-6 lg:col-start-7">
              <p className="text-body-md">{page.after.text}</p>
              <p className="mt-md text-body-md">
                Mehr dazu:{" "}
                <a href={pages.entkernung.href} className="link link-underlined font-bold text-ink">
                  {pages.entkernung.full}
                </a>
                ,{" "}
                <a href={pages.entruempelung.href} className="link link-underlined font-bold text-ink">
                  {pages.entruempelung.full}
                </a>{" "}
                und{" "}
                <a href={pages.renovierung.href} className="link link-underlined font-bold text-ink">
                  Renovierung, Böden & Umzug
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
            <h2 id="faq-titel" data-reveal className="text-display-md lg:col-span-4 xl:text-display-lg">
              Häufige Fragen zu Schadstoffen
            </h2>
            <div className="flex flex-col gap-sm lg:col-span-7 lg:col-start-6">
              {page.faqs.map((f, i) => (
                <details key={f.q} data-reveal style={{ ["--i" as string]: i % 3 }} className="card group px-lg py-xs">
                  <summary className="flex min-h-11 cursor-pointer items-start justify-between gap-md py-xs text-ink">
                    <h3 className="text-title-md">{f.q}</h3>
                    <ChevronIcon className="mt-xxs size-5 shrink-0 transition-transform duration-[180ms] group-open:rotate-180" />
                  </summary>
                  <p className="max-w-[64ch] pt-xs pb-md text-body-md">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Handlungsaufforderung */}
        <section aria-labelledby="cta-titel" className="on-dark bg-surface-dark py-section text-on-dark">
          <div className="page-x mx-auto grid max-w-page gap-xl lg:grid-cols-12 lg:items-end lg:gap-lg">
            <div className="lg:col-span-7">
              <h2 id="cta-titel" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
                Verdacht auf Schadstoffe? Lassen Sie es prüfen, bevor Sie bohren.
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md max-w-[56ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
                Die Erstbesichtigung in Landsberg am Lech, Augsburg und im Allgäu ist kostenlos und unverbindlich.
                Danach wissen Sie, woran Sie sind.
              </p>
            </div>
            <div data-reveal style={{ ["--i" as string]: 2 }} className="flex flex-col gap-sm sm:flex-row sm:flex-wrap sm:[&>.btn]:whitespace-nowrap lg:col-span-5 lg:justify-end">
              <a href="#kontakt-formular" className="btn btn-primary">
                Erstbesichtigung anfragen
              </a>
              <a href={site.phone.href} className="btn btn-secondary">
                <PhoneIcon className="size-4" />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </section>

        <Contact initial={["schadstoffsanierung"]} />
      </main>
      <SiteFooter />
      <MobileActions />
    </>
  );
}
