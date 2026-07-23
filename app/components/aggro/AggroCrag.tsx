import type { Group } from 'three';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { MeshStandardMaterial } from 'three';

import Base from './Base';
import Rock from './Rock';

type DonutProps = {
  scale?: number;
};

// const rockMaterial = new MeshStandardMaterial({
//   transparent: true,
//   color: 0x56913A,
//   emissive: 0x56913A,
//   emissiveIntensity: 1.5,
// });

// const baseMaterial = new MeshStandardMaterial({
//   color: 0x333333,
// });

export default function AggroCrag({ scale = 0.008 }: DonutProps) {
  const ref = useRef<Group | null>(null);
  const base = useGLTF('./gltf/aggro/base.gltf');

  useEffect(() => {
    // Apply materials to base
    base.scene.traverse((child) => {
      if ('material' in child && child.material) {
        child.material = new MeshStandardMaterial({
          color: 0x333333,
        });
      }
    });
  }, [base]);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) / 2;
  });

  return (
    <group ref={ref} scale={scale}>
      <Base />
      <Rock />
    </group>
  );
}
