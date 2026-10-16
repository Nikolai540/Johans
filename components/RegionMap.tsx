// Vereinfachte Karte der Region (Maßstab ca. 1:100 000, Norden oben).
// Projektion: x = (Länge − 10,65°) · 74,5 km, y = (48,15° − Breite) · 111 km, 10 Einheiten = 1 km.
const towns: { name: string; x: number; y: number; anchor: "start" | "end"; dx: number; dy: number }[] = [
  { name: "Kaufering", x: 168, y: 67, anchor: "start", dx: 14, dy: 7 },
  { name: "Buchloe", x: 56, y: 130, anchor: "start", dx: -14, dy: -16 },
  { name: "Schondorf", x: 330, y: 106, anchor: "end", dx: -12, dy: 7 },
  { name: "Utting", x: 328, y: 138, anchor: "end", dx: -12, dy: 7 },
  { name: "Dießen", x: 338, y: 218, anchor: "start", dx: 40, dy: 32 },
];

export function RegionMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 333"
      role="img"
      aria-labelledby="karte-titel karte-text"
      className={className}
    >
      <title id="karte-titel">Einsatzgebiet von J&L Bauprojekte</title>
      <desc id="karte-text">
        Karte mit dem Lech von Süden nach Norden, dem Firmensitz Vilgertshofen, Landsberg am Lech und Kaufering am Fluss, Buchloe im Westen und
        dem Ammersee mit Schondorf, Utting und Dießen im Osten.
      </desc>
      {/* Ammersee */}
      <path
        d="M350 89 L338 100 L331 112 L329 135 L333 160 L338 190 L340 215 L348 240 L358 255 L366 248 L372 225 L382 195 L388 168 L384 145 L372 120 L362 100 Z"
        className="fill-surface-dark-elevated"
      />
      <text x="394" y="196" className="fill-on-dark-soft" fontSize="21" fontWeight="300">
        Ammersee
      </text>
      {/* Lech */}
      <path
        d="M186 333 C200 300 205 270 195 240 S172 170 175 144 S160 118 164 113 S170 80 168 67 S172 20 171 0"
        fill="none"
        className="stroke-on-dark-soft"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text x="212" y="270" className="fill-on-dark-soft" fontSize="21" fontWeight="300">
        Lech
      </text>
      {towns.map((t) => (
        <g key={t.name}>
          <circle cx={t.x} cy={t.y} r="5" className="fill-on-dark-soft" />
          <text x={t.x + t.dx} y={t.y + t.dy} textAnchor={t.anchor} className="fill-on-dark" fontSize="21" fontWeight="400">
            {t.name}
          </text>
        </g>
      ))}
      {/* Landsberg am Lech */}
      <circle cx="164" cy="113" r="8" className="fill-on-dark" />
      <text x="152" y="148" textAnchor="end" className="fill-on-dark" fontSize="22" fontWeight="700">
        Landsberg
      </text>
      <text x="152" y="174" textAnchor="end" className="fill-on-dark" fontSize="22" fontWeight="700">
        am Lech
      </text>
      {/* Firmensitz: Vilgertshofen */}
      <circle cx="210" cy="222" r="11" className="fill-on-dark" />
      <text x="226" y="230" className="fill-on-dark" fontSize="22" fontWeight="700">
        Vilgertshofen
      </text>
    </svg>
  );
}
