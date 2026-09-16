"use client";

import { Canvas } from "@react-three/fiber";
import { HeroScene } from "./HeroScene";

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.75]}
      onCreated={({ gl }) => gl.setClearColor("#071114", 0)}
    >
      <HeroScene />
    </Canvas>
  );
}
