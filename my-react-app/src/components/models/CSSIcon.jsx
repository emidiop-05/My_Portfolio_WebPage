import React from "react";
import { useGLTF } from "@react-three/drei";

export function CSSIcon(props) {
  const { nodes, materials } = useGLTF("/CSSIcon.glb");

  const cssBlue = "#405fd9";
  const lightBlue = "#5875e8";
  const white = "#dddede";
  const backColor = "#36454F";

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LOGO_3.geometry} position={[0.659, -0.164, 0.891]}>
        {" "}
        <meshBasicMaterial attach="material" color={white} />
      </mesh>

      <mesh geometry={nodes.LOGO_2.geometry} position={[-0.793, -0.164, 0.714]}>
        <meshBasicMaterial attach="material" color={white} />
      </mesh>

      <mesh geometry={nodes.LOGO_1.geometry} position={[0.882, -0.175, 0.715]}>
        <meshBasicMaterial attach="material" color={lightBlue} />
      </mesh>

      <mesh geometry={nodes.LOGO.geometry} position={[-0.065, -0.182, 0.355]}>
        <meshBasicMaterial attach="material" color={cssBlue} />
      </mesh>

      <mesh geometry={nodes.back.geometry}>
        <meshBasicMaterial attach="material" color={backColor} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/CSSIcon.glb");
