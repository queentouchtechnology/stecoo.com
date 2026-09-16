import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AttributionBadge } from "@/components/ui/AttributionBadge";
import { PROJECTS, PROJECTS_INTRO } from "@/content/projects";

export function ProjectExperience() {
  const featured = PROJECTS.filter((p) => p.images.length > 0).slice(0, 6);

  return (
    <Section tone="surface">
      <Eyebrow>Project Experience</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">{PROJECTS_INTRO.headline}</h2>
      <p className="mt-4 max-w-3xl text-steel">{PROJECTS_INTRO.paragraph}</p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col overflow-hidden border border-steel/15 bg-ink"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[var(--ease-industrial)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute left-3 top-3">
                <AttributionBadge attribution={project.attribution} />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-teal-light">
                {project.location} &middot; {project.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-dim">{project.scope}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-teal-light hover:text-white"
        >
          View All Project Experience
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
