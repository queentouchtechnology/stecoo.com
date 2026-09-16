"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  unit?: string;
  label: string;
}

function parseNumeric(value: string) {
  const numeric = value.replace(/[^0-9.]/g, "");
  return numeric ? parseFloat(numeric) : null;
}

/**
 * `display` always starts at "0" on both server and client so hydration
 * matches — reduced-motion is read inside the effect (client-only, after
 * mount) rather than branching the initial render shape, which is what
 * caused an SSR/CSR mismatch when `prefers-reduced-motion` was set.
 */
export function StatCounter({ value, unit, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");
  const target = parseNumeric(value);

  useEffect(() => {
    if (!inView) return;
    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || target === null) {
      // Reduced-motion/no-target path: jump straight to the final value
      // instead of animating. This reads window.matchMedia, so it can only
      // run client-side in an effect (not during SSR render).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(current.toLocaleString("en-IN"));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-steel/20 pt-5"
    >
      <div className="font-display text-4xl font-bold text-white sm:text-5xl">
        {target !== null ? display : value}
        {unit && <span className="ml-2 font-display text-base font-medium text-teal-light">{unit}</span>}
      </div>
      <p className="mt-2 text-sm text-steel">{label}</p>
    </motion.div>
  );
}
