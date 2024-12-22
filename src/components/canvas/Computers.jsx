import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");

  useEffect(() => {
    if (computer.scene) {
      computer.scene.traverse((child) => {
        if (child.isMesh) {
          const positions = child.geometry.attributes.position;
          if (positions) {
            for (let i = 0; i < positions.array.length; i++) {
              if (isNaN(positions.array[i])) {
                positions.array[i] = 0;
              }
            }
            positions.needsUpdate = true;
          }
          child.geometry.computeBoundingSphere();
          child.geometry.computeBoundingBox();
        }
      });
    }
  }, [computer]);

  return (
    <mesh>


      {/* Key light */}
      <directionalLight
        position={[-20, 50, 10]}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />

      {/* New front-top light for user perspective */}
      <spotLight
        position={[10, 10, 20]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        color="#ffffff"
        distance={35}
        decay={2}
        castShadow
      />

      {/* Point light near computer */}
      <pointLight
        position={[0, 0, 5]}
        intensity={2}
        distance={50}
        decay={1}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
        alpha: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}  // Keep vertical rotation locked at horizon
          minPolarAngle={Math.PI / 2}  // Keep vertical rotation locked at horizon
          enablePan={false}  // Disable panning
          rotateSpeed={0.5}  // Keep moderate rotation speed
          enableDamping={true}  // Add smooth damping effect
          dampingFactor={0.05}  // Control the damping strength
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;