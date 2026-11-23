// Logo von J&L Bauprojekte, freigestellt: orange Steine, weißer Schriftzug. Nur auf dunklem Grund einsetzen.
export function Logo({ className, alt = "" }: { className?: string; alt?: string }) {
  // eslint-disable-next-line @next/next/no-img-element -- SVG, braucht keine Bildoptimierung
  return <img src="/logo-freigestellt.svg" alt={alt} width={932} height={342} className={className} />;
}
