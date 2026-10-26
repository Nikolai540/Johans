import { PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import type { PollutantSection } from "@/lib/subpages";

// Großer Bereich Schadstoffsanierung auf der Entkernungsseite (Sprungmarke #schadstoffsanierung)
export function Pollutants({ data }: { data: PollutantSection }) {
  return (
    <>
      <section
        id="schadstoffsanierung"
        aria-labelledby="schadstoffe-titel"
        className="on-dark scroll-mt-[var(--spacing-nav)] bg-surface-dark py-section text-on-dark"
      >
        <div className="page-x mx-auto max-w-page">
          <div className="grid gap-xl lg:grid-cols-12 lg:gap-lg">
            <div className="lg:col-span-7">
              <p data-reveal className="inline-block rounded-pill bg-primary px-sm py-xxs text-body-sm font-bold text-on-primary">
                {data.badge}
              </p>
              <h2 id="schadstoffe-titel" data-reveal style={{ ["--i" as string]: 1 }} className="mt-md text-display-md text-on-dark lg:text-display-lg">
                {data.h2}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-xl">
              <p data-reveal style={{ ["--i" as string]: 2 }} className="text-body-md text-on-dark sm:text-title-md sm:font-light">
                {data.intro}
              </p>
              <div data-reveal style={{ ["--i" as string]: 3 }} className="mt-xl flex flex-col gap-sm sm:flex-row sm:flex-wrap sm:[&>.btn]:whitespace-nowrap">
                <a href="#kontakt-formular" className="btn btn-primary">
                  Kostenlose Besichtigung anfragen
                </a>
                <a href={site.phone.href} className="btn btn-secondary">
                  <PhoneIcon className="size-4" />
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>

          <h3 data-reveal className="mt-section text-display-sm text-on-dark">
            So gehen wir vor
          </h3>
          <ol className="mt-xl grid gap-xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-lg">
            {data.steps.map((s, i) => (
              <li key={s.title} data-reveal style={{ ["--i" as string]: i % 4 }} className="card card-dark p-lg">
                <span aria-hidden className="text-display-sm text-primary tabular">
                  {i + 1}
                </span>
                <h4 className="mt-xs text-title-lg text-on-dark">{s.title}</h4>
                <p className="mt-xs text-body-md text-on-dark">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="bindung-titel" className="bg-surface-soft py-section">
        <div className="page-x mx-auto max-w-page">
          <h2 id="bindung-titel" data-reveal className="max-w-[24ch] text-display-md lg:text-display-lg">
            {data.binding.h2}
          </h2>
          <div className="mt-xxl grid gap-lg lg:grid-cols-2">
            {data.binding.items.map((b, i) => (
              <div key={b.title} data-reveal style={{ ["--i" as string]: i }} className="card p-lg sm:p-xl">
                <h3 className="text-display-sm">{b.title}</h3>
                <p className="mt-sm text-body-md">{b.text}</p>
              </div>
            ))}
          </div>
          <p data-reveal className="mt-xl max-w-[64ch] text-title-md text-ink">
            {data.binding.note}
          </p>

          <h2 data-reveal className="mt-section text-display-md lg:text-display-lg">
            {data.areas.h2}
          </h2>
          <ol className="mt-xxl grid gap-lg sm:grid-cols-2">
            {data.areas.items.map((a, i) => (
              <li key={a.title} data-reveal style={{ ["--i" as string]: i % 2 }} className="card p-lg sm:p-xl">
                <h3 className="flex items-start gap-sm text-title-lg">
                  <span aria-hidden className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-primary text-title-sm text-on-primary tabular">
                    {i + 1}
                  </span>
                  {a.title}
                </h3>
                <p className="mt-sm text-body-md">{a.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-section grid gap-xxl lg:grid-cols-12 lg:gap-lg">
            <div data-reveal className="card p-lg sm:p-xl lg:col-span-6">
              <h2 className="text-display-sm">{data.mineralwool.title}</h2>
              <p className="mt-sm text-body-md">{data.mineralwool.text}</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 data-reveal className="text-display-sm">
                {data.reasons.title}
              </h2>
              <ul data-reveal style={{ ["--i" as string]: 1 }} className="mt-lg grid gap-sm">
                {data.reasons.items.map((r) => (
                  <li key={r} className="flex gap-sm text-body-md text-ink">
                    <span aria-hidden className="mt-[0.55em] size-2 shrink-0 bg-primary" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
