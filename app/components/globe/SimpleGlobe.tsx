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
  MeshStandardMaterial,
  MathUtils
} from 'three';
import { useLoader, useThree, extend, Canvas, useFrame } from '@react-three/fiber';
import { Effects, OrbitControls, useTexture, Stats, Environment, Center } from '@react-three/drei';
import { cities, coordinates } from './coordinates';
import type { City } from './coordinates';

import earthImg from '~/data/map/new-earth.png';

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
import { convertToRadians, globeRadius, placeObjectOnPlanet } from './utils';
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
});

// function Post() {
//   const { scene, camera } = useThree();
//   return (
//     <EffectComposer>
//       {/* <sSAOPass args={[scene, camera]} kernelRadius={0.5} maxDistance={0.1} /> */}
//       <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
//     </EffectComposer>
//   );
// }

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

  return { rotateX: latRad, rotateY: lonRad - Math.PI / 2 };
}

// function resetRotation() {
//   return { rotateX: 0, rotateZ: 0.5 };
// }

const markerRadius = 0.007;

const markerGeometry = new CylinderGeometry(markerRadius, markerRadius, 0.2, 32);
const flagGeometry = new CylinderGeometry(markerRadius, markerRadius, 0.01, 32);
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

function getRotation(foundCity: City | undefined, routeSelected: boolean) {
  if (routeSelected) {
    return getNewRotation([52.37, -4.89]);
  }

  return foundCity ? getNewRotation(foundCity.coord) : {};
}

function getScale(foundCity: City | undefined, routeSelected: boolean, width: number) {
  if (routeSelected) {
    return 2.4;
  }

  if (foundCity) {
    // return 1;
    return foundCity.scale;
  }

  // if (width < 768) {
  //   return 0.7;
  // }
  // console.log('width', width);

  return width < 768 ? 1 : 1;
}

// type VariantVariables = {
//   foundCity: City | undefined;
//   routeSelected: boolean;
//   width: number;
// };

// const globeVariants = {
//   rest: ({ foundCity, routeSelected, width }: VariantVariables) => ({
//     ...resetRotation(),
//     scale: getScale(foundCity, routeSelected, width)
//   }),
//   city: ({ foundCity, routeSelected, width }: VariantVariables) => ({
//     ...getRotation(foundCity, routeSelected),
//     scale: getScale(foundCity, routeSelected, width)
//   }),
//   route: ({ foundCity, routeSelected, width }: VariantVariables) => ({
//     ...getRotation(foundCity, routeSelected),
//     scale: getScale(foundCity, routeSelected, width)
//   })
// };

// const globeRotation = new Euler(0, Math.PI, 0.5, 'ZXY');

// const findVariantType = (foundCity: City | undefined, routeSelected: boolean) => {
//   if (routeSelected) {
//     return 'route';
//   }

//   if (foundCity) {
//     return 'city';
//   }

//   return 'rest';
// };

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

const NewGlobe = ({ visits, selectedCity, routeSelected, width }: NewGlobeProps) => {
  const groupRef = useRef(null);
  const controlsRef = useRef(null);
  const { camera } = useThree();
  // const [globeRotation, setGlobeRotation] = useState(new Euler(0, 0, 0.5, 'ZXY'));

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(visits), [visits]);

  const foundCity = cities.find((city) => city.name === selectedCity?.slug);

  // const [ao, color, height, normal, roughness] = useTexture([
  //   cyndAO,
  //   cyndColor,
  //   cyndHeight,
  //   cyndNormal,
  //   cyndRoughness
  // ]);

  const markerMaterial = useMemo(() => new MeshStandardMaterial(), []);

  const summerMarkerMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        color: '#fc8d6a'
        // emissiveIntensity: 20,
        // toneMapped: false
        // emissiveIntensity: 0.3
      }),
    []
  );
  const winterMarkerMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        color: '#5bcaf5'
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
        color: '#ff5a5a',
        emissive: '#ff5a5a',
        emissiveIntensity: 10,
        toneMapped: false
        // emissiveIntensity: 0.3
      }),
    []
  );
  const visitedMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        color: '#3dbd73',
        emissive: '#3dbd73',
        emissiveIntensity: 10,
        toneMapped: false
        // emissiveIntensity: 0.3
      }),
    []
  );
  const offVisitedMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        color: '#3dbd73',
        emissive: 'black',
        emissiveIntensity: 0,
        toneMapped: false
        // emissiveIntensity: 0.3
      }),
    []
  );
  const offMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        // emissive: topColor(citySelected, selected, city.visited, city.type),
        color: '#ff5a5a',
        emissive: 'black',
        emissiveIntensity: 0,
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

  useFrame((state, delta) => {
    if (foundCity || routeSelected) {
      const newProps = { ...getRotation(foundCity, routeSelected), scale: getScale(foundCity, routeSelected, width) };

      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, newProps.rotateX, delta * 5);
      groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, newProps.rotateY, delta * 5);
      groupRef.current.scale.set(
        MathUtils.lerp(groupRef.current.scale.x, newProps.scale, delta * 5),
        MathUtils.lerp(groupRef.current.scale.y, newProps.scale, delta * 5),
        MathUtils.lerp(groupRef.current.scale.z, newProps.scale, delta * 5)
      );
    }

    if (!routeSelected && !foundCity) {
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
    <motion.group
      ref={groupRef}
      // custom={{ foundCity, routeSelected, width }}
      scale={1}
      rotation={[0, 0, 0.5, 'ZXY']}
      // variants={globeVariants}
      // animate={findVariantType(foundCity, routeSelected)}
      // transition={{ type: 'tween', ease: 'easeInOut', duration: 0.6 }}
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
        rotateSpeed={0.25}
        target={[0, 0, 0]}
      />
      {!routeSelected &&
        citiesWithVisits.map((city) => {
          const isSelectedCity = selectedCity?.slug === city.name;

          return (
            <NewCities
              key={city.coord[0]}
              markerGeometry={markerGeometry}
              markerMaterial={markerMaterial}
              summerMarkerMaterial={summerMarkerMaterial}
              winterMarkerMaterial={winterMarkerMaterial}
              flagGeometry={flagGeometry}
              flagMaterial={flagMaterial}
              visitedMaterial={visitedMaterial}
              offMaterial={offMaterial}
              offVisitedMaterial={offVisitedMaterial}
              city={city}
              citySelected={selectedCity?.slug || false}
              selected={isSelectedCity}
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
      <Stats className="stats" />
    </Canvas>
  );
};

export default SimpleGlobe;
