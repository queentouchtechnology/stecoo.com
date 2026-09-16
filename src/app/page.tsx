import type { Metadata } from "next";
import { Hero } from "@/components/home/hero/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { WhyStecoo } from "@/components/home/WhyStecoo";
import { Capabilities } from "@/components/home/Capabilities";
import { EngineeringProcess } from "@/components/home/EngineeringProcess";
import { Showcase3D } from "@/components/home/Showcase3D";
import { Facilities } from "@/components/home/Facilities";
import { Quality } from "@/components/home/Quality";
import { GlobalExperience } from "@/components/home/GlobalExperience";
import { ProjectExperience } from "@/components/home/ProjectExperience";
import { FacilityCapacity } from "@/components/home/FacilityCapacity";
import { Leadership } from "@/components/home/Leadership";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "STECOO | Pressure Vessels, Storage Tanks & Steel Fabrication India",
  description:
    "STECOO Steeltech Engineering & Construction Operations LLP provides industrial steel fabrication, pressure vessels, storage tanks, process piping and steel structures from Visakhapatnam, India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "STECOO | Pressure Vessels, Storage Tanks & Steel Fabrication India",
    description: SITE.description,
    url: SITE.url,
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <WhyStecoo />
      <Capabilities />
      <EngineeringProcess />
      <Showcase3D />
      <Facilities />
      <Quality />
      <GlobalExperience />
      <ProjectExperience />
      <FacilityCapacity />
      <Leadership />
      <FinalCTA />
    </>
  );
}
