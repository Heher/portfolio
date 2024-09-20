import { useMemo, useRef } from 'react';
import * as THREE from 'three';
// import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import earth from '~/data/map/point-earth.jpg';
import { useTexture } from '@react-three/drei';
import { createGlobe } from './createGlobe';

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

const globeGeometry = createGlobe();

export default function PointSphere() {
  const mesh = useRef<THREE.Mesh>(null);
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
      }
    }),
    [eTexture]
  );

  return (
    <mesh ref={mesh} rotation-y={Math.PI / 2} receiveShadow castShadow>
      {/* <mesh ref={mesh} rotation-y={Math.PI / 2}> */}
      <bufferGeometry {...globeGeometry} />
      <meshStandardMaterial
        color={0x8fa1b3}
        onBeforeCompile={(shader) => {
          beforeCompile(shader, uniforms, eTexture);
        }}
        defines={{ USE_UV: '' }}
      />
    </mesh>
  );
}
