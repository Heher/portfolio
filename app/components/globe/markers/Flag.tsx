import type { BufferGeometry, Color, Material, Mesh, NormalBufferAttributes, Texture } from 'three';
import { DoubleSide } from 'three';
import { beamHeight, markerRadius } from '../utils';
import type { Euler, Vector3 } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

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
    <group position={position} rotation={rotation} visible={shown}>
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
    </group>
  );
}
