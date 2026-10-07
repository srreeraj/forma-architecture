"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ArchitectureModel from "./ArchitectureModel";
import Lights from "./Lights";
import Ground from "./Ground";

export default function ArchitectureScene() {
  return (
    <div className="h-[500px] w-full md:h-[600px]">
      <Canvas
        shadows
        camera={{ position: [6, 4, 8], fov: 35 }}
        gl={{ antialias: true }}
      >
        {/* Background color of the 3D scene */}
        <color attach="background" args={["#0c0c0c"]} />

        <Lights />
        <Ground />
        <ArchitectureModel />

        {/* Temporary orbit controls so you can inspect the model */}
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={6}
          maxDistance={16}
        />
      </Canvas>
    </div>
  );
}