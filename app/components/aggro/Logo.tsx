import type { Mesh } from 'three';
import type { GLTF } from 'three-stdlib';

import { useGLTF } from '@react-three/drei';

type LogoGLTF = GLTF & {
  nodes: {
    empty_2: Mesh;
  };
};

export default function Logo() {
  const { nodes } = useGLTF('/gltf/aggro/logo.gltf') as unknown as LogoGLTF;

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.empty_2.geometry}
        material={nodes.empty_2.material}
        position={[-17.1, 78, 4]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.06}
      >
        {/* <meshStandardMaterial color={0x333333} /> */}
      </mesh>
    </group>
  );
}
