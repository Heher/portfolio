import type { BufferGeometry } from 'three';

export default function Rock({ geometry }: { geometry: BufferGeometry }) {
  return (
    <group dispose={null}>
      <mesh
        castShadow
        geometry={geometry}
        position={[0, 0.693, 0.109]}
      >
        <meshBasicMaterial color={[0.34 * 2.24, 0.57 * 2.24, 0.23 * 2.24]} />
      </mesh>
    </group>
  );
}
