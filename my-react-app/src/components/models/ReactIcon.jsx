import React from "react";
import { useGLTF } from "@react-three/drei";

export function ReactIcon(props) {
  const { nodes, materials } = useGLTF("/react.glb");
  return (
    <group {...props} dispose={null}>
      {/* 1. We remove the 'material={...}' prop */}
      <mesh geometry={nodes.LOGO.geometry} position={[-0.003, -0.006, 0.648]}>
        {/* 2. We nest the material component inside the mesh */}
        <meshBasicMaterial color="#61DBFB" />
      </mesh>

      {/* 3. We can test the back piece with a separate color */}
      <mesh geometry={nodes.back.geometry}>
        <meshBasicMaterial color="#36454F" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/react.glb");
