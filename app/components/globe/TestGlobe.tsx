import type { Coordinate, RouteInfo } from 'types/globe';

import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { use, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

import earth from '~/data/map/point-earth.jpg';
import { TripPageContext } from '~/utils/context';

import { summerColor, winterColor } from './colors';
import { cities } from './coordinates';
import GlobeBackdrop from './GlobeBackdrop';
import { Marker } from './markers/Marker';
import { Route } from './Route';
// import GlobeBackdrop from './GlobeBackdrop';
// import { Globe } from './NewGlobe';
import { myRoute } from './routeCoordinates';
import fragmentShader from './shaders/testGlobe/fragment.glsl?raw';
import vertexShader from './shaders/testGlobe/vertex.glsl?raw';
import { convertToRadians, formatCitiesWithVisits, getCityStatusColor } from './utils';

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

function createSphereOfPoints(radius: number, numPoints: number): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(numPoints * 3);

  // Use golden angle for even distribution (Fibonacci sphere)
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < numPoints; i++) {
    const y = 1 - (i / (numPoints - 1)) * 2; // -1 to 1
    const radiusAtY = Math.sqrt(1 - y * y);

    const theta = goldenAngle * i;

    positions[i * 3] = Math.cos(theta) * radiusAtY * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * radiusAtY * radius;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  return geometry;
}

function getCityRotation(selectedCity: string | null): [number, number, number] | null {
  const foundCity = cities.find(city => city.name === selectedCity);

  if (!foundCity || !selectedCity) {
    return null;
  }

  const { latRad, lonRad } = convertToRadians(foundCity.coord);
  const latitude = foundCity.coord[0];
  const absLatitude = Math.abs(latitude);

  // Adjust tilt based on latitude - tilt down more for northern cities
  // Base tilt + additional tilt based on latitude
  const baseTilt = Math.PI * 0.2;
  const latitudeTiltAdjustment = (absLatitude / 90) * (Math.PI * 0.15); // Add up to ~27° more tilt for poles

  // Return target rotation: [x, y, z]
  // ADD the adjustment to tilt down for higher latitudes
  return [latRad - baseTilt + latitudeTiltAdjustment, lonRad - Math.PI / 2, 0];
}

function getRouteRotation(leg: RouteInfo | undefined): [number, number, number] | null {
  if (!leg) {
    return null;
  }

  const midpoint = leg.midpoint ?? findMidpoint(leg.coords[0], leg.coords[leg.coords.length - 1]);

  const { latRad, lonRad } = convertToRadians(midpoint);
  const latitude = midpoint[0];
  const absLatitude = Math.abs(latitude);

  // Adjust tilt based on latitude for routes too - ADD to tilt down
  const latitudeTiltAdjustment = (absLatitude / 90) * (Math.PI * 0.15);

  return [latRad + latitudeTiltAdjustment, lonRad - Math.PI / 2, leg.rotation ?? 0.5];
}

export default function TestGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const globeRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { selectedCity, selectedRouteLeg, visits } = use(TripPageContext);
  const targetPositionXRef = useRef(0.8);
  const targetPositionZRef = useRef(-2);

  // Track target rotation for smooth animation
  const targetRotationRef = useRef<THREE.Euler>(new THREE.Euler(0, 0, 0.5, 'ZXY'));
  const isAnimatingRef = useRef(false);
  const isReturningToDefaultRef = useRef(false);
  const hasInitializedRef = useRef(false);
  const defaultRotation = useMemo(() => new THREE.Euler(0, 0, 0.5, 'ZXY'), []);

  const eTexture = useTexture(earth);

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, visits), [visits]);

  // Get target coordinate for z-position calculation
  const targetCoord = getTargetCoordinate(selectedCity, selectedRouteLeg);

  const isSelected = selectedCity || (selectedRouteLeg !== null && selectedRouteLeg !== undefined);

  // Update target x position based on selectedCity or selectedRouteLeg
  if (isSelected) {
    targetPositionXRef.current = 0;
  }
  else {
    targetPositionXRef.current = 0.8;
  }

  // Update target z position based on latitude
  targetPositionZRef.current = calculateZPosition(targetCoord);

  // Update target rotation when selectedCity or selectedRouteLeg changes
  useEffect(() => {
    if (!globeRef.current) {
      return;
    }

    // Priority: route > city > default
    if (selectedRouteLeg !== null && selectedRouteLeg !== undefined) {
      const leg = myRoute[selectedRouteLeg - 1];
      const routeRotation = getRouteRotation(leg);
      if (routeRotation) {
        targetRotationRef.current = new THREE.Euler(
          routeRotation[0],
          routeRotation[1],
          routeRotation[2],
          'ZXY',
        );
        isAnimatingRef.current = true;
        isReturningToDefaultRef.current = false;
        hasInitializedRef.current = true;
      }
    }
    else if (selectedCity) {
      const cityRotation = getCityRotation(selectedCity);
      if (cityRotation) {
        targetRotationRef.current = new THREE.Euler(
          cityRotation[0],
          cityRotation[1],
          cityRotation[2],
          'ZXY',
        );
        isAnimatingRef.current = true;
        isReturningToDefaultRef.current = false;
        hasInitializedRef.current = true;
      }
    }
    else if (hasInitializedRef.current) {
      // Only animate back to default if we've previously selected a city or route
      // When nothing is selected, animate x and z back to default, keep current y (longitude)
      const currentY = globeRef.current.rotation.y;
      targetRotationRef.current = new THREE.Euler(
        defaultRotation.x,
        currentY,
        defaultRotation.z,
        'ZXY',
      );
      isReturningToDefaultRef.current = true;
      isAnimatingRef.current = true;
    }
    // else: initial load with nothing selected - start auto-rotating immediately
  }, [selectedCity, selectedRouteLeg, defaultRotation]);

  useFrame((state, delta) => {
    if (!globeRef.current?.rotation) {
      return;
    }

    if (groupRef.current?.position) {
      const positionLerpFactor = 1 - 0.001 ** delta;

      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetPositionXRef.current,
        positionLerpFactor,
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetPositionZRef.current,
        positionLerpFactor,
      );
    }

    const lerpFactor = 1 - 0.001 ** delta; // Smooth lerp

    if (isAnimatingRef.current) {
      // Smoothly interpolate to target rotation
      globeRef.current.rotation.x = THREE.MathUtils.lerp(
        globeRef.current.rotation.x,
        targetRotationRef.current.x,
        lerpFactor,
      );

      // Only animate y (longitude) when moving to a selected city/route, not when returning to default
      if (!isReturningToDefaultRef.current) {
        globeRef.current.rotation.y = THREE.MathUtils.lerp(
          globeRef.current.rotation.y,
          targetRotationRef.current.y,
          lerpFactor,
        );
      }
      else {
        // Start auto-rotating while returning to default orientation
        const rotationSpeed = (2 * Math.PI) / 30;
        globeRef.current.rotation.y += rotationSpeed * delta;

        if (globeRef.current.rotation.y > 2 * Math.PI) {
          globeRef.current.rotation.y -= 2 * Math.PI;
        }
      }

      globeRef.current.rotation.z = THREE.MathUtils.lerp(
        globeRef.current.rotation.z,
        targetRotationRef.current.z,
        lerpFactor,
      );

      // Check if we're close enough to stop animating (only check x and z when returning to default)
      const threshold = 0.001;
      const xClose = Math.abs(globeRef.current.rotation.x - targetRotationRef.current.x) < threshold;
      const yClose = Math.abs(globeRef.current.rotation.y - targetRotationRef.current.y) < threshold;
      const zClose = Math.abs(globeRef.current.rotation.z - targetRotationRef.current.z) < threshold;

      if (isReturningToDefaultRef.current ? (xClose && zClose) : (xClose && yClose && zClose)) {
        isAnimatingRef.current = false;
        if (isReturningToDefaultRef.current) {
          isReturningToDefaultRef.current = false;
        }
      }
    }
    else if (!selectedCity && !selectedRouteLeg && !isReturningToDefaultRef.current) {
      // Auto-rotate when nothing is selected and we're back at default position
      // Rotate 360 degrees (2 * PI radians) in 30 seconds
      const rotationSpeed = (2 * Math.PI) / 30;
      globeRef.current.rotation.y += rotationSpeed * delta;

      // Reset rotation to prevent numerical overflow
      if (globeRef.current.rotation.y > 2 * Math.PI) {
        globeRef.current.rotation.y -= 2 * Math.PI;
      }

      // rotateY.set(groupRef.current.rotation.y);
    }
  });

  const geometry = createSphereOfPoints(1, 50000);

  return (
    <group ref={groupRef} position={[0.8, 0, -2]}>
      <group ref={globeRef} rotation={[0, 0, 0.5, 'ZXY']}>
        <points ref={pointsRef} geometry={geometry}>
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              uTexture: { value: eTexture },
              uPointColor: { value: new THREE.Color(0xCED5DB) },
              uSunLocation: { value: new THREE.Vector3(1, 1, 1) },
              uSize: { value: 1.0 },
              uSizeAttenuation: { value: 1.0 },
            }}
          />
        </points>
        {selectedRouteLeg && <Route />}
        {citiesWithVisits.map((city) => {
          const isSelected = selectedCity === city.name;
          const statusColor = getCityStatusColor(city, visits);

          const normalColor = city.type === 'summer' ? summerColor : winterColor;

          return (
            <Marker
              key={city.name}
              position={city.markerInfo.position}
              rotation={city.markerInfo.rotation}
              color={normalColor}
              statusColor={statusColor}
              isSelected={isSelected}
              hasSelectedCity={!!selectedCity}
              years={city.years}
            />
          );
        })}
      </group>
      <GlobeBackdrop />
    </group>
  );
}
