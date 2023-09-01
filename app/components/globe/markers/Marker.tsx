import type { Color } from 'three';
import { markerRadius } from '../utils';
import type { Euler, Vector3 } from '@react-three/fiber';

type MarkerProps = {
  position: Vector3;
  rotation: Euler;
  color: Color;
};

export function Marker({ position, rotation, color }: MarkerProps) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <cylinderGeometry args={[markerRadius, markerRadius, 0.01, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
