import type * as THREE from 'three';

import { OrbitControls, useHelper } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, use, useRef } from 'react';

import { TripPageContext } from '~/utils/context';

import { white } from './colors';
import TestGlobe from './TestGlobe';

function GlobeInner() {
  const directionalLightRef = useRef<THREE.DirectionalLight>();
  const { selectedCity, selectedRouteLeg } = use(TripPageContext);

  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight
        ref={directionalLightRef}
        position={[2, 1, -1]}
        intensity={selectedCity || selectedRouteLeg ? 2 : 5}
        color={white}
        castShadow
        // shadow-mapSize={[3072, 3072]}
        // shadow-camera-left={-2}
        // shadow-camera-right={2}
        // shadow-camera-top={2}
        // shadow-camera-bottom={-2}
        // shadow-camera-near={0.1}
        // shadow-camera-far={10}
        target-position={[0.8, 0, -2]}
      />
      <Suspense fallback={null}>
        <TestGlobe />
      </Suspense>
    </>
  );
}

export default function GlobeContainer() {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      <GlobeInner />
    </Canvas>
  );
}
