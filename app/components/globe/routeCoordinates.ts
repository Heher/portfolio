import type { Coordinate, RouteInfo } from 'types/globe';
import { coordinates } from './coordinates';

const extraCoordinates: { [key: string]: Coordinate } = {
  austin: [30.2672, 97.7431],
  atlanta: [33.7488, 84.3877],
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
  vienna: [48.2082, -16.3738],
  dallas: [32.7767, 96.797],
  auckland: [-36.8485, -174.7633],
  coromandel: [-36.7615, -175.4968],
  rotorua: [-38.1368, -176.2497],
  taupo: [-38.6857, -176.0702],
  tauranga: [-37.6878, -176.1651],
  napier: [-39.4928, -176.912],
  wellington: [-41.2865, -174.7762],
  bali: [-8.3405, -115.092],
  singapore: [1.3521, -103.8198],
  toulouse: [43.6047, -1.4442],
  andorra: [42.5063, -1.5218],
  marseille: [43.2965, -5.3698],
  pisa: [43.7228, -10.3966],
  sanMarino: [43.9424, -12.4578],
  florence: [43.7696, -11.2558],
  chiusi: [43.0025, -11.9576],
  castiglione: [43.0058, -11.6161],
  naples: [40.8518, -14.2681],
  bari: [41.1171, -16.8719],
  patras: [38.2466, -21.7346],
  olympia: [37.6384, -21.6297],
  copenhagen: [55.6761, -12.5683],
  tòrshavn: [62.0107, 6.7741],
  reykjavik: [64.147, 21.9408]
};

export const myRoute: RouteInfo[] = [
  {
    coords: [extraCoordinates.austin, extraCoordinates.atlanta, coordinates.amsterdam],
    type: 'flight',
    description: 'Flight to Amsterdam',
    cities: [{ name: 'amsterdam', new: true }],
    zoom: 7,
    // midpoint: [51.431, 47.3434]
    midpoint: [32.942, 54.226]
    // midpoint: coordinates.amsterdam
  },
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
    type: 'ground',
    description: 'Amsterdam to Paris by train',
    zoom: 16,
    // midpoint: [50.1893, -4.4971],
    midpoint: [49.155, -9.4583],
    cities: [
      { name: 'amsterdam', new: false },
      { name: 'antwerp', new: true }
    ]
  },
  {
    coords: [coordinates.paris, coordinates.london, extraCoordinates.austin],
    type: 'flight',
    description: 'Thanksgiving',
    zoom: 7,
    cities: [
      { name: 'amsterdam', new: false },
      { name: 'antwerp', new: false }
    ]
  },
  {
    coords: [extraCoordinates.austin, coordinates.london, coordinates.paris],
    type: 'flight',
    description: 'Flight back to Paris',
    zoom: 7,
    cities: [
      { name: 'amsterdam', new: false },
      { name: 'antwerp', new: false },
      { name: 'paris', new: true }
    ]
  },
  {
    coords: [coordinates.paris, coordinates.oslo],
    type: 'flight',
    description: 'Flight to Oslo',
    zoom: 10,
    cities: [
      { name: 'amsterdam', new: false },
      { name: 'antwerp', new: false },
      { name: 'paris', new: false },
      { name: 'oslo', new: true }
    ]
  },
  {
    coords: [coordinates.oslo, coordinates.lillehammer, coordinates.oslo],
    type: 'ground',
    description: 'Oslo to Lillehammer by train and back',
    zoom: 16,
    cities: ['amsterdam', 'antwerp', 'paris', 'oslo', 'lillehammer']
  },
  {
    coords: [coordinates.oslo, extraCoordinates.gothenburg, coordinates.stockholm],
    type: 'ground',
    description: 'Oslo to Stockholm by train',
    zoom: 16,
    cities: ['amsterdam', 'antwerp', 'paris', 'oslo', 'lillehammer', 'stockholm']
  },
  {
    coords: [coordinates.stockholm, extraCoordinates.tallin],
    type: 'ferry',
    description: 'Ferry to Tallin',
    zoom: 16,
    cities: ['amsterdam', 'antwerp', 'paris', 'oslo', 'lillehammer', 'stockholm']
  },
  {
    coords: [extraCoordinates.tallin, extraCoordinates.riga, extraCoordinates.tallin],
    type: 'ground',
    description: 'Tallin to Riga, back to Tallin',
    zoom: 16,
    cities: ['amsterdam', 'antwerp', 'paris', 'oslo', 'lillehammer', 'stockholm']
  },
  {
    coords: [extraCoordinates.tallin, coordinates.helsinki],
    type: 'ferry',
    description: 'Ferry to Helsinki',
    zoom: 16,
    cities: ['amsterdam', 'antwerp', 'paris', 'oslo', 'lillehammer', 'stockholm', 'helsinki']
  },
  {
    coords: [coordinates.helsinki, coordinates.losAngeles],
    type: 'flight',
    description: 'Christmas',
    zoom: 7,
    cities: ['amsterdam', 'antwerp', 'paris', 'oslo', 'lillehammer', 'stockholm', 'helsinki', 'los-angeles']
  },
  {
    coords: [coordinates.losAngeles, coordinates.london, coordinates.berlin],
    type: 'flight',
    description: 'Flight to Berlin',
    zoom: 7,
    cities: ['amsterdam', 'antwerp', 'paris', 'oslo', 'lillehammer', 'stockholm', 'helsinki', 'los-angeles', 'berlin']
  },
  {
    coords: [
      coordinates.berlin,
      extraCoordinates.liepzig,
      extraCoordinates.dresden,
      extraCoordinates.nuremberg,
      coordinates.munich
    ],
    type: 'ground',
    description: 'Berlin to Munich',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich'
    ]
  },
  {
    coords: [coordinates.munich, coordinates.garmisch, coordinates.innsbruck],
    type: 'ground',
    description: 'Train to Innsbruck through Garmisch-Partenkirchen',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck'
    ]
  },
  {
    coords: [coordinates.innsbruck, coordinates.cortina],
    type: 'ground',
    description: "Train and bus to Cortina d'Ampezzo",
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo'
    ]
  },
  {
    coords: [coordinates.cortina, extraCoordinates.venice, extraCoordinates.bologna, coordinates.torino],
    type: 'ground',
    description: 'Bus and trains to Torino',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino'
    ]
  },
  {
    coords: [coordinates.torino, extraCoordinates.sestriere],
    type: 'ground',
    description: 'Train and bus to Sestriere',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino'
    ]
  },
  {
    coords: [extraCoordinates.sestriere, coordinates.grenoble],
    type: 'ground',
    description: 'Bus and trains to Grenoble',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble'
    ]
  },
  {
    coords: [coordinates.grenoble, coordinates.albertville],
    type: 'ground',
    description: 'Trains to Albertville',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville'
    ]
  },
  {
    coords: [coordinates.albertville, extraCoordinates.annecy, coordinates.chamonix],
    type: 'ground',
    description: 'Busses to Chamonix',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix'
    ]
  },
  {
    coords: [
      coordinates.chamonix,
      extraCoordinates.geneva,
      extraCoordinates.zurich,
      extraCoordinates.chur,
      coordinates.stMoritz
    ],
    type: 'ground',
    description: 'Busses and trains to St. Moritz',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz'
    ]
  },
  {
    coords: [
      coordinates.stMoritz,
      extraCoordinates.chur,
      extraCoordinates.sargans,
      extraCoordinates.vaduz,
      extraCoordinates.sargans,
      extraCoordinates.zurich
    ],
    type: 'ground',
    description: 'St. Moritz to Zurich by way of Liechtenstein',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz'
    ]
  },
  {
    coords: [extraCoordinates.zurich, extraCoordinates.vienna, coordinates.sarajevo],
    type: 'flight',
    description: 'Flight to Sarajevo',
    zoom: 14,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo'
    ]
  },
  {
    coords: [coordinates.sarajevo, extraCoordinates.vienna, coordinates.london],
    type: 'flight',
    description: 'Flight to London',
    zoom: 14,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [coordinates.london, extraCoordinates.austin],
    type: 'flight',
    description: 'Flight to Austin to resupply',
    zoom: 7,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [extraCoordinates.austin, extraCoordinates.dallas, extraCoordinates.auckland],
    type: 'flight',
    description: 'Flight to Auckland',
    zoom: 7,
    midpoint: [-8.554007668365598, 150.7136274555137],
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [extraCoordinates.auckland, extraCoordinates.coromandel],
    type: 'ground',
    description: 'Driving to Coromandel Peninsula',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [extraCoordinates.coromandel, extraCoordinates.rotorua],
    type: 'ground',
    description: 'Driving to Rotorua',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [extraCoordinates.rotorua, extraCoordinates.taupo],
    type: 'ground',
    description: 'Driving to Taupo',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [extraCoordinates.taupo, extraCoordinates.tauranga],
    type: 'ground',
    description: 'Driving to Tauranga',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [extraCoordinates.tauranga, extraCoordinates.napier],
    type: 'ground',
    description: 'Driving to Napier',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [extraCoordinates.napier, extraCoordinates.wellington],
    type: 'ground',
    description: 'Driving to Wellington',
    zoom: 16,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london'
    ]
  },
  {
    coords: [extraCoordinates.wellington, coordinates.melbourne],
    type: 'flight',
    description: 'Flight to Melbourne',
    zoom: 10,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london',
      'melbourne'
    ]
  },
  {
    coords: [coordinates.melbourne, coordinates.sydney],
    type: 'flight',
    description: 'Flight to Sydney',
    zoom: 10,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london',
      'melbourne',
      'sydney'
    ]
  },
  {
    coords: [coordinates.sydney, extraCoordinates.bali],
    type: 'flight',
    description: 'Flight to Bali',
    zoom: 10,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london',
      'melbourne',
      'sydney'
    ]
  },
  {
    coords: [extraCoordinates.bali, extraCoordinates.singapore],
    type: 'flight',
    description: 'Flight to Singapore',
    zoom: 10,
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london',
      'melbourne',
      'sydney'
    ]
  },
  {
    coords: [extraCoordinates.singapore, coordinates.paris, coordinates.london],
    type: 'flight',
    description: 'Flight to London',
    cities: [
      'amsterdam',
      'antwerp',
      'paris',
      'oslo',
      'lillehammer',
      'stockholm',
      'helsinki',
      'los-angeles',
      'berlin',
      'munich',
      'garmisch-partenkirchen',
      'innsbruck',
      'cortina-dampezzo',
      'torino',
      'grenoble',
      'albertville',
      'chamonix',
      'st-moritz',
      'sarajevo',
      'london',
      'melbourne',
      'sydney'
    ]
  },
  {
    coords: [coordinates.london, coordinates.paris],
    type: 'ground',
    description: 'London to Paris by train'
  },
  {
    coords: [coordinates.paris, extraCoordinates.toulouse],
    type: 'ground',
    description: 'Paris to Toulouse by train'
  },
  {
    coords: [extraCoordinates.toulouse, extraCoordinates.andorra],
    type: 'ground',
    description: 'Toulouse to Andorra by bus'
  },
  {
    coords: [extraCoordinates.andorra, coordinates.barcelona],
    type: 'ground',
    description: 'Andorra to Barcelona by bus'
  },
  {
    coords: [coordinates.barcelona, extraCoordinates.marseille],
    type: 'ground',
    description: 'Barcelona to Marseille by train'
  },
  {
    coords: [extraCoordinates.marseille, extraCoordinates.pisa],
    type: 'ground',
    description: 'Marseille to Pisa by train'
  },
  {
    coords: [extraCoordinates.pisa, extraCoordinates.florence, extraCoordinates.bologna, extraCoordinates.sanMarino],
    type: 'ground',
    description: 'Pisa to San Marino by train and bus'
  },
  {
    coords: [extraCoordinates.sanMarino, extraCoordinates.bologna, extraCoordinates.florence],
    type: 'ground',
    description: 'San Marino to Florence by bus and train'
  },
  {
    coords: [extraCoordinates.florence, extraCoordinates.chiusi, extraCoordinates.castiglione],
    type: 'ground',
    description: 'Florence to Castiglione by train'
  },
  {
    coords: [extraCoordinates.castiglione, extraCoordinates.chiusi, coordinates.rome],
    type: 'ground',
    description: 'Castiglione to Rome by train'
  },
  {
    coords: [coordinates.rome, extraCoordinates.naples],
    type: 'ground',
    description: 'Rome to Naples by train'
  },
  {
    coords: [extraCoordinates.naples, extraCoordinates.bari],
    type: 'ground',
    description: 'Naples to Bari by train'
  },
  {
    coords: [extraCoordinates.bari, extraCoordinates.patras],
    type: 'ferry',
    description: 'Ferry to Patras'
  },
  {
    coords: [extraCoordinates.patras, coordinates.athens],
    type: 'ground',
    description: 'Patras to Athens by bus'
  },
  {
    coords: [coordinates.athens, extraCoordinates.olympia],
    type: 'ground',
    description: 'Driving to Olympia'
  },
  {
    coords: [extraCoordinates.olympia, coordinates.athens],
    type: 'ground',
    description: 'Driving back to Athens'
  },
  {
    coords: [coordinates.athens, coordinates.london],
    type: 'flight',
    description: 'Flight to London'
  },
  {
    coords: [coordinates.london, extraCoordinates.copenhagen],
    type: 'flight',
    description: 'Flight to Copenhagen'
  },
  {
    coords: [extraCoordinates.copenhagen, extraCoordinates.tòrshavn],
    type: 'flight',
    description: 'Flight to the Faroe Islands'
  },
  {
    coords: [extraCoordinates.tòrshavn, extraCoordinates.reykjavik],
    type: 'flight',
    description: 'Flight to Reykjavik'
  },
  {
    coords: [extraCoordinates.reykjavik, coordinates.montreal],
    type: 'flight',
    description: 'Flight to Montreal'
  },
  {
    coords: [coordinates.montreal, extraCoordinates.austin],
    type: 'flight',
    description: 'Flight to Austin'
  }
];
