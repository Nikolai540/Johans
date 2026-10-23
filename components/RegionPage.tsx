import Image from "next/image";

import { Contact } from "@/components/Contact";
import { ArrowIcon, ChevronIcon, PhoneIcon } from "@/components/Icons";
import { branchId, businessId, faqGraph, JsonLd } from "@/components/JsonLd";
import { MobileActions } from "@/components/MobileActions";
import { ServiceLink } from "@/components/ServiceLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { services, type ServiceId } from "@/lib/content";
import { photos } from "@/lib/images";
import { regionById, regions, type RegionPage as RegionPageData } from "@/lib/regions";
import { pages, site } from "@/lib/site";

// Leistungen mit eigener Unterseite verlinken dorthin, alle anderen wählen die Leistung im Formular vor
const detailPage: Partial<Record<ServiceId, string>> = {
  entruempelung: pages.entruempelung.href,
  haushaltsaufloesung: pages.entruempelung.href,
  entkernung: pages.entkernung.href,
  abbruch: pages.entkernung.href,
  rueckbau: pages.entkernung.href,
};

const addresses = {
  main: {
    id: businessId,
    label: `Firmensitz ${site.address.locality}`,
    lines: [site.address.street, `${site.address.postalCode} ${site.address.locality}`].filter(Boolean),
  },
  branch: {
    id: branchId,
    label: site.branch.label,
    lines: [site.branch.street, `${site.branch.postalCode} ${site.branch.locality}`],
  },
};

export function RegionPage({ page }: { page: RegionPageData }) {
  const region = regionById(page.region);
  const others = regions.filter((r) => r.id !== region.id);
  const hero = photos[page.hero];
  const local = photos[page.local.photo];
  const url = `${site.url}${region.href}`;

  const schema = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.h1,
      description: page.description,
      url,
      provider: { "@id": addresses[page.locations[0]].id },
      areaServed: region.places.map((name) => ({ "@type": "City", name })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Leistungen in ${region.name}`,
        itemListElement: page.services.items.map((i) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: services[i.id].name, description: i.text },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: region.name, item: url },
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
                  <li>
                    <a href="/#einsatzgebiet" className="link">
                      Einsatzgebiet
                    </a>
                    <span aria-hidden> ›</span>
                  </li>
                  <li aria-current="page">{region.name}</li>
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
                  Kostenlose Besichtigung anfragen
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

        {/* Leistungen in der Region */}
        <section aria-labelledby="leistungen-titel" className="bg-surface-soft py-section">
          <div className="page-x mx-auto max-w-page">
            <div className="max-w-[60ch]">
              <h2 id="leistungen-titel" data-reveal className="text-display-md lg:text-display-lg">
                {page.services.h2}
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md text-title-md text-ink">
                {page.services.intro}
              </p>
            </div>
            <ul className="mt-xxl grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
              {page.services.items.map((item, i) => {
                const s = services[item.id];
                const href = detailPage[item.id];
                const linkClass = "link mt-auto inline-flex min-h-11 items-center gap-xs pt-md text-title-sm text-ink";
                return (
                  <li key={item.id} data-reveal style={{ ["--i" as string]: i % 3 }} className="card flex flex-col p-lg">
                    {item.focus && (
                      <span className="mb-sm self-start rounded-pill bg-primary px-sm py-xxs text-body-sm font-bold text-on-primary">
                        Schwerpunkt in der Region
                      </span>
                    )}
                    <h3 className="text-display-sm">{s.name}</h3>
                    <p className="mt-sm text-body-md">{item.text}</p>
                    {href ? (
                      <a href={href} className={linkClass}>
                        {s.name} im Detail
                        <ArrowIcon className="size-4" />
                      </a>
                    ) : (
                      <ServiceLink id={item.id} className={linkClass}>
                        {s.name} anfragen
                        <ArrowIcon className="size-4" />
                      </ServiceLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Vertrauen */}
        <section aria-labelledby="vertrauen-titel" className="on-dark bg-surface-dark py-section text-on-dark">
          <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-5">
              <h2 id="vertrauen-titel" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
                {page.trust.h2}
              </h2>
              <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md text-body-md text-on-dark">
                {page.trust.intro}
              </p>
              <dl className="mt-xl grid grid-cols-3 gap-md">
                {[
                  { v: site.proof.rating, l: `von 5 bei ${site.proof.reviews} Google-Bewertungen` },
                  { v: String(site.proof.years), l: "Jahre Erfahrung" },
                  { v: `${site.proof.projects}+`, l: "Projekte" },
                ].map((f, i) => (
                  <div key={f.l} data-reveal style={{ ["--i" as string]: i + 2 }} className="border-t border-surface-dark-elevated pt-sm">
                    <dt className="sr-only">{f.l}</dt>
                    <dd>
                      <span className="block text-display-md text-on-dark tabular">{f.v}</span>
                      <span className="mt-xxs block text-body-sm text-on-dark-soft">{f.l}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <div data-reveal style={{ ["--i" as string]: 5 }} className="mt-xl flex flex-col gap-sm sm:flex-row">
                <a href="#kontakt-formular" className="btn btn-primary">
                  Kostenlose Besichtigung anfragen
                </a>
                <a href={site.phone.href} className="btn btn-secondary">
                  <PhoneIcon className="size-4" />
                  {site.phone.display}
                </a>
              </div>
            </div>
            <ul className="grid gap-lg sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {page.trust.items.map((t, i) => (
                <li key={t.title} data-reveal style={{ ["--i" as string]: i % 2 }} className="card card-dark p-lg">
                  <h3 className="text-title-lg text-on-dark">{t.title}</h3>
                  <p className="mt-xs text-body-md text-on-dark">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Orte */}
        <section aria-labelledby="orte-titel" className="bg-canvas py-section">
          <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-6">
              <h2 id="orte-titel" data-reveal className="text-display-md lg:text-display-lg">
                {page.local.h2}
              </h2>
              <div data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg space-y-md text-body-md">
                {page.local.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <h3 data-reveal className="mt-xl text-title-md">Hier sind wir für Sie im Einsatz</h3>
              <ul data-reveal style={{ ["--i" as string]: 1 }} className="mt-sm flex flex-wrap gap-xs">
                {region.places.map((place) => (
                  <li key={place} className="rounded-pill border border-hairline-strong px-sm py-xxs text-body-sm text-ink">
                    {place}
                  </li>
                ))}
              </ul>
              <p data-reveal className="mt-xl text-body-md">
                Weitere Einsatzgebiete:{" "}
                {others.map((r, i) => (
                  <span key={r.id}>
                    <a href={r.href} className="link link-underlined font-bold text-ink">
                      {r.name}
                    </a>
                    {i < others.length - 1 ? " und " : "."}
                  </span>
                ))}
              </p>
              <h3 data-reveal className="mt-xl text-title-md">
                {page.locations.length > 1 ? "Unsere Standorte in der Nähe" : "Unser Standort in der Nähe"}
              </h3>
              <div data-reveal style={{ ["--i" as string]: 1 }} className="mt-sm grid gap-md sm:grid-cols-2">
                {page.locations.map((key) => {
                  const a = addresses[key];
                  return (
                    <address key={key} className="rounded-sm bg-surface-soft p-md not-italic text-body-md text-ink">
                      <span className="block font-bold">{a.label}</span>
                      {a.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  );
                })}
              </div>
            </div>
            <figure className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-card lg:aspect-square">
                <Image src={local.src} alt={local.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" placeholder="blur" className="object-cover" />
              </div>
              <figcaption className="mt-xs text-body-sm text-body">{local.caption}</figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-titel" className="bg-surface-soft py-section">
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

        <Contact formTitle="Kostenlose Besichtigung anfragen" />
      </main>
      <SiteFooter />
      <MobileActions />
    </>
  );
}
