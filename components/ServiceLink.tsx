"use client";

import type { ServiceId } from "@/lib/content";

export const SERVICE_EVENT = "jl:select-service";

// Springt zum Formular und wählt die Leistung dort vor. Ohne JavaScript bleibt es ein normaler Anker.
export function ServiceLink({
  id,
  children,
  className,
}: {
  id: ServiceId;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#kontakt-formular"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent<ServiceId>(SERVICE_EVENT, { detail: id }))}
    >
      {children}
    </a>
  );
}
