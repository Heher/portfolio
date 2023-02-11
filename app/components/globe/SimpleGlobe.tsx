import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { Edges, OrbitControls } from '@react-three/drei';
import { cities } from './coordinates';

import earthImg from '~/data/map/earth.jpg';
import vertex from '../../data/map/shaders/vertex.glsl';
import fragment from '~/data/map/shaders/fragment.glsl';
import atmosphereVertex from '~/data/map/shaders/atmosphereVertex.glsl';
import atmosphereFragment from '~/data/map/shaders/atmosphereFragment.glsl';
import { animated, useSpring } from '@react-spring/three';

import { MotionCanvas } from 'framer-motion-3d';
import { useEffect } from 'react';
import { convertToRadians } from './utils';
import { RouteTrip } from './RouteTrip';
import { Route } from './Route';

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

  return [0, -lonRad, latRad - Math.PI * 0.5];
}

// [0, -(Math.PI / 2), 0]

function getNewRotation(coord) {
  const { latRad, lonRad } = convertToRadians(coord);

  return [latRad, lonRad - Math.PI / 2, 0];
}

function placeObjectOnPlanet(coord, radius) {
  return {
    position: getPosition(coord, radius),
    flagPosition: getPosition(coord, radius + 0.2),
    rotation: getCoordRotation(coord)
  };
}

const CityMarker = ({ city, visited, citySelected, selected }) => {
  const cityInfo = placeObjectOnPlanet(city.coord, 5);

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
  const earthMap = useLoader(THREE.TextureLoader, earthImg);

  return (
    <mesh>
      <sphereGeometry args={[5, 50, 50]} />
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
      <sphereGeometry args={[5, 50, 50]} />
      <shaderMaterial
        vertexShader={atmosphereVertex}
        fragmentShader={atmosphereFragment}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

// const initPosition = new THREE.Vector3(0, 0, 0);
// const closePosition = new THREE.Vector3(1, 1, 1);

let currentRotation = [0, -(Math.PI / 2), 0];

function getRotation(foundCity, routeSelected) {
  if (routeSelected) {
    return getNewRotation([52.37, -4.89]);
  }

  return foundCity ? getNewRotation(foundCity.coord) : currentRotation;
}

function getScale(foundCity, routeSelected) {
  if (routeSelected) {
    return 2;
  }

  return foundCity ? foundCity.scale : 1;
}

const ConnectedEarth = ({ visits, selectedCity, routeSelected }) => {
  const groupRef = useRef();

  const foundCity = cities.find((city) => city.name === selectedCity?.slug);

  const { rotation, scale, position } = useSpring({
    rotation: getRotation(foundCity, routeSelected),
    scale: getScale(foundCity, routeSelected)
    // position: foundCity ? [-5, -10, 0] : [0, 0, 0]
  });

  // const { viewport } = useThree();
  // console.log(viewport);

  useFrame((state, delta) => {
    if (!selectedCity && !routeSelected) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  // useEffect(() => {
  //   if (selectedCity) {
  //     const newRotation = groupRef.current.rotation.toArray();
  //     newRotation.pop();
  //     currentRotation = newRotation;
  //     console.log(currentRotation);
  //   }
  // }, [selectedCity]);

  // console.log(scale);

  return (
    <animated.group
      ref={groupRef}
      // position-x={position}
      // position-y={position}
      // position-z={position}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <Atmosphere />
      <Sphere />
      {routeSelected && <Route />}
      {routeSelected && <OrbitControls />}
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
    </animated.group>
  );
};

const cameraRotation = new THREE.Euler(0, 0, -0.5);

const SimpleGlobe = ({ visits, selectedCity, routeSelected }) => {
  return (
    <Canvas camera={{ position: [0, 0, 28], fov: 40, far: 50, rotation: routeSelected ? [0, 0, 0] : cameraRotation }}>
      <ConnectedEarth visits={visits} selectedCity={selectedCity} routeSelected={routeSelected} />
    </Canvas>
  );
};

export default SimpleGlobe;
