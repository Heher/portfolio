import { useMemo, useRef } from 'react';
import type { Coordinate, RouteInfo, Visit } from 'types/globe';
import type { GroupProps } from '@react-three/fiber';
import { useFrame, useThree } from '@react-three/fiber';
import {
  beamHeight,
  convertToRadians,
  formatCitiesWithVisits,
  getGlobeVariant,
  getGlobeX,
  getGlobeZoom,
  getRouteY,
  getZoom
} from './utils';
import { cities } from './coordinates';
import { Route } from './Route';
import { City } from './City';
import { motion } from 'framer-motion-3d';
import { useMotionValue } from 'framer-motion';
import { myRoute } from './routeCoordinates';
import PointSphere from './PointSphere';

function findMidpoint(coord1: Coordinate, coord2: Coordinate): Coordinate {
  const lat1 = coord1[0];
  const lon1 = coord1[1];
  const lat2 = coord2[0];
  const lon2 = coord2[1];

  return [(lat1 + lat2) / 2, (lon1 + lon2) / 2];
}

function getRouteRotation(leg: RouteInfo): number[] {
  const midpoint = leg.midpoint || findMidpoint(leg.coords[0], leg.coords[leg.coords.length - 1]);

  const { latRad, lonRad } = convertToRadians(midpoint);

  return [latRad, lonRad - Math.PI / 2, leg.rotation !== null && leg.rotation !== undefined ? leg.rotation : 0.5];
}

function newGetCityRotation(selectedCity: string | null) {
  const foundCity = cities.find((city) => city.name === selectedCity);

  if (!foundCity && selectedCity) {
    return null;
  }

  const coord = foundCity?.coord || [0, 0];

  const { latRad, lonRad } = convertToRadians(coord);

  return [latRad - Math.PI * 0.35, lonRad - Math.PI / 2, 0];
}

const variants = {
  selectedCity: ({ height, cityMovement }: { height: number; cityMovement: number[] }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    x: 0,
    y: height / -4,
    z: 10,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  route: ({
    cityMovement,
    zoom,
    screenWidth,
    routeY
  }: {
    cityMovement: number[];
    zoom: number;
    screenWidth: number;
    routeY: number;
  }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    x: 0,
    y: routeY,
    z: getGlobeZoom(screenWidth, zoom),
    transition: {
      duration: 0.9,
      ease: 'easeInOut'
    }
  }),
  show: ({
    width,
    rotateY,
    screenWidth
  }: {
    width: number;
    rotateY: number;
    screenWidth: number;
    screenHeight: number;
  }) => ({
    rotateX: 0,
    opacity: 1,
    rotateY: [rotateY, rotateY + Math.PI * 2],
    rotateZ: 0.5,
    x: getGlobeX(width, screenWidth),
    y: 0,
    z: screenWidth < 768 ? 0 : -10 / width,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      rotateY: {
        repeat: Infinity,
        duration: 20,
        ease: 'linear'
      }
    }
  })
};

export function Globe({
  visits,
  selectedCity,
  selectedRouteLeg
}: {
  visits: Visit[];
  selectedCity: string | null;
  selectedRouteLeg: number | null;
}) {
  const groupRef = useRef<GroupProps>(null);
  const rotateY = useMotionValue(0);

  const routeSelected = selectedRouteLeg !== null;

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, visits), [visits]);

  const { viewport } = useThree();

  useFrame(() => {
    if (groupRef.current?.rotation) {
      if (groupRef.current.rotation.y > 2 * Math.PI) {
        rotateY.set(0);
      } else {
        rotateY.set(groupRef.current.rotation.y);
      }
    }
  });

  let cityMovement: number[];
  let routeY = 0;

  if (routeSelected) {
    const leg = myRoute[selectedRouteLeg - 1];
    cityMovement = getRouteRotation(leg) || [0, 0, 0];
    routeY = getRouteY(leg);
  } else {
    cityMovement = newGetCityRotation(selectedCity) || [0, 0, 0];
  }

  return (
    <motion.group
      ref={groupRef}
      rotation={[0, 0, 0.5, 'ZXY']}
      variants={variants}
      initial={{ opacity: 0 }}
      animate={getGlobeVariant(routeSelected, selectedCity)}
      custom={{
        cityMovement,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        width: viewport.width,
        height: viewport.height,
        rotateY: rotateY.get(),
        zoom: getZoom(selectedRouteLeg, selectedCity),
        routeY
      }}
    >
      <PointSphere />
      {routeSelected && <Route />}
      {citiesWithVisits.map((city) => {
        return <City key={city.name} city={city} height={beamHeight} zoom={getZoom(selectedRouteLeg, selectedCity)} />;
      })}
    </motion.group>
  );
}
