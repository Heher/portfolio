import { Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { white } from './colors';
import FullGlobe from './FullGlobe';

export default function GlobeContainer() {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 1]} intensity={3} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      <Suspense fallback={null}>
        <FullGlobe />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
