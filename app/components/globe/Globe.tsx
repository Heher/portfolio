import { useContext, useEffect, useMemo, useRef } from 'react';
import type { Coordinate, Visit } from 'types/globe';
import { useThree, useFrame } from '@react-three/fiber';
import { convertToRadians, formatCitiesWithVisits } from './utils';
import type { City } from './coordinates';
import { cities, coordinates } from './coordinates';
import type { Group } from 'three';
import { Euler, MathUtils, Vector3 } from 'three';
import Sphere from './Sphere';
import { Route } from './Route';
import { OrbitControls } from '@react-three/drei';
import { Cities } from './Cities';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing';
import { dampE, damp3 } from 'maath/easing';
import { motion } from 'framer-motion-3d';
import { useAnimate, useAnimation, useAnimationControls, useAnimationFrame, useMotionValue } from 'framer-motion';
import { filterOutNonOlympiadsForCity } from '../olympiad-city/utils';
import { TripPageContext, useTripContext } from '~/routes/trip';

// type RotationProps = {
//   rotation?: Euler;
//   position?: Vector3;
//   scale?: number;
// };

function getCityPosition(foundCity: City | undefined, routeSelected: boolean): Vector3 {
  if (routeSelected) {
    const amsterdam = coordinates['amsterdam'];

    if (!amsterdam) return new Vector3(0, 0, 0);

    return new Vector3(0, -amsterdam[0] / 50, 0);
  }

  if (!foundCity) return new Vector3(0, 0, 0);

  //* This is a hack to get the city to appear in the right place (50 means nothing, just a magic number that works)
  return new Vector3(0, -foundCity.coord[0] / 50, 0);
}

function getCityRotation(coord: Coordinate): Euler {
  const { lonRad } = convertToRadians(coord);

  return new Euler(0, lonRad - Math.PI / 2, 0, 'ZXY');
}

function newGetCityRotation(coord: Coordinate) {
  const { lonRad } = convertToRadians(coord);

  return [0, lonRad - Math.PI / 2, 0];
}

function getRotation(foundCity: City | undefined, routeSelected: boolean): Euler {
  if (routeSelected) {
    return getCityRotation(cities.find((city) => city.name === 'Amsterdam')?.coord || [0, 0]);
  }

  if (!foundCity) return new Euler(0, 0, 0, 'ZXY');

  return getCityRotation(foundCity.coord);
}

function getScale(foundCity: City | undefined, routeSelected: boolean, width: number) {
  if (routeSelected) {
    return 2.4;
  }

  if (foundCity) {
    return foundCity.scale;
  }

  return width < 768 ? 1 : 1;
}

const variants = {
  selectedCity: ({ cityMovement }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    y: -0.1,
    z: 4,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  route: ({ cityMovement }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  show: ({ rotateY }: { rotateX: number; rotateY: number; rotateZ: number }) => ({
    rotateX: 0,
    // rotateY: [rotateY, rotateY + Math.PI * 2],
    rotateZ: 0.5
    // transition: {
    //   repeat: Infinity,
    //   duration: 20,
    //   ease: 'linear',
    //   rotateX: 1,
    //   rotateZ: 1
    // }
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

export function Globe() {
  const groupRef = useRef<Group>(null!);
  // const rotateX = useMotionValue(0);
  // const rotateY = useMotionValue(0);
  // const rotateZ = useMotionValue(0);

  const { routeSelected, selectedCity, visits } = useContext(TripPageContext);

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, visits), [visits]);

  useFrame((_, delta) => {
    // if (groupRef.current.rotation.y > 2 * Math.PI) {
    //   groupRef.current.rotation.y = 0;
    // } else {
    //   groupRef.current.rotation.y += delta * 0.15;
    // }
    // rotateX.set(groupRef.current.rotation.x);
    // rotateY.set(groupRef.current.rotation.y);
    // rotateZ.set(groupRef.current.rotation.z);
  });

  const foundCity = cities.find((city) => city.name === selectedCity);

  if (!foundCity && selectedCity) {
    return null;
  }

  const cityMovement = newGetCityRotation(foundCity?.coord || [0, 0]);

  // useEffect(() => {
  //   if (camera && !routeSelected && !moveable) {
  //     camera.position.set(0, 0, 18);
  //     camera.rotation.set(0, 0, 0, 'ZXY');
  //   }
  // }, [camera, routeSelected, moveable]);

  // useFrame((_, delta) => {
  //   const currentRotation = groupRef?.current?.rotation || new Euler();
  //   const currentScale = groupRef?.current?.scale || new Vector3();
  //   const currentPosition = groupRef?.current?.position || new Vector3();

  //   if (foundCity || routeSelected) {
  //     const newProps = {
  //       rotation: getRotation(foundCity, routeSelected),
  //       position: getCityPosition(foundCity, routeSelected),
  //       scale: getScale(foundCity, routeSelected, width)
  //     };

  //     if (checkProps(newProps, currentRotation, 'rotation')) {
  //       dampE(currentRotation, newProps.rotation, 0.3, delta);
  //     }

  //     if (checkProps(newProps, currentPosition, 'position')) {
  //       damp3(currentPosition, newProps.position, 0.25, delta);
  //     }

  //     if (checkProps(newProps, currentScale, 'scale')) {
  //       damp3(currentScale, newProps.scale, 0.25, delta);
  //     }
  //   }

  //   if (!routeSelected && !foundCity && !moveable) {
  //     currentRotation.x = MathUtils.lerp(currentRotation.x, 0, delta * 5);
  //     currentPosition.set(0, 0, 0);

  //     damp3(currentScale, 1, 0.25, delta);

  //     if (currentRotation.y > 2 * Math.PI) {
  //       currentRotation.y = 0;
  //     } else {
  //       currentRotation.y += delta * 0.15;
  //     }

  //     currentRotation.z = MathUtils.lerp(currentRotation.z, 0.5, delta * 5);
  //   }
  // });

  return (
    <motion.group
      ref={groupRef}
      scale={1}
      rotation={[0, 0, 0.5, 'ZXY']}
      variants={variants}
      animate={getGlobeVariant(routeSelected, selectedCity)}
      custom={{ cityMovement }}
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
