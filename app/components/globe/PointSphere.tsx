import { useTexture } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { useEffect, useRef } from 'react';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

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

function createPointLightMaterial(uniforms: UniformType, color: THREE.ColorRepresentation) {
  const shaderUniforms = THREE.UniformsUtils.merge([
    THREE.UniformsLib.lights,
    {
      diffuse: { value: new THREE.Color(color) },
      opacity: { value: 1.0 },
      maxSize: uniforms.maxSize,
      minSize: uniforms.minSize,
      uTexture: uniforms.uTexture,
    },
  ]);

  return new THREE.ShaderMaterial({
    uniforms: shaderUniforms,
    lights: true,
    transparent: true,
    alphaTest: 0.1,
    vertexShader: /* glsl */ `
      uniform sampler2D uTexture;
      uniform float maxSize;
      uniform float minSize;

      attribute vec2 baseUv;

      varying float vMapColorGreen;
      varying vec3 vViewPosition;
      varying vec3 vViewNormal;

      void main() {
        float mapColorGreen = texture2D(uTexture, baseUv).g;
        vMapColorGreen = mapColorGreen;

        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vec4 mvPosition = viewMatrix * worldPosition;
        vViewPosition = mvPosition.xyz;
        vViewNormal = normalize(normalMatrix * normalize(position));
        gl_Position = projectionMatrix * mvPosition;

        float pointSize = mapColorGreen < 0.5 ? maxSize : minSize;
        gl_PointSize = pointSize * (300.0 / -mvPosition.z);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 diffuse;
      uniform float opacity;

      varying float vMapColorGreen;
      varying vec3 vViewPosition;
      varying vec3 vViewNormal;

      #include <common>
      #include <packing>
      #include <bsdfs>
      #include <lights_pars_begin>

      void main() {
        // shape each sprite into an octagon-like point instead of a square
        vec2 hUv = (gl_PointCoord - 0.5);
        int numberOfSegments = 8;
        float angle = atan(hUv.x, hUv.y);
        float r = PI2 / float(numberOfSegments);
        float d = cos(floor(0.5 + angle / r) * r - angle) * length(hUv);
        float f = cos(PI / float(numberOfSegments)) * 0.5;
        if (d > f) discard;

        // subtle anisotropic-style streaking to fake a brushed metal plate
        float brushed = 0.9 + 0.1 * sin((hUv.x * 120.0) + (hUv.y * 18.0));

        vec3 normal = normalize(vViewNormal);
        vec3 viewDir = normalize(-vViewPosition);
        vec3 litColor = ambientLightColor * 0.32;
        vec3 specularColor = vec3(0.93, 0.95, 0.97);
        float shininess = 24.0;
        float specularStrength = 0.42;

        #if NUM_DIR_LIGHTS > 0
          for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
            vec3 lightDir = normalize(directionalLights[i].direction);
            float ndl = max(dot(normal, lightDir), 0.0);
            vec3 halfVec = normalize(lightDir + viewDir);
            float spec = pow(max(dot(normal, halfVec), 0.0), shininess);
            litColor += directionalLights[i].color * (ndl + spec * specularStrength * brushed);
          }
        #endif

        #if NUM_POINT_LIGHTS > 0
          for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lVector = pointLights[i].position - vViewPosition;
            float lightDistance = length(lVector);
            vec3 lightDir = lVector / max(lightDistance, 0.0001);
            float ndl = max(dot(normal, lightDir), 0.0);
            float attenuation = getDistanceAttenuation(lightDistance, pointLights[i].distance, pointLights[i].decay);
            vec3 halfVec = normalize(lightDir + viewDir);
            float spec = pow(max(dot(normal, halfVec), 0.0), shininess);
            litColor += pointLights[i].color * (ndl + spec * specularStrength * brushed) * attenuation;
          }
        #endif

        #if NUM_HEMI_LIGHTS > 0
          for (int i = 0; i < NUM_HEMI_LIGHTS; i++) {
            float hemiDiffuseWeight = 0.5 * dot(normal, hemisphereLights[i].direction) + 0.5;
            litColor += mix(hemisphereLights[i].groundColor, hemisphereLights[i].skyColor, hemiDiffuseWeight);
          }
        #endif

        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
        vec3 diffuseMap = diffuse * ((vMapColorGreen > 0.5) ? 0.48 : 0.82);
        vec3 metalBase = diffuseMap * litColor;
        vec3 finalColor = metalBase + specularColor * fresnel * 0.14;
        finalColor = clamp(finalColor, 0.0, 1.0);

        gl_FragColor = vec4(finalColor, opacity);
      }
    `,
  });
}

const globeGeometry = createGlobe();

export default function PointSphere() {
  const meshRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const eTexture = useTexture(earth);

  // Create stable uniforms object that won't change reference
  const uniformsRef = useRef({
    maxSize: { value: 0.4 },
    minSize: { value: 0.05 },
    uTexture: { value: eTexture },
  });

  const pointMaterial = useMemo(() => {
    return createPointLightMaterial(uniformsRef.current, 0x7A858D);
  }, []);

  pointMaterial.uniforms.uTexture.value = eTexture;

  return (
    <points ref={meshRef} rotation-y={Math.PI / 2}>
      <bufferGeometry {...globeGeometry} />
      <primitive object={pointMaterial} ref={materialRef} attach="material" />
    </points>
  );
}
