import { CatmullRomLine } from '@react-three/drei';
import { Vector3, CatmullRomCurve3 } from 'three';
import type { RouteInfo } from 'types/globe';
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

const sectionsPerCity = 40;

// function getCurve(p1, p2) {
//   let v1 =
// }

export function RouteTrip({ coords, type, zoom }: RouteInfo) {
  const cityVectors = coords.map((coord) => {
    return getPositionVector(coord, globeRadius);
  });

  let points = [];

  for (let i = 0; i < coords.length - 1; i++) {
    for (let j = 0; j <= sectionsPerCity; j++) {
      // console.log(cityVectors[i], cityVectors[i + 1]);
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

  // return (
  //   <mesh>
  //     <tubeGeometry args={[path, 70, zoom ? 0.003 * (7 / zoom) : 0.003, 50, true]} />
  //     <meshBasicMaterial color={colors[type]} />
  //   </mesh>
  // );

  return (
    <CatmullRomLine
      points={path.points}
      color={colors[type]}
      lineWidth={zoom ? 3 * (7 / zoom) : 3}
      curveType="catmullrom"
      tension={5}
    />
  );
}
