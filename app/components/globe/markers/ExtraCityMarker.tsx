import type { Color } from 'three';

import { markerHeight } from '../utils';

type MarkerProps = {
  color: Color;
  radius: number;
};

export default function ExtraCityMarker({ color, radius }: MarkerProps) {
  return (
    <mesh castShadow receiveShadow position-y={markerHeight / 2}>
      {/* <motion.mesh position-y={markerHeight / 2}> */}
      <cylinderGeometry args={[radius / 1.2, radius / 1.2, markerHeight, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
