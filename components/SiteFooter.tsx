import Image from "next/image";

import { LogoFull } from "@/components/Logo";
import { photos } from "@/lib/images";
import { aboutPage, nav, pages, site } from "@/lib/site";

export function SiteFooter() {
  const stamp = photos.landsbergBayertor;
  const credits = Object.values(photos).map((p) => p.credit);

  return (
    <footer className="bg-surface-soft pt-section pb-[calc(var(--spacing-xxl)+88px)] lg:pb-xxl">
      <div className="page-x mx-auto max-w-page">
        <div className="relative grid gap-xxl bg-canvas p-lg sm:p-xxl lg:grid-cols-2">
          <div>
            <LogoFull className="mb-xl h-auto w-56 max-w-full text-ink" title={site.name} />
            <p className="text-display-md text-ink">Bis bald in Landsberg.</p>
            <p className="mt-md max-w-[44ch] text-body-md">
              Ob Keller voller Erinnerungen, Altbau mit Zukunft oder ein Boden, der raus muss: Rufen Sie an, wir
              sehen uns Ihr Projekt an – in Landsberg am Lech, Kaufering, Buchloe, Augsburg, Mindelheim, Schongau, am
              Ammersee und im Allgäu.
            </p>
          </div>
          <div className="flex items-start justify-between gap-lg">
            <address className="grid gap-xs not-italic text-title-md text-ink">
              <a href={site.phone.href} className="link inline-flex min-h-11 items-center tabular">
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className="link inline-flex min-h-11 items-center break-all">
                {site.email}
              </a>
              <span className="font-light">
                {site.address.street && <span className="block">{site.address.street}</span>}
                {site.address.postalCode} {site.address.locality}
              </span>
              <span className="font-light">
                <span className="block">{site.branch.street}</span>
                {site.branch.postalCode} {site.branch.locality}
              </span>
            </address>
            <div className="w-16 shrink-0 bg-canvas p-[6px] sm:w-[88px]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={stamp.src} alt="" fill sizes="88px" className="object-cover object-[60%_50%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-xxl grid gap-xl lg:grid-cols-12">
          <nav aria-label="Fußnavigation" className="lg:col-span-4">
            <ul className="grid grid-cols-2 gap-x-lg text-body-md text-ink">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link inline-flex min-h-11 items-center">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={pages.schadstoffe.href} className="link inline-flex min-h-11 items-center">
                  {pages.schadstoffe.label}
                </a>
              </li>
              <li>
                <a href={aboutPage.href} className="link inline-flex min-h-11 items-center">
                  {aboutPage.label}
                </a>
              </li>
              <li>
                <a href="/impressum/" className="link inline-flex min-h-11 items-center">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz/" className="link inline-flex min-h-11 items-center">
                  Datenschutz
                </a>
              </li>
            </ul>
          </nav>
          <div className="lg:col-span-8">
            <p className="text-title-sm text-ink">Bildnachweise</p>
            <p className="mt-xs text-body-sm text-body">
              Alle Fotos via Wikimedia Commons; Gewerke-Fotos sind Symbolbilder und zeigen keine Projekte von{" "}
              {site.name}.{" "}
              {credits.map((c, i) => (
                <span key={c.source}>
                  <a href={c.source} className="link link-underlined" rel="noopener">
                    „{c.title}“
                  </a>{" "}
                  von {c.author},{" "}
                  <a href={c.licenseUrl} className="link link-underlined" rel="license noopener">
                    {c.license}
                  </a>
                  {i < credits.length - 1 ? "; " : "."}
                </span>
              ))}
            </p>
          </div>
        </div>

        <p className="mt-xxl text-center text-body-sm text-body">
          © {new Date().getFullYear()} {site.name} · {site.address.locality}
        </p>
      </div>
    </footer>
  );
}
