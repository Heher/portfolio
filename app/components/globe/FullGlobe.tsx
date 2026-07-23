import { useFrame } from '@react-three/fiber';
import { use, useRef } from 'react';
import * as THREE from 'three';

import type { Coordinate } from 'types/globe';

import { TripPageContext } from '~/utils/context';

import { cities } from './coordinates';
import GlobeBackdrop from './GlobeBackdrop';
import { Globe } from './NewGlobe';
import { myRoute } from './routeCoordinates';

function findMidpoint(coord1: Coordinate, coord2: Coordinate): Coordinate {
  const lat1 = coord1[0];
  const lon1 = coord1[1];
  const lat2 = coord2[0];
  const lon2 = coord2[1];

  return [(lat1 + lat2) / 2, (lon1 + lon2) / 2];
}

function getTargetCoordinate(selectedCity: string | null, selectedRouteLeg: number | null): Coordinate | null {
  // Priority: route > city
  if (selectedRouteLeg !== null && selectedRouteLeg !== undefined) {
    const leg = myRoute[selectedRouteLeg - 1];
    if (leg) {
      return leg.midpoint ?? findMidpoint(leg.coords[0], leg.coords[leg.coords.length - 1]);
    }
  }

  if (selectedCity) {
    const foundCity = cities.find(city => city.name === selectedCity);
    if (foundCity) {
      return foundCity.coord;
    }
  }

  return null;
}

function calculateZPosition(coord: Coordinate | null): number {
  if (!coord) {
    return -2; // Default z position for index page
  }

  const latitude = coord[0];
  const absLatitude = Math.abs(latitude);

  // Scale: equator (0°) = 2, poles (90°) = 10
  // Linear interpolation: z = 2 + (absLat / 90) * 8
  // This gives us: 0° → 2, 90° → 10
  const zOffset = (absLatitude / 90) * 8;

  return 2 + zOffset;
}

export default function FullGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const { selectedCity, selectedRouteLeg } = use(TripPageContext);
  const targetPositionXRef = useRef(0.8);
  const targetPositionZRef = useRef(-2);

  // Get target coordinate for z-position calculation
  const targetCoord = getTargetCoordinate(selectedCity, selectedRouteLeg);

  // Update target x position based on selectedCity or selectedRouteLeg
  if (selectedCity || (selectedRouteLeg !== null && selectedRouteLeg !== undefined)) {
    targetPositionXRef.current = 0;
  }
  else {
    targetPositionXRef.current = 0.8;
  }

  // Update target z position based on latitude
  targetPositionZRef.current = calculateZPosition(targetCoord);

  useFrame((state, delta) => {
    if (groupRef.current?.position) {
      const lerpFactor = 1 - 0.001 ** delta;

      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetPositionXRef.current,
        lerpFactor,
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetPositionZRef.current,
        lerpFactor,
      );
    }
  });

  return (
    <group ref={groupRef} position={[0.8, 0, -2]}>
      <Globe />
      <GlobeBackdrop />
    </group>
  );
}
