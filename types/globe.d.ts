// import type { Euler, Vector3 } from '@react-three/fiber';

import type { Euler, Vector3 } from '@react-three/fiber';

export type Coordinate = [number, number];

export type Visit = {
  year: string;
  type: 'summer' | 'winter';
  stadium: {
    img: string;
    link?: string;
  };
  strava: {
    img: string;
    link: string;
  };
};

export type RouteInfo = {
  coords: Coordinate[];
  type: 'flight' | 'ferry' | 'ground';
  description: string;
  zoom?: number;
  midpoint?: Coordinate;
  cities: { name: string; new: boolean }[];
  newCities?: string[];
};

export type MarkerInfo = {
  position: Vector3;
  rotation: Euler;
};

export type MarkerVisit = {
  visited: boolean;
  markerInfo: MarkerInfo;
};

export type AnimationVariants = {
  hidden: { opacity: number; x: string; transition: { duration: number } };
  visible: { opacity: number; x: string; transition: { duration: number } };
};
