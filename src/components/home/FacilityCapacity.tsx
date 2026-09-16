import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatCounter } from "@/components/ui/StatCounter";
import { FACILITY_STATS, FACILITY_STATS_NOTE, TEAM_CAPACITY_REFERENCE } from "@/content/facility";

export function FacilityCapacity() {
  return (
    <Section tone="ink">
      <Eyebrow>Facility &amp; Capacity</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
        Capacity, Stated Plainly
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {FACILITY_STATS.map((s) => (
          <StatCounter key={s.label} value={s.value} unit={s.unit} label={s.label} />
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-xs text-steel-dim">{FACILITY_STATS_NOTE}</p>

      <div className="mt-16 border-t border-steel/15 pt-10">
        <h3 className="font-display text-lg font-bold text-white">{TEAM_CAPACITY_REFERENCE.headline}</h3>
        <p className="mt-2 max-w-2xl text-sm text-steel-dim">{TEAM_CAPACITY_REFERENCE.note}</p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {TEAM_CAPACITY_REFERENCE.stats.map((s) => (
            <StatCounter key={s.label} value={s.value} unit={s.unit} label={s.label} />
          ))}
        </div>
      </div>
    </Section>
  );
}
