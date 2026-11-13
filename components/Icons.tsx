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

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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

export function PauseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 5v14M16 5v14" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 4l13 8-13 8z" />
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
