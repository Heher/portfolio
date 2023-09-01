import type { Euler, Vector3 } from '@react-three/fiber';

declare module '*.wgsl' {
  const value: string;
  export default value;
}

declare module '*.glsl' {
  const value: string;
  export default value;
}

declare module '*.frag' {
  const value: string;
  export default value;
}

declare module '*.vert' {
  const value: string;
  export default value;
}

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
};

export type MarkerVisit = {
  visited: boolean;
  markerInfo: {
    position: Vector3;
    rotation: Euler;
  };
};

export type AnimationVariants = {
  hidden: { opacity: number; x: string; transition: { duration: number } };
  visible: { opacity: number; x: string; transition: { duration: number } };
};
