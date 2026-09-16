import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { GlobalMap } from "@/components/home/GlobalMap";
import { AttributionBadge } from "@/components/ui/AttributionBadge";
import { EXPERIENCE_TIMELINE, GLOBAL_COUNTRIES, GLOBAL_EXPERIENCE_INTRO } from "@/content/global-experience";

export const metadata: Metadata = {
  title: "Global Engineering Experience — India, UAE, Saudi Arabia, Turkey",
  description:
    "STECOO's engineering team brings roughly 15 years of tank, piping and mechanical project experience across Saudi Arabia, the UAE and Turkey into its Visakhapatnam operation.",
  alternates: { canonical: "/global-experience" },
};

export default function GlobalExperiencePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Global Experience", href: "/global-experience" }]} />
      <PageHeader eyebrow="Global Experience" title={GLOBAL_EXPERIENCE_INTRO.headline} description={GLOBAL_EXPERIENCE_INTRO.paragraph} />

      <Section tone="ink">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="border border-steel/15 bg-surface p-4">
            <GlobalMap />
          </div>
          <ul className="space-y-5">
            {GLOBAL_COUNTRIES.map((c) => (
              <li key={c.code} className="border-l-2 border-teal-light/40 pl-4">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.06em] text-white">{c.name}</h2>
                <p className="mt-1 text-sm leading-relaxed text-steel-dim">{c.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Engineering Experience Timeline</h2>
        <p className="mt-3 max-w-2xl text-sm text-steel-dim">
          Each entry below is labelled clearly as either engineering-team experience predating STECOO&rsquo;s
          incorporation, or STECOO&rsquo;s own company history.
        </p>

        <div className="mt-10 space-y-8 border-l-2 border-steel/15 pl-8">
          {EXPERIENCE_TIMELINE.map((entry) => (
            <div key={entry.title} className="relative">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-teal-light"
              />
              <p className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-amber">{entry.period}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-white">{entry.title}</h3>
              <p className="mt-1 text-sm text-teal-light">{entry.location}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel-dim">{entry.description}</p>
              <div className="mt-3">
                <AttributionBadge attribution={entry.attribution} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
