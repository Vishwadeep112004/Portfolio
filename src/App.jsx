import { useRef, useState } from "react";
import BlackPearl from "./pages/BlackPearl";
import mapImage from "./assets/image.png";
import wheelImage from "./assets/wheel.png";
import { color } from "three/tsl";
import Section_Title from "./components/Section_Title";
import Section_content from "./components/Section_content";
import Main_section from "./components/Main_section";
import Navigation_wheel from "./components/Navigation_wheel";
import Nav_bar from "./components/Nav_bar";

function App() {
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
    rotation.current += deltaY * 0.4;
    lastY.current = e.clientY;

    if (wheelRef.current) {
      wheelRef.current.style.transform =
        `rotate(${rotation.current}deg)`;
    }
  };

  return (
    <div style={{width: "100vw",height: "100vh",position: "relative",overflow: "hidden",backgroundImage: `url(${mapImage})`,backgroundSize:"cover",backgroundPosition: "center",}}onMouseMove={onMouseMove}onMouseUp={onMouseUp}>
      <Nav_bar />
      <section id="The_Black_Pearl">
        <BlackPearl />
        <Navigation_wheel />
      </section>
      <section id="The_Captain">
      </section>
      <section id="The_Captain">
      </section>

    </div>
  );
}

export default App;
