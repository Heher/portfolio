import { Vector3, CatmullRomCurve3 } from 'three';
import { getPositionVector, globeRadius } from './utils';

type Coordinate = [number, number];

type RouteTripProps = {
  coord1: Coordinate;
  coord2: Coordinate;
  type: 'flight' | 'ferry' | 'ground';
};

const colors = {
  ground: '#E8E288',
  ferry: '#009FB7',
  flight: '#E6781E'
};

const tubeSections = 20;

function flightScale(i: number) {
  return globeRadius + Math.sin((Math.PI * i) / tubeSections) * (globeRadius * 0.1);
}

export const RouteTrip = ({ coord1, coord2, type }: RouteTripProps) => {
  const city1 = getPositionVector(coord1, globeRadius);
  const city2 = getPositionVector(coord2, globeRadius);

  let points = [];

  for (let i = 0; i <= tubeSections; i++) {
    let p = new Vector3().lerpVectors(city1, city2, i / tubeSections);
    p.normalize();
    p.multiplyScalar(type === 'flight' ? flightScale(i) : globeRadius);

    points.push(p);
  }

  let path = new CatmullRomCurve3(points);

  return (
    <mesh>
      <tubeGeometry args={[path, tubeSections, 0.003, 8, false]} />
      <meshBasicMaterial color={colors[type]} />
    </mesh>
  );
};
