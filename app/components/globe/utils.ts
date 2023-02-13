import * as THREE from 'three';

export const globeRadius = 5;

export function convertToRadians(coord) {
  const latRad = coord[0] * (Math.PI / 180);
  const lonRad = coord[1] * (Math.PI / 180);

  return {
    latRad,
    lonRad
  };
}

export function getPositionVector(coord, radius) {
  const { latRad, lonRad } = convertToRadians(coord);

  return new THREE.Vector3(
    Math.cos(latRad) * Math.cos(lonRad) * radius,
    Math.sin(latRad) * radius,
    Math.cos(latRad) * Math.sin(lonRad) * radius
  );
}
