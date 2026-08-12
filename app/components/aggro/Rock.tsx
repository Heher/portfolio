import type { Mesh } from 'three';
import type { GLTF } from 'three-stdlib';

import { useGLTF } from '@react-three/drei';

type RockGLTF = GLTF & {
  nodes: {
    Rock: Mesh;
  };
};

export default function Rock() {
  const { nodes } = useGLTF('/gltf/aggro/rock.gltf') as unknown as RockGLTF;

  return (
    <group dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Rock.geometry}
        position={[0, 80, 15]}
        scale={0.2}
      >
        {/* <meshBasicMaterial color={[0.34 * 1, 0.57 * 1, 0.23 * 1]} /> */}
        <meshBasicMaterial color={[0.34 * 2.24, 0.57 * 2.24, 0.23 * 2.24]} />
      </mesh>
    </group>
  );
}
