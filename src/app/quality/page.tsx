import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  QUALITY_APPROACH,
  QUALITY_DISCLAIMER,
  QUALITY_TEAM_NOTE,
  REFERENCED_STANDARDS,
} from "@/content/quality";
import { TEAM_QUALIFICATIONS } from "@/content/company";

export const metadata: Metadata = {
  title: "Standards, Certifications & Technical Experience",
  description:
    "STECOO's quality approach and the standards referenced in company documentation, including ISO 9001, ISO 45001, ISO 14001, ASME, National Board, EN 1090 and ISO 3834-2.",
  alternates: { canonical: "/quality" },
};

const QUALITY_HIGHLIGHTS = [
  { value: String(REFERENCED_STANDARDS.length), label: "Standards Referenced" },
  { value: "API / AWWA / ASME", label: "Fabrication Practice" },
  { value: String(TEAM_QUALIFICATIONS.length), label: "Personnel Qualification Types" },
  { value: "EXC4", label: "Max. EN 1090-1 Execution Class" },
];

export default function QualityPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Quality", href: "/quality" }]} />
      <PageHeader
        eyebrow="Quality"
        title={QUALITY_APPROACH.headline}
        description={QUALITY_APPROACH.intro}
        highlights={QUALITY_HIGHLIGHTS}
      />

      <Section tone="ink">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Company Certifications</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-steel">
              STECOO Steeltech Engineering &amp; Construction Operations LLP was incorporated in June 2023. Current,
              audited certifications held directly by the LLP will be published here, with certificate references,
              once issued and verified. Until then, this section intentionally remains empty rather than implying an
              active certification that has not been confirmed.
            </p>
          </div>
          <div className="border border-steel/15 bg-surface p-6">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-teal-light">
              Certification Status
            </h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-steel/10 pb-3">
                <dt className="text-steel-dim">LLP incorporated</dt>
                <dd className="text-right font-semibold text-white">29 Jun 2023</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-steel-dim">Referenced standards documented</dt>
                <dd className="text-right font-semibold text-white">{REFERENCED_STANDARDS.length}</dd>
              </div>
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-steel-dim">
              Ask STECOO&rsquo;s team directly for the latest certification and inspection documentation available
              for your project.
            </p>
          </div>
        </div>

        <h2 className="mt-14 font-display text-xl font-bold text-white">
          Standards &amp; Certifications Referenced in Company Documentation
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-steel">
          The following standards and certifications are referenced in STECOO&rsquo;s company documentation,
          reflecting the technical framework the engineering team designs and fabricates against, and certifications
          held during prior professional experience.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REFERENCED_STANDARDS.map((s) => (
            <div key={s.name} className="border border-steel/15 bg-surface p-5">
              <h3 className="font-display text-sm font-bold text-white">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-dim">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-amber/50 bg-amber/5 p-5">
          <p className="text-sm leading-relaxed text-steel">{QUALITY_DISCLAIMER}</p>
        </div>

        <h2 className="mt-14 font-display text-xl font-bold text-white">Personnel Qualifications</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-steel">{QUALITY_TEAM_NOTE}</p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {TEAM_QUALIFICATIONS.map((q) => (
            <li key={q} className="border-l-2 border-teal/40 pl-3 text-sm text-steel-dim">
              {q}
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <Button href="/contact">Discuss Your Quality Requirement</Button>
        </div>
      </Section>
    </>
  );
}
