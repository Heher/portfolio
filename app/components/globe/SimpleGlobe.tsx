import { useRef } from 'react';
import {
  LineBasicMaterial,
  TextureLoader,
  Euler,
  AdditiveBlending,
  BackSide,
  Vector3,
  LineSegments,
  MeshBasicMaterial,
  CylinderGeometry,
  Mesh,
  Group,
  ShaderMaterial,
  SphereGeometry,
  TubeGeometry
} from 'three';
import { useLoader, useThree, extend } from '@react-three/fiber';
import { Edges, OrbitControls } from '@react-three/drei';
import { cities } from './coordinates';

import earthImg from '~/data/map/earth.jpg';
import vertex from '../../data/map/shaders/vertex.glsl';
import fragment from '~/data/map/shaders/fragment.glsl';
import atmosphereVertex from '~/data/map/shaders/atmosphereVertex.glsl';
import atmosphereFragment from '~/data/map/shaders/atmosphereFragment.glsl';

import { LayoutCamera, motion, MotionCanvas } from 'framer-motion-3d';
import { useEffect } from 'react';
import { convertToRadians, globeRadius } from './utils';
import { Route } from './Route';

extend({
  LineBasicMaterial,
  LineSegments,
  MeshBasicMaterial,
  CylinderGeometry,
  Mesh,
  Group,
  ShaderMaterial,
  SphereGeometry,
  TubeGeometry
});

function topColor(citySelected: string | undefined, selected: boolean, visited: boolean, cityType: string) {
  if (citySelected) {
    if (selected) {
      if (visited) {
        return '#3dbd73';
      }

      if (cityType === 'summer') {
        return '#ff3366';
      }

      return '#3366ff';
    }

    return '#cccccc';
  }

  if (visited) {
    return '#3dbd73';
  }

  if (cityType === 'summer') {
    return '#ff3366';
  }

  return '#3366ff';
}

function getPosition(coord, radius) {
  const { latRad, lonRad } = convertToRadians(coord);

  return [
    Math.cos(latRad) * Math.cos(lonRad) * radius,
    Math.sin(latRad) * radius,
    Math.cos(latRad) * Math.sin(lonRad) * radius
  ];
}

function getCoordRotation(coord) {
  const { latRad, lonRad } = convertToRadians(coord);

  return new Euler(0, -lonRad, latRad - Math.PI * 0.5);
}

function getNewRotation(coord) {
  const { latRad, lonRad } = convertToRadians(coord);

  return { rotateX: latRad, rotateY: lonRad - Math.PI / 2, rotateZ: 0 };
}

function placeObjectOnPlanet(coord, radius) {
  return {
    position: getPosition(coord, radius),
    flagPosition: getPosition(coord, radius + 0.2),
    rotation: getCoordRotation(coord)
  };
}

const CityMarker = ({ city, visited, citySelected, selected }) => {
  const cityInfo = placeObjectOnPlanet(city.coord, globeRadius);

  return (
    <group>
      <mesh position={cityInfo.position} rotation={cityInfo.rotation}>
        <cylinderGeometry args={citySelected ? [0.01, 0.01, 0.2, 32] : [0.02, 0.02, 0.4, 32]} />
        <meshBasicMaterial color={topColor(citySelected, selected, visited, city.type)} />
      </mesh>
      <mesh position={cityInfo.flagPosition} rotation={cityInfo.rotation}>
        <cylinderGeometry args={citySelected ? [0.02, 0.02, 0.02, 32] : [0.04, 0.04, 0.02, 32]} />
        <meshBasicMaterial color={topColor(citySelected, selected, visited, city.type)} />
        <Edges
          scale={1}
          threshold={30} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
          color={city.type === 'summer' ? '#ff3366' : '#3366ff'}
        />
      </mesh>
    </group>
  );
};

const Sphere = () => {
  const earthMap = useLoader(TextureLoader, earthImg);

  return (
    <mesh>
      <sphereGeometry args={[globeRadius, 50, 50]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={{ globeTexture: { value: earthMap } }}
      />
    </mesh>
  );
};

const Atmosphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[globeRadius, 50, 50]} />
      <shaderMaterial
        vertexShader={atmosphereVertex}
        fragmentShader={atmosphereFragment}
        blending={AdditiveBlending}
        side={BackSide}
      />
    </mesh>
  );
};

function getRotation(foundCity, routeSelected) {
  if (routeSelected) {
    return getNewRotation([52.37, -4.89]);
  }

  return foundCity ? getNewRotation(foundCity.coord) : { rotateX: 0, rotateY: 0, rotateZ: 0 };
}

function getScale(foundCity, routeSelected) {
  if (routeSelected) {
    return 1;
  }

  return foundCity ? foundCity.scale : 1;
}

const globeVariants = {
  rest: {
    rotateY: -2 * Math.PI,
    scale: 1,
    transition: { rotateY: { ease: 'linear', duration: 20, repeat: Infinity } }
  },
  city: ({ foundCity, routeSelected }) => ({
    ...getRotation(foundCity, routeSelected),
    scale: getScale(foundCity, routeSelected)
  }),
  route: ({ foundCity, routeSelected }) => ({
    ...getRotation(foundCity, routeSelected),
    // rotateY: 0,
    scale: getScale(foundCity, routeSelected)
  })
};

const globeRotation = new Euler(0, 0, 0.5, 'ZXY');

const findVariantType = (foundCity, routeSelected) => {
  if (routeSelected) {
    return 'route';
  }

  if (foundCity) {
    return 'city';
  }

  return 'rest';
};

const ConnectedEarth = ({ visits, selectedCity, routeSelected }) => {
  const groupRef = useRef(null);
  const controlsRef = useRef(null);

  const foundCity = cities.find((city) => city.name === selectedCity?.slug);

  const { camera } = useThree();

  useEffect(() => {
    if (camera && !routeSelected) {
      camera.position.set(0, 0, 18);
      camera.rotation.set(0, 0, 0, 'ZXY');
    }
  }, [camera, routeSelected]);

  return (
    <motion.group
      custom={{ foundCity, routeSelected }}
      ref={groupRef}
      rotation={globeRotation}
      variants={globeVariants}
      animate={findVariantType(foundCity, routeSelected)}
    >
      <Atmosphere />
      <Sphere />
      {routeSelected && <Route />}
      <OrbitControls
        ref={controlsRef}
        enabled={routeSelected}
        minPolarAngle={Math.PI / 4 - 0.2}
        maxPolarAngle={Math.PI - 0.7}
        maxDistance={45}
        minDistance={10}
        enablePan={false}
      />
      {!routeSelected &&
        cities.map((city) => {
          let visited = false;

          city.years.forEach((year) => {
            if (!visited && visits[year]?.[city.type]) {
              visited = true;
            }
          });

          const isSelectedCity = selectedCity?.slug === city.name;

          return (
            <CityMarker
              key={city.coord[0]}
              city={city}
              visited={visited}
              citySelected={selectedCity?.slug}
              selected={isSelectedCity}
            />
          );
        })}
    </motion.group>
  );
};

const cameraPosition = new Vector3(0, 0, 18);

const SimpleGlobe = ({ visits, selectedCity, routeSelected }) => {
  return (
    <MotionCanvas>
      <LayoutCamera position={cameraPosition} fov={40} far={50} />
      <ConnectedEarth visits={visits} selectedCity={selectedCity} routeSelected={routeSelected} />
    </MotionCanvas>
  );
};

export default SimpleGlobe;
