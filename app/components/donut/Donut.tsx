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
  const [spinDirection, setSpinDirection] = React.useState<'left' | 'right'>('left');

  useFrame((state, delta) => {
    // if (spinDirection === 'left') {
    //   ref.current.rotation.x -= 0.003;
    // } else {
    //   ref.current.rotation.x += 0.003;
    // }

    // if (ref.current.rotation.x > 0.5) {
    //   setSpinDirection('right');
    // } else if (ref.current.rotation.x < -0.5) {
    //   setSpinDirection('left');
    // }

    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() / 2) / 2;
  });

  return (
    <group ref={ref} scale={scale}>
      <primitive object={gltf.nodes.Donut} position={gltf.nodes.Donut.position} />
      <primitive object={gltf.nodes.Icing} position={gltf.nodes.Icing.position} material-color={color} />
    </group>
  );
}
