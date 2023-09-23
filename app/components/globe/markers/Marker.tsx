import type { Color } from 'three';
import { markerHeight } from '../utils';
import type { MarkerInfo } from 'types/globe';
import { motion } from 'framer-motion-3d';

type MarkerProps = {
  markerInfo: MarkerInfo;
  color: Color;
  radius: number;
  shown: boolean;
};

export function Marker({ markerInfo, color, radius, shown }: MarkerProps) {
  return (
    <motion.group
      position={markerInfo.position}
      rotation={markerInfo.rotation}
      animate={{ y: shown ? markerInfo.position[1] : markerInfo.position[1] - 0.01, scale: shown ? 1 : 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <mesh position-y={markerHeight / 2}>
        {/* <mesh position-y={markerHeight / 2}> */}
        <cylinderGeometry args={[radius, radius, markerHeight, 32]} />
        <meshStandardMaterial color={shown ? color : 0xe0e0e0} />
      </mesh>
    </motion.group>
  );
}
