"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraControllerProps {
  progress: number; // 0 → 1 from ScrollTrigger
}

export default function CameraController({ progress }: CameraControllerProps) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0.3, 1.2, 0));

  // Define key camera positions for the story
  // progress 0.0  → overview (Form)
  // progress 0.35 → closer orbit
  // progress 0.65 → entering the building
  // progress 1.0  → inside / final view

  useFrame(() => {
    // Smoothly interpolate camera position based on progress
    const p = progress;

    // Position keyframes
    const x = THREE.MathUtils.lerp(7.5, 1.8, smoothstep(p, 0, 0.7));
    const y = THREE.MathUtils.lerp(4.5, 1.6, smoothstep(p, 0, 0.8));
    const z = THREE.MathUtils.lerp(9.0, 3.2, smoothstep(p, 0, 0.75));

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, x, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, y, 0.08);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, z, 0.08);

    // Look-at target also moves slightly
    const lookY = THREE.MathUtils.lerp(1.2, 1.4, p);
    target.current.set(0.3, lookY, 0);
    camera.lookAt(target.current);
  });

  return null;
}

// Simple smoothstep helper
function smoothstep(t: number, min: number, max: number) {
  const x = Math.max(0, Math.min(1, (t - min) / (max - min)));
  return x * x * (3 - 2 * x);
}