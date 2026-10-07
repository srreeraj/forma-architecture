"use client";

export default function ArchitectureModel() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main volume */}
      <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 2.4, 2.2]} />
        <meshStandardMaterial color="#c4b8a5" />
      </mesh>

      {/* Secondary volume */}
      <mesh position={[2.1, 0.9, 0.3]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 1.8, 1.8]} />
        <meshStandardMaterial color="#b8ad9a" />
      </mesh>

      {/* Tall vertical element */}
      <mesh position={[-1.6, 1.8, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[1.1, 3.6, 1.4]} />
        <meshStandardMaterial color="#d0c6b4" />
      </mesh>

      {/* Low horizontal base */}
      <mesh position={[0.4, 0.25, 1.4]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.5, 1.2]} />
        <meshStandardMaterial color="#a89f8f" />
      </mesh>
    </group>
  );
}