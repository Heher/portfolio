import { useContext, useMemo, useRef } from 'react';
import type { Coordinate, RouteInfo, Visit } from 'types/globe';
import type { GroupProps } from '@react-three/fiber';
import { useFrame, useThree } from '@react-three/fiber';
import { convertToRadians, formatCitiesWithVisits } from './utils';
import { cities } from './coordinates';
// import { Euler } from 'three';
import Sphere from './Sphere';
import { Route } from './Route';
// import { OrbitControls } from '@react-three/drei';
import { City } from './City';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing';
import { motion } from 'framer-motion-3d';
import { useMotionValue } from 'framer-motion';
import { TripPageContext } from '~/routes/trip';
import { myRoute } from './routeCoordinates';
import PointSphere from './PointSphere';

function getZoom(selectedRouteLeg: number | null, selectedCity: string | null) {
  if (selectedRouteLeg !== null) {
    return myRoute[selectedRouteLeg - 1].zoom || 7;
  }

  return 7;
}

function findCoordDistance(coord1: Coordinate, coord2: Coordinate): number {
  const lat1 = coord1[0];
  const lon1 = coord1[1];
  const lat2 = coord2[0];
  const lon2 = coord2[1];

  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return c;
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

  // const distance = findCoordDistance(coords[0], coords[coords.length - 1]);

  // console.log(distance);

  const { latRad, lonRad } = convertToRadians(midpoint);

  return [latRad, lonRad - Math.PI / 2];
  return [latRad - Math.PI * 0.1, lonRad - Math.PI / 2];
}

function newGetCityRotation(selectedCity: string | null) {
  const foundCity = cities.find((city) => city.name === selectedCity);

  // console.log(foundCity, selectedCity);

  if (!foundCity && selectedCity) {
    return null;
  }

  const coord = foundCity?.coord || [0, 0];

  // console.log(coord);

  const { latRad, lonRad } = convertToRadians(coord);

  // console.log(latRad, latRad - Math.PI / 2);

  // if (routeSelected) {
  //   return [0, lonRad - Math.PI / 2, 0];
  // }

  return [latRad - Math.PI * 0.35, lonRad - Math.PI / 2, 0];
}

// function getRotation(foundCity: City | undefined, routeSelected: boolean): Euler {
//   if (routeSelected) {
//     return getCityRotation(cities.find((city) => city.name === 'Amsterdam')?.coord || [0, 0]);
//   }

//   if (!foundCity) return new Euler(0, 0, 0, 'ZXY');

//   return getCityRotation(foundCity.coord);
// }

// function getScale(foundCity: City | undefined, routeSelected: boolean, width: number) {
//   if (routeSelected) {
//     return 2.4;
//   }

//   if (foundCity) {
//     return foundCity.scale;
//   }

//   return width < 768 ? 1 : 1;
// }

// function getZoom(routeSelected: boolean, selectedCity: string | null, distance = 1) {
//   if (routeSelected) {
//     return 16 / ;
//   }

//   if (selectedCity) {
//     return 7;
//   }

//   return 7;
// }

const variants = {
  selectedCity: ({ height, cityMovement }: { height: number; cityMovement: number[] }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    x: 0,
    y: (height / -4) * (3 / 12),
    z: 10,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  route: ({ cityMovement, zoom }: { cityMovement: number[]; zoom: number }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    x: 0,
    y: 0,
    z: zoom,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  show: ({ width, rotateY }: { width: number; rotateY: number }) => ({
    rotateX: 0,
    opacity: 1,
    rotateY: [rotateY, rotateY + Math.PI * 2],
    rotateZ: 0.5,
    x: width * 0.1,
    y: 0,
    z: 0,
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
  const groupRef = useRef<GroupProps>(null!);
  // const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const routeSelected = selectedRouteLeg !== null;
  // const rotateZ = useMotionValue(0);

  // const { selectedRouteLeg } = useContext(TripPageContext);

  // console.log(selectedRouteLeg);

  // const legDistance = findCoordDistance(leg.coords[0], leg.coords[leg.coords.length - 1]);

  // console.log(leg);

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, visits), [visits]);

  const { viewport } = useThree();

  useFrame((_, delta) => {
    // if (groupRef.current.rotation.y > 2 * Math.PI) {
    //   groupRef.current.rotation.y = 0;
    // } else {
    //   groupRef.current.rotation.y += delta * 0.15;
    // }
    if (groupRef.current?.rotation) {
      // rotateX.set(groupRef.current.rotation.x);
      rotateY.set(groupRef.current.rotation.y);
      // rotateZ.set(groupRef.current.rotation.z);
    }
  });

  let cityMovement: number[];

  if (routeSelected) {
    const leg = myRoute[selectedRouteLeg - 1];
    cityMovement = getRouteRotation(leg) || [0, 0, 0];
  } else {
    cityMovement = newGetCityRotation(selectedCity) || [0, 0, 0];
  }

  // const cityMovement = routeSelected ? newGetCityRotation('amsterdam') : newGetCityRotation(selectedCity);

  // console.log(cityMovement);

  console.log(citiesWithVisits);

  return (
    <motion.group
      ref={groupRef}
      scale={viewport.width / 5}
      rotation={[0, 0, 0.5, 'ZXY']}
      variants={variants}
      initial={{ opacity: 0 }}
      animate={getGlobeVariant(routeSelected, selectedCity)}
      custom={{
        cityMovement,
        width: viewport.width,
        height: viewport.height,
        rotateY: rotateY.get(),
        // zoom: routeSelected ? myRoute[selectedRouteLeg - 1] : 7
        zoom: getZoom(selectedRouteLeg, selectedCity)
      }}
    >
      {/* <Sphere /> */}
      <PointSphere />
      {routeSelected && <Route citiesWithVisits={citiesWithVisits} />}
      {!routeSelected &&
        citiesWithVisits.map((city) => {
          return <City key={city.coord[0]} city={city} />;
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
