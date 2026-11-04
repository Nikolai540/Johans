type IconProps = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
  focusable: false,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Stadttor – Landsberg am Lech */
export function GateIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 21h16M6 21V5h2v2h2V5h4v2h2V5h2v16M10 21v-4a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

/** Segelboot auf Wellen – Ammersee */
export function SailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v12M12 4l6 9h-6M5 15h14M3 20c1.5-1.3 3-1.3 4.5 0s3 1.3 4.5 0 3-1.3 4.5 0 3 1.3 4.5 0" />
    </svg>
  );
}

/** Turm mit Kuppel (Perlachturm) – Augsburg */
export function TowerIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 21V9h8v12M6 21h12M9 9V7a3 3 0 0 1 6 0v2M12 4V2M11 21v-3a1 1 0 0 1 2 0v3M10.5 12h3" />
    </svg>
  );
}

/** Stadtmauer mit Zinnen – Schongau */
export function WallIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 21V9h3v2h3V9h3v2h3V9h3v2h3V9M3 21h18M21 9v12M9 21v-4a3 3 0 0 1 6 0v4" />
    </svg>
  );
}

/** Berge – Allgäu */
export function MountainIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 20l7-12 4 6 3-4 6 10H2M7.5 10.5l1.5 1.5 1.5-1.5" />
    </svg>
  );
}

/** Haus – Firmensitz */
export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 11l9-7 9 7M5 9.5V21h14V9.5M10 21v-6h4v6" />
    </svg>
  );
}
