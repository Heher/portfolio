import { useMemo, useRef } from 'react';
import {
  LineBasicMaterial,
  TextureLoader,
  Euler,
  AdditiveBlending,
  BackSide,
  LineSegments,
  MeshBasicMaterial,
  CylinderGeometry,
  Mesh,
  Group,
  ShaderMaterial,
  SphereGeometry,
  TubeGeometry
} from 'three';
import { useLoader, useThree, extend, Canvas, useFrame } from '@react-three/fiber';
import { Edges, OrbitControls } from '@react-three/drei';
import { cities } from './coordinates';

import earthImg from '~/data/map/new-earth.png';
import vertex from '../../data/map/shaders/vertex.glsl';
import fragment from '~/data/map/shaders/fragment.glsl';
import atmosphereVertex from '~/data/map/shaders/atmosphereVertex.glsl';
import atmosphereFragment from '~/data/map/shaders/atmosphereFragment.glsl';

import { LayoutCamera, motion, MotionCanvas } from 'framer-motion-3d';
import { useEffect } from 'react';
import { convertToRadians, globeRadius, placeObjectOnPlanet } from './utils';
import { Route } from './Route';
import { CityMarker } from './CityMarker';

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

function formatCitiesWithVisits(visits) {
  const citiesWithVisits = cities.map((city) => {
    const markerInfo = placeObjectOnPlanet(city.coord, globeRadius);
    let visited = false;

    city.years.forEach((year) => {
      if (!visited && visits[year]?.[city.type]) {
        visited = true;
      }
    });

    return { ...city, visited, markerInfo };
  });

  return citiesWithVisits;
}

function getNewRotation(coord) {
  const { latRad, lonRad } = convertToRadians(coord);

  return { rotateX: latRad, rotateY: lonRad - Math.PI / 2, rotateZ: 0 };
}

const markerGeometry = new CylinderGeometry(0.01, 0.01, 0.2, 32);
const markerTopGeometry = new CylinderGeometry(0.02, 0.02, 0.01, 32);
// const markerMaterial = new MeshBasicMaterial({ color: '#cccccc' });

const globeGeometry = new SphereGeometry(globeRadius, 32, 32);
// const globeMaterial = new ShaderMaterial({
//   vertexShader: vertex,
//   fragmentShader: fragment,
//   uniforms: { globeTexture: { value: earthMap } }
// });

const Sphere = () => {
  const earthMap = useLoader(TextureLoader, earthImg);

  return (
    <mesh geometry={globeGeometry}>
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
    <mesh geometry={globeGeometry}>
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

function getScale(foundCity, routeSelected, width) {
  if (routeSelected) {
    return 2.4;
  }

  if (foundCity) {
    return 1;
    // return foundCity.scale;
  }

  // if (width < 768) {
  //   return 0.7;
  // }
  // console.log('width', width);

  return width < 768 ? 1 : 1;
}

const globeVariants = {
  rest: ({ foundCity, routeSelected, width }) => ({
    scale: getScale(foundCity, routeSelected, width)
  }),
  city: ({ foundCity, routeSelected, width }) => ({
    ...getRotation(foundCity, routeSelected),
    scale: getScale(foundCity, routeSelected, width)
  }),
  route: ({ foundCity, routeSelected, width }) => ({
    ...getRotation(foundCity, routeSelected),
    scale: getScale(foundCity, routeSelected, width)
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

const ConnectedEarth = ({ visits, selectedCity, routeSelected, width, showDetails }) => {
  const groupRef = useRef(null);
  const controlsRef = useRef(null);

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(visits), [visits]);

  const foundCity = cities.find((city) => city.name === selectedCity?.slug);

  const { camera } = useThree();

  useFrame((state, delta) => {
    if (groupRef.current?.rotation && !routeSelected && !foundCity) {
      if (groupRef.current.rotation.y > 2 * Math.PI) {
        groupRef.current.rotation.y = 0;
      } else {
        groupRef.current.rotation.y += delta * 0.15;
      }
    }
  });

  useEffect(() => {
    if (camera && !routeSelected) {
      camera.position.set(0, 0, 18);
      camera.rotation.set(0, 0, 0, 'ZXY');
    }
  }, [camera, routeSelected]);

  return (
    <motion.group
      custom={{ foundCity, routeSelected, width }}
      ref={groupRef}
      rotation={globeRotation}
      variants={globeVariants}
      animate={findVariantType(foundCity, routeSelected)}
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.6 }}
    >
      <Atmosphere />
      <Sphere />
      <Route visible={routeSelected} />
      <OrbitControls
        ref={controlsRef}
        enabled={routeSelected}
        minPolarAngle={Math.PI / 4 - 0.2}
        maxPolarAngle={Math.PI - 0.7}
        maxDistance={45}
        minDistance={5}
        enablePan={false}
      />
      {!routeSelected &&
        citiesWithVisits.map((city) => {
          const isSelectedCity = selectedCity?.slug === city.name;

          return (
            <CityMarker
              key={city.coord[0]}
              markerGeometry={markerGeometry}
              markerTopGeometry={markerTopGeometry}
              city={city}
              citySelected={selectedCity?.slug}
              selected={isSelectedCity}
              top={true}
            />
          );
        })}
    </motion.group>
  );
};

const SimpleGlobe = ({ visits, selectedCity, routeSelected, width, showDetails }) => {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 8 }}>
      <ConnectedEarth
        visits={visits}
        selectedCity={selectedCity}
        routeSelected={routeSelected}
        width={width}
        showDetails={showDetails}
      />
    </Canvas>
  );
};

export default SimpleGlobe;
