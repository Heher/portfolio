import type * as THREE from 'three';

import { useTexture } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useEffect, useRef } from 'react';
import { useRef } from 'react';
// import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import earth from '~/data/map/point-earth.jpg';

// import { cities } from './coordinates';
import { createGlobe } from './createGlobe';
// import { findClosestTileCenter } from './findClosestTile';
// import { getPositionVector } from './utils';

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

function beforeCompile(shader: any, uniforms: UniformType, eTexture: THREE.Texture) {
  shader.uniforms.maxSize = uniforms.maxSize;
  shader.uniforms.minSize = uniforms.minSize;
  shader.uniforms.uTexture = { value: eTexture };

  shader.vertexShader = /* glsl */ `
      uniform sampler2D uTexture;
      uniform float maxSize;
      uniform float minSize;
      // COMMENTED OUT - TILE ANIMATION CODE
      // uniform vec3 selectedCityPosition;
      // uniform float towerHeight;

      attribute vec3 center;
      attribute vec2 baseUv;

      varying float vFinalStep;
      varying float vMapColorGreen;
      // COMMENTED OUT - TILE ANIMATION CODE
      // varying float vHeightFactor;
      // varying float vDistanceToCity;

      ${shader.vertexShader}
    `.replace(
          `#include <begin_vertex>`,
          /* glsl */ `#include <begin_vertex>

      float mapColorGreen = texture(uTexture, baseUv).g;
      vMapColorGreen = mapColorGreen;
      float pointSize = mapColorGreen < 0.5 ? maxSize : minSize;

      // COMMENTED OUT - TILE ANIMATION CODE
      // // Calculate distance from this vertex to selected city position
      // float distanceToCity = distance(center, selectedCityPosition);
      // vDistanceToCity = distanceToCity;

      // // Mathematical calculation of tile spacing:
      // // With 100,000 tiles on a unit sphere (radius = 1):
      // // Surface area = 4π ≈ 12.566
      // // Area per tile ≈ 12.566 / 100000 = 0.00012566
      // // Approximate tile radius = sqrt(area/π) ≈ 0.00633
      // // So tiles are approximately 0.006-0.007 units apart
      // // Use half that as tolerance to catch only the closest tile
      // float tileSize = 0.003;
      
      // float heightFactor = distanceToCity < tileSize ? 1.0 : 0.0;
      // vHeightFactor = heightFactor;
      
      // // Scale the selected tile to make it thicker and wider
      // float selectedScale = 1.0 + heightFactor * 0.6; // 60% larger when selected
      // transformed = (position - center) * pointSize * selectedScale + center;
      
      // // Displace along the normal (outward from sphere center)
      // vec3 normalDirection = normalize(center);
      // transformed += normalDirection * towerHeight * heightFactor;

      // Normal tile rendering without animation
      transformed = (position - center) * pointSize + center;
      `,
        );
  shader.fragmentShader = /* glsl */ `
      uniform vec3 gradientInner;
      uniform vec3 gradientOuter;
      // COMMENTED OUT - TILE ANIMATION CODE
      // uniform vec3 selectedCityPosition;

      varying float vMapColorGreen;
      // COMMENTED OUT - TILE ANIMATION CODE
      // varying float vHeightFactor;
      // varying float vDistanceToCity;
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

      // COMMENTED OUT - TILE ANIMATION CODE
      // // Color logic:
      // // Selected tile (vHeightFactor == 1.0): bright green
      // // Everything else: normal color
      // vec3 brightGreen = vec3(0.0, 1.0, 0.0);
      
      // vec3 finalColor = diffuseMap;
      
      // // Selected tile turns bright green
      // if (vHeightFactor > 0.5) {
      //   finalColor = brightGreen;
      // }

      // Normal tile coloring without animation
      vec3 finalColor = diffuseMap;

      vec4 diffuseColor = vec4( finalColor , opacity );
      `,
        );
}

const globeGeometry = createGlobe();

export default function PointSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const shaderRef = useRef<any>(null);
  const eTexture = useTexture(earth);

  // Create stable uniforms object that won't change reference
  const uniformsRef = useRef({
    maxSize: { value: 0.05 },
    minSize: { value: 0.02 },
    uTexture: { value: eTexture },
  });

  return (
    <mesh ref={meshRef} rotation-y={Math.PI / 2} receiveShadow castShadow>
      <bufferGeometry {...globeGeometry} />
      <meshStandardMaterial
        ref={materialRef}
        color={0x8FA1B3}
        onBeforeCompile={(shader) => {
          shaderRef.current = shader;
          beforeCompile(shader, uniformsRef.current, eTexture);
        }}
        customProgramCacheKey={() => 'pointsphere'}
        defines={{ USE_UV: '' }}
      />
    </mesh>
  );
}
