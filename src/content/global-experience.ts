import type { TimelineEntry } from "./types";

export const GLOBAL_EXPERIENCE_INTRO = {
  headline: "Engineering Experience Across Borders",
  paragraph:
    "STECOO is a 100% Indian-owned LLP based in Visakhapatnam. Its leadership and engineering team, however, built their technical foundation over roughly 15 years of hands-on tank, piping and mechanical project work across Saudi Arabia, the UAE and Turkey — experience now applied to every project STECOO undertakes from India.",
} as const;

export const GLOBAL_COUNTRIES = [
  {
    code: "IN",
    name: "India",
    role: "STECOO's home base — fabrication facility, engineering office and manpower supply, Visakhapatnam, Andhra Pradesh.",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    role: "Engineering team experience: storage tank fabrication/installation, SWCC Shuqaiq Phase 2 piping and pump-station works, Jeddah tank-factory operations.",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    role: "Engineering team experience: tank-factory fabrication capacity build-out (Atlas Steel Co.), special welding machine design and supply, Dubai-based fabrication for a gold-mine project.",
  },
  {
    code: "TR",
    name: "Turkey",
    role: "Design-support team collaboration and special welding machine supply for Turkey-based clients; manpower supply.",
  },
  {
    code: "GCC",
    name: "GCC (regional)",
    role: "Cross-border manpower supply and engineering support across the wider GCC region.",
  },
] as const;

export const EXPERIENCE_TIMELINE: TimelineEntry[] = [
  {
    period: "2012–2014",
    title: "Jeddah Tank Factory Operations",
    location: "Jeddah, Saudi Arabia",
    description:
      "Factory modified for tank works and operated by the team under Mipe Co., reaching a referenced capacity of 18,000–24,000 tonnes/year.",
    attribution: "team-experience",
  },
  {
    period: "2014",
    title: "National Water Co. Storage Tank",
    location: "Saudi Arabia",
    description:
      "190 m³ water storage tank — fabrication, installation and equipment selection, including dome-roof installation using 72 purpose-built lifting jacks; Krishna Uppala served as Site Manager.",
    attribution: "team-experience",
  },
  {
    period: "2014–2022",
    title: "Storage Tank Fabrication & Installation",
    location: "Saudi Arabia / GCC",
    description:
      "Approximately 5,000,000 m³ of storage-tank volume fabricated and installed by the team over this period, including a fixed-column-roof steel tank project of roughly 30,000 m³ capacity for SWCC at Abha.",
    attribution: "team-experience",
  },
  {
    period: "—",
    title: "Atlas Steel Co. — Fabrication Capacity Build-Out",
    location: "United Arab Emirates",
    description:
      "Team-led modification of a UAE steel factory, achieving a referenced fabrication capacity of 40,000–48,000 tonnes/year across an 11,000 m² covered area on a 30,000 m² yard, including 50-tonne transfer cars and patented tilting devices designed in-house.",
    attribution: "team-experience",
  },
  {
    period: "SWCC Shuqaiq Phase 2",
    title: "Piping, Spool & Pump-Station Mechanical Works",
    location: "Shuqaiq, Saudi Arabia",
    description:
      "400,000 dia-inch piping scope under Mipe Co., including a purpose-built 2,000 m² spool shop and pump-station mechanical works; Krishna Uppala served as Site Manager. Reported at 96% scope completion within a two-year programme.",
    attribution: "team-experience",
  },
  {
    period: "2021–2022",
    title: "Gold Mine Fabrication Project",
    location: "Dubai, UAE (client project based in Africa)",
    description:
      "Complete fabrication scope carried out by the team for a gold-mine project client, with a fabrication and installation team supplied and built up under the client's payroll.",
    attribution: "team-experience",
  },
  {
    period: "29 June 2023",
    title: "STECOO Steeltech Engineering & Construction Operations LLP Incorporated",
    location: "Visakhapatnam, Andhra Pradesh, India",
    description:
      "The LLP is formally incorporated, bringing this engineering and site-management experience together under STECOO's own fabrication facility and project operations.",
    attribution: "stecoo-project",
  },
] as const;
