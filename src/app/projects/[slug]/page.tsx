import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/content/projects";
import { getCapability } from "@/content/capabilities";
import { getIndustry } from "@/content/industries";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AttributionBadge } from "@/components/ui/AttributionBadge";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | STECOO Projects`,
    description: `${project.title} — ${project.location}. ${project.scope}`,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Breadcrumbs items={[{ name: "Projects", href: "/projects" }, { name: project.title, href: `/projects/${project.slug}` }]} />

      <div className="border-b border-steel/10 bg-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <AttributionBadge attribution={project.attribution} />
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-steel">
            <span>
              <strong className="text-white">Location:</strong> {project.location}
            </span>
            <span>
              <strong className="text-white">Period:</strong> {project.period}
            </span>
            {project.client && (
              <span>
                <strong className="text-white">Client:</strong> {project.client}
              </span>
            )}
            {project.role && (
              <span>
                <strong className="text-white">Role:</strong> {project.role}
              </span>
            )}
          </div>
        </div>
      </div>

      <Section tone="ink" containerClassName="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-xl font-bold text-white">Scope</h2>
          <p className="mt-4 leading-relaxed text-steel">{project.scope}</p>

          <h2 className="mt-10 font-display text-xl font-bold text-white">Technical Details</h2>
          <ul className="mt-4 space-y-2.5">
            {project.technicalDetails.map((d) => (
              <li key={d} className="flex gap-3 text-steel-dim">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-light" />
                {d}
              </li>
            ))}
          </ul>

          {project.images.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.images.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-sm border border-steel/15">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 30vw, 45vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 border-l-2 border-amber/50 bg-amber/5 p-5">
            <p className="text-sm leading-relaxed text-steel">{project.attributionNote}</p>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="border border-steel/15 bg-surface p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">
              Similar Project?
            </h3>
            <p className="mt-3 text-sm text-steel-dim">Talk to STECOO&rsquo;s engineering team about your requirement.</p>
            <Button href="/contact" className="mt-5 w-full">
              Request a Quote
            </Button>
          </div>

          {project.relatedCapabilities.length > 0 && (
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Related Capability</h3>
              <ul className="mt-4 space-y-2.5">
                {project.relatedCapabilities.map((slugR) => {
                  const cap = getCapability(slugR);
                  if (!cap) return null;
                  return (
                    <li key={slugR}>
                      <Link href={`/services/${cap.slug}`} className="text-sm text-steel hover:text-white">
                        {cap.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {project.relatedIndustries.length > 0 && (
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Related Industry</h3>
              <ul className="mt-4 space-y-2.5">
                {project.relatedIndustries.map((slugR) => {
                  const ind = getIndustry(slugR);
                  if (!ind) return null;
                  return (
                    <li key={slugR}>
                      <Link href={`/industries/${ind.slug}`} className="text-sm text-steel hover:text-white">
                        {ind.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </aside>
      </Section>
    </>
  );
}
