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
  stadium: {
    img: string;
    link: string;
  };
  strava: {
    img: string;
    link: string;
  };
};

export type VisitYear = {
  [key: string]: {
    summer?: Visit;
    winter?: Visit;
  };
};

export type RouteInfo = {
  coords: Coordinate[];
  type: 'flight' | 'ferry' | 'ground';
};
