import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Coordinate, RouteInfo, Visit } from 'types/globe';
import type { GroupProps } from '@react-three/fiber';
import { useFrame, useThree } from '@react-three/fiber';
import {
  beamHeight,
  convertToRadians,
  formatCitiesWithVisits,
  getGlobeVariant,
  getGlobeX,
  getGlobeZoom,
  getRouteY,
  getZoom
} from './utils';
import { cities } from './coordinates';
import { Route } from './Route';
import { City } from './City';
import { motion } from 'framer-motion-3d';
import { useMotionValue } from 'framer-motion';
import { myRoute } from './routeCoordinates';
// import PointSphere from './PointSphere';
import { TripPageContext } from '~/routes/trip';
import { Instance, Instances, useTexture } from '@react-three/drei';
import earth from '~/data/map/point-earth.jpg';

type UniformType = {
  maxSize: {
    value: number;
  };
  minSize: {
    value: number;
  };
  uTexture: {
    value: THREE.Texture;
  };
};

function findMidpoint(coord1: Coordinate, coord2: Coordinate): Coordinate {
  const lat1 = coord1[0];
  const lon1 = coord1[1];
  const lat2 = coord2[0];
  const lon2 = coord2[1];

  return [(lat1 + lat2) / 2, (lon1 + lon2) / 2];
}

function getRouteRotation(leg: RouteInfo | undefined): number[] | null {
  if (!leg) return null;

  const midpoint = leg.midpoint ?? findMidpoint(leg.coords[0], leg.coords[leg.coords.length - 1]);

  const { latRad, lonRad } = convertToRadians(midpoint);

  return [latRad, lonRad - Math.PI / 2, leg.rotation !== null && leg.rotation !== undefined ? leg.rotation : 0.5];
}

function newGetCityRotation(selectedCity: string | null) {
  const foundCity = cities.find((city) => city.name === selectedCity);

  if (!foundCity && selectedCity) {
    return null;
  }

  const coord = foundCity?.coord ?? [0, 0];

  const { latRad, lonRad } = convertToRadians(coord);

  return [latRad - Math.PI * 0.35, lonRad - Math.PI / 2, 0];
}

const variants = {
  selectedCity: ({ height, cityMovement }: { height: number; cityMovement: number[] }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    x: 0,
    y: height / -4,
    z: 10,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  route: ({
    cityMovement,
    zoom,
    screenWidth,
    routeY
  }: {
    cityMovement: number[];
    zoom: number;
    screenWidth: number;
    routeY: number;
  }) => ({
    rotateX: cityMovement[0],
    rotateY: cityMovement[1],
    rotateZ: cityMovement[2],
    x: 0,
    y: routeY,
    z: getGlobeZoom(screenWidth, zoom),
    transition: {
      duration: 0.9,
      ease: 'easeInOut'
    }
  }),
  show: ({
    width,
    rotateY,
    screenWidth
  }: {
    width: number;
    rotateY: number;
    screenWidth: number;
    screenHeight: number;
  }) => ({
    rotateX: 0,
    opacity: 1,
    rotateY: [rotateY, rotateY + Math.PI * 2],
    rotateZ: 0.5,
    x: getGlobeX(width, screenWidth),
    y: 0,
    z: screenWidth < 768 ? 0 : -10 / width,
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

const MotionInstance = motion(Instance);

function GlobeInstance({ el }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      // ref.current.geometry.applyMatrix4(el.matrix);
      // ref.current.geometry.translate(el.position.x, el.position.y, el.position.z);
      // ref.current.geometry.setAttribute('center', new THREE.Float32BufferAttribute(el.centers, 3));
      ref.current.geometry.setAttribute('baseUv', new THREE.Float32BufferAttribute(el.uvs, 2));
    }
  }, [el]);

  return <Instance ref={ref} position={el.position} rotation={el.rotation} scale={el.scale} />;
}

function beforeCompile(shader: THREE.Shader, uniforms: UniformType, eTexture: THREE.Texture) {
  shader.uniforms.maxSize = uniforms.maxSize;
  shader.uniforms.minSize = uniforms.minSize;
  shader.uniforms.uTexture = { value: eTexture };
  shader.vertexShader = /* glsl */ `
      uniform sampler2D uTexture;
      uniform float maxSize;
      uniform float minSize;

      attribute vec3 center;
      attribute vec2 baseUv;

      varying float vFinalStep;
      varying float vMapColorGreen;

      ${shader.vertexShader}
    `.replace(
    `#include <begin_vertex>`,
    /* glsl */ `#include <begin_vertex>

      float mapColorGreen = texture(uTexture, baseUv).g;
      vMapColorGreen = mapColorGreen;
      float pointSize = mapColorGreen < 0.5 ? maxSize : minSize;

      transformed = (position - center) * pointSize + center;
      `
  );
  shader.fragmentShader = /* glsl */ `
      uniform vec3 gradientInner;
      uniform vec3 gradientOuter;

      varying float vMapColorGreen;
      ${shader.fragmentShader}
      `.replace(
    `vec4 diffuseColor = vec4( diffuse, opacity );`,
    /* glsl */ `
      // shaping the point, pretty much from The Book of Shaders
      vec2 hUv = (vUv - 0.5);
      int numberOfSegments = 8;
      float angle = atan(hUv.x, hUv.y);
      float r = PI2 / float(numberOfSegments);
      float d = cos(floor(.5 + angle / r) * r - angle) * length(hUv);
      float f = cos(PI / float(numberOfSegments)) * 0.5;
      if (d > f) discard;

      vec3 gradient = mix(gradientInner, gradientOuter, clamp( d / f, 0., 1.));
      vec3 diffuseMap = diffuse * ((vMapColorGreen > 0.5) ? 0.5 : 1.);
      vec4 diffuseColor = vec4( diffuseMap , opacity );
      `
  );
}

const sampleTexture = (context, canvas, u, v) => {
  const pixel = context.getImageData(u * canvas.width, v * canvas.height, 1, 1).data;
  return { r: pixel[0], g: pixel[1], b: pixel[2], a: pixel[3] };
};

function TestInstancesTwo() {
  const ref = useRef();
  const eTexture = useTexture(earth);

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = eTexture.image.width;
  canvas.height = eTexture.image.height;
  context.drawImage(eTexture.image, 0, 0);

  // console.log('E TEXTURE', eTexture);

  const uniforms = useMemo(
    () => ({
      maxSize: {
        value: 0.05
      },
      minSize: {
        value: 0.02
      },
      uTexture: {
        value: eTexture
      }
    }),
    [eTexture]
  );

  const elements = useMemo(() => {
    const dummy = new THREE.Object3D();
    const pointAmount = 10000;
    const sphere = new THREE.Spherical();
    const vector = new THREE.Vector3();
    const radius = 1;
    const changeInLongitude = Math.PI * (3 - Math.sqrt(5));
    const changeInHeight = 2 / pointAmount;

    let radialDistance = 0;
    let longitude = 0;
    let height = 1 - changeInHeight / 2;

    const newElements = [];

    for (let i = 0; i < pointAmount; i++) {
      radialDistance = Math.sqrt(1 - height * height);

      const x = Math.cos(longitude) * radialDistance;
      const y = height;
      const z = Math.sin(longitude) * radialDistance;

      const uv = new THREE.Vector2((sphere.theta + Math.PI) / (Math.PI * 2), 1 - sphere.phi / Math.PI);
      const uvs = [uv.x, uv.y, uv.x, uv.y, uv.x, uv.y, uv.x, uv.y];

      const baseUv = new THREE.Float32BufferAttribute(uvs, 2);

      console.log('UVs', baseUv);

      const u = 0.5 + Math.atan2(z, x) / (2 * Math.PI);
      const v = 0.5 - Math.asin(y) / Math.PI;

      const pixel = sampleTexture(context, canvas, u, v);
      const isLand = pixel.g < 0.5; // Assuming land is represented by higher values

      // const pixel = eTexture.image;
      // const index =
      //   (Math.floor(v * eTexture.image.height) * eTexture.image.width + Math.floor(u * eTexture.image.width)) * 4;
      // const isLand = pixel[index] > 128; // Assuming land is represented by higher values

      // console.log('UV', u, v);

      vector.set(x, y, z).multiplyScalar(radius);

      height = height - changeInHeight;
      longitude = longitude + changeInLongitude;

      sphere.setFromVector3(vector);

      const outwardVector = vector.clone().multiplyScalar(3);

      dummy.lookAt(outwardVector);

      dummy.position.set(vector.x, vector.y, vector.z);

      const centers = [
        vector.x,
        vector.y,
        vector.z,
        vector.x,
        vector.y,
        vector.z,
        vector.x,
        vector.y,
        vector.z,
        vector.x,
        vector.y,
        vector.z
      ];
      // const uv = new THREE.Vector2((sphere.theta + Math.PI) / (Math.PI * 2), 1 - sphere.phi / Math.PI);
      // const uvs = [uv.x, uv.y, uv.x, uv.y, uv.x, uv.y, uv.x, uv.y];
      // dummy.setAttribute('center', new THREE.Float32BufferAttribute(centers, 3));
      // dummy.setAttribute('baseUv', new THREE.Float32BufferAttribute(uvs, 2));

      newElements.push({
        matrix: dummy.matrix.clone(),
        position: dummy.position.clone(),
        rotation: dummy.rotation.clone(),
        rotationSpeed: 0.001 + Math.random() * 0.01,
        // scale: dummy.position.clone().multiplyScalar(1 + Math.random() * 0.1),
        scale: isLand ? 0.1 : 0.01,
        delay: Math.random(),
        color: new THREE.Color(Math.random() * 0xffffff),
        uvs,
        centers
      });
    }

    return newElements;
  }, []);

  return (
    <Instances ref={ref} limit={10000}>
      <planeGeometry args={[0.2, 0.2]} />
      {/* <icosahedronGeometry args={[0.01]} /> */}
      <meshPhysicalMaterial
        color={0x8fa1b3}
        // onBeforeCompile={(shader) => {
        //   beforeCompile(shader, uniforms, eTexture);
        // }}
        // defines={{ USE_UV: '' }}
      />
      {elements.map((el, i) => {
        // const randomHeight = Math.random();
        return <GlobeInstance key={i} el={el} />;
      })}
    </Instances>
  );
}

export function Globe() {
  const tripContext = useContext(TripPageContext);

  // console.log('TRIP CONTEXT', tripContext);

  const groupRef = useRef<GroupProps>(null);
  const rotateY = useMotionValue(0);

  const routeSelected = tripContext?.selectedRouteLeg && tripContext.selectedRouteLeg !== null;

  const citiesWithVisits = useMemo(() => formatCitiesWithVisits(cities, tripContext?.visits), [tripContext?.visits]);

  const { viewport } = useThree();

  useFrame(() => {
    if (groupRef.current?.rotation) {
      if (groupRef.current.rotation.y > 2 * Math.PI) {
        rotateY.set(0);
      } else {
        rotateY.set(groupRef.current.rotation.y);
      }
    }
  });
  // useFrame(({ clock }) => {
  //   if (groupRef.current?.rotation) {
  //     if (groupRef.current.rotation.y > 2 * Math.PI) {
  //       groupRef.current.rotation.y = 0;
  //     } else {
  //       groupRef.current.rotation.y = groupRef.current.rotation.y + 0.01;
  //     }
  //   }
  // });

  let cityMovement: number[];
  let routeY = 0;

  if (routeSelected) {
    const leg = myRoute[tripContext.selectedRouteLeg - 1];
    cityMovement = getRouteRotation(leg) ?? [0, 0, 0];
    routeY = getRouteY(leg);
  } else {
    cityMovement = newGetCityRotation(tripContext?.selectedCity) ?? [0, 0, 0];
  }

  return (
    <motion.group
      ref={groupRef}
      rotation={[0, 0, 0.5, 'ZXY']}
      variants={variants}
      initial={{ opacity: 0 }}
      animate={getGlobeVariant(routeSelected, tripContext?.selectedCity)}
      custom={{
        cityMovement,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        width: viewport.width,
        height: viewport.height,
        rotateY: rotateY.get(),
        zoom: getZoom(tripContext?.selectedRouteLeg, window.innerWidth),
        routeY
      }}
    >
      <TestInstancesTwo />
      {/* <InstancedThing /> */}
      {/* <PointSphere /> */}
      {routeSelected && <Route />}
      {citiesWithVisits.map((city) => {
        // console.log('CITY', city);
        if (!city) {
          return null;
        }

        return (
          <City
            key={city.name}
            city={city}
            height={beamHeight}
            zoom={getZoom(tripContext?.selectedRouteLeg, window.innerWidth)}
          />
        );
      })}
    </motion.group>
  );
}
