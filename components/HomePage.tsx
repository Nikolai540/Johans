import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { faqGraph, JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { MobileActions } from "@/components/MobileActions";
import { Region } from "@/components/Region";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { faqs } from "@/lib/content";
import { homeCopy } from "@/lib/homes";
import { locationById, site, type LocationId } from "@/lib/site";

// Startseite, je Standort eine: "/" für Landsberg am Lech, "/vilgertshofen/" für den Firmensitz
export function HomePage({ location }: { location: LocationId }) {
  const loc = locationById(location);
  return (
    <>
      <a
        href="#inhalt"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-xs focus:left-xs focus:z-[60]"
      >
        Zum Inhalt springen
      </a>
      <JsonLd data={faqGraph(`${site.url}${loc.home}#faq`, [...homeCopy[location].faqs, ...faqs])} />
      <SiteHeader />
      <main id="inhalt">
        <Hero location={location} />
        <About location={location} />
        <Services />
        <Gallery />
        <Reviews location={location} />
        <Region location={location} />
        <Faq extra={homeCopy[location].faqs} />
        <Contact />
      </main>
      <SiteFooter home={loc.home} />
      <MobileActions />
    </>
  );
}
