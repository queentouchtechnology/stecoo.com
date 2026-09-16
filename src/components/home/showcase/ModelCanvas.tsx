"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type ModelKind = "tank" | "vessel" | "piping" | "structure" | "welding";

const TEAL = "#4ea3a4";
const TEAL_DIM = "#2e6570";
const AMBER = "#f4b41a";

function RotatingGroup({ speed = 0.18, children }: { speed?: number; children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });
  return <group ref={ref}>{children}</group>;
}

function TankModel() {
  return (
    <RotatingGroup>
      <mesh>
        <cylinderGeometry args={[1.15, 1.15, 2, 28, 1, true]} />
        <meshBasicMaterial color={TEAL} wireframe />
      </mesh>
      <mesh position={[0, 1.05, 0]}>
        <coneGeometry args={[1.15, 0.55, 28, 1, true]} />
        <meshBasicMaterial color={TEAL_DIM} wireframe />
      </mesh>
      <mesh position={[0, -1.02, 0]} rotation={[Math.PI, 0, 0]}>
        <circleGeometry args={[1.15, 28]} />
        <meshBasicMaterial color={TEAL_DIM} wireframe transparent opacity={0.5} />
      </mesh>
    </RotatingGroup>
  );
}

function PressureVesselModel() {
  return (
    <RotatingGroup speed={0.22}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.7, 1.9, 8, 20]} />
        <meshBasicMaterial color={TEAL} wireframe />
      </mesh>
      <mesh position={[1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.4, 12]} />
        <meshBasicMaterial color={AMBER} wireframe />
      </mesh>
      <mesh position={[-1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.4, 12]} />
        <meshBasicMaterial color={AMBER} wireframe />
      </mesh>
    </RotatingGroup>
  );
}

function PipingModel() {
  return (
    <RotatingGroup speed={0.15}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.16, 10, 40, Math.PI]} />
        <meshBasicMaterial color={TEAL} wireframe />
      </mesh>
      <mesh position={[1, 0.85, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 1.2, 16]} />
        <meshBasicMaterial color={TEAL} wireframe />
      </mesh>
      <mesh position={[-1, -0.85, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 1.2, 16]} />
        <meshBasicMaterial color={TEAL_DIM} wireframe />
      </mesh>
    </RotatingGroup>
  );
}

function StructureModel() {
  return (
    <RotatingGroup speed={0.12}>
      {[-1, 1].map((x) =>
        [-1, 1].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0, z]}>
            <boxGeometry args={[0.08, 2.2, 0.08]} />
            <meshBasicMaterial color={TEAL_DIM} />
          </mesh>
        )),
      )}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[2.16, 0.08, 2.16]} />
        <meshBasicMaterial color={TEAL} wireframe />
      </mesh>
      <mesh position={[0, -1.1, 0]}>
        <boxGeometry args={[2.16, 0.08, 2.16]} />
        <meshBasicMaterial color={TEAL} wireframe />
      </mesh>
    </RotatingGroup>
  );
}

function WeldingModel() {
  return (
    <RotatingGroup speed={0.2}>
      <mesh position={[-0.4, 0, 0]}>
        <boxGeometry args={[0.9, 1.2, 0.7]} />
        <meshBasicMaterial color={TEAL_DIM} wireframe />
      </mesh>
      <mesh position={[0.5, 0.5, 0]} rotation={[0, 0, -0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1.4, 8]} />
        <meshBasicMaterial color={AMBER} />
      </mesh>
      <mesh position={[1.05, 1.05, 0]}>
        <sphereGeometry args={[0.09, 10, 10]} />
        <meshBasicMaterial color={AMBER} />
      </mesh>
    </RotatingGroup>
  );
}

const MODELS: Record<ModelKind, () => React.ReactElement> = {
  tank: TankModel,
  vessel: PressureVesselModel,
  piping: PipingModel,
  structure: StructureModel,
  welding: WeldingModel,
};

export default function ModelCanvas({ kind }: { kind: ModelKind }) {
  const Model = MODELS[kind];
  return (
    <Canvas camera={{ position: [2.6, 1.4, 2.6], fov: 42 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
      <Model />
    </Canvas>
  );
}
