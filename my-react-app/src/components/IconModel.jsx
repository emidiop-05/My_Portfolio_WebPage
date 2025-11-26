import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function IconModel({ children, ...props }) {
  return (
    <div {...props}>
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[3, 3, 5]} intensity={1} castShadow />

        <OrbitControls enableZoom={false} />

        {children}
      </Canvas>
    </div>
  );
}
