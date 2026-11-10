// Google-Bewertungen über die Places API (New). Der Abruf läuft auf dem Server, der Browser spricht nicht mit Google.
// Ohne GOOGLE_PLACES_API_KEY und GOOGLE_PLACE_ID oder bei einem Fehler gibt es null, der Abschnitt entfällt dann.

export type Review = { author: string; authorUri?: string; rating: number; text: string; when: string };
export type Reviews = { rating: number; count: number; mapsUri: string; items: Review[] };

type ApiReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string };
};

export async function getReviews(): Promise<Reviews | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const id = process.env.GOOGLE_PLACE_ID;
  if (!key || !id) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(id)}?languageCode=de`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews" },
      // Einmal am Tag neu, so bleiben die Abrufe im kostenlosen Kontingent
      next: { revalidate: 86400 },
    });
    if (!res.ok) {
      console.error("Google-Bewertungen:", res.status, await res.text());
      return null;
    }
    const data: { rating?: number; userRatingCount?: number; googleMapsUri?: string; reviews?: ApiReview[] } = await res.json();
    const items = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google-Nutzer",
        authorUri: r.authorAttribution?.uri,
        rating: r.rating ?? 0,
        // Originaltext statt maschineller Übersetzung
        text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
        when: r.relativePublishTimeDescription ?? "",
      }))
      .filter((r) => r.text);
    if (!items.length || !data.rating || !data.googleMapsUri) return null;
    return { rating: data.rating, count: data.userRatingCount ?? items.length, mapsUri: data.googleMapsUri, items };
  } catch (e) {
    console.error("Google-Bewertungen:", e);
    return null;
  }
}
