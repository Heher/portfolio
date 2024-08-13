import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';

import base from '~/data/aggro/base.gltf';
import rock from '~/data/aggro/rock.gltf';
import { MeshStandardMaterial } from 'three';

interface DonutProps {
  scale?: number;
}

const rockMaterial = new MeshStandardMaterial({
  transparent: true,
  color: 0x56913a,
  emissive: 0x56913a,
  emissiveIntensity: 1.5
});

const baseMaterial = new MeshStandardMaterial({
  color: 0x333333
});

export default function AggroCrag({ scale = 0.008 }: DonutProps) {
  const ref = useRef();
  const baseGltf = useLoader(GLTFLoader, base);
  const rockGltf = useLoader(GLTFLoader, rock);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) / 2;
  });

  return (
    <group ref={ref} scale={scale}>
      <primitive object={baseGltf.nodes.Base} position={baseGltf.nodes.Base.position} material={baseMaterial} />
      <primitive object={rockGltf.nodes.Rock} position={rockGltf.nodes.Rock.position} material={rockMaterial} />
    </group>
  );
}
