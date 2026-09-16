import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { QUALITY_APPROACH, QUALITY_DISCLAIMER, REFERENCED_STANDARDS } from "@/content/quality";

export function Quality() {
  return (
    <Section tone="surface">
      <Eyebrow>Standards &amp; Certifications</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">{QUALITY_APPROACH.headline}</h2>
      <p className="mt-4 max-w-2xl text-steel">{QUALITY_APPROACH.intro}</p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REFERENCED_STANDARDS.map((s) => (
          <div key={s.name} className="border border-steel/15 bg-ink p-5">
            <h3 className="font-display text-sm font-bold text-white">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-dim">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-l-2 border-amber/50 bg-amber/5 p-5">
        <p className="text-sm leading-relaxed text-steel">{QUALITY_DISCLAIMER}</p>
      </div>

      <Link
        href="/quality"
        className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-teal-light hover:text-white"
      >
        Full Quality &amp; Certification Detail
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
          <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </Section>
  );
}
