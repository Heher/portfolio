import type { Coordinate, RouteInfo } from 'types/globe';
import { coordinates } from './coordinates';

const extraCoordinates: { [key: string]: Coordinate } = {
  ghent: [51.05, -3.73],
  ieper: [50.8492, -2.8779],
  brussels: [50.8476, -4.3572],
  luxembourg: [49.8153, -6.1296],
  gothenburg: [57.7089, -11.9746],
  tallin: [59.437, -24.7536],
  riga: [56.9496, -24.1052],
  liepzig: [51.3397, -12.3731],
  dresden: [51.0504, -13.7373],
  nuremberg: [49.4521, -11.0767],
  venice: [45.4408, -12.3155],
  bologna: [44.4949, -11.3426],
  sestriere: [44.9579, -6.8791],
  annecy: [45.8992, -6.1294],
  geneva: [46.2044, -6.1432],
  zurich: [47.3769, -8.5417],
  chur: [46.8503, -9.5334],
  sargans: [47.1944, -9.3789],
  vaduz: [47.1411, -9.5215],
  vienna: [48.2082, -16.3738]
};

export const myRoute: RouteInfo[] = [
  {
    coords: [
      coordinates.amsterdam,
      coordinates.antwerp,
      extraCoordinates.ghent,
      extraCoordinates.ieper,
      extraCoordinates.brussels,
      extraCoordinates.luxembourg,
      coordinates.paris
    ],
    type: 'ground'
  },
  {
    coords: [coordinates.paris, coordinates.oslo],
    type: 'flight'
  },
  {
    coords: [
      coordinates.oslo,
      coordinates.lillehammer,
      coordinates.oslo,
      extraCoordinates.gothenburg,
      coordinates.stockholm
    ],
    type: 'ground'
  },
  {
    coords: [coordinates.stockholm, extraCoordinates.tallin],
    type: 'ferry'
  },
  {
    coords: [extraCoordinates.tallin, extraCoordinates.riga, extraCoordinates.tallin],
    type: 'ground'
  },
  {
    coords: [extraCoordinates.tallin, coordinates.helsinki],
    type: 'ferry'
  },
  {
    coords: [
      coordinates.berlin,
      extraCoordinates.liepzig,
      extraCoordinates.dresden,
      extraCoordinates.nuremberg,
      coordinates.munich,
      coordinates.garmisch,
      coordinates.innsbruck,
      coordinates.cortina,
      extraCoordinates.venice,
      extraCoordinates.bologna,
      coordinates.torino,
      extraCoordinates.sestriere,
      coordinates.grenoble,
      coordinates.albertville,
      extraCoordinates.annecy,
      coordinates.chamonix,
      extraCoordinates.geneva,
      extraCoordinates.zurich,
      extraCoordinates.chur,
      coordinates.stMoritz,
      extraCoordinates.chur,
      extraCoordinates.sargans,
      extraCoordinates.vaduz,
      extraCoordinates.sargans,
      extraCoordinates.zurich
    ],
    type: 'ground'
  },
  {
    coords: [extraCoordinates.zurich, coordinates.sarajevo],
    type: 'flight'
  },
  {
    coords: [coordinates.sarajevo, coordinates.london],
    type: 'flight'
  }
];
