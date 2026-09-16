import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CAPABILITIES } from "@/content/capabilities";
import { CAPABILITY_ICONS } from "@/components/icons/CapabilityIcons";

export function Capabilities() {
  return (
    <Section tone="ink" id="capabilities">
      <Eyebrow>Core Capabilities</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
        Eight Disciplines, One Engineering Team
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((cap) => {
          const Icon = CAPABILITY_ICONS[cap.icon];
          return (
            <Link
              key={cap.slug}
              href={`/services/${cap.slug}`}
              className="group relative flex flex-col overflow-hidden border border-steel/15 bg-surface transition-colors hover:border-teal-light/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cap.image.src}
                  alt={cap.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-industrial)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-sm bg-ink/80 text-teal-light">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-bold text-white">{cap.shortName}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-teal-light">{cap.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-dim">{cap.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.1em] text-white">
                  Learn more
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
                    <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
