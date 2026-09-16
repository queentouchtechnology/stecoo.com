import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "ink" | "surface" | "light";
  containerClassName?: string;
  as?: "section" | "div";
}

const tones = {
  ink: "bg-ink text-light",
  surface: "bg-surface text-light",
  light: "bg-light text-ink",
};

export function Section({
  tone = "ink",
  className,
  containerClassName,
  children,
  as: As = "section",
  ...props
}: SectionProps) {
  return (
    <As className={clsx("py-20 sm:py-28", tones[tone], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </As>
  );
}
