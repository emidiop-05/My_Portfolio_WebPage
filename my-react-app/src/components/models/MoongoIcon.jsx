import React from "react";
import { useGLTF } from "@react-three/drei";

export function MongoIcon(props) {
  const { nodes, materials } = useGLTF("/MoongoIcon.glb");

  const MongoGreen = "#3FA037";
  const MongoCharc = "#36454F";
  const MongoWhite = "#d8d9da";
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LOGO_1.geometry} position={[1.481, -0.622, 0.558]}>
        <meshBasicMaterial attach="material" color={MongoGreen} />
      </mesh>
      <mesh geometry={nodes.LOGO.geometry} position={[-0.142, -0.017, 0.72]}>
        <meshBasicMaterial attach="material" color={MongoWhite} />
      </mesh>
      <mesh geometry={nodes.back.geometry}>
        <meshBasicMaterial attach="material" color={MongoCharc} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/MoongoIcon.glb");
