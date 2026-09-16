import type { ProjectCaseStudy } from "./types";

const TEAM_ATTRIBUTION_NOTE =
  "This project represents prior professional experience of members of STECOO's engineering and leadership team before the incorporation of STECOO Steeltech Engineering & Construction Operations LLP on 29 June 2023.";

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "national-water-co-storage-tank-saudi-arabia",
    title: "National Water Co. Storage Tank",
    location: "Saudi Arabia",
    period: "2014",
    client: "National Water Company, Saudi Arabia",
    scope:
      "Fabrication, installation and equipment selection for a 190 m³ water storage tank, including dome-roof installation.",
    role: "Krishna Uppala — Site Manager",
    attribution: "team-experience",
    attributionNote: TEAM_ATTRIBUTION_NOTE,
    technicalDetails: [
      "Capacity: 190 m³",
      "Dome roof lifted using 72 purpose-designed and manufactured hydraulic lifting jacks",
      "25 roof sections lifted during installation",
    ],
    images: [
      {
        src: "/images/global/aluminum-geodesic-dome-roof-construction-1.webp",
        alt: "Aluminum geodesic dome tank roof under construction with a crane lifting panels into place",
      },
      {
        src: "/images/global/aluminum-geodesic-dome-roof-construction-2.webp",
        alt: "Workers on aerial lifts assembling an aluminum geodesic dome tank roof structure",
      },
      {
        src: "/images/hero/aluminum-dome-roof-lattice-interior.webp",
        alt: "Aluminum geodesic dome tank roof lattice structure viewed from inside",
      },
    ],
    relatedCapabilities: ["storage-tanks"],
    relatedIndustries: ["water-treatment"],
    category: "storage-tanks",
  },
  {
    slug: "swcc-fixed-roof-storage-tank",
    title: "SWCC Fixed-Column-Roof Storage Tank",
    location: "Abha, Saudi Arabia",
    period: "2014–2022",
    client: "Saline Water Conversion Corporation (SWCC)",
    scope: "Fabrication and installation of a large fixed-column-roof steel storage tank.",
    attribution: "team-experience",
    attributionNote: TEAM_ATTRIBUTION_NOTE,
    technicalDetails: [
      "Referenced capacity: approximately 30,000 m³",
      "Fixed column roof construction",
      "Part of a combined ~5,000,000 m³ of storage-tank volume fabricated and installed by the team between 2014 and 2022",
    ],
    images: [
      {
        src: "/images/global/hillside-tank-farm-construction-aerial-3.webp",
        alt: "Aerial view of a storage tank farm under construction on a hillside above a Saudi Arabian city",
      },
      {
        src: "/images/global/hillside-tank-farm-construction-aerial-4.webp",
        alt: "Two large storage tanks under construction on a hillside above a Saudi Arabian city at dusk",
      },
    ],
    relatedCapabilities: ["storage-tanks"],
    relatedIndustries: ["water-treatment", "oil-gas"],
    category: "storage-tanks",
  },
  {
    slug: "swcc-shuqaiq-phase-2-piping",
    title: "SWCC Shuqaiq Phase 2 — Piping & Pump Station Mechanical Works",
    location: "Shuqaiq, Saudi Arabia",
    period: "Under Mipe Co.",
    client: "Saline Water Conversion Corporation (SWCC)",
    scope:
      "Piping and spool fabrication, pump-station mechanical works, compressor room and valve station installation, spool/pantaloon fabrication at a purpose-built site workshop.",
    role: "Krishna Uppala — Site Manager",
    attribution: "team-experience",
    attributionNote: TEAM_ATTRIBUTION_NOTE,
    technicalDetails: [
      "Total piping scope: 400,000 dia-inch",
      "2,000 m² spool shop built and equipped for the project",
      "Reported at 96% scope completion within a two-year programme",
      "Full pump-station mechanical installation and SS spool/skid works",
    ],
    images: [
      {
        src: "/images/hero/shuqaiq-dome-tanks-coastal-aerial.webp",
        alt: "Aerial view of dome-roofed storage tanks at the SWCC Shuqaiq coastal site",
      },
      {
        src: "/images/global/shuqaiq-storage-tank-exterior-workers.webp",
        alt: "Storage tank exterior at the SWCC Shuqaiq project with workers on the top rail walkway",
      },
      {
        src: "/images/global/swcc-tank-piping-trench-installation.webp",
        alt: "Steel pipe spool being installed in a trench near a storage tank with SWCC signage",
      },
      {
        src: "/images/global/torishima-pump-station-motor-room.webp",
        alt: "Pump station equipment room with motor-driven pumps, piping and gauges",
      },
    ],
    relatedCapabilities: ["process-piping", "mechanical-works"],
    relatedIndustries: ["water-treatment", "oil-gas"],
    category: "piping-mechanical",
  },
  {
    slug: "atlas-steel-uae-fabrication-capacity",
    title: "Atlas Steel Co. — Fabrication Capacity Build-Out",
    location: "United Arab Emirates",
    period: "Team-led facility programme",
    client: "Atlas Steel Co.",
    scope:
      "Modification of a UAE steel factory to expand tank-fabrication throughput, including transfer-car and tilting-device engineering.",
    attribution: "team-experience",
    attributionNote: TEAM_ATTRIBUTION_NOTE,
    technicalDetails: [
      "Referenced fabrication capacity: 40,000–48,000 tonnes/year",
      "11,000 m² covered area on a 30,000 m² yard",
      "50-tonne capacity transfer cars",
      "Patented tilting devices designed and fabricated in-house",
    ],
    images: [
      {
        src: "/images/hero/steel-fabrication-shop-wide-interior.webp",
        alt: "Wide interior view of a steel fabrication workshop with overhead cranes and workers processing steel plate",
      },
      {
        src: "/images/machines/plate-tilting-machine-fabrication-shop.webp",
        alt: "Heavy-duty plate tilting machine handling a large steel plate under an overhead crane",
      },
      {
        src: "/images/machines/cnc-plasma-plate-cutting-machine.webp",
        alt: "CNC plasma plate cutting machine on rails inside a steel fabrication workshop",
      },
      {
        src: "/images/global/welders-fabricating-tank-nozzle-flanges-overhead.webp",
        alt: "Welders fabricating large circular flanged nozzle covers on steel plates",
      },
      {
        src: "/images/global/pressure-vessel-shell-welding-fabrication-bay.webp",
        alt: "Welder fabricating a cylindrical pressure vessel shell with flanged nozzles",
      },
    ],
    relatedCapabilities: ["steel-structures", "special-welding-machines"],
    relatedIndustries: ["industrial"],
    category: "fabrication",
  },
  {
    slug: "jeddah-tank-factory-mipe",
    title: "Jeddah Tank Factory Operations",
    location: "Jeddah, Saudi Arabia",
    period: "2012–2014",
    client: "Mipe Co.",
    scope: "Factory modification and operation for tank fabrication works.",
    attribution: "team-experience",
    attributionNote: TEAM_ATTRIBUTION_NOTE,
    technicalDetails: ["Referenced capacity: 18,000–24,000 tonnes/year"],
    images: [
      {
        src: "/images/global/mipe-factory-jeddah-fabrication-shed.webp",
        alt: "Exterior of the Mipe Co. steel fabrication factory building with a gantry crane, Jeddah",
      },
    ],
    relatedCapabilities: ["storage-tanks"],
    relatedIndustries: ["industrial"],
    category: "storage-tanks",
  },
  {
    slug: "dubai-gold-mine-fabrication",
    title: "Gold Mine Fabrication Project",
    location: "Dubai, UAE (client project based in Africa)",
    period: "2021–2022",
    client: "Euro Gold Co.",
    scope:
      "Complete fabrication scope for a gold-mine client project, with a fabrication and installation team supplied and built up under the client's payroll.",
    attribution: "team-experience",
    attributionNote: TEAM_ATTRIBUTION_NOTE,
    technicalDetails: ["Full fabrication scope delivered by the team, 2021–2022"],
    images: [],
    relatedCapabilities: ["steel-structures", "mechanical-works"],
    relatedIndustries: ["mining"],
    category: "fabrication",
  },
  {
    slug: "special-welding-machine-fabrication",
    title: "Special Welding Machine Design & Fabrication",
    location: "Supplied to UAE and Saudi Arabia-based companies",
    period: "Team engineering programme",
    scope:
      "In-house design and fabrication of EGW, SAW and BWM welding machines to client-specific technical requirements.",
    attribution: "team-experience",
    attributionNote: TEAM_ATTRIBUTION_NOTE,
    technicalDetails: [
      "EGW: single-pass vertical tank welding, water-cooled, up to 30mm plate thickness",
      "SAW: double-head submerged-arc machine for tank horizontal welding",
      "BWM: double-head submerged-arc beam welding machine",
    ],
    images: [
      {
        src: "/images/machines/automatic-tank-wall-welding-equipment-operator.webp",
        alt: "Technician operating automatic welding equipment mounted against a storage tank wall",
      },
      {
        src: "/images/machines/automatic-girth-welding-machine-workshop.webp",
        alt: "Automatic girth welding machine used for circumferential seam welding of tanks",
      },
    ],
    relatedCapabilities: ["special-welding-machines", "storage-tanks"],
    relatedIndustries: ["industrial"],
    category: "special-machines",
  },
  {
    slug: "heavy-lifting-surge-vessels",
    title: "Heavy Lifting — Surge Vessels",
    location: "GCC region",
    period: "Team engineering programme",
    scope: "Heavy lifting of surge vessels as part of mechanical installation scope.",
    attribution: "team-experience",
    attributionNote: TEAM_ATTRIBUTION_NOTE,
    technicalDetails: ["Surge vessels handled at up to 150 tonnes each"],
    images: [
      {
        src: "/images/global/horizontal-pressure-vessels-piping-mountain-site.webp",
        alt: "Horizontal pressure vessels connected by insulated piping at an industrial site",
      },
      {
        src: "/images/global/horizontal-pressure-vessels-desert-site.webp",
        alt: "Horizontal cylindrical pressure vessels installed at a desert industrial site",
      },
    ],
    relatedCapabilities: ["mechanical-works", "pressure-vessels"],
    relatedIndustries: ["oil-gas"],
    category: "heavy-lifting",
  },
];

export const PROJECTS_INTRO = {
  headline: "Project & Engineering Experience",
  paragraph:
    "STECOO's Visakhapatnam facility is newly established, and the case studies below document the verified, hands-on engineering and site-management track record its leadership and team bring into every project — built up across Saudi Arabia, the UAE and Turkey before STECOO's incorporation in June 2023. This is the experience base STECOO's current fabrication capability is built on.",
} as const;
