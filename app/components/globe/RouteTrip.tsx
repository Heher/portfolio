import { Vector3, CatmullRomCurve3 } from 'three';
import type { Coordinate } from 'types/globe';
import { getPositionVector, globeRadius } from './utils';

type RouteTripProps = {
  coords: Coordinate[];
  type: 'flight' | 'ferry' | 'ground';
};

const colors = {
  ground: '#E8E288',
  ferry: '#009FB7',
  flight: '#E6781E'
};

// const tubeSections = 20;

function flightScale(i: number, tubeSections: number) {
  return globeRadius + Math.sin((Math.PI * i) / tubeSections) * (globeRadius * 0.1);
}

const sectionsPerCity = 10;

export const RouteTrip = ({ coords, type }: RouteTripProps) => {
  // const city1 = getPositionVector(coord1, globeRadius);
  // const city2 = getPositionVector(coord2, globeRadius);

  const cityVectors = coords.map((coord) => {
    return getPositionVector(coord, globeRadius);
  });

  const tubeSections = coords.length * sectionsPerCity;

  let points = [];

  for (let i = 0; i < coords.length; i++) {
    for (let j = 0; j < sectionsPerCity; j++) {
      console.log(cityVectors[i]);
      // let p = new Vector3().lerpVectors(cityVectors[i], cityVectors[i + 1], j / sectionsPerCity);
      // p.normalize();
      // p.multiplyScalar(type === 'flight' ? flightScale(i, tubeSections) : globeRadius);

      // points.push(p);
    }
  }

  // console.log(points);

  return null;

  // let path = new CatmullRomCurve3(points);

  // return (
  //   <mesh>
  //     <tubeGeometry args={[path, tubeSections, 0.003, 8, false]} />
  //     <meshStandardMaterial color={colors[type]} />
  //   </mesh>
  // );
};
