import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function Ship() {
  const { scene } = useGLTF("/models/sailing_ship.glb");
  const ref = useRef();
  const { viewport } = useThree();

  // 🚢 BIGGER responsive scale
  const scale =
    viewport.width > 12 ? 0.65 :   // 🖥 desktop
    viewport.width > 8  ? 0.55 :   // 💻 laptop / tablet
                          0.4;    // 📱 mobile

  // 📐 Responsive vertical position (slightly adjusted)
  const yPos =
    viewport.width > 8 ? -3.6 : -2.6;

  // 🧭 Base orientation
  const baseRotation = [0, 0, 0];

  useFrame(({ clock }) => {
    if (!ref.current) return;

    // 🌊 Gentle idle sway
    ref.current.rotation.y =
      baseRotation[1] + Math.sin(clock.elapsedTime * 0.4) * 0.08;

    ref.current.rotation.x = baseRotation[0];
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={[0, yPos, 0]}
      rotation={baseRotation}
    />
  );
}

useGLTF.preload("/models/sailing_ship.glb");
