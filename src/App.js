import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import CanvasWrapper from "./components/CanvasWrapper";

function App() {
  return (
    <div className="App">
      <Canvas className="canvas" style={{ width: "100vw", height: "100vh" }}>
        <OrbitControls dampingFactor={0.2} />
        <Environment
          background
          near={1}
          far={1000}
          resolution={256}
          files={"/env/pool.hdr"}
        ></Environment>
        <CanvasWrapper />
      </Canvas>
    </div>
  );
}

export default App;
