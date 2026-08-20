import type { BufferGeometry } from 'three';

export default function Base({ geometry }: { geometry: BufferGeometry }) {
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        position={[0, 0.175, 0]}
      >
        <meshStandardMaterial color={0x333333} />
      </mesh>
    </group>
  );
}
