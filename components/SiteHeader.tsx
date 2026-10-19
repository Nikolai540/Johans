"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LogoIcon } from "@/components/Logo";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Aktive Sprungmarke auf der Startseite hervorheben
  useEffect(() => {
    if (pathname !== "/") return;
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
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href.startsWith("/#") ? active === href : pathname === href);

  return (
    <header className="on-dark sticky top-0 z-50 h-nav border-b border-surface-dark-elevated bg-surface-dark text-on-dark">
      <div className="page-x mx-auto flex h-full max-w-page items-center justify-between gap-lg">
        <a href="/" className="flex min-h-11 shrink-0 items-center text-title-md" aria-label={`${site.name} – Startseite`}>
          <LogoIcon className="mr-sm h-9 w-auto" />
          <span className="max-[359px]:hidden">J&amp;L Bauprojekte</span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden xl:block">
          <ul className="flex items-center gap-lg">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
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
          <a
            href={site.phone.href}
            className="btn btn-primary size-11 min-h-11 p-0 xl:hidden"
            aria-label={`Jetzt anrufen: ${site.phone.display}`}
          >
            <PhoneIcon className="size-5" />
          </a>
          <button
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
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center text-display-sm text-on-dark">
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
