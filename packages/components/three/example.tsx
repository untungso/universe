"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

const Box = () => {
  const ref = React.useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (ref.current !== undefined) {
      ref.current.rotation.x = ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

const ExampleThreeJS = () => {
  React.useEffect(() => {
    console.log("el dorado");
  }, []);
  return (
    <div className="min-h-screen min-w-full">
      <Canvas style={{ background: "black" }}>
        <Box />
      </Canvas>
    </div>
  );
};

export default ExampleThreeJS;
