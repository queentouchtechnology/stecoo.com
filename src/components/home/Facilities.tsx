import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FACILITY_DESCRIPTION, FACILITY_STATS, FACILITY_STATS_NOTE } from "@/content/facility";

const MACHINE_GALLERY = [
  { src: "/images/machines/cnc-plasma-plate-cutting-machine.webp", alt: "CNC plasma plate cutting machine on rails in a steel fabrication workshop" },
  { src: "/images/machines/plate-tilting-machine-fabrication-shop.webp", alt: "Heavy-duty plate tilting machine handling a large steel plate" },
  { src: "/images/machines/four-roll-plate-bending-machine.webp", alt: "Four-roll plate bending and rolling machine" },
  { src: "/images/machines/steel-beam-shot-blasting-line-outdoor.webp", alt: "Steel beams passing through a shot-blasting surface preparation line" },
];

export function Facilities() {
  return (
    <Section tone="ink">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Facilities</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{FACILITY_DESCRIPTION.headline}</h2>
          <div className="mt-6 space-y-4">
            {FACILITY_DESCRIPTION.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-steel">
                {p}
              </p>
            ))}
          </div>

          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-sm border border-steel/15">
            <Image
              src="/images/office/stecoo-visakhapatnam-office-building-exterior.webp"
              alt="STECOO office building exterior in Visakhapatnam, Andhra Pradesh"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {FACILITY_STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-white">
                  {s.value}
                  <span className="ml-1 text-sm font-medium text-teal-light">{s.unit}</span>
                </div>
                <p className="mt-1 text-xs text-steel-dim">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-steel-dim">{FACILITY_STATS_NOTE}</p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-white">Machinery &amp; Equipment Capability</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel-dim">
            The team designs, operates and fabricates with plate cutting, forming, rolling and surface-preparation
            equipment of the type shown below, built up through the engineering team&rsquo;s fabrication project
            experience.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {MACHINE_GALLERY.map((m) => (
              <div key={m.src} className="relative aspect-square overflow-hidden rounded-sm border border-steel/15">
                <Image src={m.src} alt={m.alt} fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
