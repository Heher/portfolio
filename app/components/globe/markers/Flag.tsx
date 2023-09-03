import type { BufferGeometry, Color, Material, Mesh, NormalBufferAttributes, Texture } from 'three';
import { DoubleSide } from 'three';
import { beamHeight, markerRadius } from '../utils';
import type { Euler, Vector3 } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import { AnimatePresence } from 'framer-motion';

type FlagProps = {
  position: Vector3;
  rotation: Euler;
  alphaMap: Texture;
  flagColor: Color;
  shown: boolean;
};

export function Flag({ position, rotation, alphaMap, flagColor, shown }: FlagProps) {
  const flagRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null);

  useFrame(() => {
    if (!flagRef?.current) {
      return;
    }

    flagRef.current.rotation.x = 0;
    flagRef.current.rotation.y += 0.005;
    flagRef.current.rotation.z = 0;
  });

  return (
    <motion.group
      position={position}
      rotation={rotation}
      initial={{ scale: 0 }}
      animate={{ scale: shown ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <mesh ref={flagRef} receiveShadow position-y={beamHeight / 2}>
        <cylinderGeometry args={[0.03, markerRadius, beamHeight, 32, 32, true]} />
        <meshStandardMaterial
          transparent
          alphaMap={alphaMap}
          emissive={flagColor}
          emissiveIntensity={1.5}
          toneMapped={false}
          side={DoubleSide}
        />
      </mesh>
    </motion.group>
  );
}
