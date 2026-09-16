import type { CertificationEntry } from "./types";

export const QUALITY_DISCLAIMER =
  "Standards and certifications referenced in company documentation. Current certification status should be verified against the latest certificates issued to STECOO Steeltech Engineering & Construction Operations LLP.";

export const REFERENCED_STANDARDS: CertificationEntry[] = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management Systems",
  },
  {
    name: "ISO 45001:2018",
    description: "Occupational Health & Safety Management Systems",
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management Systems",
  },
  {
    name: "ASME — U Certification Designator",
    description:
      "Certificate of authorization by the American Society of Mechanical Engineers for construction and certification of pressure vessels.",
  },
  {
    name: "National Board — R Stamp",
    description:
      "Certificate of authorization by the National Board of Boiler & Pressure Vessel Inspectors for repairs and alterations of pressure vessels.",
  },
  {
    name: "EN 1090-1:2009/A1:2022 (up to EXC4)",
    description:
      "Certificate of Conformity of Factory Production Control for fabricated steel components used in building and construction of structures.",
  },
  {
    name: "ISO 3834-2:2021",
    description: "Quality requirements for fusion welding of metallic materials — comprehensive quality requirements.",
  },
  {
    name: "ADNOC Vendor Code",
    description: "ANID: AN01628399622",
  },
  {
    name: "AQAP 120",
    description: "NATO quality assurance requirements for the design, development and production referenced in company documentation.",
  },
] as const;

export const QUALITY_APPROACH = {
  headline: "Standards, Certifications & Technical Experience",
  intro:
    "STECOO's production approach follows structured quality checkpoints referenced against API, AWWA, ASME and CE practice. The company's engineering team also brings direct, hands-on experience with the standards below from prior GCC project work.",
} as const;

export const QUALITY_TEAM_NOTE =
  "STECOO's engineering and inspection personnel include team members with NACE/BGAS painting inspection, AWS/CSWIP welding inspection, IRCA lead-auditor and AWS/PCN technician backgrounds, built up over prior professional experience.";
