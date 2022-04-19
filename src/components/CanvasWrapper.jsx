import { Box, Plane } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { frag } from "../shaders/frag";
import { vertex } from "../shaders/vertex";

const CanvasWrapper = () => {
  // console.log(fWater);
  // console.log(frag);
  // console.log(vertex);

  const waterUniforms = {
    uTime: { value: 0 },

    uBigWavesElevation: { value: 0.15 },
    uBigWavesFrequency: { value: new THREE.Vector2(0.1, 0.2) },
    uBigWavesSpeed: { value: 0.5 },

    uSmallWavesElevation: { value: 0.17 },
    uSmallWavesFrequency: { value: 1.5 },
    uSmallWavesSpeed: { value: 0.15 },
    uSmallWavesIterations: { value: 4 },

    uDepthColor: { value: new THREE.Color("#99d1ca") },
    uSurfaceColor: { value: new THREE.Color("#c9f5f0") },

    uColorOffset: { value: 0.08 },
    uColorMultiplier: { value: 5 },
  };

  const box = useRef();
  const water = useRef();
  console.log(box.current);
  console.log(water.current);

  if (water.current) console.log(water.current);

  useFrame(({ clock }) => {
    // waterUniforms.uTime.value = clock.getElapsedTime;
    water.current.material.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <>
      <Box args={[1, 1, 1]} ref={box}>
        <meshStandardMaterial
          color={"#ff0000"}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        args={[1, 1, 512, 512]}
        position={[0, -2, 0]}
        ref={water}
        scale={[30, 30, 30]}
      >
        <shaderMaterial
          fragmentShader={frag}
          vertexShader={vertex}
          uniforms={waterUniforms}
        />
      </Plane>
    </>
  );
};

export default CanvasWrapper;
