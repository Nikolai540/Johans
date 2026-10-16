import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { MobileActions } from "@/components/MobileActions";
import { Network } from "@/components/Network";
import { Process } from "@/components/Process";
import { Region } from "@/components/Region";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <a
        href="#inhalt"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-xs focus:left-xs focus:z-[60]"
      >
        Zum Inhalt springen
      </a>
      <SiteHeader />
      <main id="inhalt">
        <Hero />
        <About />
        <Services />
        <Process />
        <Region />
        <Network />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MobileActions />
    </>
  );
}
