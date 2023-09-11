import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { white } from '~/components/globe/colors';

import vertexShader from '~/components/shader-sandbox/shaders/vertex.glsl';
import fragmentShader from '~/components/shader-sandbox/shaders/fragment.glsl';
import { OrbitControls, useTexture } from '@react-three/drei';
import earth from '~/data/map/point-earth.jpg';
import { useMemo, useRef } from 'react';
import type { Mesh, MeshStandardMaterial } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as THREE from 'three';

// const eTexture = new THREE.TextureLoader().load(earth);

let dummyObject = new THREE.Object3D();
let vector = new THREE.Vector3();
let sphere = new THREE.Spherical();
let radius = 1;

const pointAmount = 20000;
const geometries = [];

let r = 0;
let dlong = Math.PI * (3 - Math.sqrt(5));
let dz = 2 / pointAmount;
let long = 0;
let z = 1 - dz / 2;

for (let i = 0; i < pointAmount; i++) {
  const circleGeometry = new THREE.CircleGeometry(0.01, 64);

  r = Math.sqrt(1 - z * z);
  vector.set(Math.cos(long) * r, z, -Math.sin(long) * r).multiplyScalar(radius);

  z = z - dz;
  long = long + dlong;
  sphere.setFromVector3(vector);

  dummyObject.lookAt(vector);
  dummyObject.updateMatrix();

  circleGeometry.applyMatrix4(dummyObject.matrix);
  circleGeometry.translate(vector.x, vector.y, vector.z);

  let centers = [
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
  let uv = new THREE.Vector2((sphere.theta + Math.PI) / (Math.PI * 2), 1 - sphere.phi / Math.PI);
  let uvs = [uv.x, uv.y, uv.x, uv.y, uv.x, uv.y, uv.x, uv.y];
  circleGeometry.setAttribute('center', new THREE.Float32BufferAttribute(centers, 3));
  circleGeometry.setAttribute('baseUv', new THREE.Float32BufferAttribute(uvs, 2));

  geometries.push(circleGeometry);
}

const testGeometry = mergeGeometries(geometries);

// m.defines = {'USE_UV':''};
// earth = new THREE.Mesh(g, m);

function Object() {
  const mesh = useRef<Mesh>(null);
  const eTexture = useTexture(earth);

  const uniforms = useMemo(
    () => ({
      maxSize: {
        value: 0.04
      },
      minSize: {
        value: 0.025
      },
      scaling: {
        value: 1
      },
      uTime: {
        value: 0.0
      },
      uTexture: {
        value: eTexture
      },
      gradInner: {
        value: new THREE.Color(0xff0000)
      },
      gradOuter: {
        value: new THREE.Color(0x00ff00)
      }
    }),
    []
  );

  function beforeCompile(shader) {
    // shader.uniforms.impacts = uniforms.impacts;
    shader.uniforms.maxSize = uniforms.maxSize;
    shader.uniforms.minSize = uniforms.minSize;
    // shader.uniforms.waveHeight = uniforms.waveHeight;
    shader.uniforms.scaling = uniforms.scaling;
    shader.uniforms.gradInner = uniforms.gradInner;
    shader.uniforms.gradOuter = uniforms.gradOuter;
    shader.uniforms.uTexture = { value: eTexture };
    shader.vertexShader = /* glsl */ `
        uniform sampler2D uTexture;
        uniform float maxSize;
        uniform float minSize;
        uniform float scaling;
  
        attribute vec3 center;
        attribute vec2 baseUv;
  
        varying float vFinalStep;
        varying float vMap;
  
        ${shader.vertexShader}
      `.replace(
      `#include <begin_vertex>`,
      /* glsl */ `#include <begin_vertex>
        float finalStep = 0.0;
        finalStep = clamp(finalStep, 0., 1.);
        vFinalStep = finalStep;
  
        float map = texture(uTexture, baseUv).g;
        vMap = map;
        float pSize = map < 0.5 ? maxSize : minSize;
        float scale = scaling;
  
        transformed = (position - center) * pSize * mix(1., scale * 1.25, finalStep) + center; // scale on wave
        transformed += normal * finalStep; // lift on wave
        `
    );
    shader.fragmentShader = `
        uniform vec3 gradInner;
        uniform vec3 gradOuter;
        varying float vFinalStep;
        varying float vMap;
        ${shader.fragmentShader}
        `.replace(
      `vec4 diffuseColor = vec4( diffuse, opacity );`,
      /* glsl */ `
        // shaping the point, pretty much from The Book of Shaders
        vec2 hUv = (vUv - 0.5);
        int N = 8;
        float a = atan(hUv.x,hUv.y);
        float r = PI2/float(N);
        float d = cos(floor(.5+a/r)*r-a)*length(hUv);
        float f = cos(PI / float(N)) * 0.5;
        if (d > f) discard;
  
        vec3 grad = mix(gradInner, gradOuter, clamp( d / f, 0., 1.)); // gradient
        vec3 diffuseMap = diffuse * ((vMap > 0.5) ? 0.5 : 1.);
        vec3 col = mix(diffuseMap, grad, vFinalStep); // color on wave
        //if (!gl_FrontFacing) col *= 0.25; // moderate the color on backside
        vec4 diffuseColor = vec4( col , opacity );
        `
    );
  }

  // const uniforms = useMemo(
  //   () => ({
  //     uTime: {
  //       value: 0.0
  //     },
  //     uTexture: {
  //       value: eTexture
  //     }
  //   }),
  //   []
  // );

  // useFrame((state) => {
  //   if (mesh.current) {
  //     const { clock } = state;
  //     mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
  //   }
  // });

  return (
    <mesh ref={mesh}>
      <bufferGeometry attach="geometry" {...testGeometry} />
      {/* <icosahedronGeometry args={[1, 100]} /> */}
      <meshBasicMaterial color={0x3366ff} onBeforeCompile={beforeCompile} />
      {/* <pointsMaterial color={0xf38ba0} size={0.1} /> */}
    </mesh>
  );
}

export default function ShaderSandbox() {
  return (
    <motion.div
      className={`globe-container fixed left-0 top-0 -z-0 h-full w-full `}
      transition={{ type: 'tween', ease: 'anticipate', duration: 0.6 }}
      initial={false}
    >
      {/* <Canvas camera={{ position: [0, 0, 8], fov: 45 }} shadows> */}
      <Canvas shadows>
        {/* <MotionCanvas shadows> */}
        {/* <LayoutCamera position={[0, 0, 5]} fov={8} /> */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={2} color={white} castShadow shadow-mapSize={[3072, 3072]} />
        <OrbitControls />
        <Object />
      </Canvas>
    </motion.div>
  );
}
