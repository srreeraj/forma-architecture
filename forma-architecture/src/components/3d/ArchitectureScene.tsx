"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import ArchitectureModel from "./ArchitectureModel";
import Lights from "./Lights";
import Ground from "./Ground";
import CameraController from "./CameraController";

interface ArchitectureSceneProps {
  progress?: number;
}

export default function ArchitectureScene({ progress = 0 }: ArchitectureSceneProps) {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        camera={{ position: [7.5, 4.5, 9], fov: 32 }}
        gl={{ antialias: true, toneMappingExposure: 1.05 }}
      >
        <color attach="background" args={["#0c0c0c"]} />

        <Lights />
        <Ground />
        <ArchitectureModel />

        <ContactShadows
          position={[0, 0.01, 0]}
          opacity={0.45}
          scale={20}
          blur={2.5}
          far={8}
        />

        {/* Camera is now controlled by scroll progress */}
        <CameraController progress={progress} />
      </Canvas>
    </div>
  );
}