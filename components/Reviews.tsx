import { ArrowIcon } from "@/components/Icons";
import { ReviewCarousel, Stars } from "@/components/ReviewCarousel";
import { getReviews } from "@/lib/reviews";

// Aktuelle Google-Bewertungen als Karussell
export async function Reviews() {
  const reviews = await getReviews();
  if (!reviews) return null;

  // overflow-x-clip: Karten, die seitlich hereinfliegen, verbreitern sonst kurz die Seite
  return (
    <section id="bewertungen" aria-labelledby="bewertungen-title" className="overflow-x-clip bg-surface-soft py-section">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        <div className="lg:col-span-4">
          <h2 id="bewertungen-title" data-reveal className="text-display-md lg:text-display-lg">
            Was unsere Kunden sagen
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md flex flex-wrap items-center gap-sm text-title-md text-ink">
            <Stars rating={reviews.rating} />
            {reviews.rating.toLocaleString("de-DE", { maximumFractionDigits: 1 })} von 5 bei {reviews.count} Bewertungen auf Google
          </p>
          <a
            data-reveal
            style={{ ["--i" as string]: 2 }}
            href={reviews.mapsUri}
            target="_blank"
            rel="noopener"
            className="link link-underlined mt-lg inline-flex min-h-11 items-center gap-xs text-title-sm text-ink"
          >
            Alle Bewertungen auf Google
            <ArrowIcon className="size-4" />
          </a>
        </div>
        <ReviewCarousel items={reviews.items} className="lg:col-span-8" />
      </div>
    </section>
  );
}
