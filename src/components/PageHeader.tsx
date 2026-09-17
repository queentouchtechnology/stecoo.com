import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const DEFAULT_IMAGE = {
  src: "/images/hero/steel-fabrication-shop-wide-interior.webp",
  alt: "",
};

export interface PageHeaderHighlight {
  value: string;
  label: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  image = DEFAULT_IMAGE,
  highlights,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  highlights?: PageHeaderHighlight[];
}) {
  return (
    <div className="relative overflow-hidden border-b border-steel/10 bg-surface py-16 sm:py-20">
      <div className="absolute inset-0" aria-hidden>
        <Image src={image.src} alt={image.alt} fill sizes="100vw" priority className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-surface/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/50" />
      </div>
      <Container className="relative">
        <div className={highlights && highlights.length > 0 ? "grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end" : undefined}>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
              {title}
            </h1>
            {description && <p className="mt-5 max-w-2xl leading-relaxed text-steel">{description}</p>}
          </div>

          {highlights && highlights.length > 0 && (
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-steel/20 bg-steel/15 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.label} className="bg-surface/90 p-4">
                  <dt className="font-display text-xl font-bold text-white sm:text-2xl">{h.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.04em] text-teal-light">{h.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </Container>
    </div>
  );
}
