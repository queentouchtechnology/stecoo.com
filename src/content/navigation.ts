interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const MAIN_NAV: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  {
    label: "Services",
    href: "/capabilities",
    children: [
      { label: "Storage Tanks", href: "/services/storage-tanks" },
      { label: "Pressure Vessels", href: "/services/pressure-vessels" },
      { label: "Process Piping", href: "/services/process-piping" },
      { label: "Steel Structures", href: "/services/steel-structures" },
      { label: "Mechanical Works", href: "/services/mechanical-works" },
      { label: "Industrial Firefighting", href: "/services/industrial-firefighting" },
      { label: "Special Welding Machines", href: "/services/special-welding-machines" },
      { label: "Manpower Supply", href: "/services/manpower-supply" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Water Treatment", href: "/industries/water-treatment" },
      { label: "Power", href: "/industries/power" },
      { label: "Mining", href: "/industries/mining" },
      { label: "Industrial", href: "/industries/industrial" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Quality", href: "/quality" },
  { label: "Global Experience", href: "/global-experience" },
];

export const FOOTER_SERVICE_LINKS = [
  { label: "Storage Tanks", href: "/services/storage-tanks" },
  { label: "Pressure Vessels", href: "/services/pressure-vessels" },
  { label: "Process Piping", href: "/services/process-piping" },
  { label: "Steel Structures", href: "/services/steel-structures" },
  { label: "Mechanical Works", href: "/services/mechanical-works" },
  { label: "Industrial Firefighting", href: "/services/industrial-firefighting" },
  { label: "Special Welding Machines", href: "/services/special-welding-machines" },
  { label: "Manpower Supply", href: "/services/manpower-supply" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Quality", href: "/quality" },
  { label: "Global Experience", href: "/global-experience" },
  { label: "Company Profile", href: "/company-profile" },
  { label: "Company Registration", href: "/company-registration" },
  { label: "Contact", href: "/contact" },
] as const;
