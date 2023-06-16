import type { Color, Euler, Vector3 } from 'three';
import { markerRadius } from '../utils';
import { useRef } from 'react';

type MarkerProps = {
  position: Vector3;
  rotation: Euler;
  color: Color;
};

export function Marker({ position, rotation, color }: MarkerProps) {
  const markerRef = useRef(null);

  return (
    <mesh ref={markerRef} position={position} rotation={rotation} castShadow receiveShadow>
      <cylinderGeometry args={[markerRadius, markerRadius, 0.01, 32]} />
      {/* <markerMaterial u_color={city.type === 'summer' ? summerColor : winterColor} /> */}
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
