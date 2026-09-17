import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BUSINESS_SCOPE, COMPANY_INTRO, SPECIAL_MACHINES, WHY_STECOO, WORKFORCE_ROLES } from "@/content/company";
import { CONTACT, LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About STECOO",
  description:
    "STECOO Steeltech Engineering & Construction Operations LLP — industrial steel fabrication from Visakhapatnam, led by an engineering team with prior GCC project experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <PageHeader
        eyebrow={COMPANY_INTRO.eyebrow}
        title={COMPANY_INTRO.headline}
        description={COMPANY_INTRO.paragraphs[0]}
        image={{ src: "/images/global/fabrication-shop-interior-crane-plate-work.webp", alt: "" }}
        highlights={[
          { value: LEGAL.incorporationDate, label: "LLP Incorporated" },
          { value: String(BUSINESS_SCOPE.length), label: "Business Scope Areas" },
          { value: String(WORKFORCE_ROLES.length), label: "Trade Disciplines" },
          { value: String(SPECIAL_MACHINES.length), label: "Special Machines Built" },
        ]}
      />

      <Section tone="ink" containerClassName="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="space-y-5">
            {COMPANY_INTRO.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-steel">
                {p}
              </p>
            ))}
          </div>

          <h2 className="mt-12 font-display text-xl font-bold text-white">Business Scope</h2>
          <ul className="mt-5 space-y-2.5">
            {BUSINESS_SCOPE.map((b) => (
              <li key={b} className="flex gap-3 text-steel">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-light" />
                {b}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-xl font-bold text-white">Workforce</h2>
          <p className="mt-4 leading-relaxed text-steel">
            The team consists of qualified engineers, foremen, fabricators, fitters, grinders, machine operators,
            welders, blasters, painters, riggers and crane operators.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {WORKFORCE_ROLES.map((r) => (
              <span key={r} className="border border-steel/20 px-3 py-1.5 text-xs uppercase tracking-[0.04em] text-steel-dim">
                {r}
              </span>
            ))}
          </div>

          <h2 className="mt-12 font-display text-xl font-bold text-white">Special Machines Design &amp; Manufacturing</h2>
          <div className="mt-5 space-y-4">
            {SPECIAL_MACHINES.map((m) => (
              <div key={m.name} className="border-l-2 border-teal/40 pl-4">
                <h3 className="font-display text-sm font-bold text-white">{m.name}</h3>
                <p className="mt-1 text-sm text-steel-dim">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-8">
          <div className="border border-steel/15 bg-surface p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Company Facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-steel-dim">Legal name</dt>
                <dd className="text-white">STECOO Steeltech Engineering &amp; Construction Operations LLP</dd>
              </div>
              <div>
                <dt className="text-steel-dim">Incorporated</dt>
                <dd className="text-white">{LEGAL.incorporationDate}</dd>
              </div>
              <div>
                <dt className="text-steel-dim">General Manager</dt>
                <dd className="text-white">{CONTACT.generalManager}</dd>
              </div>
              <div>
                <dt className="text-steel-dim">Location</dt>
                <dd className="text-white">Visakhapatnam, Andhra Pradesh, India</dd>
              </div>
            </dl>
          </div>
          <div className="border border-steel/15 bg-surface p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Why STECOO</h3>
            <ul className="mt-4 space-y-4">
              {WHY_STECOO.map((w) => (
                <li key={w.title}>
                  <h4 className="font-display text-sm font-bold text-white">{w.title}</h4>
                  <p className="mt-1 text-sm text-steel-dim">{w.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <Button href="/contact" className="w-full">
            Request a Quote
          </Button>
        </aside>
      </Section>
    </>
  );
}
