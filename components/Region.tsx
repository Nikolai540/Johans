import { ArrowIcon, GateIcon, HomeIcon, MountainIcon, SailIcon, TowerIcon, WallIcon } from "@/components/Icons";
import { LocationMap } from "@/components/LocationMap";
import { regions, type RegionId } from "@/lib/regions";
import { homeCopy } from "@/lib/homes";
import { getRating } from "@/lib/reviews";
import { locationById, locations, site, type LocationId } from "@/lib/site";


const icons: Record<RegionId, typeof GateIcon> = {
  landsberg: GateIcon,
  ammersee: SailIcon,
  buchloe: HomeIcon,
  augsburg: TowerIcon,
  schongau: WallIcon,
  allgaeu: MountainIcon,
};

// Karte und Card zeigen den Standort der jeweiligen Startseite, darunter der Link zur Startseite des anderen
export async function Region({ location }: { location: LocationId }) {
  const { rating, reviews } = await getRating(location);
  const facts = [
    { label: "Standorte", value: `${site.branch.locality} und ${site.address.locality}` },
    { label: "Erfahrung", value: `${site.proof.years} Jahre, über ${site.proof.projects} Projekte` },
    { label: "Google-Bewertung", value: `${rating} von 5 (${reviews} Bewertungen)` },
    { label: "Ansprechpartner", value: site.owner },
  ];
  const loc = locationById(location);
  const other = locations.find((l) => l.id !== location)!;
  const copy = homeCopy[location];
  return (
    <section id="einsatzgebiet" aria-labelledby="einsatzgebiet-title" className="bg-canvas py-section">
      <div className="page-x mx-auto max-w-page">
        <div className="grid gap-xxl lg:grid-cols-12 lg:gap-lg">
          <div className="lg:col-span-6">
            <h2 id="einsatzgebiet-title" data-reveal className="text-display-md lg:text-display-lg">
              {copy.regionTitle}
            </h2>
            <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg max-w-[60ch] text-title-md text-ink">
              {copy.regionIntro}
            </p>
            <h3 data-reveal style={{ ["--i" as string]: 2 }} className="mt-xl text-title-md">
              Unser Einzugsgebiet
            </h3>
            <ul data-reveal style={{ ["--i" as string]: 2 }} className="mt-sm flex flex-wrap gap-xs">
              {copy.places.map((place) => (
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
            <LocationMap location={location} className="aspect-[4/3] w-full rounded-sm bg-surface-soft lg:aspect-auto lg:h-[440px]" />
            <div className="mt-md flex flex-col gap-md rounded-sm bg-surface-soft p-lg sm:flex-row sm:items-end sm:justify-between">
              <address className="not-italic text-title-md font-light text-ink">
                <span className="flex items-center gap-xs text-title-lg">
                  <span aria-hidden className="size-3.5 shrink-0 rounded-full border-2 border-ink bg-primary" />
                  {loc.label}
                </span>
                {loc.lines.map((line) => (
                  <span key={line} className="mt-xxs block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={loc.route}
                target="_blank"
                rel="noopener"
                className="link link-underlined inline-flex min-h-11 shrink-0 items-center gap-xs text-title-sm text-ink"
              >
                Route planen
                <ArrowIcon className="size-4" />
              </a>
            </div>
            <a href={other.home} className="link link-underlined mt-sm inline-flex min-h-11 items-center gap-xs text-title-sm text-ink">
              Zum {other.label}
              <ArrowIcon className="size-4" />
            </a>
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
      </div>
    </section>
  );
}
