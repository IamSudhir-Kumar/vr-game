"use client"; // This directive makes sure the component is rendered on the client side

import React from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="contianer">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
