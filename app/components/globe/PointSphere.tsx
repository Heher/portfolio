import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import earth from '~/data/map/point-earth.jpg';
import { useTexture } from '@react-three/drei';

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

let dummyObject = new THREE.Object3D();
let vector = new THREE.Vector3();
let sphere = new THREE.Spherical();
let radius = 5;

const pointAmount = 75000;
const geometries = [];

let radialDistance = 0;
let changeInLongitude = Math.PI * (3 - Math.sqrt(5));
let changeInHeight = 2 / pointAmount;

let longitude = 0;
let height = 1 - changeInHeight / 2;

for (let i = 0; i < pointAmount; i++) {
  const circleGeometry = new THREE.PlaneGeometry(1, 1);

  radialDistance = Math.sqrt(1 - height * height);
  vector
    .set(Math.cos(longitude) * radialDistance, height, -Math.sin(longitude) * radialDistance)
    .multiplyScalar(radius);

  height = height - changeInHeight;
  longitude = longitude + changeInLongitude;

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

const globeGeometry = mergeGeometries(geometries);

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
    <mesh ref={mesh} scale={0.2} rotation-y={Math.PI / 2} receiveShadow>
      <bufferGeometry {...globeGeometry} />
      <meshStandardMaterial
        color={0x8fa1b3}
        onBeforeCompile={(shader) => beforeCompile(shader, uniforms, eTexture)}
        defines={{ USE_UV: '' }}
      />
    </mesh>
  );
}
