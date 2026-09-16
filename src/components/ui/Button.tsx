import Link from "next/link";
import { clsx } from "clsx";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-2 focus-visible:outline-amber",
  secondary:
    "border border-steel/40 text-light hover:border-teal-light hover:text-teal-light",
  ghost: "text-light hover:text-teal-light",
};

export function Button({ href, variant = "primary", className, children, ...props }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-[var(--ease-industrial)]",
    variants[variant],
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
