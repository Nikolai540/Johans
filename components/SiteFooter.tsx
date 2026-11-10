import Image from "next/image";

import { ConsentSettingsButton } from "@/components/CookieBanner";
import { LogoFull } from "@/components/Logo";
import auftragsbank from "@/public/images/partner/auftragsbank.png";
import { photos } from "@/lib/images";
import { nav, serviceNav, site } from "@/lib/site";

/** home: Startseite, auf der der Footer steht – Sprungmarken wie "/#faq" bleiben dann auf dieser Seite */
export function SiteFooter({ home = "/" }: { home?: string }) {
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
              Voller Keller, Altbau vor der Sanierung oder ein Boden, der raus muss: Rufen Sie an, wir sehen uns das an. In
              Landsberg am Lech, Kaufering, Buchloe, Augsburg, Mindelheim, Schongau, am Ammersee und im Allgäu.
            </p>
          </div>
          <div className="flex gap-lg lg:items-center lg:justify-end">
            <address className="grid gap-xs not-italic text-title-md text-ink lg:justify-items-end lg:text-right">
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
          </div>
          {/* Logos liegen auf dem eigenen Server, damit beim Laden keine Daten an Dritte gehen */}
          <div className="border-t border-hairline pt-lg lg:col-span-2">
            <p className="text-title-sm text-ink">Unsere Partner</p>
            <ul className="mt-md flex flex-wrap items-center gap-lg">
              <li>
                <a href="https://awl-zentrum.de" target="_blank" rel="noopener" className="block">
                  <img src="/images/partner/awl-zentrum.svg" alt="Gelistet bei AWL Zentrum" width={143} height={48} loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://www.auftragsbank.de/" target="_blank" rel="noopener" className="block">
                  <Image src={auftragsbank} alt="auftragsbank" width={143} height={48} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-xxl grid gap-xl lg:grid-cols-12">
          <nav aria-label="Fußnavigation" className="lg:col-span-4">
            <ul className="grid grid-cols-2 gap-x-lg text-body-md text-ink">
              {[...serviceNav, ...nav].map((l) => (
                <li key={l.href}>
                  <a href={l.href.startsWith("/#") ? home + l.href.slice(1) : l.href} className="link inline-flex min-h-11 items-center">
                    {l.label}
                  </a>
                </li>
              ))}
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
              <li>
                <ConsentSettingsButton className="link inline-flex min-h-11 cursor-pointer items-center text-left" />
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
