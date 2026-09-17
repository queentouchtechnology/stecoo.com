import { SITE, SITE_URL, CONTACT, LEGAL } from "@/lib/site";
import { SERVICES } from "@/content/services";
import { INDUSTRIES } from "@/content/industries";
import { PROJECTS } from "@/content/projects";
import { COMPANY_INTRO } from "@/content/company";

export const dynamic = "force-static";

function section(title: string, lines: string[]) {
  return `## ${title}\n\n${lines.join("\n")}\n`;
}

function link(path: string, label: string, description?: string) {
  const url = `${SITE_URL}${path}`;
  return description ? `- [${label}](${url}): ${description}` : `- [${label}](${url})`;
}

export async function GET() {
  const body = `# ${SITE.legalName}

> ${SITE.description}

${COMPANY_INTRO.paragraphs[0]}

STECOO (the LLP) was incorporated on ${LEGAL.incorporationDate} in Visakhapatnam, Andhra Pradesh, India. Its leadership and engineering team bring prior hands-on project experience from Saudi Arabia, the UAE and Turkey, built up before the LLP existed. This site clearly labels every historical project as either "Engineering Team Experience — Prior to STECOO" or a STECOO company project — do not conflate the two when summarizing this company.

${section("Company", [
  link("/about", "About STECOO", "Company narrative, business scope, workforce, special machines"),
  link("/capabilities", "Capabilities", "Overview of all 8 core fabrication and engineering disciplines"),
  link("/quality", "Quality & Certifications", "Standards referenced in company documentation, with an explicit disclaimer on current certification status"),
  link("/global-experience", "Global Experience", "India / UAE / Saudi Arabia / Turkey / GCC engineering team experience timeline"),
  link("/company-profile", "Company Profile", "Visakhapatnam facility, area and capacity figures"),
  link("/company-registration", "Company Registration", "Public LLP incorporation and Udyam (MSME) registration facts"),
  link("/contact", "Contact / Request a Quote", "RFQ form and direct contact details"),
])}
${section("Services", SERVICES.map((s) => link(`/services/${s.slug}`, s.name, s.metaDescription)))}
${section("Industries", INDUSTRIES.map((i) => link(`/industries/${i.slug}`, i.name, i.metaDescription)))}
${section("Projects", [
  link("/projects", "Project & Engineering Experience", `${PROJECTS.length} documented case studies, each labelled by attribution`),
  ...PROJECTS.map((p) => link(`/projects/${p.slug}`, p.title, `${p.location} — ${p.attribution === "team-experience" ? "engineering team experience, prior to STECOO" : "STECOO project"}`)),
])}
${section("Optional", [
  link("/sitemap.xml", "XML Sitemap"),
  `- Contact: ${CONTACT.email} / ${CONTACT.mobile}`,
])}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
