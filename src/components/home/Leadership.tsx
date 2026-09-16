import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT } from "@/lib/site";

export function Leadership() {
  return (
    <Section tone="surface">
      <Eyebrow>Leadership</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
        Led by Engineering, Not Just Management
      </h2>

      <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <div
          aria-hidden
          className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-teal-light/40 bg-ink font-display text-4xl font-bold text-teal-light"
        >
          KU
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-white">{CONTACT.generalManager}</h3>
          <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.1em] text-teal-light">
            {CONTACT.generalManagerTitle}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel-dim">
            Krishna Uppala leads STECOO&rsquo;s engineering and fabrication operations, bringing site-management
            experience from large-scale tank, piping and mechanical projects across Saudi Arabia and the UAE into
            STECOO&rsquo;s own project delivery from Visakhapatnam.
          </p>
        </div>
      </div>
    </Section>
  );
}
