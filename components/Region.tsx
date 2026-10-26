import { ArrowIcon, GateIcon, HomeIcon, MountainIcon, SailIcon, TowerIcon, WallIcon } from "@/components/Icons";
import { LocationMap } from "@/components/LocationMap";
import { regions, type RegionId } from "@/lib/regions";
import { catchment, locations, site } from "@/lib/site";

const facts = [
  { label: "Standorte", value: `${site.branch.locality} und ${site.address.locality}` },
  { label: "Erfahrung", value: `${site.proof.years} Jahre, über ${site.proof.projects} Projekte` },
  { label: "Google-Bewertung", value: `${site.proof.rating} von 5 (${site.proof.reviews} Bewertungen)` },
  { label: "Ansprechpartner", value: site.owner },
];

const icons: Record<RegionId, typeof GateIcon> = {
  landsberg: GateIcon,
  ammersee: SailIcon,
  buchloe: HomeIcon,
  augsburg: TowerIcon,
  schongau: WallIcon,
  allgaeu: MountainIcon,
};

export function Region() {
  return (
    <section id="einsatzgebiet" aria-labelledby="einsatzgebiet-title" className="bg-canvas py-section">
      <div className="page-x mx-auto max-w-page">
        <div className="grid gap-xxl lg:grid-cols-12 lg:gap-lg">
          <div className="lg:col-span-6">
            <h2 id="einsatzgebiet-title" data-reveal className="text-display-md lg:text-display-lg">
              Zwischen Augsburg, Ammersee und Allgäu
            </h2>
            <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg max-w-[60ch] text-title-md text-ink">
              Mit unseren Standorten in Landsberg am Lech und Vilgertshofen sind wir schnell bei Ihnen. Kurze Wege sparen
              Zeit und Geld – bei der Besichtigung genauso wie auf der Baustelle.
            </p>
            <h3 data-reveal style={{ ["--i" as string]: 2 }} className="mt-xl text-title-md">
              Unser Einzugsgebiet
            </h3>
            <ul data-reveal style={{ ["--i" as string]: 2 }} className="mt-sm flex flex-wrap gap-xs">
              {catchment.map((place) => (
                <li key={place} className="pill bg-surface-soft px-md py-xs text-title-sm text-ink">
                  {place}
                </li>
              ))}
            </ul>
            <dl className="mt-xl grid max-w-[560px] grid-cols-2 gap-x-md gap-y-lg">
              {facts.map((f, i) => (
                <div key={f.label} data-reveal style={{ ["--i" as string]: i + 3 }}>
                  <dt className="text-body-sm text-body">{f.label}</dt>
                  <dd className="text-title-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <LocationMap className="aspect-[4/3] w-full rounded-sm bg-surface-soft lg:aspect-auto lg:h-[440px]" />
            <ul className="mt-md grid gap-md sm:grid-cols-2">
              {locations.map((loc) => (
                <li key={loc.id} className="rounded-sm bg-surface-soft p-md">
                  <address className="not-italic text-body-md text-ink">
                    <span className="flex items-center gap-xs font-bold">
                      <span aria-hidden className="size-3 shrink-0 rounded-full border-2 border-ink bg-primary" />
                      {loc.label}
                    </span>
                    {loc.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={loc.route}
                    target="_blank"
                    rel="noopener"
                    className="link link-underlined mt-xs inline-flex min-h-11 items-center gap-xs text-title-sm text-ink"
                  >
                    Route planen
                    <ArrowIcon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-xxl grid gap-lg lg:grid-cols-3">
          {regions.map((r, i) => {
            const Icon = icons[r.id];
            return (
              <li
                key={r.id}
                data-reveal
                style={{ ["--i" as string]: i }}
                className="card group flex flex-col p-lg has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ink sm:p-xl"
              >
                <span className="flex items-start justify-between gap-md">
                  <span className="flex size-14 items-center justify-center rounded-sm bg-surface-soft text-on-primary">
                    <Icon className="size-7" />
                  </span>
                  {r.badge && (
                    <span className="pill bg-surface-dark px-sm py-xxs text-body-sm font-bold text-on-dark">
                      {r.badge}
                    </span>
                  )}
                </span>
                {/* Nur die Überschrift ist der Link (kurzer Linkname für Screenreader), die Klickfläche reicht über die ganze Karte */}
                <h3 className="mt-lg text-display-sm">
                  <a href={r.href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                    {r.name}
                  </a>
                </h3>
                {/* Ortsnamen nicht in sich umbrechen (Bad Wörishofen, Dießen am Ammersee) */}
                <p className="mt-xs text-body-sm text-body">{r.places.map((p) => p.replaceAll(" ", "\u00a0")).join(" · ")}</p>
                <p className="mt-md text-body-md">{r.teaser}</p>
                <span aria-hidden className="mt-auto pt-lg text-title-sm text-balance text-ink">
                  {r.cta}
                  <ArrowIcon className="ml-xs inline size-4 align-[-2px] transition-transform duration-[180ms] group-hover:translate-x-1" />
                </span>
              </li>
            );
          })}
        </ul>

        <p data-reveal className="mt-xl text-body-md">
          Ihr Ort fehlt? Rufen Sie an – wir sagen Ihnen sofort, ob wir kommen:{" "}
          <a href={site.phone.href} className="link link-underlined font-bold text-ink tabular">
            {site.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
