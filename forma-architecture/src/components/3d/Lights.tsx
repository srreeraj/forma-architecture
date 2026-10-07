"use client";

import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      {/* Soft ambient fill */}
      <ambientLight intensity={0.25} />

      {/* Key sunlight */}
      <directionalLight
        position={[10, 14, 8]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />

      {/* Cool fill from the opposite side */}
      <directionalLight position={[-8, 6, -6]} intensity={0.35} color="#b0c4de" />

      {/* Subtle environment lighting for more realistic reflections */}
      <Environment preset="city" environmentIntensity={0.45} />
    </>
  );
}