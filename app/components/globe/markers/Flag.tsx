import type { BufferGeometry, Color, Material, Mesh, NormalBufferAttributes, Texture } from 'three';
import { DoubleSide } from 'three';
import { beamHeight, markerRadius } from '../utils';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { motion } from 'framer-motion-3d';
import type { MarkerInfo } from 'types/globe';

type FlagProps = {
  markerInfo: MarkerInfo;
  alphaMap: Texture;
  flagColor: Color;
  shown: boolean;
  radius: number;
  height: number;
  newFlag: boolean;
  dim?: boolean;
};

const variants = {
  show: {
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  halfShow: {
    scale: 0.5,
    transition: {
      duration: 0.5
    }
  },
  hide: {
    scale: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Flag({ markerInfo, alphaMap, flagColor, shown, radius, height, newFlag, dim = false }: FlagProps) {
  const flagRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null);

  useFrame(() => {
    if (!flagRef?.current) {
      return;
    }

    flagRef.current.rotation.y += 0.005;
  });

  // console.log('beam top', radius * 4);

  // console.log(height);

  return (
    <motion.group
      position={markerInfo.position}
      rotation={markerInfo.rotation}
      initial="hide"
      animate={shown ? (newFlag ? 'show' : 'halfShow') : 'hide'}
      variants={variants}
    >
      <mesh ref={flagRef} receiveShadow position-y={height / 2}>
        <cylinderGeometry args={[radius * 4, radius, height, 32, 32, true]} />
        <meshStandardMaterial
          transparent
          alphaMap={alphaMap}
          emissive={flagColor}
          emissiveIntensity={dim ? 0.3 : 1.5}
          toneMapped={false}
          side={DoubleSide}
        />
      </mesh>
    </motion.group>
  );
}
