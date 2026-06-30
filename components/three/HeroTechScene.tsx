"use client";

import { Float, Html, Icosahedron, MeshDistortMaterial, Octahedron, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

type HeroTechSceneProps = {
  pointer: { x: number; y: number };
};

type TechObjectProps = {
  label: string;
  color: string;
  position: [number, number, number];
  variant: "cube" | "sphere" | "crystal" | "shield";
  speed: number;
};

function TechObject({ label, color, position, variant, speed }: TechObjectProps) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(time * speed + position[0]) * 0.22;
      groupRef.current.rotation.y += 0.006 * speed;
      groupRef.current.rotation.x = Math.sin(time * 0.28 * speed) * 0.18;
    }
    if (meshRef.current) {
      meshRef.current.rotation.z -= 0.003 * speed;
    }
  });

  const material = (
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} roughness={0.25} metalness={0.62} />
  );

  return (
    <Float speed={1.35 * speed} rotationIntensity={0.35} floatIntensity={0.55}>
      <group ref={groupRef} position={position}>
        {variant === "cube" ? (
          <mesh ref={meshRef}>
            <boxGeometry args={[0.82, 0.82, 0.82]} />
            {material}
          </mesh>
        ) : null}
        {variant === "sphere" ? (
          <Icosahedron ref={meshRef} args={[0.58, 2]}>
            <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.6} distort={0.28} speed={1.2} roughness={0.2} metalness={0.35} />
          </Icosahedron>
        ) : null}
        {variant === "crystal" ? (
          <Octahedron ref={meshRef} args={[0.62, 0]}>
            {material}
          </Octahedron>
        ) : null}
        {variant === "shield" ? (
          <mesh ref={meshRef}>
            <cylinderGeometry args={[0.52, 0.7, 0.16, 5]} />
            {material}
          </mesh>
        ) : null}
        <mesh scale={1.28}>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.18} />
        </mesh>
        <Html center distanceFactor={8} className="pointer-events-none select-none">
          <span className="rounded-none border border-cyanline/30 bg-black/45 px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
            {label}
          </span>
        </Html>
      </group>
    </Float>
  );
}

function SceneRig({ pointer }: HeroTechSceneProps) {
  const groupRef = useRef<Group>(null);
  const objects = useMemo<TechObjectProps[]>(
    () => [
      { label: "React", color: "#20e7ff", position: [-2.25, 1.25, -1.1], variant: "cube", speed: 1.1 },
      { label: "Node.js", color: "#7dff8a", position: [1.85, 1.0, -0.85], variant: "cube", speed: 0.95 },
      { label: "AI", color: "#9b5cff", position: [0, 0.25, -0.2], variant: "sphere", speed: 1.22 },
      { label: "MongoDB", color: "#24f59d", position: [-1.65, -1.05, -0.75], variant: "crystal", speed: 0.88 },
      { label: "Git", color: "#ff6a3d", position: [2.15, -1.12, -1.15], variant: "cube", speed: 1.05 },
      { label: "Cyber", color: "#35f4ff", position: [0.85, -0.38, 0.15], variant: "shield", speed: 0.82 },
    ],
    [],
  );

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (pointer.x * 0.22 - groupRef.current.rotation.y) * 0.045;
    groupRef.current.rotation.x += (-pointer.y * 0.14 - groupRef.current.rotation.x) * 0.045;
  });

  return (
    <group ref={groupRef}>
      {objects.map((object) => (
        <TechObject key={object.label} {...object} />
      ))}
    </group>
  );
}

function HeroTechScene({ pointer }: HeroTechSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 6], fov: 43 }}
      dpr={[1, 1.55]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[2.4, 2.2, 3.2]} color="#20e7ff" intensity={18} distance={8} />
      <pointLight position={[-3, -2, 2]} color="#9b5cff" intensity={10} distance={7} />
      <spotLight position={[0, 4, 5]} angle={0.45} penumbra={0.8} color="#ffffff" intensity={16} />
      <Stars radius={20} depth={14} count={700} factor={2.2} saturation={0} fade speed={0.25} />
      <SceneRig pointer={pointer} />
    </Canvas>
  );
}

export default memo(HeroTechScene);
