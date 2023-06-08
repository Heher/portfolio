import { useMemo, useRef } from 'react';
// import type { Group } from 'three';
import { TextureLoader, CylinderGeometry, SphereGeometry, MeshStandardMaterial, MathUtils } from 'three';
import type { GroupProps } from '@react-three/fiber';
import { useLoader, useThree, Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { cities } from './coordinates';
import type { City } from './coordinates';

import earthImg from '~/data/map/new-earth.png';

import { motion } from 'framer-motion-3d';
import { useEffect } from 'react';
import { convertToRadians, formatCitiesWithVisits, getPosition, globeRadius } from './utils';
import { Route } from './Route';
import type { Coordinate, Visit } from 'types/globe';
import { NewCities } from './NewCities';
// import { Bloom, EffectComposer } from '@react-three/postprocessing';

type RotationResponse = {
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
};

function getNewRotation(coord: Coordinate): RotationResponse {
  const { latRad, lonRad } = convertToRadians(coord);

  return { rotateX: latRad, rotateY: lonRad - Math.PI / 2 };
}

const markerRadius = 0.007;
const markerHeight = 0.2;

const markerGeometry = new CylinderGeometry(markerRadius, markerRadius, markerHeight, 32);
const flagGeometry = new CylinderGeometry(markerRadius, markerRadius, 0.01, 32);

const globeGeometry = new SphereGeometry(globeRadius, 32, 32);

type SphereProps = {
  width: number;
  showDetails: boolean;
  setMoveable: () => void;
};

const Sphere = ({ width, showDetails, setMoveable }: SphereProps) => {
  const earthMap = useLoader(TextureLoader, earthImg);

  return (
    <mesh
      geometry={globeGeometry}
      onClick={() => {
        if (width >= 768 || (width < 768 && showDetails)) {
          setMoveable();
        }
      }}
    >
      <meshStandardMaterial map={earthMap} />
    </mesh>
  );
};

function getRotation(foundCity: City | undefined, routeSelected: boolean): RotationResponse {
  if (routeSelected) {
    return { ...getNewRotation([52.37, -4.89]), rotateZ: 0 };
  }

  return foundCity ? getNewRotation(foundCity.coord) : {};
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

type SimpleGlobeProps = {
  visits: Visit[];
  selectedCity: string | null;
  routeSelected: boolean;
  showDetails: boolean;
  width: number;
  moveable: boolean;
  setMoveable: () => void;
  selectedRouteLeg: number;
};

function Globe({
  visits,
  selectedCity,
  routeSelected,
  width,
  moveable,
  setMoveable,
  showDetails,
  selectedRouteLeg
}: NewGlobeProps) {
  const groupRef = useRef<GroupProps>(null!);
  const controlsRef = useRef(null);
  const { camera } = useThree();

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, visits), [visits]);

  const foundCity = cities.find((city) => city.name === selectedCity);

  const summerMarkerMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#fc8d6a'
      }),
    []
  );
  const winterMarkerMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#5bcaf5'
      }),
    []
  );
  const flagMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#ff5a5a',
        emissive: '#ff5a5a',
        emissiveIntensity: 10,
        toneMapped: false
      }),
    []
  );
  const visitedMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#3dbd73',
        emissive: '#3dbd73',
        emissiveIntensity: 10,
        toneMapped: false
      }),
    []
  );
  const offVisitedMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#3dbd73',
        emissive: 'black',
        emissiveIntensity: 0,
        toneMapped: false
      }),
    []
  );
  const offMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#ff5a5a',
        emissive: 'black',
        emissiveIntensity: 0,
        toneMapped: false
      }),
    []
  );

  useEffect(() => {
    if (camera && !routeSelected && !moveable) {
      camera.position.set(0, 0, 18);
      camera.rotation.set(0, 0, 0, 'ZXY');
    }
  }, [camera, routeSelected, moveable]);

  useFrame((state, delta) => {
    if (!groupRef?.current?.rotation || !groupRef.current.scale) return;

    if (foundCity || routeSelected) {
      const newProps = {
        ...getRotation(foundCity, routeSelected),
        scale: getScale(foundCity, routeSelected, width)
      };

      if (newProps.rotateX) {
        groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, newProps.rotateX, delta * 5);
      }

      if (newProps.rotateY) {
        groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, newProps.rotateY, delta * 5);
      }

      groupRef.current.scale.set(
        MathUtils.lerp(groupRef.current.scale.x, newProps.scale, delta * 5),
        MathUtils.lerp(groupRef.current.scale.y, newProps.scale, delta * 5),
        MathUtils.lerp(groupRef.current.scale.z, newProps.scale, delta * 5)
      );
    }

    if (!routeSelected && !foundCity && !moveable) {
      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, 0, delta * 5);
      groupRef.current.scale.set(
        MathUtils.lerp(groupRef.current.scale.x, 1, delta * 5),
        MathUtils.lerp(groupRef.current.scale.y, 1, delta * 5),
        MathUtils.lerp(groupRef.current.scale.z, 1, delta * 5)
      );

      if (groupRef.current.rotation.y > 2 * Math.PI) {
        groupRef.current.rotation.y = 0;
      } else {
        groupRef.current.rotation.y += delta * 0.15;
      }
    }
  });

  return (
    <motion.group ref={groupRef} scale={1} rotation={[0, 0, 0.5, 'ZXY']}>
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
          const isSelectedCity = selectedCity === city.name;

          const flagPosition = getPosition(city.coord, globeRadius + markerHeight / 2);

          return (
            <NewCities
              key={city.coord[0]}
              markerGeometry={markerGeometry}
              summerMarkerMaterial={summerMarkerMaterial}
              winterMarkerMaterial={winterMarkerMaterial}
              flagGeometry={flagGeometry}
              flagMaterial={flagMaterial}
              visitedMaterial={visitedMaterial}
              offMaterial={offMaterial}
              offVisitedMaterial={offVisitedMaterial}
              city={city}
              citySelected={selectedCity}
              selected={isSelectedCity}
              flagPosition={flagPosition}
            />
          );
        })}
    </motion.group>
  );
}

export function SimpleGlobe({
  visits,
  selectedCity,
  routeSelected,
  width,
  moveable,
  setMoveable,
  showDetails,
  selectedRouteLeg
}: SimpleGlobeProps) {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} color="white" />
      <Globe
        visits={visits}
        selectedCity={selectedCity}
        routeSelected={routeSelected}
        width={width}
        moveable={moveable}
        setMoveable={setMoveable}
        showDetails={showDetails}
        selectedRouteLeg={selectedRouteLeg}
      />
      {/* <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={0.85} levels={9} />
      </EffectComposer> */}
      {/* <Stats className="stats" /> */}
    </Canvas>
  );
}
