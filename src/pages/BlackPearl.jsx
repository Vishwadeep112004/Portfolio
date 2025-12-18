import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ship from "../components/Ship";

/* 🎥 Responsive camera controller */
function ResponsiveCamera() {
  const { camera, size } = useThree();

  if (size.width < 600) {
    // 📱 Mobile portrait
    camera.position.set(0, 4, 11);
  } else if (size.width < 1024) {
    // 💻 Tablet / laptop
    camera.position.set(2, 5, 10);
  } else {
    // 🖥 Desktop
    camera.position.set(4, 6, 10);
  }

  camera.lookAt(0, -2, 0);
  camera.updateProjectionMatrix();
  return null;
}

export default function BlackPearl() {
  return (
   <div
  style={{
    position: "absolute",
    bottom: 0,
    left: "0",
    width: "clamp(45%, 50vw, 60%)",
    height: "clamp(45vh, 60vh, 70vh)",
    overflow: "hidden",
    pointerEvents: "auto",
  }}
>
      <Canvas
        camera={{ fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ResponsiveCamera />
        <ambientLight intensity={0.7} />
        <directionalLight position={[6, 10, 6]} intensity={1.4} />
        <directionalLight position={[-6, 5, -6]} intensity={0.5} />
        <fog attach="fog" args={["#0b0f14", 6, 28]} />
        <Ship />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}