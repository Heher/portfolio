import type { BufferGeometry, Material } from 'three';

export default function Logo({ geometry, material }: { geometry: BufferGeometry; material: Material }) {
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        position={[-0.257, 0.197, -0.033]}
        rotation={[0, -1.57, 0]}
      >
      </mesh>
    </group>
  );
}
