import Image from "next/image";

import { Contact } from "@/components/Contact";
import { ChevronIcon, PhoneIcon } from "@/components/Icons";
import { areaServed, businessId, faqGraph, JsonLd } from "@/components/JsonLd";
import { MobileActions } from "@/components/MobileActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { photos } from "@/lib/images";
import { pages, site } from "@/lib/site";
import type { SubPage } from "@/lib/subpages";

export function ServicePage({ page }: { page: SubPage }) {
  const hero = photos[page.hero];
  const url = `${site.url}${page.path}`;
  const others = Object.values(pages).filter((p) => p.href !== page.path);

  const schema = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.name,
      serviceType: page.name,
      description: page.description,
      url,
      provider: { "@id": businessId },
      areaServed: areaServed(),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: page.name,
        itemListElement: page.services.items.map((i) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: i.h3 } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: page.name, item: url },
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
        {/* Hero */}
        <section aria-labelledby="seite-titel" className="on-dark bg-surface-dark text-on-dark">
          <div className="page-x mx-auto grid max-w-page gap-xxl py-xxl lg:grid-cols-12 lg:gap-lg lg:py-section">
            <div className="flex flex-col justify-center lg:col-span-6">
              <nav aria-label="Brotkrumen" className="text-body-sm text-on-dark-soft">
                <ol className="flex flex-wrap gap-xs">
                  <li>
                    <a href="/" className="link">
                      Startseite
                    </a>
                    <span aria-hidden> ›</span>
                  </li>
                  <li aria-current="page">{page.name}</li>
                </ol>
              </nav>
              <h1 id="seite-titel" data-rise className="mt-md text-display-md text-on-dark lg:text-display-lg">
                {page.h1}
              </h1>
              <p data-rise style={{ ["--i" as string]: 1 }} className="mt-lg max-w-[52ch] text-body-md text-on-dark sm:text-title-md sm:font-light">
                {page.intro}
              </p>
              <div data-hero-actions data-rise style={{ ["--i" as string]: 2 }} className="mt-xl flex flex-col gap-sm sm:flex-row">
                <a href={site.phone.href} className="btn btn-primary">
                  <PhoneIcon className="size-4" />
                  Jetzt anrufen
                  <span className="font-light tabular max-[22.5rem]:hidden">{site.phone.display}</span>
                </a>
                <a href="#kontakt-formular" className="btn btn-secondary">
                  Kostenlos anfragen
                </a>
              </div>
              <p data-rise style={{ ["--i" as string]: 3 }} className="mt-lg text-body-sm text-on-dark-soft">
                {site.proof.rating} von 5 bei {site.proof.reviews} Google-Bewertungen · {site.proof.years} Jahre Erfahrung ·
                über {site.proof.projects} Projekte
              </p>
            </div>
            <figure className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-dark-elevated">
                <Image src={hero.src} alt={hero.alt} fill preload sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" className="object-cover" />
              </div>
              <figcaption className="mt-xs text-body-sm text-on-dark-soft">{hero.caption}</figcaption>
            </figure>
          </div>
        </section>

        {/* Leistungen im Detail */}
        <section aria-labelledby="leistungen-titel" className="bg-surface-soft py-section">
          <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-4">
              <h2 id="leistungen-titel" data-reveal className="text-display-md lg:sticky lg:top-[calc(var(--spacing-nav)+var(--spacing-xxl))]">
                {page.services.h2}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p data-reveal className="max-w-[60ch] text-title-md text-ink">
                {page.services.intro}
              </p>
              <div className="mt-xxl grid gap-lg sm:grid-cols-2">
                {page.services.items.map((item, i) => (
                  <article
                    key={item.h3}
                    id={item.id}
                    data-reveal
                    style={{ ["--i" as string]: i % 2 }}
                    className="card scroll-mt-[calc(var(--spacing-nav)+var(--spacing-lg))] p-lg"
                  >
                    <h3 className="text-display-sm">{item.h3}</h3>
                    <p className="mt-sm text-body-md">{item.text}</p>
                    {item.points && (
                      <ul className="mt-md grid gap-xxs">
                        {item.points.map((pt) => (
                          <li key={pt} className="flex gap-sm text-body-md">
                            <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 bg-primary" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Anlässe */}
        <section aria-labelledby="anlaesse-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto max-w-page">
            <h2 id="anlaesse-titel" data-reveal className="text-display-md lg:text-display-lg">
              {page.occasions.h2}
            </h2>
            <div className="mt-xxl grid gap-xl sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-lg lg:gap-y-xxl">
              {page.occasions.items.map((o, i) => (
                <div key={o.h3} data-reveal style={{ ["--i" as string]: i % 3 }} className="card p-lg">
                  <h3 className="text-title-lg">{o.h3}</h3>
                  <p className="mt-xs text-body-md">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checkliste */}
        <section aria-labelledby="checkliste-titel" className="bg-surface-soft py-section">
          <div className="page-x mx-auto grid max-w-page gap-xl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-4">
              <h2 id="checkliste-titel" data-reveal className="text-display-md">
                {page.checklist.h2}
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md text-body-md">
                {page.checklist.intro}
              </p>
            </div>
            <ul data-reveal style={{ ["--i" as string]: 2 }} className="grid gap-x-lg sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {page.checklist.items.map((item) => (
                <li key={item} className="flex min-h-12 items-center gap-sm text-title-md text-ink">
                  <span aria-hidden className="size-2 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ablauf */}
        <section aria-labelledby="ablauf-titel" className="on-dark bg-surface-dark py-section text-on-dark">
          <div className="page-x mx-auto max-w-page">
            <h2 id="ablauf-titel" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
              {page.steps.h2}
            </h2>
            <ol className="mt-xxl grid gap-xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-lg">
              {page.steps.items.map((s, i) => (
                <li key={s.title} data-reveal style={{ ["--i" as string]: i % 4 }} className="card card-dark p-lg">
                  <h3 className="text-title-lg text-on-dark">{s.title}</h3>
                  <p className="mt-xs text-body-md text-on-dark">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Vorteile + Zahlen */}
        <section aria-labelledby="vorteile-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-7">
              <h2 id="vorteile-titel" data-reveal className="text-display-md lg:text-display-lg">
                {page.benefits.h2}
              </h2>
              <div className="mt-xxl grid gap-xl">
                {page.benefits.items.map((b, i) => (
                  <div key={b.title} data-reveal style={{ ["--i" as string]: i }} className="card p-lg">
                    <h3 className="text-display-sm">{b.title}</h3>
                    <p className="mt-xs max-w-[56ch] text-body-md">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <dl className="grid content-start gap-xl lg:col-span-4 lg:col-start-9">
              {[
                { v: site.proof.rating, l: `von 5 Sternen bei ${site.proof.reviews} Google-Bewertungen` },
                { v: String(site.proof.years), l: "Jahre Erfahrung im Landkreis Landsberg" },
                { v: `${site.proof.projects}+`, l: "abgeschlossene Projekte" },
              ].map((f, i) => (
                <div key={f.l} data-reveal style={{ ["--i" as string]: i }} className="card p-lg">
                  <dt className="sr-only">{f.l}</dt>
                  <dd>
                    <span className="block text-display-lg text-ink tabular">{f.v}</span>
                    <span className="mt-xxs block text-body-md">{f.l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Lokal */}
        <section aria-labelledby="lokal-titel" className="bg-surface-soft py-section">
          <div className="page-x mx-auto grid max-w-page gap-xl lg:grid-cols-12 lg:gap-lg">
            <h2 id="lokal-titel" data-reveal className="text-display-md lg:col-span-5">
              {page.local.h2}
            </h2>
            <div data-reveal style={{ ["--i" as string]: 1 }} className="space-y-md text-body-md lg:col-span-6 lg:col-start-7">
              {page.local.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                Ebenfalls im Angebot:{" "}
                {others.map((o, i) => (
                  <span key={o.href}>
                    <a href={o.href} className="link link-underlined font-bold text-ink">
                      {o.full}
                    </a>
                    {i < others.length - 2 ? ", " : i === others.length - 2 ? " und " : "."}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
            <h2 id="faq-titel" data-reveal className="text-display-md lg:col-span-4 lg:text-display-lg">
              Häufige Fragen
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

        <Contact initial={page.preselect} />
      </main>
      <SiteFooter />
      <MobileActions />
    </>
  );
}
