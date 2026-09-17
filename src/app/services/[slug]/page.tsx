import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/content/services";
import { getIndustry } from "@/content/industries";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  const url = `${SITE_URL}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      images: service.gallery[0] ? [{ url: `${SITE_URL}${service.gallery[0].src}` }] : undefined,
    },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.slug}`;
  const faqData = faqSchema(service.faqs);

  return (
    <>
      <Breadcrumbs items={[{ name: "Services", href: "/capabilities" }, { name: service.name, href: `/services/${service.slug}` }]} />
      <PageHeader
        eyebrow="Service"
        title={service.h1}
        description={service.intro}
        image={service.gallery[0]}
        highlights={[
          { value: String(service.capabilities.length), label: "Technical Capabilities" },
          { value: String(service.applications.length), label: "Applications" },
          { value: String(service.process.length), label: "Process Stages" },
          { value: String(service.relatedIndustries.length), label: "Industries Served" },
        ]}
      />
      <JsonLd data={serviceSchema({ name: service.name, description: service.metaDescription, url })} />
      {faqData && <JsonLd data={faqData} />}

      <Section tone="ink" containerClassName="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-xl font-bold text-white">Technical Capabilities</h2>
          <ul className="mt-5 space-y-3">
            {service.capabilities.map((c) => (
              <li key={c} className="flex gap-3 text-steel">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-light" />
                {c}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-xl font-bold text-white">Applications</h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.applications.map((a) => (
              <li key={a} className="border-l-2 border-teal/40 pl-3 text-sm text-steel-dim">
                {a}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-xl font-bold text-white">Engineering Process</h2>
          <ol className="mt-5 space-y-4">
            {service.process.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-display text-sm font-bold text-amber">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-steel">{step}</span>
              </li>
            ))}
          </ol>

          {service.gallery.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-xl font-bold text-white">Gallery</h2>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {service.gallery.map((img) => (
                  <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-sm border border-steel/15">
                    <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 30vw, 45vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </>
          )}

          {service.faqs.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="mt-5 space-y-6">
                {service.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-display text-sm font-bold text-white">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-dim">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="space-y-8">
          <div className="border border-steel/15 bg-surface p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Request This Capability</h3>
            <p className="mt-3 text-sm text-steel-dim">
              Tell us about your {service.name.toLowerCase()} requirement and our engineering team will respond with next steps.
            </p>
            <Button href="/contact" className="mt-5 w-full">
              Request a Quote
            </Button>
          </div>

          {service.relatedServices.length > 0 && (
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Related Services</h3>
              <ul className="mt-4 space-y-2.5">
                {service.relatedServices.map((slugR) => {
                  const rel = getService(slugR);
                  if (!rel) return null;
                  return (
                    <li key={slugR}>
                      <Link href={`/services/${rel.slug}`} className="text-sm text-steel hover:text-white">
                        {rel.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {service.relatedIndustries.length > 0 && (
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Related Industries</h3>
              <ul className="mt-4 space-y-2.5">
                {service.relatedIndustries.map((slugR) => {
                  const rel = getIndustry(slugR);
                  if (!rel) return null;
                  return (
                    <li key={slugR}>
                      <Link href={`/industries/${rel.slug}`} className="text-sm text-steel hover:text-white">
                        {rel.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </aside>
      </Section>
    </>
  );
}
