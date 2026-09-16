import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlobalMap } from "./GlobalMap";
import { GLOBAL_COUNTRIES, GLOBAL_EXPERIENCE_INTRO } from "@/content/global-experience";

export function GlobalExperience() {
  return (
    <Section tone="ink">
      <Eyebrow>Global Experience</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
        {GLOBAL_EXPERIENCE_INTRO.headline}
      </h2>
      <p className="mt-4 max-w-2xl text-steel">{GLOBAL_EXPERIENCE_INTRO.paragraph}</p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="border border-steel/15 bg-surface p-4">
          <GlobalMap />
        </div>
        <ul className="space-y-5">
          {GLOBAL_COUNTRIES.map((c) => (
            <li key={c.code} className="border-l-2 border-teal-light/40 pl-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.06em] text-white">{c.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-steel-dim">{c.role}</p>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/global-experience"
        className="mt-10 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-teal-light hover:text-white"
      >
        View Full Engineering Experience Timeline
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
          <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </Section>
  );
}
