export type Attribution = "team-experience" | "stecoo-project";

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CapabilitySummary {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: ImageAsset;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  capabilities: string[];
  applications: string[];
  process: string[];
  gallery: ImageAsset[];
  faqs: FaqItem[];
  relatedServices: string[];
  relatedIndustries: string[];
  keywords: string[];
}

export interface IndustryPage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  overview: string;
  applications: string[];
  capabilities: string[];
  relatedExperience: string;
  gallery: ImageAsset[];
  faqs: FaqItem[];
  relatedServices: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  location: string;
  period: string;
  client?: string;
  scope: string;
  role?: string;
  attribution: Attribution;
  attributionNote: string;
  technicalDetails: string[];
  images: ImageAsset[];
  relatedCapabilities: string[];
  relatedIndustries: string[];
  category:
    | "storage-tanks"
    | "piping-mechanical"
    | "special-machines"
    | "heavy-lifting"
    | "fabrication";
}

export interface CertificationEntry {
  name: string;
  description: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  location: string;
  description: string;
  attribution: Attribution;
}
