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

function beforeCompile(shader: any, uniforms: UniformType, eTexture: THREE.Texture) {
  shader.uniforms.maxSize = uniforms.maxSize;
  shader.uniforms.minSize = uniforms.minSize;
  shader.uniforms.uTexture = { value: eTexture };

  shader.vertexShader = /* glsl */ `
      uniform sampler2D uTexture;
      uniform float maxSize;
      uniform float minSize;

      attribute vec2 baseUv;

      varying float vFinalStep;
      varying float vMapColorGreen;

      ${shader.vertexShader}
    `
    .replace(
      `#include <begin_vertex>`,
      /* glsl */ `#include <begin_vertex>

      float mapColorGreen = texture(uTexture, baseUv).g;
      vMapColorGreen = mapColorGreen;
      `,
    )
    .replace(
      `gl_PointSize = size;`,
      /* glsl */ `gl_PointSize = (vMapColorGreen < 0.5 ? maxSize : minSize);`,
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
          vec2 hUv = (gl_PointCoord - 0.5);
      int numberOfSegments = 8;
      float angle = atan(hUv.x, hUv.y);
      float r = PI2 / float(numberOfSegments);
      float d = cos(floor(.5 + angle / r) * r - angle) * length(hUv);
      float f = cos(PI / float(numberOfSegments)) * 0.5;
      if (d > f) discard;

      vec3 gradient = mix(gradientInner, gradientOuter, clamp( d / f, 0., 1.));
      vec3 diffuseMap = diffuse * ((vMapColorGreen > 0.5) ? 0.5 : 1.);

      // Normal tile coloring without animation
      vec3 finalColor = diffuseMap;

      vec4 diffuseColor = vec4( finalColor , opacity );
      `,
        );
}

const globeGeometry = createGlobe();

export default function PointSphere() {
  const meshRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const shaderRef = useRef<any>(null);
  const eTexture = useTexture(earth);

  // Create stable uniforms object that won't change reference
  const uniformsRef = useRef({
    maxSize: { value: 0.23 },
    minSize: { value: 0.05 },
    uTexture: { value: eTexture },
  });

  return (
    <points ref={meshRef} rotation-y={Math.PI / 2}>
      <bufferGeometry {...globeGeometry} />
      <pointsMaterial
        ref={materialRef}
        color={0x8FA1B3}
        onBeforeCompile={(shader) => {
          shaderRef.current = shader;
          beforeCompile(shader, uniformsRef.current, eTexture);
        }}
        customProgramCacheKey={() => 'pointsphere'}
        size={4}
        sizeAttenuation
        transparent
        alphaTest={0.1}
      />
    </points>
  );
}
