import type { Color, Euler, Vector3 } from '@react-three/fiber';

import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

import { markerHeight } from '../utils';

type MarkerProps = {
  position: Vector3;
  rotation: Euler;
  color: Color;
  statusColor: string;
  isSelected: boolean;
  hasSelectedCity: boolean;
  years: string[];
};

// Darken positive and negative colors for the light
function getLightColor(statusColor: string) {
  if (statusColor === '#3dbd73') {
    return '#1A5D36'; // Darker green for positive
  }
  if (statusColor === '#ff5a5a') {
    return '#d94545'; // Darker red for negative
  }
  if (statusColor === '#ffa566') {
    return '#BE794A'; // Darker red for negative
  }
  return statusColor; // Keep incomplete (orange) as is
};

export function Marker({ position, rotation, color, statusColor, isSelected, hasSelectedCity }: MarkerProps) {
  const markerRef = useRef(null);

  const poleRadius = 0.005; // Thin pole
  const normalHeight = markerHeight * 3; // Normal tall pole (0.09)
  const coinHeight = normalHeight / 20; // Coin-like height for non-selected (0.0045)

  // Animation state for height
  const [currentHeight, setCurrentHeight] = useState(normalHeight);
  const targetHeightRef = useRef(normalHeight);

  // Update target height based on selection
  useEffect(() => {
    if (!hasSelectedCity) {
      // No city selected - all markers at normal height
      targetHeightRef.current = normalHeight;
    }
    else if (!isSelected) {
      // Another city is selected - lower this marker to coin height
      targetHeightRef.current = coinHeight;
    }
    else {
      // This marker is selected - keep at normal height
      targetHeightRef.current = normalHeight;
    }
  }, [isSelected, hasSelectedCity, normalHeight, coinHeight]);

  // Animation loop for height
  useFrame((state, delta) => {
    const heightDiff = targetHeightRef.current - currentHeight;
    if (Math.abs(heightDiff) > 0.0001) {
      const newHeight = currentHeight + heightDiff * delta * 8; // Smooth height transition
      setCurrentHeight(newHeight);
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Status light - shines upward at the marker when city is selected */}
      {isSelected && (
        <>
          <pointLight
            position={[0, 0.05, 0]}
            color={getLightColor(statusColor)}
            intensity={4}
            distance={0.1}
            decay={2}
          />

          <mesh position-y={currentHeight} castShadow receiveShadow>
            <cylinderGeometry args={[poleRadius, poleRadius, 0.03, 16]} />
            <meshStandardMaterial
              color={color}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </>
        // <directionalLight
        //   position={[0, 0.001, 1]}
        //   intensity={2}
        //   color={getLightColor(statusColor)}
        //   castShadow
        //   // shadow-mapSize={[3072, 3072]}
        //   // shadow-camera-left={-2}
        //   // shadow-camera-right={2}
        //   // shadow-camera-top={2}
        //   // shadow-camera-bottom={-2}
        //   // shadow-camera-near={0.1}
        //   // shadow-camera-far={10}
        // />
      )}

      {/* Flag pole */}
      <mesh ref={markerRef} position-y={currentHeight / 2} castShadow receiveShadow>
        <cylinderGeometry args={[poleRadius, poleRadius, currentHeight, 16]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}
