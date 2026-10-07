"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import ArchitectureModel from "./ArchitectureModel";
import Lights from "./Lights";
import Ground from "./Ground";

export default function ArchitectureScene() {
  return (
    <div className="h-[520px] w-full md:h-[640px]">
      <Canvas
        shadows
        camera={{ position: [7.5, 4.5, 9], fov: 32 }}
        gl={{ antialias: true, toneMappingExposure: 1.05 }}
      >
        {/* Match site background */}
        <color attach="background" args={["#0c0c0c"]} />

        <Lights />
        <Ground />
        <ArchitectureModel />

        {/* Soft contact shadow under the building */}
        <ContactShadows
          position={[0, 0.01, 0]}
          opacity={0.45}
          scale={20}
          blur={2.5}
          far={8}
        />

        {/* Temporary controls for inspection */}
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2.05}
          minDistance={7}
          maxDistance={18}
          target={[0.4, 1.2, 0]}
        />
      </Canvas>
    </div>
  );
}