import { LogoIcon } from "@/components/Logo";
import { site } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="on-dark h-nav border-b border-surface-dark-elevated bg-surface-dark">
        <div className="page-x mx-auto flex h-full max-w-page items-center justify-between">
          <a href="/" className="flex min-h-11 items-center text-title-md text-on-dark" aria-label={`${site.name} – Startseite`}>
            <LogoIcon className="mr-sm h-9 w-auto" />
          <span className="max-[359px]:hidden">J&amp;L Bauprojekte</span>
          </a>
          <a href={site.phone.href} className="btn btn-primary">
            Jetzt anrufen
          </a>
        </div>
      </header>
      <main className="page-x mx-auto max-w-page py-section">
        <h1 className="text-display-md lg:text-display-lg">{title}</h1>
        <div className="mt-xl max-w-[70ch] space-y-md text-body-md [&_h2]:mt-xl [&_h2]:text-display-sm">{children}</div>
        <a href="/" className="link link-underlined mt-xxl inline-flex min-h-11 items-center text-title-sm text-ink">
          Zur Startseite
        </a>
      </main>
    </>
  );
}
