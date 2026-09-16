import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { RfqForm } from "@/components/contact/RfqForm";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact STECOO — Request a Project Quote",
  description:
    "Request a project quote from STECOO, or reach the team directly by phone, WhatsApp or email. Based in Visakhapatnam, Andhra Pradesh, India.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <PageHeader
        eyebrow="Contact"
        title="Request a Project Quote"
        description="Tell us about your fabrication, engineering or installation requirement and STECOO's team will respond directly."
      />
      <JsonLd data={localBusinessSchema()} />

      <Section tone="ink" containerClassName="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="border border-steel/15 bg-surface p-6 sm:p-10">
          <RfqForm />
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Direct Contact</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white hover:text-teal-light">
                  <span aria-hidden>Email</span> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.mobileHref} className="flex items-center gap-3 text-white hover:text-teal-light">
                  <span aria-hidden>Call</span> {CONTACT.mobile}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-teal-light"
                >
                  <span aria-hidden>WhatsApp</span> {CONTACT.mobile}
                </a>
              </li>
              <li>
                <a href={CONTACT.landlineHref} className="flex items-center gap-3 text-white hover:text-teal-light">
                  <span aria-hidden>Office</span> {CONTACT.landline}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Registered Office</h2>
            <p className="mt-4 text-sm leading-relaxed text-steel-dim">
              {CONTACT.registeredAddress.line1}
              <br />
              {CONTACT.registeredAddress.line2}
              <br />
              {CONTACT.registeredAddress.line3}
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Operations Facility</h2>
            <p className="mt-4 text-sm leading-relaxed text-steel-dim">
              {CONTACT.operationsAddress.line1}
              <br />
              {CONTACT.operationsAddress.line2}
              <br />
              {CONTACT.operationsAddress.line3}
            </p>
          </div>

          <div className="overflow-hidden border border-steel/15">
            <iframe
              title="STECOO location map"
              src="https://www.google.com/maps?q=Rajeevnagar,+Kurmannapalem,+Visakhapatnam,+Andhra+Pradesh+530046&output=embed"
              width="100%"
              height="240"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </Section>
    </>
  );
}
