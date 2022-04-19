import {
  Environment,
  EnvironmentCube,
  CubeCamera,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import CanvasWrapper from "./components/CanvasWrapper";

function App() {
  const texture = [
    "env/pz.png",
    "env/nz.png",
    "env/py.png",
    "env/ny.png",
    "env/pz.png",
    "env/nz.png",
  ];
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
          // preset="sunset"
        ></Environment>
        <CanvasWrapper />
        {/* <CubeCamera>{(texture) => <Environment map={texture} />}</CubeCamera> */}
        {/* <EnvironmentCube/> */}
      </Canvas>
    </div>
  );
}

export default App;
