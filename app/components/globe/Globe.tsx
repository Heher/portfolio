import { useMemo, useRef } from 'react';
import type { Coordinate, RouteInfo, Visit } from 'types/globe';
import type { GroupProps } from '@react-three/fiber';
import { useFrame, useThree } from '@react-three/fiber';
import { beamHeight, convertToRadians, formatCitiesWithVisits } from './utils';
import { cities } from './coordinates';
import { Route } from './Route';
import { City } from './City';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing';
import { motion } from 'framer-motion-3d';
import { useMotionValue } from 'framer-motion';
import { myRoute } from './routeCoordinates';
import PointSphere from './PointSphere';

function getZoom(selectedRouteLeg: number | null, selectedCity: string | null) {
  if (selectedRouteLeg !== null) {
    return myRoute[selectedRouteLeg - 1].zoom || 7;
  }

  return 7;
}

function findMidpoint(coord1: Coordinate, coord2: Coordinate): Coordinate {
  const lat1 = coord1[0];
  const lon1 = coord1[1];
  const lat2 = coord2[0];
  const lon2 = coord2[1];

  return [(lat1 + lat2) / 2, (lon1 + lon2) / 2];
}

function getRouteRotation(leg: RouteInfo): Coordinate {
  const midpoint = leg.midpoint || findMidpoint(leg.coords[0], leg.coords[leg.coords.length - 1]);

  const { latRad, lonRad } = convertToRadians(midpoint);

  return [latRad, lonRad - Math.PI / 2];
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

function getGlobeX(width, screenWidth) {
  if (screenWidth < 768) {
    return 0;
  }

  if (screenWidth < 1024) {
    return width / 1.5;
  }

  return width / 4;
}

function getGlobeZoom(screenWidth, zoom) {
  if (screenWidth < 768) {
    return zoom - 6;
  }

  return zoom - 2;
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
  route: ({ cityMovement, zoom, screenWidth }: { cityMovement: number[]; zoom: number; screenWidth: number }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    x: 0,
    y: 0,
    z: getGlobeZoom(screenWidth, zoom),
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  show: ({
    width,
    rotateY,
    screenWidth,
    screenHeight
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
    x: getGlobeX(width, screenWidth, screenHeight),
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

function getGlobeVariant(routeSelected: boolean, selectedCity: string | null) {
  if (routeSelected) {
    return 'route';
  }

  if (selectedCity) {
    return 'selectedCity';
  }

  return 'show';
}

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

  if (routeSelected) {
    const leg = myRoute[selectedRouteLeg - 1];
    cityMovement = getRouteRotation(leg) || [0, 0, 0];
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
        zoom: getZoom(selectedRouteLeg, selectedCity)
      }}
    >
      <PointSphere />
      {routeSelected && <Route citiesWithVisits={citiesWithVisits} />}
      {!routeSelected &&
        citiesWithVisits.map((city) => {
          return <City key={city.name} city={city} height={beamHeight} />;
        })}

      <EffectComposer>
        <Bloom
          intensity={1.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={false} // Enables or disables mipmap blur.
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        />
      </EffectComposer>
    </motion.group>
  );
}
