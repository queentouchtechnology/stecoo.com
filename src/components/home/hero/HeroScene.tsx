"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

const TEAL = "#4ea3a4";
const TEAL_DIM = "#2e6570";
const AMBER = "#f4b41a";

/** Every sub-component reads elapsed time itself via useFrame and mutates
 * its own refs imperatively — this is the correct R3F pattern (no React
 * re-render per frame) and is what actually makes the timeline animate. */

function SparkCore() {
  const mesh = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const visible = smoothstep(0.0, 0.4, t) * (1 - smoothstep(1.6, 2.1, t));
    const scale = 0.06 + smoothstep(0, 0.5, t) * 0.05;
    if (mesh.current) mesh.current.scale.setScalar(scale * visible + 0.001);
    if (mat.current) mat.current.opacity = visible;
  });
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial ref={mat} color={AMBER} transparent opacity={0} />
    </mesh>
  );
}

function MoltenLine() {
  const mesh = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const length = smoothstep(0.5, 1.8, t) * 6;
    const opacity = smoothstep(0.4, 1.0, t) * (1 - smoothstep(3.4, 5, t) * 0.6);
    if (mesh.current) mesh.current.scale.x = Math.max(length, 0.001);
    if (mat.current) mat.current.opacity = opacity;
  });
  return (
    <mesh ref={mesh} rotation={[0, 0, Math.PI / 5]}>
      <boxGeometry args={[1, 0.035, 0.035]} />
      <meshBasicMaterial ref={mat} color={AMBER} transparent opacity={0} />
    </mesh>
  );
}

interface BeamDef {
  from: [number, number, number];
  to: [number, number, number];
  delay: number;
}

const BEAMS: BeamDef[] = [
  { from: [-3, -2, 0], to: [3, 2, 0], delay: 1.6 },
  { from: [-3, 2, 0], to: [3, -2, 0], delay: 1.85 },
  { from: [-4, 0, -1], to: [4, 0, 1], delay: 2.1 },
  { from: [0, -3, -1], to: [0, 3, 1], delay: 2.3 },
];

function Beam({ def }: { def: BeamDef }) {
  const mesh = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  const { from, to, delay } = def;
  const start = useMemo(() => new THREE.Vector3(...from), [from]);
  const end = useMemo(() => new THREE.Vector3(...to), [to]);
  const full = useMemo(() => start.distanceTo(end), [start, end]);
  const mid = useMemo(() => start.clone().lerp(end, 0.5), [start, end]);
  const quat = useMemo(() => {
    const q = new THREE.Quaternion();
    const dir = end.clone().sub(start).normalize();
    q.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
    return q;
  }, [start, end]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const progress = smoothstep(delay, delay + 0.9, t);
    const opacity = smoothstep(delay, delay + 0.4, t) * (0.85 - 0.25 * smoothstep(6, 9, t));
    if (mesh.current) mesh.current.scale.x = Math.max(progress * full, 0.0001);
    if (mat.current) mat.current.opacity = opacity;
  });

  return (
    <mesh ref={mesh} position={mid} quaternion={quat}>
      <boxGeometry args={[1, 0.045, 0.045]} />
      <meshBasicMaterial ref={mat} color={TEAL} transparent opacity={0} />
    </mesh>
  );
}

function TankForm() {
  const group = useRef<THREE.Group>(null);
  const shellMat = useRef<THREE.MeshBasicMaterial>(null);
  const roofMat = useRef<THREE.MeshBasicMaterial>(null);
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const opacity = smoothstep(3.2, 4.6, t) * 0.9;
    if (shellMat.current) shellMat.current.opacity = opacity;
    if (roofMat.current) roofMat.current.opacity = opacity;
    if (group.current && t > 4.2) group.current.rotation.y += delta * 0.06;
  });
  return (
    <group ref={group} position={[-3.4, -0.6, -1.5]}>
      <mesh>
        <cylinderGeometry args={[1.1, 1.1, 2.1, 24, 1, true]} />
        <meshBasicMaterial ref={shellMat} color={TEAL_DIM} wireframe transparent opacity={0} />
      </mesh>
      <mesh position={[0, 1.1, 0]}>
        <coneGeometry args={[1.1, 0.5, 24, 1, true]} />
        <meshBasicMaterial ref={roofMat} color={TEAL_DIM} wireframe transparent opacity={0} />
      </mesh>
    </group>
  );
}

function VesselForm() {
  const group = useRef<THREE.Group>(null);
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const opacity = smoothstep(3.4, 4.8, t) * 0.9;
    if (mat.current) mat.current.opacity = opacity;
    if (group.current && t > 4.2) group.current.rotation.z += delta * 0.05;
  });
  return (
    <group ref={group} position={[3.2, 0.8, -1]} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <capsuleGeometry args={[0.55, 1.8, 6, 16]} />
        <meshBasicMaterial ref={mat} color={TEAL} wireframe transparent opacity={0} />
      </mesh>
    </group>
  );
}

function StructureForm() {
  const mats = useRef<(THREE.MeshBasicMaterial | null)[]>([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const opacity = smoothstep(3.6, 5.0, t) * 0.7;
    mats.current.forEach((m) => {
      if (m) m.opacity = opacity;
    });
  });
  return (
    <group position={[0.4, -2.4, -2.5]}>
      {[-1.4, 0, 1.4].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 0]}>
          <boxGeometry args={[0.06, 1.6, 0.06]} />
          <meshBasicMaterial ref={(m) => { mats.current[i] = m; }} color={TEAL_DIM} transparent opacity={0} />
        </mesh>
      ))}
      <mesh position={[0, 1.6, 0]}>
        <boxGeometry args={[3, 0.06, 0.06]} />
        <meshBasicMaterial ref={(m) => { mats.current[3] = m; }} color={TEAL_DIM} transparent opacity={0} />
      </mesh>
    </group>
  );
}

function BlueprintGrid() {
  const grid = useMemo(() => {
    const g = new THREE.GridHelper(24, 24, TEAL_DIM, TEAL_DIM);
    const mat = g.material as THREE.Material & { transparent: boolean; opacity: number };
    mat.transparent = true;
    mat.opacity = 0;
    return g;
  }, []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const opacity = smoothstep(2.6, 4.0, t) * 0.18;
    const mat = grid.material as THREE.Material & { opacity: number };
    mat.opacity = opacity;
  });
  return <primitive object={grid} position={[0, -3.4, 0]} />;
}

function Particles() {
  const count = 140;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    return arr;
  }, []);
  const points = useRef<THREE.Points>(null);
  const mat = useRef<THREE.PointsMaterial>(null);
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const opacity = smoothstep(0.6, 2.4, t) * 0.55;
    if (mat.current) mat.current.opacity = opacity;
    if (points.current) points.current.rotation.y += delta * 0.015;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial ref={mat} color={AMBER} size={0.028} transparent opacity={0} sizeAttenuation />
    </points>
  );
}

function CameraRig() {
  useFrame(({ camera }, delta) => {
    const t = (camera.userData.t ?? 0) + delta;
    camera.userData.t = t;
    const targetZ = 9 - smoothstep(0.2, 1.6, t) * 2.4 + smoothstep(3.2, 5, t) * 5.6;
    const targetY = smoothstep(3.2, 5, t) * 0.4;
    camera.position.z += (targetZ - camera.position.z) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroScene() {
  return (
    <>
      <CameraRig />
      <SparkCore />
      <MoltenLine />
      {BEAMS.map((b, i) => (
        <Beam key={i} def={b} />
      ))}
      <BlueprintGrid />
      <Particles />
      <TankForm />
      <VesselForm />
      <StructureForm />
      <fog attach="fog" args={["#071114", 6, 16]} />
    </>
  );
}
