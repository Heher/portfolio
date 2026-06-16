import type { Euler } from '@react-three/fiber';

import { useFrame } from '@react-three/fiber';
import { useMotionValue } from 'motion/react';
import { use, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

import type { Coordinate, RouteInfo } from 'types/globe';

import { TripPageContext } from '~/utils/context';

import type { City } from './coordinates';

import { summerColor, winterColor } from './colors';
import { cities } from './coordinates';
import { Marker } from './markers/Marker';
import PointSphere from './PointSphere';
import { Route } from './Route';
import { myRoute } from './routeCoordinates';
import { convertToRadians, getPosition, globeRadius } from './utils';

type MarkerInfo = {
  position: [x: number, y: number, z: number];
  rotation: Euler;
};

type CityWithMarker = City & {
  markerInfo: MarkerInfo;
};

function getCoordRotation(coord: Coordinate): Euler {
  const { latRad, lonRad } = convertToRadians(coord);

  return new THREE.Euler(0, -lonRad, latRad - Math.PI * 0.5);
}

function placeObjectOnPlanet(
  coord: Coordinate,
  radius: number,
): MarkerInfo {
  return {
    position: getPosition(coord, radius) as [number, number, number],
    rotation: getCoordRotation(coord),
  };
}

function formatCities(cities: City[]): CityWithMarker[] {
  const formattedCities = cities.map((city) => {
    const markerInfo = placeObjectOnPlanet(city.coord, globeRadius);

    return { ...city, markerInfo };
  });

  return formattedCities;
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

function findMidpoint(coord1: Coordinate, coord2: Coordinate): Coordinate {
  const lat1 = coord1[0];
  const lon1 = coord1[1];
  const lat2 = coord2[0];
  const lon2 = coord2[1];

  return [(lat1 + lat2) / 2, (lon1 + lon2) / 2];
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

export function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const rotateY = useMotionValue(0);
  const { selectedCity, selectedRouteLeg } = use(TripPageContext);

  // Track target rotation for smooth animation
  const targetRotationRef = useRef<THREE.Euler>(new THREE.Euler(0, 0, 0.5, 'ZXY'));
  const isAnimatingRef = useRef(false);
  const isReturningToDefaultRef = useRef(false);
  const hasInitializedRef = useRef(false);
  const defaultRotation = useMemo(() => new THREE.Euler(0, 0, 0.5, 'ZXY'), []);

  // const routeSelected = selectedRouteLeg !== null;

  // const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, visits), [visits]);
  const citiesWithVisits = useMemo(() => formatCities(cities), []);

  // Update target rotation when selectedCity or selectedRouteLeg changes
  useEffect(() => {
    if (!groupRef.current) {
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
      const currentY = groupRef.current.rotation.y;
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
    if (!groupRef.current?.rotation) {
      return;
    }

    const lerpFactor = 1 - 0.001 ** delta; // Smooth lerp

    if (isAnimatingRef.current) {
      // Smoothly interpolate to target rotation
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationRef.current.x,
        lerpFactor,
      );

      // Only animate y (longitude) when moving to a selected city/route, not when returning to default
      if (!isReturningToDefaultRef.current) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          targetRotationRef.current.y,
          lerpFactor,
        );
      }
      else {
        // Start auto-rotating while returning to default orientation
        const rotationSpeed = (2 * Math.PI) / 30;
        groupRef.current.rotation.y += rotationSpeed * delta;

        if (groupRef.current.rotation.y > 2 * Math.PI) {
          groupRef.current.rotation.y -= 2 * Math.PI;
        }
      }

      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetRotationRef.current.z,
        lerpFactor,
      );

      // Check if we're close enough to stop animating (only check x and z when returning to default)
      const threshold = 0.001;
      const xClose = Math.abs(groupRef.current.rotation.x - targetRotationRef.current.x) < threshold;
      const yClose = Math.abs(groupRef.current.rotation.y - targetRotationRef.current.y) < threshold;
      const zClose = Math.abs(groupRef.current.rotation.z - targetRotationRef.current.z) < threshold;

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
      groupRef.current.rotation.y += rotationSpeed * delta;

      // Reset rotation to prevent numerical overflow
      if (groupRef.current.rotation.y > 2 * Math.PI) {
        groupRef.current.rotation.y -= 2 * Math.PI;
      }

      rotateY.set(groupRef.current.rotation.y);
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[0, 0, 0.5, 'ZXY']}
    >
      <PointSphere />
      {selectedRouteLeg && <Route />}
      {citiesWithVisits.map((city) => {
        return (
          <Marker
            key={city.name}
            position={city.markerInfo.position}
            rotation={city.markerInfo.rotation}
            color={city.type === 'summer' ? summerColor : winterColor}
          />
        );
      })}
    </group>
  );
}
