import type { Color } from 'three';
import { markerHeight } from '../utils';
import { motion } from 'framer-motion-3d';

type MarkerProps = {
  color: Color;
  radius: number;
};

export default function ExtraCityMarker({ color, radius }: MarkerProps) {
  return (
    <motion.mesh castShadow receiveShadow position-y={markerHeight / 2}>
      {/* <motion.mesh position-y={markerHeight / 2}> */}
      <cylinderGeometry args={[radius / 1.2, radius / 1.2, markerHeight, 32]} />
      <meshStandardMaterial color={color} />
    </motion.mesh>
  );
}
