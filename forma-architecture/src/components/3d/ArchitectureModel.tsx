"use client";

function Window({ position, size = [0.9, 1.4, 0.08] }: { position: [number, number, number]; size?: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color="#1a1a1c"
        metalness={0.6}
        roughness={0.15}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

export default function ArchitectureModel() {
  return (
    <group position={[0, 0, 0]}>
      {/* ========== MAIN VOLUME ========== */}
      <mesh position={[0, 1.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 2.7, 2.4]} />
        <meshStandardMaterial color="#c9c0b0" roughness={0.75} metalness={0.05} />
      </mesh>

      {/* Windows on main volume – front */}
      <Window position={[-0.9, 1.5, 1.21]} />
      <Window position={[0.9, 1.5, 1.21]} />

      {/* Windows on main volume – side */}
      <Window position={[1.81, 1.5, 0.4]} size={[0.08, 1.4, 0.9]} />

      {/* ========== SECONDARY LOWER VOLUME ========== */}
      <mesh position={[2.4, 0.95, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.9, 2.0]} />
        <meshStandardMaterial color="#b8af9f" roughness={0.7} metalness={0.05} />
      </mesh>

      {/* Horizontal window band on secondary volume */}
      <mesh position={[2.4, 1.15, 1.51]}>
        <boxGeometry args={[1.4, 0.7, 0.08]} />
        <meshStandardMaterial
          color="#1a1a1c"
          metalness={0.6}
          roughness={0.15}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* ========== TALL VERTICAL ELEMENT ========== */}
      <mesh position={[-1.9, 2.1, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 4.2, 1.5]} />
        <meshStandardMaterial color="#d4cbbd" roughness={0.65} metalness={0.05} />
      </mesh>

      {/* Tall window slot */}
      <mesh position={[-1.9, 2.3, 0.46]}>
        <boxGeometry args={[0.7, 2.8, 0.08]} />
        <meshStandardMaterial
          color="#1a1a1c"
          metalness={0.55}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* ========== LOW HORIZONTAL BASE / PLINTH ========== */}
      <mesh position={[0.5, 0.2, 1.5]} castShadow receiveShadow>
        <boxGeometry args={[4.6, 0.4, 1.4]} />
        <meshStandardMaterial color="#9e9586" roughness={0.85} metalness={0.02} />
      </mesh>

      {/* ========== WOODEN ACCENT WALL ========== */}
      <mesh position={[-0.3, 0.85, 1.51]} castShadow>
        <boxGeometry args={[1.8, 1.5, 0.12]} />
        <meshStandardMaterial color="#5c4a38" roughness={0.9} metalness={0.0} />
      </mesh>

      {/* ========== THIN ROOF OVERHANG ========== */}
      <mesh position={[0.3, 2.75, 0.3]} castShadow>
        <boxGeometry args={[5.2, 0.12, 3.2]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.6} metalness={0.3} />
      </mesh>

      {/* ========== SMALL METAL DETAIL ========== */}
      <mesh position={[2.4, 2.0, 0.5]} castShadow>
        <boxGeometry args={[1.9, 0.08, 2.1]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.4} metalness={0.7} />
      </mesh>
    </group>
  );
}