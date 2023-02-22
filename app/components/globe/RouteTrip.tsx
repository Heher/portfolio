import { CatmullRomLine } from '@react-three/drei';
import { Vector3, CatmullRomCurve3, MeshStandardMaterial } from 'three';
import type { Coordinate, RouteInfo } from 'types/globe';
import { getPositionVector, globeRadius } from './utils';

const colors = {
  ground: '#E8E288',
  ferry: '#009FB7',
  flight: '#E6781E'
};

// const tubeSections = 20;

function flightScale(i: number, tubeSections: number) {
  return globeRadius + Math.sin((Math.PI * i) / tubeSections) * (globeRadius * 0.1);
}

const sectionsPerCity = 20;

// const material = new MeshStandardMaterial({ color: 'red' });

export const RouteTrip = ({ coords, type }: RouteInfo) => {
  // const city1 = getPositionVector(coord1, globeRadius);
  // const city2 = getPositionVector(coord2, globeRadius);

  const cityVectors = coords.map((coord) => {
    return getPositionVector(coord, globeRadius);
  });

  // console.log(cityVectors[0], cityVectors[0 + 1]);

  // const tubeSections = coords.length * sectionsPerCity;

  let points = [];

  for (let i = 0; i < coords.length - 1; i++) {
    for (let j = 0; j < sectionsPerCity; j++) {
      // console.log(cityVectors[i], cityVectors[i + 1]);
      let p = new Vector3().lerpVectors(cityVectors[i], cityVectors[i + 1], j / sectionsPerCity);
      p.normalize();
      p.multiplyScalar(type === 'flight' ? flightScale(j, sectionsPerCity) : globeRadius);
      points.push(p);
    }
  }

  let path = new CatmullRomCurve3(points);

  return <CatmullRomLine points={path.points} color={colors[type]} lineWidth={5} curveType="catmullrom" tension={5} />;

  // return (
  //   <mesh>
  //     <tubeGeometry args={[path, tubeSections, 0.003, 8, false]} />
  //     <meshStandardMaterial color={colors[type]} />
  //   </mesh>
  // );
};
