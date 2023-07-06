import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';

import donut from '~/data/donut/donut.gltf';

interface DonutProps {
  scale?: number;
  color: number;
}

export default function Donut({ scale = 10, color }: DonutProps) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, donut);

  useFrame((state, delta) => {
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() / 2) / 2;
  });

  return (
    <group ref={ref} scale={scale}>
      <primitive object={gltf.nodes.Donut} position={gltf.nodes.Donut.position} />
      <primitive object={gltf.nodes.Icing} position={gltf.nodes.Icing.position} material-color={color} />
    </group>
  );
}
