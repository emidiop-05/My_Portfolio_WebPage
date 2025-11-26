import React from "react";
import { useGLTF } from "@react-three/drei";

export function ReactIcon(props) {
  const { nodes, materials } = useGLTF("/react.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LOGO.geometry} position={[-0.003, -0.006, 0.648]}>
        <meshBasicMaterial color="#61DBFB" />
      </mesh>

      <mesh geometry={nodes.back.geometry}>
        <meshBasicMaterial color="#36454F" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/react.glb");
