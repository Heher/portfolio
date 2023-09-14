import { CatmullRomLine } from '@react-three/drei';
import { Vector3, CatmullRomCurve3 } from 'three';
import type { RouteInfo } from 'types/globe';
import { getPositionVector, globeRadius } from './utils';

const colors = {
  ground: '#E8E288',
  ferry: '#009FB7',
  flight: '#E6781E'
};

function flightScale(i: number, tubeSections: number) {
  return globeRadius + Math.sin((Math.PI * i) / tubeSections) * (globeRadius * 0.1);
}

const sectionsPerCity = 40;

export function RouteTrip({ coords, type, zoom }: RouteInfo) {
  const cityVectors = coords.map((coord) => {
    return getPositionVector(coord, globeRadius);
  });

  let points = [];

  for (let i = 0; i < coords.length - 1; i++) {
    for (let j = 0; j <= sectionsPerCity; j++) {
      if (j === sectionsPerCity) {
        points.push(cityVectors[i + 1]);
        break;
      }

      let p = new Vector3().lerpVectors(cityVectors[i], cityVectors[i + 1], j / sectionsPerCity);
      p.normalize();
      p.multiplyScalar(type === 'flight' ? flightScale(j, sectionsPerCity) : globeRadius);
      points.push(p);
    }
  }

  let path = new CatmullRomCurve3(points);

  return (
    <CatmullRomLine
      points={path.points}
      color={colors[type]}
      // lineWidth={zoom ? 3 * (7 / zoom) : 3}
      lineWidth={3}
      // curveType="catmullrom"
      tension={5}
    />
  );
}
