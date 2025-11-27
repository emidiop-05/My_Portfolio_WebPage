import React from "react";
import { useGLTF } from "@react-three/drei";

export function NodeJsIcon(props) {
  const { nodes, materials } = useGLTF("/NodeJsIcon.glb");

  const NodeGreen = "#68A063";
  const NodeCharc = "#36454F";
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LOGO.geometry} position={[-0.003, -0.009, 0.469]}>
        <meshBasicMaterial attach="material" color={NodeGreen} />
      </mesh>
      <mesh geometry={nodes.back.geometry}>
        {" "}
        <meshBasicMaterial attach="material" color={NodeCharc} />{" "}
      </mesh>
    </group>
  );
}

useGLTF.preload("/NodeJsIcon.glb");
