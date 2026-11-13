"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { LogoIcon } from "@/components/Logo";
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { locations, nav, serviceNav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLDetailsElement>(null);
  // Auf einer der beiden Startseiten bleiben Sprungmarken wie "/#faq" auf dieser Seite
  const home = locations.find((l) => l.home.replace(/\/$/, "") === pathname.replace(/\/$/, ""))?.home;
  const to = (href: string) => (home && href.startsWith("/#") ? home + href.slice(1) : href);

  // Aktive Sprungmarke auf der Startseite hervorheben
  useEffect(() => {
    if (!home) return;
    const sections = nav
      .filter((l) => l.href.startsWith("/#"))
      .map((l) => document.getElementById(l.href.slice(2)))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`/#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [home]);

  // Offenes Menü: Fokus ins Menü, Rest der Seite für Tastatur und Screenreader sperren, Escape schließt
  useEffect(() => {
    if (!open) return;
    const header = headerRef.current!;
    const locked = [...document.body.children].filter(
      (el): el is HTMLElement => el instanceof HTMLElement && !el.contains(header) && !el.inert,
    );
    locked.forEach((el) => (el.inert = true));
    header.querySelector<HTMLElement>("#mobile-menu a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      locked.forEach((el) => (el.inert = false));
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Offenes Leistungen-Menü schließt bei Klick oder Fokus außerhalb und mit Escape.
  // Die Listener hängen dauerhaft, damit auch schnelles Enter, Tab, Escape greift.
  useEffect(() => {
    const details = servicesRef.current!;
    const onOutside = (e: Event) => {
      if (details.open && !details.contains(e.target as Node)) details.open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !details.open) return;
      details.open = false;
      details.querySelector("summary")?.focus();
    };
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Auf einer Leistungsseite steht ihr Name statt "Leistungen" im Menü
  const activeService = serviceNav.find((l) => pathname === l.href);
  const servicesLabel = activeService ? (
    <span>
      <span className="sr-only">Leistungen: </span>
      {activeService.label}
    </span>
  ) : (
    "Leistungen"
  );
  const isActive = (href: string) => (href.startsWith("/#") ? active === href : pathname === href);

  return (
    <header ref={headerRef} className="on-dark sticky top-0 z-50 h-nav border-b border-surface-dark-elevated bg-surface-dark text-on-dark">
      <div className="page-x mx-auto flex h-full max-w-page items-center justify-between gap-lg">
        <a href="/" className="flex min-h-11 shrink-0 items-center text-title-md" aria-label={`${site.name} – Startseite`}>
          <LogoIcon className="mr-sm h-9 w-auto" />
          <span className="max-[22.5rem]:hidden">J&amp;L Bauprojekte</span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden xl:block">
          <ul className="flex items-center gap-lg">
            <li>
              <details ref={servicesRef} className="group relative">
                <summary
                  className={`link inline-flex min-h-11 cursor-pointer items-center gap-xxs text-nav-link ${
                    activeService ? "font-bold text-on-dark link-underlined" : "text-on-dark-soft"
                  }`}
                >
                  {servicesLabel}
                  <ChevronIcon className="size-4 transition-transform duration-[180ms] group-open:rotate-180" />
                </summary>
                <ul className="absolute left-0 top-full min-w-56 border border-surface-dark-elevated bg-surface-dark py-xs">
                  {serviceNav.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        aria-current={pathname === l.href ? "page" : undefined}
                        className={`flex min-h-11 items-center px-md text-nav-link hover:bg-surface-dark-elevated ${
                          pathname === l.href ? "font-bold text-on-dark" : "text-on-dark-soft hover:text-on-dark"
                        }`}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={to(l.href)}
                  aria-current={isActive(l.href) ? (l.href.startsWith("/#") ? "location" : "page") : undefined}
                  className={`link inline-flex min-h-11 items-center text-nav-link ${
                    isActive(l.href) ? "font-bold text-on-dark link-underlined" : "text-on-dark-soft"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-xs">
          <a href={site.phone.href} className="btn btn-primary hidden xl:inline-flex">
            <PhoneIcon className="size-4" />
            Jetzt anrufen
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-whatsapp hidden xl:inline-flex">
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </a>
          <a
            href={site.phone.href}
            className="btn btn-primary size-11 min-h-11 p-0 xl:hidden"
            aria-label={`Jetzt anrufen: ${site.phone.display}`}
          >
            <PhoneIcon className="size-5" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="fixed inset-x-0 top-nav bottom-0 overflow-y-auto bg-surface-dark xl:hidden">
        <nav aria-label="Mobile Navigation" className="page-x flex min-h-full flex-col pb-xl pt-lg">
          <ul className="flex flex-col">
            <li>
              <details className="group">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-md text-display-sm text-on-dark">
                  {servicesLabel}
                  <ChevronIcon className="size-6 shrink-0 transition-transform duration-[180ms] group-open:rotate-180" />
                </summary>
                <ul className="flex flex-col pb-xs pl-md">
                  {serviceNav.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center text-title-lg text-on-dark-soft">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            {nav.map((l) => (
              <li key={l.href}>
                <a href={to(l.href)} onClick={() => setOpen(false)} className="flex min-h-14 items-center text-display-sm text-on-dark">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-sm pt-xxl">
            <a href={site.phone.href} className="btn btn-primary w-full" onClick={() => setOpen(false)}>
              <PhoneIcon className="size-4" />
              Jetzt anrufen · {site.phone.display}
            </a>
            <a href="#kontakt-formular" className="btn w-full bg-surface-dark-elevated text-on-dark" onClick={() => setOpen(false)}>
              Kontakt aufnehmen
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
