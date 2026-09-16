import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { AttributionBadge } from "@/components/ui/AttributionBadge";
import { PROJECTS, PROJECTS_INTRO } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects & Engineering Experience",
  description:
    "Storage tank, piping, mechanical and special welding machine project experience behind STECOO's engineering team, clearly attributed to team experience or STECOO project work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} />
      <PageHeader eyebrow="Projects" title={PROJECTS_INTRO.headline} description={PROJECTS_INTRO.paragraph} />
      <Section tone="ink" containerClassName="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col overflow-hidden border border-steel/15 bg-surface"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              {project.images[0] ? (
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-industrial)] group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.1em] text-steel-dim">
                  Photography not available
                </div>
              )}
              <div className="absolute left-3 top-3">
                <AttributionBadge attribution={project.attribution} />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-teal-light">
                {project.location} &middot; {project.period}
              </p>
              <h2 className="mt-2 font-display text-lg font-bold text-white">{project.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-dim">{project.scope}</p>
            </div>
          </Link>
        ))}
      </Section>
    </>
  );
}
