import type { CapabilitySummary } from "./types";

export const CAPABILITIES: CapabilitySummary[] = [
  {
    slug: "storage-tanks",
    name: "Storage Tanks",
    shortName: "Storage Tanks",
    tagline: "API 650 / API 620 / AWWA-referenced tank fabrication",
    description:
      "Steel storage tank design, fabrication and installation referenced against API 650, API 620 and AWWA standards, from water storage to large fixed-roof tanks.",
    highlights: ["API 650 / API 620 / AWWA reference", "Dome & fixed-roof construction", "Site installation support"],
    image: {
      src: "/images/global/hillside-tank-farm-construction-aerial-1.webp",
      alt: "Storage tanks under construction on a hillside industrial site",
    },
    icon: "tank",
  },
  {
    slug: "pressure-vessels",
    name: "Pressure Vessels",
    shortName: "Pressure Vessels",
    tagline: "ASME-referenced pressure vessel fabrication",
    description:
      "Pressure vessels and surge vessels fabricated to ASME-referenced practice, engineered around the customer's process and pressure requirements.",
    highlights: ["ASME-referenced fabrication", "Surge vessels up to 150 T handled", "Full QC checkpoint process"],
    image: {
      src: "/images/global/pressure-vessel-shell-welding-fabrication-bay.webp",
      alt: "Cylindrical pressure vessel shell fabrication with flanged nozzles in a fabrication bay",
    },
    icon: "vessel",
  },
  {
    slug: "process-piping",
    name: "Process Piping",
    shortName: "Process Piping",
    tagline: "Piping spool & pump-station mechanical fabrication",
    description:
      "Process piping and pipe-spool fabrication in carbon and stainless steel, including skid manufacturing and pump-station mechanical scope.",
    highlights: ["Carbon & stainless steel spools", "Skid & pump-station mechanical works", "800 inch-dia / month capacity"],
    image: {
      src: "/images/global/large-diameter-pipe-spools-desert-yard.webp",
      alt: "Large-diameter steel pipe spools staged at a fabrication and staging yard",
    },
    icon: "piping",
  },
  {
    slug: "steel-structures",
    name: "Steel Structures",
    shortName: "Steel Structures",
    tagline: "Structural steel fabrication referenced to EN 1090",
    description:
      "Structural and architectural steel fabrication, with factory production control referenced against EN 1090-1 up to execution class EXC4.",
    highlights: ["EN 1090-1 (EXC4) reference", "Beam welding machine (BWM) capability", "Structural + architectural steel"],
    image: {
      src: "/images/global/octagonal-steel-platform-structure-erection.webp",
      alt: "Steel platform structure being erected on site with a mobile crane",
    },
    icon: "structure",
  },
  {
    slug: "mechanical-works",
    name: "Mechanical Works",
    shortName: "Mechanical Works",
    tagline: "Mechanical installation & heavy lifting",
    description:
      "Mechanical installation works including pump-station mechanical scope, skid works and heavy lifting of vessels and equipment.",
    highlights: ["Pump-station mechanical scope", "Heavy lifting up to 150 T", "Site-managed installation"],
    image: {
      src: "/images/global/torishima-pump-station-motor-room.webp",
      alt: "Pump station equipment room with motor-driven pumps, piping and gauges",
    },
    icon: "mechanical",
  },
  {
    slug: "industrial-firefighting",
    name: "Industrial Firefighting",
    shortName: "Firefighting",
    tagline: "Firefighting tanks & system fabrication",
    description:
      "Design and fabrication of firefighting tanks and supporting steelwork for industrial fire-protection systems.",
    highlights: ["Firefighting tank fabrication", "Industrial fire-system steelwork", "Engineered to site requirement"],
    image: {
      src: "/images/fire-fighting/fire-pump-room-red-blue-piping.webp",
      alt: "Fire protection pump room with colour-coded piping, valves and a fire pump motor",
    },
    icon: "firefighting",
  },
  {
    slug: "special-welding-machines",
    name: "Special Welding Machines",
    shortName: "Welding Machines",
    tagline: "EGW / SAW / BWM / C&B machine design & fabrication",
    description:
      "In-house design and fabrication of special-purpose welding machines — EGW, SAW, BWM and C&B — built to client-specific technical requirements.",
    highlights: ["EGW up to 30mm plate thickness", "Double-head SAW & BWM machines", "Supplied to UAE & Saudi Arabia clients"],
    image: {
      src: "/images/machines/automatic-tank-wall-welding-equipment-operator.webp",
      alt: "Technician operating automatic welding equipment mounted against a storage tank wall",
    },
    icon: "welding",
  },
  {
    slug: "manpower-supply",
    name: "Manpower Supply",
    shortName: "Manpower Supply",
    tagline: "Domestic & overseas skilled manpower",
    description:
      "Supply of qualified engineers, fabricators, welders, fitters, riggers and crane operators for domestic and overseas projects, including Turkey, Saudi Arabia and the UAE.",
    highlights: ["Qualified, trade-tested personnel", "Domestic & GCC / Turkey deployment", "Engineers to riggers & crane operators"],
    image: {
      src: "/images/global/steel-plate-marking-fitting-desert-yard.webp",
      alt: "Workers marking and fitting large flanged steel plates at a fabrication yard",
    },
    icon: "manpower",
  },
];

export function getCapability(slug: string) {
  return CAPABILITIES.find((c) => c.slug === slug);
}
