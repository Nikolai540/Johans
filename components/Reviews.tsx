import { ArrowIcon } from "@/components/Icons";
import { ReviewCarousel, Stars } from "@/components/ReviewCarousel";
import { formatRating, getReviews } from "@/lib/reviews";
import type { LocationId } from "@/lib/site";

// Aktuelle Google-Bewertungen als Karussell. Steht direkt unter der Galerie und teilt ihren dunklen Hintergrund,
// darum ohne Abstand nach oben: Beides wirkt wie ein Block.
export async function Reviews({ location }: { location: LocationId }) {
  const reviews = await getReviews(location);
  if (!reviews) return null;

  // overflow-x-clip: Karten, die seitlich hereinfliegen, verbreitern sonst kurz die Seite
  return (
    <section id="bewertungen" aria-labelledby="bewertungen-title" className="on-dark overflow-x-clip bg-surface-dark pb-section text-on-dark">
      <div className="page-x mx-auto grid max-w-page gap-xxl lg:grid-cols-12 lg:gap-lg">
        <div className="lg:col-span-4">
          <h2 id="bewertungen-title" data-reveal className="text-display-md text-on-dark lg:text-display-lg">
            Was unsere Kunden sagen
          </h2>
          <p data-reveal style={{ ["--i" as string]: 1 }} className="mt-md flex flex-wrap items-center gap-sm text-title-md text-on-dark">
            <Stars rating={reviews.rating} />
            {formatRating(reviews.rating)} von 5 bei {reviews.count} Bewertungen auf Google
          </p>
          <a
            data-reveal
            style={{ ["--i" as string]: 2 }}
            href={reviews.mapsUri}
            target="_blank"
            rel="noopener"
            className="link link-underlined mt-lg inline-flex min-h-11 items-center gap-xs text-title-sm text-on-dark"
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
