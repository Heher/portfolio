import { useMemo, useRef } from 'react';
import type { Coordinate, Visit } from 'types/globe';
import type { GroupProps } from '@react-three/fiber';
import { useFrame, useThree } from '@react-three/fiber';
import { convertToRadians, formatCitiesWithVisits } from './utils';
// import type { City } from './coordinates';
import { cities } from './coordinates';
// import { Euler } from 'three';
import Sphere from './Sphere';
import { Route } from './Route';
// import { OrbitControls } from '@react-three/drei';
import { Cities } from './Cities';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing';
import { motion } from 'framer-motion-3d';
import { useMotionValue } from 'framer-motion';
// import { TripPageContext } from '~/routes/trip';

// type RotationProps = {
//   rotation?: Euler;
//   position?: Vector3;
//   scale?: number;
// };

// function getCityPosition(foundCity: City | undefined, routeSelected: boolean): Vector3 {
//   if (routeSelected) {
//     const amsterdam = coordinates['amsterdam'];

//     if (!amsterdam) return new Vector3(0, 0, 0);

//     return new Vector3(0, -amsterdam[0] / 50, 0);
//   }

//   if (!foundCity) return new Vector3(0, 0, 0);

//   //* This is a hack to get the city to appear in the right place (50 means nothing, just a magic number that works)
//   return new Vector3(0, -foundCity.coord[0] / 50, 0);
// }

// function getCityRotation(coord: Coordinate): Euler {
//   const { lonRad } = convertToRadians(coord);

//   return new Euler(0, lonRad - Math.PI / 2, 0, 'ZXY');
// }

function newGetCityRotation(coord: Coordinate) {
  const { latRad, lonRad } = convertToRadians(coord);

  console.log(latRad, latRad - Math.PI / 2);

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
  route: ({ cityMovement }: { cityMovement: number[] }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    x: 0,
    y: -0.1,
    z: 4,
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
  routeSelected
}: {
  visits: Visit[];
  selectedCity: string | null;
  routeSelected: boolean;
}) {
  const groupRef = useRef<GroupProps>(null!);
  // const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  // const rotateZ = useMotionValue(0);

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, visits), [visits]);

  const { viewport } = useThree();

  useFrame((_, delta) => {
    // if (groupRef.current.rotation.y > 2 * Math.PI) {
    //   groupRef.current.rotation.y = 0;
    // } else {
    //   groupRef.current.rotation.y += delta * 0.15;
    // }
    if (groupRef.current.rotation) {
      // rotateX.set(groupRef.current.rotation.x);
      rotateY.set(groupRef.current.rotation.y);
      // rotateZ.set(groupRef.current.rotation.z);
    }
  });

  const foundCity = cities.find((city) => city.name === selectedCity);

  // console.log(foundCity, selectedCity);

  if (!foundCity && selectedCity) {
    return null;
  }

  const cityMovement = newGetCityRotation(foundCity?.coord || [0, 0]);

  return (
    <motion.group
      ref={groupRef}
      scale={viewport.width / 5}
      rotation={[0, 0, 0.5, 'ZXY']}
      variants={variants}
      initial={{ opacity: 0 }}
      animate={getGlobeVariant(routeSelected, selectedCity)}
      custom={{ cityMovement, width: viewport.width, height: viewport.height, rotateY: rotateY.get() }}
    >
      <Sphere />
      <Route visible={routeSelected} citiesWithVisits={citiesWithVisits} />
      {!routeSelected &&
        citiesWithVisits.map((city) => {
          return <Cities key={city.coord[0]} city={city} />;
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
