import { Canvas } from '@react-three/fiber';
import { white } from '../globe/colors';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import Donut from './Donut';

export function DonutContainer() {
  const groupRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 10]} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      <motion.group ref={groupRef} scale={1} rotation={[0, 0, 0.5, 'ZXY']}>
        <Donut modelPath={'~/data/donut/donut.gltf'} />
      </motion.group>
      <OrbitControls
        minPolarAngle={Math.PI / 4 - 0.2}
        maxPolarAngle={Math.PI - 0.7}
        maxDistance={45}
        minDistance={5}
        enablePan={false}
        rotateSpeed={0.25}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}
