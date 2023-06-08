import * as THREE from 'three';
import type { Coordinate, MarkerVisit, Visit } from 'types/globe';
import type { City } from './coordinates';

export const globeRadius = 1;
export const markerRadius = 0.007;
export const markerHeight = 0.2;

export function convertToRadians(coord: Coordinate) {
  const latRad = coord[0] * (Math.PI / 180);
  const lonRad = coord[1] * (Math.PI / 180);

  return {
    latRad,
    lonRad
  };
}

export function getPositionVector(coord: Coordinate, radius: number) {
  const { latRad, lonRad } = convertToRadians(coord);

  return new THREE.Vector3(
    Math.cos(latRad) * Math.cos(lonRad) * radius,
    Math.sin(latRad) * radius,
    Math.cos(latRad) * Math.sin(lonRad) * radius
  );
}

export function getPosition(coord: Coordinate, radius: number) {
  const { latRad, lonRad } = convertToRadians(coord);

  return [
    Math.cos(latRad) * Math.cos(lonRad) * radius,
    Math.sin(latRad) * radius,
    Math.cos(latRad) * Math.sin(lonRad) * radius
  ];
}

export function getPointPosition(coord: Coordinate, radius: number) {
  const { latRad, lonRad } = convertToRadians(coord);

  return [
    Math.cos(latRad) * Math.cos(lonRad) * radius,
    Math.sin(latRad) * radius,
    Math.cos(latRad) * Math.sin(lonRad) * (radius + Math.random() * 0.2)
  ];
}

function getCoordRotation(coord: Coordinate) {
  const { latRad, lonRad } = convertToRadians(coord);

  return [0, -lonRad, latRad - Math.PI * 0.5];
}

export function placeObjectOnPlanet(coord: Coordinate, radius: number): { position: number[]; rotation: number[] } {
  return {
    position: getPosition(coord, radius),
    // flagPosition: getPosition(coord, radius + 0.1),
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

export function formatCitiesWithVisits(cities: City[], visits: Visit[]): (City & MarkerVisit)[] {
  const citiesWithVisits = cities.map((city) => {
    const markerInfo = placeObjectOnPlanet(city.coord, globeRadius);
    let visited = false;

    city.years.forEach((year) => {
      const visitedCity = visits.find((visit) => visit.year === year && visit.type === city.type);
      if (!visited && visitedCity) {
        visited = true;
      }
    });

    return { ...city, visited, markerInfo };
  });

  return citiesWithVisits;
}
