import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WHY_STECOO } from "@/content/company";

export function WhyStecoo() {
  return (
    <Section tone="surface">
      <Eyebrow>Why STECOO</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
        Built on Engineering Discipline
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-steel/15 bg-steel/15 sm:grid-cols-2 lg:grid-cols-5">
        {WHY_STECOO.map((item, i) => (
          <div key={item.title} className="bg-surface p-6">
            <span className="font-display text-xs font-semibold text-amber">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-display text-base font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-dim">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
