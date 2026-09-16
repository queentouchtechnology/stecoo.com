export const SITE_URL = "https://stecoo.com";

export const SITE = {
  name: "STECOO",
  legalName: "STECOO Steeltech Engineering and Construction Operations LLP",
  shortLegalName: "STECOO Steeltech Engineering & Construction Operations LLP",
  tagline: "Industrial Steel Fabrication & Engineering",
  description:
    "STECOO Steeltech Engineering & Construction Operations LLP provides storage tanks, pressure vessels, process piping and steel fabrication from Visakhapatnam, India.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/stecoo-logo.svg`,
  ogImage: `${SITE_URL}/images/og/stecoo-og-default.jpg`,
} as const;

export const CONTACT = {
  email: "sales@stecoo.com",
  mobile: "+91 89789 13233",
  mobileHref: "tel:+918978913233",
  whatsappHref: "https://wa.me/918978913233",
  landline: "+91-891-4617373",
  landlineHref: "tel:+918914617373",
  registeredAddress: {
    line1: "MIG 1-240, Rajeevnagar",
    line2: "Kurmannapalam, Visakhapatnam",
    line3: "Andhra Pradesh, India – 530046",
  },
  operationsAddress: {
    line1: "Fabrication & Operations Facility",
    line2: "Near VSEZ & Duvvada Railway Station",
    line3: "Visakhapatnam, Andhra Pradesh, India",
  },
  generalManager: "Krishna Uppala",
  generalManagerTitle: "General Manager",
} as const;

export const LEGAL = {
  llpin: "ACB-7798",
  incorporationDate: "29 June 2023",
  udyamNumber: "UDYAM-AP-10-0043294",
  udyamClassification: "Micro Enterprise (2023-24)",
  majorActivity: "Manufacturing",
} as const;
