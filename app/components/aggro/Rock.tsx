import type { Mesh } from 'three';
import type { GLTF } from 'three-stdlib';

import { useGLTF } from '@react-three/drei';

type RockGLTF = GLTF & {
  nodes: {
    Rock: Mesh;
  };
};

export default function Rock() {
  const { nodes } = useGLTF('./gltf/aggro/rock.gltf') as unknown as RockGLTF;

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock.geometry}
        position={[47.104, 57.336, 23.957]}
      >
        <meshStandardMaterial transparent color={0x56913A} emissive={0x56913A} emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
}
