import React, { useRef, useState } from "react";
import wheelImage from "../assets/wheel.png";

function Navigation_wheel() {
  const wheelRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastY = useRef(0);
  const rotation = useRef(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    lastY.current = e.clientY;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - lastY.current;
    rotation.current -= deltaY * 0.4;
    lastY.current = e.clientY;

    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${rotation.current}deg)`;
    }
  };

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translate(25%, -75%)",

        width: "clamp(260px, 35vw, 520px)", // 🔥 big & responsive
        height: "clamp(260px, 35vw, 520px)",

        zIndex: 20,
        pointerEvents: "auto",
      }}
    >
      <img
        ref={wheelRef}
        src={wheelImage}
        alt="Navigation Wheel"
        draggable={false}
        onMouseDown={onMouseDown}
        style={{
          width: "150%",
          height: "150%",
          objectFit: "contain",
          cursor: "grab",
          userSelect: "none",
          display: "block",
          filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.7))",
        }}
      />
    </div>
  );
}

export default Navigation_wheel;
