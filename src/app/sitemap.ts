import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICES } from "@/content/services";
import { INDUSTRIES } from "@/content/industries";
import { PROJECTS } from "@/content/projects";

const STATIC_ROUTES = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/capabilities", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/projects", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/quality", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/global-experience", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/company-profile", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/company-registration", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceEntries = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industryEntries = INDUSTRIES.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const projectEntries = PROJECTS.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...industryEntries, ...projectEntries];
}
