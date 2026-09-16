import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-steel/10 bg-surface py-16 sm:py-20">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-2xl leading-relaxed text-steel">{description}</p>}
      </Container>
    </div>
  );
}
