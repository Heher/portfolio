import type { Color, Euler, Vector3 } from '@react-three/fiber';

import { useRef } from 'react';

import { markerHeight, markerRadius } from '../utils';

type MarkerProps = {
  position: Vector3;
  rotation: Euler;
  color: Color;
};

export function Marker({ position, rotation, color }: MarkerProps) {
  const markerRef = useRef(null);

  return (
    <group position={position} rotation={rotation}>
      <mesh ref={markerRef} position-y={markerHeight / 2} castShadow receiveShadow>
        <cylinderGeometry args={[markerRadius, markerRadius, markerHeight, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
