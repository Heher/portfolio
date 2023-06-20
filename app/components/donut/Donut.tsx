import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';

import donut from '~/data/donut/donut.gltf';

interface DonutProps {
  modelPath: string;
  scale?: number;
  position?: number[];
}

export default function Donut({ modelPath, scale = 10, position = [0, 0, 0], color }: DonutProps) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, donut);
  console.log(gltf);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.003));
  return (
    <>
      <group ref={ref} scale={scale}>
        <primitive object={gltf.nodes.Donut} position={gltf.nodes.Donut.position} />
        <primitive
          object={gltf.nodes.Icing}
          position={gltf.nodes.Icing.position}
          material-color={color || gltf.nodes.Icing.material.color}
        />
      </group>
    </>
  );
}
