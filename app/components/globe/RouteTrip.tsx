import * as THREE from 'three';
import { getPositionVector } from './utils';

type Coordinate = [number, number];

type RouteTripProps = {
  coord1: Coordinate;
  coord2: Coordinate;
  isFlight?: boolean;
};

const globeRadius = 5;

function flightScale(i: number) {
  return globeRadius + Math.sin((Math.PI * i) / 20) / 4;
}

export const RouteTrip = ({ coord1, coord2, isFlight = false }: RouteTripProps) => {
  const city1 = getPositionVector(coord1, 5);
  const city2 = getPositionVector(coord2, 5);

  let points = [];

  for (let i = 0; i <= 20; i++) {
    let p = new THREE.Vector3().lerpVectors(city1, city2, i / 20);
    p.normalize();
    p.multiplyScalar(isFlight ? flightScale(i) : globeRadius);

    points.push(p);
  }

  let path = new THREE.CatmullRomCurve3(points);

  return (
    <mesh>
      <tubeGeometry args={[path, 20, 0.01, 8, false]} />
      <meshBasicMaterial color={isFlight ? '#E6781E' : '#CEECEF'} />
    </mesh>
  );
};
