"use client";

import { useSyncExternalStore } from "react";

// Einwilligung für externe Inhalte (Google Maps). Gespeichert wird nur die Wahl selbst, technisch notwendig.
export type Consent = "granted" | "denied" | null;

const KEY = "jl-consent";
const EVENT = "jl-consentchange";

function read(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/** null löscht die Wahl, der Banner erscheint dann wieder */
export function setConsent(value: Consent) {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {
    // Speicher gesperrt: Wahl gilt nur bis zum Neuladen
  }
  memory = value;
  window.dispatchEvent(new Event(EVENT));
}

let memory: Consent | undefined;

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** undefined: noch nicht bekannt (Server, vor dem Hydrieren) */
export function useConsent(): Consent | undefined {
  return useSyncExternalStore(
    subscribe,
    () => read() ?? memory ?? null,
    () => undefined,
  );
}
