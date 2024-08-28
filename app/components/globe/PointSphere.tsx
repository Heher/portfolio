import { useMemo, useRef } from 'react';
import * as THREE from 'three';
// import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import earth from '~/data/map/point-earth.jpg';
import { GradientTexture, shaderMaterial, useTexture } from '@react-three/drei';
import { createGlobe } from './createGlobe';
import { motion } from 'framer-motion-3d';
// import { useFrame } from '@react-three/fiber';
import vertex from './shaders/globe/vertex.glsl';
import fragment from './shaders/globe/fragment.glsl';
import { extend, useFrame } from '@react-three/fiber';

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

// const dummyObject = new THREE.Object3D();
// const vector = new THREE.Vector3();
// const sphere = new THREE.Spherical();
// const radius = 1;

// const pointAmount = 100000;
// // const pointAmount = 100;
// const geometries = [];

// let radialDistance = 0;
// const changeInLongitude = Math.PI * (3 - Math.sqrt(5));
// const changeInHeight = 2 / pointAmount;

// let longitude = 0;
// let height = 1 - changeInHeight / 2;

// for (let i = 0; i < pointAmount; i++) {
//   const circleGeometry = new THREE.PlaneGeometry(0.2, 0.2);

//   radialDistance = Math.sqrt(1 - height * height);

//   vector
//     .set(Math.cos(longitude) * radialDistance, height, -Math.sin(longitude) * radialDistance)
//     .multiplyScalar(radius);

//   height = height - changeInHeight;
//   longitude = longitude + changeInLongitude;

//   sphere.setFromVector3(vector);

//   dummyObject.lookAt(vector);
//   dummyObject.updateMatrix();

//   circleGeometry.applyMatrix4(dummyObject.matrix);
//   circleGeometry.translate(vector.x, vector.y, vector.z);

//   const centers = [
//     vector.x,
//     vector.y,
//     vector.z,
//     vector.x,
//     vector.y,
//     vector.z,
//     vector.x,
//     vector.y,
//     vector.z,
//     vector.x,
//     vector.y,
//     vector.z
//   ];
//   const uv = new THREE.Vector2((sphere.theta + Math.PI) / (Math.PI * 2), 1 - sphere.phi / Math.PI);
//   const uvs = [uv.x, uv.y, uv.x, uv.y, uv.x, uv.y, uv.x, uv.y];
//   circleGeometry.setAttribute('center', new THREE.Float32BufferAttribute(centers, 3));
//   circleGeometry.setAttribute('baseUv', new THREE.Float32BufferAttribute(uvs, 2));

//   geometries.push(circleGeometry);
// }

// const globeGeometry = mergeGeometries(geometries);

// const jsonGeometry = globeGeometry.toJSON();

function beforeCompile(shader: THREE.Shader, uniforms: UniformType, eTexture: THREE.Texture) {
  shader.uniforms.maxSize = uniforms.maxSize;
  shader.uniforms.minSize = uniforms.minSize;
  shader.uniforms.uTexture = { value: eTexture };
  shader.uniforms.uCoordinate = { value: new THREE.Vector3(0, 0, 0) }; // Add this line
  shader.vertexShader = /* glsl */ `
      uniform sampler2D uTexture;
      uniform float maxSize;
      uniform float minSize;
      uniform vec3 uCoordinate; // Add this line

      attribute vec3 center;
      attribute vec2 baseUv;

      varying float vFinalStep;
      varying float vMapColorGreen;
      varying float vDistance; // Add this line

      ${shader.vertexShader}
    `.replace(
    `#include <begin_vertex>`,
    /* glsl */ `#include <begin_vertex>

      float mapColorGreen = texture(uTexture, baseUv).g;
      vMapColorGreen = mapColorGreen;
      float pointSize = mapColorGreen < 0.5 ? maxSize : minSize;

      transformed = (position - center) * pointSize + center;

      vDistance = distance(transformed, uCoordinate); // Add this line
      `
  );
  shader.fragmentShader = /* glsl */ `
      uniform vec3 gradientInner;
      uniform vec3 gradientOuter;

      varying float vMapColorGreen;
      varying float vDistance; // Add this line
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
      vec3 diffuseMap = diffuse * ((vMapColorGreen > 0.5) ? 0.4 : 1.);
      vec4 diffuseColor = vec4( diffuseMap , opacity );

      // if (vDistance < 1.0) {
      //   gl_FragColor.rgb = vec3(1.0, 0.0, 0.0); // Color the area around the coordinate red
      // }
      `
  );
}

const globeGeometry = createGlobe();

const PointMaterial = shaderMaterial({ color: new THREE.Color(0.9, 1.0, 0.2) }, vertex, fragment);

extend({ PointMaterial });

export default function PointSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const eTexture = useTexture(earth);

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
      },
      u_time: {
        value: 0.0
      },
      u_colorA: { value: new THREE.Color('#FFE486') },
      u_colorB: { value: new THREE.Color('#FEB3D9') }
    }),
    [eTexture]
  );

  // useFrame(() => {
  //   if (meshRef.current) {
  //     const time = performance.now() * 0.001;
  //     const position = meshRef.current.geometry.attributes.position;
  //     const array = position.array;

  //     for (let i = 0; i < array.length; i += 3) {
  //       const x = array[i];
  //       const y = array[i + 1];
  //       const z = array[i + 2];

  //       // Apply bulge effect on the left side (x < 0)
  //       if (x < 0) {
  //         array[i] = x + Math.sin(time + x * 10) * 0.1;
  //       }
  //     }

  //     position.needsUpdate = true;
  //   }
  // });

  useFrame((state) => {
    if (!meshRef.current) return;

    const { clock } = state;
    meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime();

    // meshRef.current.rotation.y += 0.01;
  });

  return (
    <motion.mesh
      ref={meshRef}
      rotation-y={Math.PI / 2}
      receiveShadow
      castShadow
      // initial={{ y: 0 }}
      // animate={{ y: 0.5 }}
      // transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.5 }}
    >
      {/* <mesh ref={mesh} rotation-y={Math.PI / 2}> */}
      {/* <sphereGeometry args={[1, 64, 64]} /> */}
      {/* <bufferGeometry {...globeGeometry} /> */}
      <planeGeometry args={[1, 1, 16, 16]} />
      <pointMaterial key={PointMaterial.key} color={0x3366ff} uniforms={uniforms} />
      {/* <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial> */}
    </motion.mesh>
  );
}
