import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ReactIcon } from "./models/ReactIcon";
import { div } from "three/tsl";

export default function IconCanvas({ className, style }) {
  return (
    <div className={className} style={style}>
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[3, 3, 5]} intensity={1} castShadow />
        <ReactIcon position={[0, 0, 0]} scale={1} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
