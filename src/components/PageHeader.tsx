import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const DEFAULT_IMAGE = {
  src: "/images/hero/steel-fabrication-shop-wide-interior.webp",
  alt: "",
};

export function PageHeader({
  eyebrow,
  title,
  description,
  image = DEFAULT_IMAGE,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <div className="relative overflow-hidden border-b border-steel/10 bg-surface py-16 sm:py-20">
      <div className="absolute inset-0" aria-hidden>
        <Image src={image.src} alt={image.alt} fill sizes="100vw" priority className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/60" />
      </div>
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-2xl leading-relaxed text-steel">{description}</p>}
      </Container>
    </div>
  );
}
