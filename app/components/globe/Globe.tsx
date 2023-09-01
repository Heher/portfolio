import { useEffect, useMemo, useRef } from 'react';
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

type RotationProps = {
  rotation?: Euler;
  position?: Vector3;
  scale?: number;
};

type NewGlobeProps = {
  visits: Visit[];
  selectedCity: string | null;
  routeSelected: boolean;
  showDetails: boolean;
  width: number;
  moveable: boolean;
  setMoveable: () => void;
  selectedRouteLeg: number;
};

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

function checkProps(
  newProps: RotationProps,
  currentValue: Euler | Vector3,
  checkValue: 'rotation' | 'position' | 'scale'
) {
  return (
    newProps.hasOwnProperty(checkValue) && newProps[checkValue] !== currentValue && newProps[checkValue] !== undefined
  );
}

export function Globe({
  visits,
  selectedCity,
  routeSelected,
  width,
  moveable,
  setMoveable,
  showDetails,
  selectedRouteLeg
}: NewGlobeProps) {
  const groupRef = useRef<Group>(null!);
  const controlsRef = useRef(null);
  const { camera } = useThree();

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, visits), [visits]);

  const foundCity = cities.find((city) => city.name === selectedCity);

  useEffect(() => {
    if (camera && !routeSelected && !moveable) {
      camera.position.set(0, 0, 18);
      camera.rotation.set(0, 0, 0, 'ZXY');
    }
  }, [camera, routeSelected, moveable]);

  useFrame((_, delta) => {
    const currentRotation = groupRef?.current?.rotation || new Euler();
    const currentScale = groupRef?.current?.scale || new Vector3();
    const currentPosition = groupRef?.current?.position || new Vector3();

    if (foundCity || routeSelected) {
      const newProps = {
        rotation: getRotation(foundCity, routeSelected),
        position: getCityPosition(foundCity, routeSelected),
        scale: getScale(foundCity, routeSelected, width)
      };

      if (checkProps(newProps, currentRotation, 'rotation')) {
        dampE(currentRotation, newProps.rotation, 0.3, delta);
      }

      if (checkProps(newProps, currentPosition, 'position')) {
        damp3(currentPosition, newProps.position, 0.25, delta);
      }

      if (checkProps(newProps, currentScale, 'scale')) {
        damp3(currentScale, newProps.scale, 0.25, delta);
      }
    }

    if (!routeSelected && !foundCity && !moveable) {
      currentRotation.x = MathUtils.lerp(currentRotation.x, 0, delta * 5);
      currentPosition.set(0, 0, 0);

      damp3(currentScale, 1, 0.25, delta);

      if (currentRotation.y > 2 * Math.PI) {
        currentRotation.y = 0;
      } else {
        currentRotation.y += delta * 0.15;
      }

      currentRotation.z = MathUtils.lerp(currentRotation.z, 0.5, delta * 5);
    }
  });

  return (
    <group ref={groupRef} scale={1} rotation={[0, 0, 0.5, 'ZXY']}>
      <Sphere width={width} showDetails={showDetails} setMoveable={setMoveable} />
      <Route visible={routeSelected} citiesWithVisits={citiesWithVisits} selectedRouteLeg={selectedRouteLeg} />
      <OrbitControls
        ref={controlsRef}
        enabled={routeSelected || moveable}
        minPolarAngle={Math.PI / 4 - 0.2}
        maxPolarAngle={Math.PI - 0.7}
        maxDistance={45}
        minDistance={5}
        enablePan={false}
        rotateSpeed={0.25}
        target={[0, 0, 0]}
      />
      {!routeSelected &&
        citiesWithVisits.map((city) => {
          return <Cities key={city.coord[0]} city={city} citySelected={selectedCity} />;
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
    </group>
  );
}
