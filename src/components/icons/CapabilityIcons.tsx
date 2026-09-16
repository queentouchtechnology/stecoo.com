import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 48 48",
};

export function TankIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="24" cy="12" rx="14" ry="4.5" />
      <path d="M10 12v20c0 2.5 6.3 4.5 14 4.5s14-2 14-4.5V12" />
      <path d="M10 22c0 2.5 6.3 4.5 14 4.5s14-2 14-4.5" opacity="0.5" />
    </svg>
  );
}

export function VesselIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="14" y="8" width="20" height="32" rx="10" />
      <line x1="8" y1="24" x2="14" y2="24" />
      <line x1="34" y1="24" x2="40" y2="24" />
      <circle cx="24" cy="14" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PipingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 16h14a6 6 0 0 1 6 6v10" />
      <circle cx="8" cy="16" r="3.4" />
      <circle cx="28" cy="32" r="3.4" />
      <path d="M14 32h12" opacity="0.5" />
      <path d="M34 26v10" opacity="0.5" />
    </svg>
  );
}

export function StructureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 40V14l14-6 14 6v26" />
      <path d="M10 14 24 22l14-8" />
      <line x1="24" y1="22" x2="24" y2="40" />
      <line x1="10" y1="27" x2="38" y2="27" opacity="0.5" />
      <line x1="10" y1="34" x2="38" y2="34" opacity="0.5" />
    </svg>
  );
}

export function MechanicalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="20" cy="24" r="7" />
      <circle cx="20" cy="24" r="2" fill="currentColor" stroke="none" />
      <path d="M20 14v3M20 31v3M11 24h3M26 24h3M13.5 17.5l2 2M24.5 28.5l2 2M13.5 30.5l2-2M24.5 19.5l2-2" />
      <path d="M32 24h8" opacity="0.5" />
    </svg>
  );
}

export function FirefightingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M24 8c4 6-2 8-2 13a6 6 0 0 0 12 0c0-2-1-3.5-2.5-5 1 5-1.5 7-3.5 7 2-4-1-6-1-9.5 0-2-1-4-3-5.5Z" />
      <path d="M16 26c-3 3-4 6-4 9a12 12 0 0 0 24 0c0-2-.3-4-1-6" opacity="0.6" />
    </svg>
  );
}

export function WeldingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="20" width="14" height="8" rx="1.5" />
      <path d="M22 24h6" />
      <path d="M28 24 40 14" />
      <path d="M34 10l3 3-9 9-4-1 1-4Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M14 12l1.5 2M18 10l.8 2.3M11 16l2 1.2" opacity="0.7" />
    </svg>
  );
}

export function ManpowerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="17" cy="14" r="4.2" />
      <path d="M9 34c0-6 3.6-10 8-10s8 4 8 10" />
      <circle cx="32" cy="17" r="3.4" opacity="0.6" />
      <path d="M26 34c.3-5 3-8.4 6-8.4s5.4 3 6 7.4" opacity="0.6" />
    </svg>
  );
}

export const CAPABILITY_ICONS: Record<string, (props: IconProps) => React.ReactElement> = {
  tank: TankIcon,
  vessel: VesselIcon,
  piping: PipingIcon,
  structure: StructureIcon,
  mechanical: MechanicalIcon,
  firefighting: FirefightingIcon,
  welding: WeldingIcon,
  manpower: ManpowerIcon,
};
