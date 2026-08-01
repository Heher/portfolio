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
        position={[47.104, 57.336, 23.957]}
      >
        <meshBasicMaterial color={[0.34 * 2.24, 0.57 * 2.24, 0.23 * 2.24]} />
      </mesh>
    </group>
  );
}
