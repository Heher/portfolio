import { useMemo, useRef, useState } from 'react';
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
  TubeGeometry,
  DynamicDrawUsage,
  MeshStandardMaterial
} from 'three';
import { useLoader, useThree, extend, Canvas, useFrame } from '@react-three/fiber';
import { Effects, OrbitControls, useTexture } from '@react-three/drei';
import { cities, coordinates } from './coordinates';
import type { City } from './coordinates';

import earthImg from '~/data/map/new-earth.png';
import vertex from '../../data/map/shaders/vertex.glsl';
import fragment from '~/data/map/shaders/fragment.glsl';
import atmosphereVertex from '~/data/map/shaders/atmosphereVertex.glsl';
import atmosphereFragment from '~/data/map/shaders/atmosphereFragment.glsl';

import cyndAO from '~/data/map/cylinder/Substance_Graph_AmbientOcclusion.jpg';
import cyndColor from '~/data/map/cylinder/Substance_Graph_BaseColor.jpg';
import cyndHeight from '~/data/map/cylinder/Substance_Graph_Height.png';
import cyndNormal from '~/data/map/cylinder/Substance_Graph_Normal.jpg';
import cyndRoughness from '~/data/map/cylinder/Substance_Graph_Roughness.jpg';

// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

// import { EffectComposer, Bloom } from '@react-three/postprocessing';

import { motion } from 'framer-motion-3d';
import { useEffect } from 'react';
import { convertToRadians, getPointPosition, getPosition, globeRadius, placeObjectOnPlanet } from './utils';
import { Route } from './Route';
import { CityMarker } from './CityMarker';
import type { Coordinate, VisitYear } from 'types/globe';
import { NewCities } from './NewCities';
// import { SSAOPass, UnrealBloomPass } from 'three-stdlib';
import { Bloom, EffectComposer, Select, Selection, SelectiveBloom } from '@react-three/postprocessing';

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
  // EffectComposer,
  // RenderPass,
  // UnrealBloomPass
});

function Post() {
  const { scene, camera } = useThree();
  return (
    <EffectComposer>
      {/* <sSAOPass args={[scene, camera]} kernelRadius={0.5} maxDistance={0.1} /> */}
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
    </EffectComposer>
  );
}

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

function getNewRotation(coord: Coordinate) {
  const { latRad, lonRad } = convertToRadians(coord);

  return { rotateX: latRad, rotateY: lonRad - Math.PI / 2, rotateZ: 0 };
}

const markerGeometry = new CylinderGeometry(0.005, 0.005, 0.2, 32);
const flagGeometry = new CylinderGeometry(0.005, 0.005, 0.01, 32);
// const markerTopGeometry = new CylinderGeometry(0.02, 0.02, 0.01, 32);
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
      <meshStandardMaterial map={earthMap} />
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

function getRotation(foundCity: City | undefined, routeSelected: boolean) {
  if (routeSelected) {
    return getNewRotation([52.37, -4.89]);
  }

  return foundCity ? getNewRotation(foundCity.coord) : { rotateX: 0, rotateZ: 0.5 };
}

function getScale(foundCity: City | undefined, routeSelected: boolean, width: number) {
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

type VariantVariables = {
  foundCity: City | undefined;
  routeSelected: boolean;
  width: number;
};

const globeVariants = {
  rest: ({ foundCity, routeSelected, width }: VariantVariables) => ({
    // ...getRotation(foundCity, routeSelected),
    scale: getScale(foundCity, routeSelected, width)
  }),
  city: ({ foundCity, routeSelected, width }: VariantVariables) => ({
    ...getRotation(foundCity, routeSelected),
    scale: getScale(foundCity, routeSelected, width)
  }),
  route: ({ foundCity, routeSelected, width }: VariantVariables) => ({
    ...getRotation(foundCity, routeSelected),
    scale: getScale(foundCity, routeSelected, width)
  })
};

const globeRotation = new Euler(0, Math.PI, 0.5, 'ZXY');

const findVariantType = (foundCity: City | undefined, routeSelected: boolean) => {
  if (routeSelected) {
    return 'route';
  }

  if (foundCity) {
    return 'city';
  }

  return 'rest';
};

type NewGlobeProps = {
  visits: VisitYear[];
  routeSelected: boolean;
  width: number;
};

type SimpleGlobeProps = {
  visits: VisitYear[];
  routeSelected: boolean;
  width: number;
};

// function getPoints() {
//   let pos = [];
//   const cols = [];
//   for (let i = 0; i < 100; i++) {
//     pos = [...pos, ...getPointPosition(coordinates.losAngeles, globeRadius)];

//     cols.push(1); // r
//     cols.push(0.5); // g
//     cols.push(0.5); // b
//     cols.push(0.1); // alpha
//   }

//   return [new Float32Array(pos), new Float32Array(cols)];
// }

// function MyPoints() {
//   const [positions, colors] = getPoints();

//   return (
//     <points>
//       <bufferGeometry attach="geometry">
//         <bufferAttribute
//           attach="attributes-position"
//           count={positions.length / 3}
//           array={positions}
//           itemSize={3}
//           usage={DynamicDrawUsage}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={colors.length / 3}
//           array={colors}
//           itemSize={3}
//           usage={DynamicDrawUsage}
//         />
//       </bufferGeometry>
//       <pointsMaterial attach="material" vertexColors size={1} sizeAttenuation={false} />
//     </points>
//   );
// }

const NewGlobe = ({ visits, selectedCity, routeSelected, width }: NewGlobeProps) => {
  const groupRef = useRef(null);
  const controlsRef = useRef(null);
  const { camera } = useThree();

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(visits), [visits]);

  const foundCity = cities.find((city) => city.name === selectedCity?.slug);

  const [ao, color, height, normal, roughness] = useTexture([
    cyndAO,
    cyndColor,
    cyndHeight,
    cyndNormal,
    cyndRoughness
    // 'cylinder/Substance_Graph_BaseColor.jpg',
    // 'cylinder/Substance_Graph_Height.jpg',
    // 'cylinder/Substance_Graph_Normal.jpg',
    // 'cylinder/Substance_Graph_Roughness.jpg'
  ]);

  const summerMarkerMaterial = useMemo(
    () =>
      new MeshBasicMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        color: 'red'
        // emissiveIntensity: 20,
        // toneMapped: false
        // emissiveIntensity: 0.3
      }),
    []
  );
  const winterMarkerMaterial = useMemo(
    () =>
      new MeshBasicMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        color: 'blue'
        // emissiveIntensity: 20,
        // toneMapped: false
        // emissiveIntensity: 0.3
      }),
    []
  );
  const flagMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        emissive: 'red',
        emissiveIntensity: 8,
        toneMapped: false
        // emissiveIntensity: 0.3
      }),
    []
  );
  const visitedMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        emissive: 'green',
        emissiveIntensity: 8,
        toneMapped: false
        // emissiveIntensity: 0.3
      }),
    []
  );

  useEffect(() => {
    if (camera && !routeSelected) {
      camera.position.set(0, 0, 18);
      camera.rotation.set(0, 0, 0, 'ZXY');
    }
  }, [camera, routeSelected]);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.set(0, 0, 0.5, 'ZXY');
    }
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current && !routeSelected && !foundCity) {
      if (groupRef.current.rotation.y > 2 * Math.PI) {
        groupRef.current.rotation.y = 0;
      } else {
        groupRef.current.rotation.y += delta * 0.15;
      }
    }
  });

  return (
    <motion.group
      ref={groupRef}
      custom={{ foundCity, routeSelected, width }}
      scale={1}
      // rotation={globeRotation}
      variants={globeVariants}
      animate={findVariantType(foundCity, routeSelected)}
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.6 }}
    >
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
            <NewCities
              key={city.coord[0]}
              markerGeometry={markerGeometry}
              summerMarkerMaterial={summerMarkerMaterial}
              winterMarkerMaterial={winterMarkerMaterial}
              visitedMaterial={visitedMaterial}
              flagGeometry={flagGeometry}
              flagMaterial={flagMaterial}
              city={city}
              citySelected={selectedCity?.slug}
              selected={isSelectedCity}
              top={true}
            />
          );
        })}
      {/* <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
      </EffectComposer> */}
    </motion.group>
  );
};

const SimpleGlobe = ({ visits, selectedCity, routeSelected, width }: SimpleGlobeProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} color="white" />
      <NewGlobe visits={visits} selectedCity={selectedCity} routeSelected={routeSelected} width={width} />
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={0.85} levels={9} />
      </EffectComposer>
    </Canvas>
  );
};

export default SimpleGlobe;
