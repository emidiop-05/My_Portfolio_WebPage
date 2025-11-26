import React from "react";
import { useGLTF } from "@react-three/drei";

export function JsIcon(props) {
  const { nodes, materials } = useGLTF("/JsIcon.glb");

  const jsYellow = "#F0DB4F";
  const jsCharc = "#36454F";
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LOGO.geometry} position={[0.534, -0.996, 0.4]}>
        <meshBasicMaterial attach="material" color={jsCharc} />
      </mesh>
      <mesh geometry={nodes.back.geometry}>
        <meshBasicMaterial attach="material" color={jsYellow} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/JsIcon.glb");
