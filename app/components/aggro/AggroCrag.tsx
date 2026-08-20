import type { Group, Material, Mesh } from 'three';
import type { GLTF } from 'three-stdlib';

import { useGLTF } from '@react-three/drei';
// import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// import { MeshStandardMaterial } from 'three';
import { useRef } from 'react';

import Base from './Base';
import Logo from './Logo';
import Rock from './Rock';

type AggroCragProps = {
  scale?: number;
};

type AggroCragGLTF = GLTF & {
  nodes: {
    Base: Mesh;
    Rock: Mesh;
    Logo: Mesh;
  };
  materials: {
    Material_0: Material;
  };
};

export default function AggroCrag({ scale = 1 }: AggroCragProps) {
  const ref = useRef<Group | null>(null);
  const { nodes, materials } = useGLTF('/gltf/aggro2/aggro3.gltf') as unknown as AggroCragGLTF;

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y = (Math.PI / 2) + Math.sin(state.clock.getElapsedTime() / 2) / 2;
  });

  return (
    <group ref={ref} scale={scale} rotation={[0, Math.PI / 2, 0.15, 'ZXY']} position-y={-0.44}>
      <Base geometry={nodes.Base.geometry} />
      <Rock geometry={nodes.Rock.geometry} />
      <Logo geometry={nodes.Logo.geometry} material={materials.Material_0} />
    </group>
  );
}
