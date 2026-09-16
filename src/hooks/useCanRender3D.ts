"use client";

import { useEffect, useState } from "react";

function detectWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Decides whether the cinematic R3F hero/showcase should mount.
 * Stays false (fallback imagery) for reduced-motion, narrow/mobile viewports,
 * low device memory, or missing WebGL — the brief requires 3D to never be
 * required for the site to work.
 */
export function useCanRender3D() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNarrow = window.innerWidth < 860;
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const lowMemory = typeof deviceMemory === "number" && deviceMemory > 0 && deviceMemory < 4;
    const hasWebGL = detectWebGL();

    setCanRender(!reducedMotion && !isNarrow && !lowMemory && hasWebGL);
  }, []);

  return canRender;
}
