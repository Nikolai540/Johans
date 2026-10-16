import { places, serviceOrder, services } from "@/lib/content";
import { site } from "@/lib/site";

export const businessId = `${site.url}/#business`;

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const graph = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** LocalBusiness + WebSite – auf jeder Seite (layout.tsx) */
export function businessGraph() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    postalCode: site.address.postalCode,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  };
  if (site.address.street) address.streetAddress = site.address.street;

  return [
    {
      "@type": ["GeneralContractor", "LocalBusiness"],
      "@id": businessId,
      name: site.name,
      legalName: site.legalName,
      founder: { "@type": "Person", name: site.owner },
      url: `${site.url}/`,
      telephone: site.phone.e164,
      email: site.email,
      image: `${site.url}/images/landsberg-lechwehr.jpg`,
      logo: `${site.url}/logo.svg`,
      description:
        "Entrümpelung, Haushaltsauflösung, Entkernung, Abbruch, Rückbau, Renovierung, Sanierung, Trockenbau, Gartenbau und Vermittlung von Gewerken in Landsberg am Lech und Umgebung.",
      address,
      geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
      areaServed: [
        ...places.map((name) => ({ "@type": "City", name })),
        { "@type": "Place", name: "Ammersee" },
        { "@type": "AdministrativeArea", name: "Landkreis Landsberg am Lech" },
      ],
      openingHoursSpecification: site.hours
        .filter((h) => "opens" in h)
        .map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "days" in h ? h.days : [],
          opens: "opens" in h ? h.opens : undefined,
          closes: "closes" in h ? h.closes : undefined,
        })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungen",
        itemListElement: serviceOrder.map((id) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: services[id].name, description: services[id].text },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: "de-DE",
      publisher: { "@id": businessId },
    },
  ];
}

export function faqGraph(id: string, faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
