"use client";

import "leaflet/dist/leaflet.css";

import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";

import { locations } from "@/lib/site";

// Einzugsgebiet von Augsburg bis ins Allgäu – die Karte zeigt beim Laden diesen Ausschnitt
const bounds: [number, number][] = [
  [48.38, 10.47],
  [47.77, 11.18],
];

const escape = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

// Echte Karte (OpenStreetMap) mit beiden Standorten. Leaflet wird erst geladen, wenn die Karte in Sichtweite kommt.
export function LocationMap({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let map: LeafletMap | undefined;
    let cancelled = false;

    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const L = (await import("leaflet")).default;
        if (cancelled) return;
        const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
        map = L.map(el, {
          scrollWheelZoom: false,
          // Auf Touch-Geräten scrollt ein Finger die Seite, gezoomt wird mit zwei Fingern
          dragging: !L.Browser.mobile,
          zoomAnimation: !still,
          fadeAnimation: !still,
          markerZoomAnimation: !still,
        });
        map.attributionControl.setPrefix(false);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
        }).addTo(map);

        const icon = L.divIcon({ className: "map-pin", html: "<span></span>", iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -16] });
        for (const loc of locations) {
          L.marker([loc.lat, loc.lng], { icon, title: loc.label, alt: loc.label, riseOnHover: true })
            .addTo(map)
            .bindPopup(
              `<p class="map-popup-title">${escape(loc.label)}</p>` +
                `<p class="map-popup-address">${loc.lines.map(escape).join("<br>")}</p>` +
                `<a class="map-popup-route" href="${loc.route}" target="_blank" rel="noopener">Route planen</a>`,
              { minWidth: 200 },
            );
        }
        map.fitBounds(bounds, { padding: [16, 16] });
      },
      { rootMargin: "300px" },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      map?.remove();
    };
  }, []);

  return <div ref={ref} role="region" aria-label="Karte mit unseren Standorten" className={`location-map isolate ${className ?? ""}`} />;
}
