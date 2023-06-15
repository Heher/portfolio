import { MeshLambertMaterial, MeshStandardMaterial, ShaderMaterial, Color } from 'three';
import { black, darkWinterColor, notVisitedColor, summerColor, visitedColor, winterColor } from './colors';

import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

export const newFlagMaterial = new ShaderMaterial({
  uniforms: {
    u_offColor: { value: new Color(0xff5a5a) },
    u_darkSummerColor: { value: new Color(0x00ff00) },
    u_summerColor: { value: new Color(0xfc8d6a) },
    u_visitedColor: { value: new Color(0xc4ebd5) },
    u_time: { value: 0.0 }
  },
  vertexShader,
  fragmentShader
});

export const summerMarkerMaterial = new MeshStandardMaterial({
  color: 0xfc8d6a
  // emissive: summerColor
});

export const winterMarkerMaterial = new MeshStandardMaterial({
  color: 0x5bcaf5
  // emissive: winterColor
});

export const flagMaterial = new MeshStandardMaterial({
  color: 0xff5a5a,
  // emissive: 0xff5a5a,
  emissiveIntensity: 10,
  toneMapped: false
});

export const visitedMaterial = new MeshStandardMaterial({
  color: 0x3dbd73,
  // emissive: visitedColor,
  emissiveIntensity: 10,
  toneMapped: false
});

export const offVisitedMaterial = new MeshStandardMaterial({
  color: 0x3dbd73,
  // emissive: black,
  emissiveIntensity: 0,
  toneMapped: false
});

export const offMaterial = new MeshStandardMaterial({
  color: 0xff5a5a,
  // emissive: black,
  emissiveIntensity: 0,
  toneMapped: false
});
