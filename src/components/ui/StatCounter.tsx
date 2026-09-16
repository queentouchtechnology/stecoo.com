"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: string;
  unit?: string;
  label: string;
}

function parseNumeric(value: string) {
  const numeric = value.replace(/[^0-9.]/g, "");
  return numeric ? parseFloat(numeric) : null;
}

export function StatCounter({ value, unit, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : "0");
  const target = parseNumeric(value);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion || target === null) {
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
        setDisplay(value.match(/[0-9.,]+/) ? value : current.toLocaleString("en-IN"));
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, target, value]);

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
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
