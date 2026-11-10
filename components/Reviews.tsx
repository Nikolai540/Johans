import { ArrowIcon } from "@/components/Icons";
import { getReviews } from "@/lib/reviews";

const de = (n: number) => n.toLocaleString("de-DE", { maximumFractionDigits: 1 });

function Stars({ rating }: { rating: number }) {
  return (
    <span role="img" aria-label={`${de(rating)} von 5 Sternen`} className="flex gap-xxs text-secondary">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 24 24" aria-hidden className={`size-5 ${n <= Math.round(rating) ? "fill-current" : "fill-hairline-strong"}`}>
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

// Aktuelle Google-Bewertungen. Die Karten fliegen abwechselnd von links und rechts herein.
export async function Reviews() {
  const reviews = await getReviews();
  if (!reviews) return null;

  // overflow-x-clip: Karten, die von rechts hereinfliegen, verbreitern sonst kurz die Seite
  return (
    <section id="bewertungen" aria-labelledby="bewertungen-title" className="overflow-x-clip bg-surface-soft py-section">
      <div className="page-x mx-auto max-w-page">
        <div className="flex flex-col gap-md lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="bewertungen-title" data-reveal className="text-display-md lg:text-display-lg">
              Was unsere Kunden sagen
            </h2>
            <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md flex flex-wrap items-center gap-sm text-title-md text-ink">
              <Stars rating={reviews.rating} />
              {de(reviews.rating)} von 5 bei {reviews.count} Bewertungen auf Google
            </p>
          </div>
          <a
            data-reveal
            style={{ ["--i" as string]: 2 }}
            href={reviews.mapsUri}
            target="_blank"
            rel="noopener"
            className="link link-underlined inline-flex min-h-11 items-center gap-xs text-title-sm text-ink"
          >
            Alle Bewertungen auf Google
            <ArrowIcon className="size-4" />
          </a>
        </div>

        <ul className="mt-xxl grid gap-lg md:grid-cols-2">
          {reviews.items.map((r, i) => (
            <li key={r.author + r.when} data-reveal={i % 2 ? "right" : "left"} className="card flex flex-col p-lg sm:p-xl">
              <Stars rating={r.rating} />
              <blockquote className="mt-md whitespace-pre-line text-body-md">{r.text}</blockquote>
              <p className="mt-auto flex items-center gap-sm pt-lg text-body-sm text-body">
                <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-strong text-title-sm text-ink">
                  {r.author.charAt(0).toUpperCase()}
                </span>
                <span>
                  {r.authorUri ? (
                    <a href={r.authorUri} target="_blank" rel="noopener" className="link font-bold text-ink">
                      {r.author}
                    </a>
                  ) : (
                    <span className="font-bold text-ink">{r.author}</span>
                  )}
                  {r.when && <span className="block">{r.when} auf Google</span>}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
