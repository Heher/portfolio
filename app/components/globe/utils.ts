import * as THREE from 'three';

export const globeRadius = 1;

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

function getPosition(coord, radius) {
  const { latRad, lonRad } = convertToRadians(coord);

  return [
    Math.cos(latRad) * Math.cos(lonRad) * radius,
    Math.sin(latRad) * radius,
    Math.cos(latRad) * Math.sin(lonRad) * radius
  ];
}

function getCoordRotation(coord) {
  const { latRad, lonRad } = convertToRadians(coord);

  return [0, -lonRad, latRad - Math.PI * 0.5];
}

export function placeObjectOnPlanet(coord, radius) {
  return {
    position: getPosition(coord, radius),
    flagPosition: getPosition(coord, radius + 0.1),
    rotation: getCoordRotation(coord)
  };
}

export function topColor(citySelected: string | undefined, selected: boolean, visited: boolean, cityType: string) {
  if (citySelected) {
    if (selected) {
      if (visited) {
        return '#3dbd73';
      }

      if (cityType === 'summer') {
        return '#ff3366';
      }

      return '#3366ff';
    }

    return '#cccccc';
  }

  if (visited) {
    return '#3dbd73';
  }

  if (cityType === 'summer') {
    return '#ff3366';
  }

  return '#3366ff';
}
