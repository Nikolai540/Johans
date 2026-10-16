import Image from "next/image";

import { LoopVideo } from "@/components/LoopVideo";
import { steps } from "@/lib/content";
import { film, photos } from "@/lib/images";

// Vier Vollbild-Tafeln: das Verb bleibt mittig stehen, während Bilder der Region dahinter durchlaufen.
export function Process() {
  return (
    <section id="ablauf" aria-labelledby="ablauf-title" className="on-dark bg-surface-dark text-on-dark">
      <h2 id="ablauf-title" className="sr-only">
        So läuft Ihr Projekt ab
      </h2>
      <ol>
        {steps.map((step) => {
          const p = step.photo ? photos[step.photo] : null;
          return (
            <li key={step.verb} className="relative isolate h-svh min-h-[560px] overflow-clip">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                {p ? (
                  <div className="drift absolute inset-0">
                    <Image src={p.src} alt={p.alt} fill sizes="100vw" placeholder="blur" className="object-cover" />
                  </div>
                ) : (
                  <LoopVideo
                    webm={film.webm}
                    mp4={film.mp4}
                    poster={film.poster}
                    label={film.label}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div aria-hidden className="absolute inset-0 bg-surface-dark/45" />
              </div>
              <div className="flex h-full flex-col justify-center">
                <h3 className="sticky top-[calc(50%-0.55em)] text-center text-display-md text-on-dark sm:text-display-lg lg:text-display-xl">
                  {step.verb}
                </h3>
              </div>
              <div className="absolute inset-x-0 bottom-0">
                <div className="page-x mx-auto flex max-w-page flex-col gap-sm pb-xxl md:flex-row md:items-end md:justify-between">
                  <p className="max-w-[40ch] bg-surface-dark/70 p-md text-body-md text-on-dark sm:text-title-md sm:font-light">
                    {step.text}
                  </p>
                  <p className="text-body-sm text-on-dark-soft">{p ? p.caption : film.caption}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
