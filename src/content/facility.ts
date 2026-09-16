export const FACILITY_STATS = [
  {
    value: "1,213",
    unit: "m²",
    label: "Total facility area",
  },
  {
    value: "200",
    unit: "m²",
    label: "Covered fabrication area",
  },
  {
    value: "813",
    unit: "m²",
    label: "Open fabrication area",
  },
  {
    value: "100",
    unit: "MT / month",
    label: "Fabrication capacity",
  },
  {
    value: "800",
    unit: "inch-dia / month",
    label: "Average spool-piping fabrication capacity",
  },
] as const;

export const FACILITY_STATS_NOTE =
  "Figures above describe STECOO's current Visakhapatnam fabrication facility, as stated in company documentation.";

export const FACILITY_DESCRIPTION = {
  headline: "A Dedicated Fabrication Facility Near VSEZ, Visakhapatnam",
  paragraphs: [
    "STECOO's facility sits near the Visakhapatnam Special Economic Zone (VSEZ) / Auto Nagar industrial belt, close to Duvvada Railway Station — a location chosen to serve both local and export-bound fabrication work efficiently.",
    "The site combines a covered fabrication shop with a larger open fabrication yard, equipped with oxy-acetylene cutting machines, welding equipment and the fabrication tools and tackle needed to take a project from raw plate to finished, inspected assembly.",
    "Work is managed from order intake through site survey, engineering calculations and CAD drawings, into material control and fabrication, quality control, and — where scoped — installation at the customer's site, with the aim of minimising disruption during that final stage.",
  ],
};

export const TEAM_CAPACITY_REFERENCE = {
  headline: "Engineering Team Experience: Large-Capacity Tank Work",
  note:
    "The figures below describe prior engineering-team experience on large storage-tank projects in GCC markets before STECOO's incorporation — not STECOO LLP's own production capacity.",
  stats: [
    {
      value: "170,000",
      unit: "m³",
      label: "Largest referenced tank capacity within API / AWWA standard limits, engineered by the team",
    },
    {
      value: "106",
      unit: "m diameter",
      label: "Largest referenced steel tank diameter, fabricated and installed in GCC countries",
    },
    {
      value: "5,000,000",
      unit: "m³ (2014–2022)",
      label: "Combined storage-tank volume fabricated and installed by the team over this period",
    },
  ],
} as const;
