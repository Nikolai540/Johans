import { site } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="h-nav bg-canvas">
        <div className="page-x mx-auto flex h-full max-w-page items-center justify-between">
          <a href="/" className="flex min-h-11 items-center text-title-md text-ink">
            <span className="mr-xs bg-surface-dark px-xs py-xxs text-title-sm text-on-dark">J&L</span>
            Bauprojekte
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
