import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COMPANY_INTRO } from "@/content/company";

export function CompanyIntro() {
  return (
    <Section tone="ink" containerClassName="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div>
        <Eyebrow>{COMPANY_INTRO.eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-[2.75rem]">
          {COMPANY_INTRO.headline}
        </h2>
      </div>
      <div className="space-y-5">
        {COMPANY_INTRO.paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-steel">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
