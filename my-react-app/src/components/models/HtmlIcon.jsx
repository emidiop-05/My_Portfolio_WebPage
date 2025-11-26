import React from "react";
import { useGLTF } from "@react-three/drei";

export function HtmlIcon(props) {
  const { nodes, materials } = useGLTF("/HtmlIcon.glb");

  const HtmlOrange = "#E34C26";
  const HtmlOragangeLight = "#F06529";
  const HtmlWhite = "#EBEBEB";
  const HtmlCharc = "#36454F";
  const HtmlWhiteBright = "#ffff";
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LOGO_3.geometry} position={[0.659, -0.164, 0.891]}>
        <meshBasicMaterial attach="material" color={HtmlWhiteBright} />
      </mesh>
      <mesh geometry={nodes.LOGO_2.geometry} position={[-0.793, -0.164, 0.714]}>
        <meshBasicMaterial attach="material" color={HtmlWhite} />
      </mesh>
      <mesh geometry={nodes.LOGO_1.geometry} position={[0.882, -0.175, 0.715]}>
        <meshBasicMaterial attach="material" color={HtmlOragangeLight} />
      </mesh>
      <mesh geometry={nodes.LOGO.geometry} position={[-0.065, -0.182, 0.355]}>
        <meshBasicMaterial attach="material" color={HtmlOrange} />
      </mesh>
      <mesh geometry={nodes.back.geometry}>
        <meshBasicMaterial attach="material" color={HtmlCharc} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/HtmlIcon.glb");
