import { Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { white } from './colors';
import FullGlobe from './FullGlobe';

export default function GlobeContainer() {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[0, 1, 1]}
        intensity={2}
        color={white}
        castShadow
        shadow-mapSize={[3072, 3072]}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-camera-near={0.1}
        shadow-camera-far={10}
      />
      <Suspense fallback={null}>
        <FullGlobe />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
