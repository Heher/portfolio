import type { Color } from 'three';
import { markerRadius } from '../utils';
// import type { Euler, Vector3 } from '@react-three/fiber';
import type { MarkerInfo } from 'types/globe';

type MarkerProps = {
  markerInfo: MarkerInfo;
  color: Color;
};

export function Marker({ markerInfo, color }: MarkerProps) {
  return (
    <mesh position={markerInfo.position} rotation={markerInfo.rotation} castShadow receiveShadow>
      <cylinderGeometry args={[markerRadius, markerRadius, 0.01, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
