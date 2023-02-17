import { coordinates } from './coordinates';

const extraCoordinates = {
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

export const myRoute = [
  { coord1: coordinates.amsterdam, coord2: coordinates.antwerp, type: 'ground', createMarker: true },
  { coord1: coordinates.antwerp, coord2: extraCoordinates.ghent, type: 'ground' },
  { coord1: extraCoordinates.ghent, coord2: extraCoordinates.ieper, type: 'ground' },
  { coord1: extraCoordinates.ieper, coord2: extraCoordinates.brussels, type: 'ground' },
  { coord1: extraCoordinates.brussels, coord2: extraCoordinates.luxembourg, type: 'ground' },
  { coord1: extraCoordinates.luxembourg, coord2: coordinates.paris, type: 'ground' },
  { coord1: coordinates.paris, coord2: coordinates.oslo, type: 'flight' },
  { coord1: coordinates.oslo, coord2: coordinates.lillehammer, type: 'ground' },
  { coord1: coordinates.lillehammer, coord2: coordinates.oslo, type: 'ground' },
  { coord1: coordinates.oslo, coord2: extraCoordinates.gothenburg, type: 'ground' },
  { coord1: extraCoordinates.gothenburg, coord2: coordinates.stockholm, type: 'ground' },
  { coord1: coordinates.stockholm, coord2: extraCoordinates.tallin, type: 'ferry' },
  { coord1: extraCoordinates.tallin, coord2: extraCoordinates.riga, type: 'ground' },
  { coord1: extraCoordinates.riga, coord2: extraCoordinates.tallin, type: 'ground' },
  { coord1: extraCoordinates.tallin, coord2: coordinates.helsinki, type: 'ferry' },
  { coord1: coordinates.berlin, coord2: extraCoordinates.liepzig, type: 'ground' },
  { coord1: extraCoordinates.liepzig, coord2: extraCoordinates.dresden, type: 'ground' },
  { coord1: extraCoordinates.dresden, coord2: extraCoordinates.nuremberg, type: 'ground' },
  { coord1: extraCoordinates.nuremberg, coord2: coordinates.munich, type: 'ground' },
  { coord1: coordinates.munich, coord2: coordinates.garmisch, type: 'ground' },
  { coord1: coordinates.garmisch, coord2: coordinates.innsbruck, type: 'ground' },
  { coord1: coordinates.innsbruck, coord2: coordinates.cortina, type: 'ground' },
  { coord1: coordinates.cortina, coord2: extraCoordinates.venice, type: 'ground' },
  { coord1: extraCoordinates.venice, coord2: extraCoordinates.bologna, type: 'ground' },
  { coord1: extraCoordinates.bologna, coord2: coordinates.torino, type: 'ground' },
  { coord1: coordinates.torino, coord2: extraCoordinates.sestriere, type: 'ground' },
  { coord1: extraCoordinates.sestriere, coord2: coordinates.grenoble, type: 'ground' },
  { coord1: coordinates.grenoble, coord2: coordinates.albertville, type: 'ground' },
  { coord1: coordinates.albertville, coord2: extraCoordinates.annecy, type: 'ground' },
  { coord1: extraCoordinates.annecy, coord2: coordinates.chamonix, type: 'ground' },
  { coord1: coordinates.chamonix, coord2: extraCoordinates.geneva, type: 'ground' },
  { coord1: extraCoordinates.geneva, coord2: extraCoordinates.zurich, type: 'ground' },
  { coord1: extraCoordinates.zurich, coord2: extraCoordinates.chur, type: 'ground' },
  { coord1: extraCoordinates.chur, coord2: coordinates.stMoritz, type: 'ground' },
  { coord1: coordinates.stMoritz, coord2: extraCoordinates.chur, type: 'ground' },
  { coord1: extraCoordinates.chur, coord2: extraCoordinates.sargans, type: 'ground' },
  { coord1: extraCoordinates.sargans, coord2: extraCoordinates.vaduz, type: 'ground' },
  { coord1: extraCoordinates.vaduz, coord2: extraCoordinates.sargans, type: 'ground' },
  { coord1: extraCoordinates.sargans, coord2: extraCoordinates.zurich, type: 'ground' },
  { coord1: extraCoordinates.zurich, coord2: coordinates.sarajevo, type: 'flight' },
  // { coord1: extraCoordinates.zurich, coord2: extraCoordinates.vienna, type: 'ground'},
  // { coord1: extraCoordinates.vienna, coord2: coordinates.sarajevo, type: 'ground'},
  // { coord1: coordinates.sarajevo, coord2: extraCoordinates.vienna, type: 'ground'},
  { coord1: coordinates.sarajevo, coord2: coordinates.london, type: 'flight' }
  // { coord1: extraCoordinates.vienna, coord2: coordinates.london }
];
