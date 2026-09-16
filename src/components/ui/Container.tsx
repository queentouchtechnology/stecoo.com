import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12", className)} {...props} />;
}
