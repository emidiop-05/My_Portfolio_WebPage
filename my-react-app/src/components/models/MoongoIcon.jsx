import React from "react";
import { useGLTF } from "@react-three/drei";

export function MongoIcon(props) {
  const { nodes, materials } = useGLTF("/MoongoIcon.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.LOGO_1.geometry}
        meshBasicMaterial
        color="#61DBFB"
        position={[1.481, -0.622, 0.558]}
      />
      <mesh
        geometry={nodes.LOGO.geometry}
        material={materials.logo}
        position={[-0.142, -0.017, 0.72]}
      />
      <mesh geometry={nodes.back.geometry} material={materials.back} />
    </group>
  );
}

useGLTF.preload("/MoongoIcon.glb");
