// import type { Color } from 'three';
// import { markerHeight } from '../utils';
// import type { MarkerInfo } from 'types/globe';
// import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

// type MarkerProps = {
//   markerInfo: MarkerInfo;
//   color: Color;
//   radius: number;
//   shown: boolean;
// };

// export function Marker({ markerInfo, color, radius, shown }: MarkerProps) {
//   return (
//     <motion.group
//       position={markerInfo.position}
//       rotation={markerInfo.rotation}
//       animate={{ y: shown ? markerInfo.position[1] : markerInfo.position[1] - 0.01, scale: shown ? 1 : 0 }}
//       transition={{ duration: 0.6, ease: 'easeInOut' }}
//     >
//       <mesh position-y={markerHeight / 2}>
//         {/* <mesh position-y={markerHeight / 2}> */}
//         <cylinderGeometry args={[radius, radius, markerHeight, 32]} />
//         <meshStandardMaterial color={shown ? color : 0xe0e0e0} />
//       </mesh>
//     </motion.group>
//   );
// }

import type { Color, Euler, Vector3 } from '@react-three/fiber';
import { markerHeight, markerRadius } from '../utils';
import { useRef } from 'react';

type MarkerProps = {
  position: Vector3;
  rotation: Euler;
  color: Color;
};

const shape = new THREE.Shape();
const radius = 0.01;
for (let i = 0; i < 8; i++) {
  const angle = (i / 8) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  if (i === 0) {
    shape.moveTo(x, y);
  } else {
    shape.lineTo(x, y);
  }
}
shape.closePath();

// Define the extrude settings
const extrudeSettings = {
  steps: 1,
  depth: 0.05,
  bevelEnabled: false
};

// Create the geometry
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

export function Marker({ markerInfo, color, type }: MarkerProps) {
  const markerRef = useRef(null);

  return (
    <group position={markerInfo.position} rotation={markerInfo.rotation}>
      <mesh ref={markerRef} position-y={markerHeight / 2} castShadow receiveShadow>
        <cylinderGeometry args={[markerRadius, markerRadius, markerHeight, 8]} />
        <meshPhysicalMaterial color={color} />
      </mesh>
    </group>
  );
}

export function TestMarker({ markerInfo, color, type }) {
  return (
    <group position={markerInfo.position} rotation={markerInfo.rotation}>
      <mesh position-y={markerHeight / 2} castShadow receiveShadow geometry={geometry}>
        {/* <cylinderGeometry args={[markerRadius, markerRadius, markerHeight, 32]} /> */}
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
