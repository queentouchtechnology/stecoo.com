import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustry } from "@/content/industries";
import { getService } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage(props: PageProps<"/industries/[slug]">) {
  const { slug } = await props.params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const faqData = faqSchema(industry.faqs);

  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", href: "/industries" }, { name: industry.name, href: `/industries/${industry.slug}` }]} />
      <PageHeader
        eyebrow="Industry"
        title={industry.h1}
        description={industry.overview}
        image={industry.gallery[0]}
        highlights={[
          { value: String(industry.applications.length), label: "Applications" },
          { value: String(industry.capabilities.length), label: "STECOO Capabilities" },
        ]}
      />
      {faqData && <JsonLd data={faqData} />}

      <Section tone="ink" containerClassName="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-xl font-bold text-white">Applications</h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {industry.applications.map((a) => (
              <li key={a} className="border-l-2 border-teal/40 pl-3 text-sm text-steel-dim">
                {a}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-xl font-bold text-white">STECOO Capabilities for This Industry</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {industry.capabilities.map((c) => {
              const service = getService(c);
              if (!service) return null;
              return (
                <Link
                  key={c}
                  href={`/services/${service.slug}`}
                  className="border border-steel/20 px-4 py-2 text-sm text-steel transition-colors hover:border-teal-light hover:text-white"
                >
                  {service.name}
                </Link>
              );
            })}
          </div>

          <h2 className="mt-12 font-display text-xl font-bold text-white">Relevant Experience</h2>
          <p className="mt-4 leading-relaxed text-steel">{industry.relatedExperience}</p>

          {industry.gallery.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-4">
              {industry.gallery.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-sm border border-steel/15">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 30vw, 45vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {industry.faqs.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="mt-5 space-y-6">
                {industry.faqs.map((faq) => (
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
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-teal-light">Discuss Your Project</h3>
            <p className="mt-3 text-sm text-steel-dim">
              Tell us about your {industry.name.toLowerCase()} sector requirement.
            </p>
            <Button href="/contact" className="mt-5 w-full">
              Request a Quote
            </Button>
          </div>
        </aside>
      </Section>
    </>
  );
}
