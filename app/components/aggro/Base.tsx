import type { Mesh } from 'three';
import type { GLTF } from 'three-stdlib';

import { useGLTF } from '@react-three/drei';

type BaseGLTF = GLTF & {
  nodes: {
    Base: Mesh;
  };
};

export default function Base() {
  const { nodes } = useGLTF('/gltf/aggro/base.gltf') as unknown as BaseGLTF;

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        position={[-16, 69, 10]}
        scale={0.18}
      >
        <meshStandardMaterial color={0x333333} />
      </mesh>
    </group>
  );
}
