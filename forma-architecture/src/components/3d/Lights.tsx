"use client";

export default function Lights() {
  return (
    <>
      {/* Soft overall light */}
      <ambientLight intensity={0.4} />

      {/* Main sunlight */}
      <directionalLight
        position={[8, 12, 6]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Gentle fill light from the opposite side */}
      <directionalLight position={[-6, 4, -4]} intensity={0.3} />
    </>
  );
}