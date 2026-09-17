import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { FACILITY_DESCRIPTION, FACILITY_STATS, FACILITY_STATS_NOTE } from "@/content/facility";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company Profile — Visakhapatnam Facility",
  description:
    "STECOO's fabrication facility near VSEZ and Duvvada Railway Station, Visakhapatnam, Andhra Pradesh — facility area, capacity and location detail.",
  alternates: { canonical: "/company-profile" },
};

export default function CompanyProfilePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Company Profile", href: "/company-profile" }]} />
      <PageHeader
        eyebrow="Company Profile"
        title={FACILITY_DESCRIPTION.headline}
        description="STECOO's registered and operational presence in Visakhapatnam, Andhra Pradesh, India."
        image={{ src: "/images/office/stecoo-visakhapatnam-office-building-exterior.webp", alt: "" }}
        highlights={FACILITY_STATS.slice(0, 4).map((s) => ({ value: `${s.value} ${s.unit}`, label: s.label }))}
      />
      <JsonLd data={localBusinessSchema()} />

      <Section tone="ink" containerClassName="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="space-y-4">
            {FACILITY_DESCRIPTION.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-steel">
                {p}
              </p>
            ))}
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm border border-steel/15">
            <Image
              src="/images/office/stecoo-visakhapatnam-office-building-exterior.webp"
              alt="STECOO office building exterior in Visakhapatnam, Andhra Pradesh"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>

          <h2 className="mt-12 font-display text-xl font-bold text-white">Facility &amp; Capacity</h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
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

          <h2 className="mt-12 font-display text-xl font-bold text-white">Why Visakhapatnam</h2>
          <p className="mt-4 leading-relaxed text-steel">
            Visakhapatnam is one of India&rsquo;s major eastern seaboard industrial and port cities, home to the
            Visakhapatnam Special Economic Zone (VSEZ), a large steel and heavy-engineering manufacturing base, and
            direct rail and port connectivity. STECOO&rsquo;s facility sits near VSEZ / Auto Nagar and the Duvvada
            Railway Station — positioning fabricated tanks, vessels, piping and structural steel for efficient
            transport to sites across Andhra Pradesh, India, and for export to GCC markets where the engineering
            team already has direct project experience.
          </p>
        </div>

        <aside className="space-y-8">
          <div className="border border-steel/15 bg-surface p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Registered Office</h3>
            <p className="mt-3 text-sm leading-relaxed text-steel-dim">
              {CONTACT.registeredAddress.line1}
              <br />
              {CONTACT.registeredAddress.line2}
              <br />
              {CONTACT.registeredAddress.line3}
            </p>
          </div>
          <div className="border border-steel/15 bg-surface p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Operations / Fabrication Facility</h3>
            <p className="mt-3 text-sm leading-relaxed text-steel-dim">
              {CONTACT.operationsAddress.line1}
              <br />
              {CONTACT.operationsAddress.line2}
              <br />
              {CONTACT.operationsAddress.line3}
            </p>
          </div>
        </aside>
      </Section>
    </>
  );
}
