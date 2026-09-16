"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NODES = [
  { id: "IN", name: "India", x: 640, y: 230, primary: true },
  { id: "SA", name: "Saudi Arabia", x: 420, y: 200 },
  { id: "AE", name: "UAE", x: 500, y: 240 },
  { id: "TR", name: "Turkey", x: 340, y: 120 },
  { id: "GCC", name: "GCC", x: 460, y: 280 },
];

const HUB = NODES[0];
const ROUTES = NODES.filter((n) => n.id !== "IN");

export function GlobalMap() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 760 360"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of STECOO's engineering experience connecting India with the UAE, Saudi Arabia, Turkey and the wider GCC region"
    >
      <defs>
        <pattern id="gmgrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#AEB9BD" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="760" height="360" fill="url(#gmgrid)" />

      {ROUTES.map((node, i) => (
        <motion.path
          key={node.id}
          d={`M${HUB.x},${HUB.y} Q${(HUB.x + node.x) / 2},${Math.min(HUB.y, node.y) - 50} ${node.x},${node.y}`}
          fill="none"
          stroke="#4ea3a4"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.8 } : {}}
          transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      {NODES.map((node, i) => (
        <g key={node.id}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.primary ? 7 : 5}
            fill={node.primary ? "#f4b41a" : "#006f70"}
            stroke="#F3F6F7"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
          <motion.text
            x={node.x}
            y={node.y - 14}
            textAnchor="middle"
            className="font-display"
            fontSize="13"
            fontWeight={node.primary ? 700 : 600}
            fill={node.primary ? "#f4b41a" : "#F3F6F7"}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
          >
            {node.name}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}
