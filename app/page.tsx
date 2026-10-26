import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { faqGraph, JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { MobileActions } from "@/components/MobileActions";
import { Region } from "@/components/Region";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a
        href="#inhalt"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-xs focus:left-xs focus:z-[60]"
      >
        Zum Inhalt springen
      </a>
      <JsonLd data={faqGraph(`${site.url}/#faq`, faqs)} />
      <SiteHeader />
      <main id="inhalt">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Region />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MobileActions />
    </>
  );
}
