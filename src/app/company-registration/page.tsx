import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { CONTACT, LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company Registration",
  description: "STECOO's LLP incorporation and Udyam (MSME) registration details.",
  alternates: { canonical: "/company-registration" },
  robots: { index: true, follow: true },
};

const FACTS = [
  { label: "Legal Name", value: "STECOO Steeltech Engineering and Construction Operations LLP" },
  { label: "LLP Identification Number (LLPIN)", value: LEGAL.llpin },
  { label: "Date of Incorporation", value: LEGAL.incorporationDate },
  { label: "Udyam Registration Number", value: LEGAL.udyamNumber },
  { label: "Udyam Classification", value: LEGAL.udyamClassification },
  { label: "Major Activity", value: LEGAL.majorActivity },
  { label: "Registered Office", value: `${CONTACT.registeredAddress.line1}, ${CONTACT.registeredAddress.line2}, ${CONTACT.registeredAddress.line3}` },
];

export default function CompanyRegistrationPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Company Registration", href: "/company-registration" }]} />
      <PageHeader
        eyebrow="Company Registration"
        title="Company Registration Details"
        description="Public incorporation and MSME registration facts for STECOO Steeltech Engineering and Construction Operations LLP."
        highlights={[
          { value: LEGAL.llpin, label: "LLPIN" },
          { value: LEGAL.udyamClassification, label: "Udyam Classification" },
        ]}
      />

      <Section tone="ink">
        <div className="max-w-2xl divide-y divide-steel/15 border border-steel/15 bg-surface">
          {FACTS.map((f) => (
            <div key={f.label} className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-[240px_1fr] sm:gap-4">
              <dt className="font-display text-xs font-semibold uppercase tracking-[0.06em] text-teal-light">{f.label}</dt>
              <dd className="text-sm text-steel">{f.value}</dd>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-steel-dim">
          This page publishes only public-facing registration facts. PAN, TAN and other sensitive identifiers on
          STECOO&rsquo;s official registration documents are not published here.
        </p>
      </Section>
    </>
  );
}
