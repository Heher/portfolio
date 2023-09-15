import * as THREE from 'three';
import type { Coordinate, MarkerVisit, RouteInfo, Visit } from 'types/globe';
import type { CityType } from './coordinates';
import type { Euler } from '@react-three/fiber';
import { myRoute } from './routeCoordinates';
// import type { Euler, Vector3 } from '@react-three/fiber';

export const globeRadius = 1;
export const markerRadius = 0.007;
export const markerHeight = 0.01;
export const beamHeight = 0.3;

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

export function getPosition(coord: Coordinate, radius: number): [x: number, y: number, z: number] {
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

function getCoordRotation(coord: Coordinate): Euler {
  const { latRad, lonRad } = convertToRadians(coord);

  return new THREE.Euler(0, -lonRad, latRad - Math.PI * 0.5);
}

export function placeObjectOnPlanet(
  coord: Coordinate,
  radius: number
): { position: [x: number, y: number, z: number]; rotation: Euler } {
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

export function formatCitiesWithVisits(cities: CityType[], visits: Visit[]): (CityType & MarkerVisit)[] {
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

export function getZoom(selectedRouteLeg: number | null) {
  if (selectedRouteLeg !== null) {
    return myRoute[selectedRouteLeg - 1].zoom || 7;
  }

  return 7;
}

export function getRouteY(leg: RouteInfo): number {
  return leg.y || 0;
}

export function getGlobeX(width: number, screenWidth: number) {
  if (screenWidth < 768) {
    return 0;
  }

  if (screenWidth < 1024) {
    return width / 1.5;
  }

  return width / 4;
}

export function getGlobeZoom(screenWidth: number, zoom: number) {
  if (screenWidth < 768) {
    return zoom - 6;
  }

  return zoom - 2;
}

export function getGlobeVariant(routeSelected: boolean, selectedCity: string | null) {
  if (routeSelected) {
    return 'route';
  }

  if (selectedCity) {
    return 'selectedCity';
  }

  return 'show';
}
