import { useCallback, useEffect, useState } from 'react';

import { drawBdfText, measureBdfText } from '../bdf';
import { FONT_4X6, SCIENTIFICA_11 } from '../bdfFonts';
import { AIRPLANE_ICON, PRIVATE_PLANE_ICON, SOUTHWEST_LOGO, UNITED_LOGO } from '../flightImages';
import MatrixCanvas from '../MatrixCanvas';
import {
  BOARD_COLORS,
  BOARD_HEIGHT,
  BOARD_WIDTH,
  drawCellCircle,
  drawCellImage,
  drawCellLine,
  drawPixelPattern,
  fillCells,
  setCell,
} from '../utils';

// Everything below mirrors programs/flights/* in the Pi's codebase coordinate-for-coordinate:
// a 100-wide map on the left, then each queued flight drawn in a 32-row panel that slides up
// when the next flight takes over. Road/river/airport shapes here are invented, not the real
// GPS-derived ones, since those encode the exact location of John's house.
const MAP_WIDTH = 100;
const LOGO_SIZE = 17;
const INFO_X = MAP_WIDTH + LOGO_SIZE;
const HOUSE = { x: Math.floor(MAP_WIDTH / 2), y: Math.floor(BOARD_HEIGHT / 2) };
const FLIGHTS_HEIGHT = SCIENTIFICA_11.height;
const ROUTE_HEIGHT = FONT_4X6.height;

const ROAD_PATHS = [
  [[4, 5], [10, 7], [16, 9], [22, 11], [28, 12], [34, 14], [40, 15], [46, 16]],
  [[50, 16], [56, 15], [62, 14], [68, 13], [74, 13], [80, 14], [86, 15], [94, 17]],
  [[48, 18], [46, 23], [44, 27], [42, 30]],
];

const RIVER_PATH = [[6, 20], [12, 22], [18, 23], [24, 22], [30, 20], [36, 19], [42, 20], [48, 21], [52, 22], [58, 21]];

const AIRPORT = [
  '...#####..',
  '.########.',
  '##########',
  '.########.',
  '...####...',
];
const AIRPORT_POSITION = { x: 72, y: 21 };

// Same mapping as the Pi's main.ts: airline logos by owner, then aircraft icons by ADS-B category.
const LOGOS: Record<string, string[]> = {
  'Southwest Airlines': SOUTHWEST_LOGO,
  'United Airlines': UNITED_LOGO,
};

const ICONS: Record<string, string[]> = {
  A1: PRIVATE_PLANE_ICON,
  A3: AIRPLANE_ICON,
};

type Location = { code: string; municipality: string };

type Flight = {
  callsign: string;
  owner?: string;
  category: string;
  altitude: string;
  // getBaroRate on the Pi: '1' climbing, '-1' descending, '0' level.
  rate: '1' | '-1' | '0';
  speed: string;
  origin?: Location;
  destination?: Location;
  manufacturer?: string;
  type?: string;
  orbit: { rx: number; ry: number; periodMs: number; phase: number; direction: 1 | -1 };
};

const FLIGHTS: Flight[] = [
  {
    callsign: 'SWA1734',
    owner: 'Southwest Airlines',
    category: 'A3',
    altitude: '4250',
    rate: '-1',
    speed: '212',
    origin: { code: 'DAL', municipality: 'Dallas' },
    destination: { code: 'AUS', municipality: 'Austin' },
    orbit: { rx: 36, ry: 12, periodMs: 40000, phase: 0, direction: 1 },
  },
  {
    callsign: 'UAL2281',
    owner: 'United Airlines',
    category: 'A3',
    altitude: '11800',
    rate: '1',
    speed: '318',
    origin: { code: 'IAH', municipality: 'Houston' },
    destination: { code: 'DEN', municipality: 'Denver' },
    orbit: { rx: 24, ry: 9, periodMs: 30000, phase: 2, direction: -1 },
  },
  {
    callsign: 'N738SP',
    category: 'A1',
    altitude: '2400',
    rate: '0',
    speed: '104',
    manufacturer: 'Cessna',
    type: '172S Skyhawk SP',
    orbit: { rx: 14, ry: 6, periodMs: 24000, phase: 4, direction: 1 },
  },
];

// The Pi's render loop waits 33ms per frame, shows a flight for 152 frames, then scrolls
// the panel up one row per frame until the next flight sits at the top.
const FRAME_MS = 33;
const SHOWN_FRAMES = 152;
const SCROLL_FRAMES = 33;
const CYCLE_FRAMES = SHOWN_FRAMES + SCROLL_FRAMES;
const TRAIL_STEP_MS = 1500;
const TRAIL_LENGTH = 6;

function aircraftPosition({ orbit }: Flight, elapsedMs: number) {
  const angle = orbit.phase + orbit.direction * (elapsedMs / orbit.periodMs) * Math.PI * 2;
  return {
    x: Math.round(HOUSE.x + Math.cos(angle) * orbit.rx),
    y: Math.round(HOUSE.y + Math.sin(angle) * orbit.ry),
  };
}

// Heading in screen space (0 = up, 90 = right), which is what the Pi's flipped track ends up as.
function aircraftTrack(flight: Flight, elapsedMs: number) {
  const { orbit } = flight;
  const angle = orbit.phase + orbit.direction * (elapsedMs / orbit.periodMs) * Math.PI * 2;
  const dx = -Math.sin(angle) * orbit.rx * orbit.direction;
  const dy = Math.cos(angle) * orbit.ry * orbit.direction;
  return ((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360;
}

const ANGLE_COORS: Record<number, number[][]> = {
  0: [[0, -2], [-1, -1], [1, -1]],
  30: [[1, -2], [0, -2], [1, -1]],
  60: [[2, -1], [1, -1], [2, 0]],
  90: [[2, 0], [1, -1], [1, 1]],
  120: [[2, 1], [2, 0], [1, 1]],
  150: [[1, 2], [1, 1], [0, 2]],
  180: [[0, 2], [1, 1], [-1, 1]],
  210: [[-1, 2], [0, 2], [-1, 1]],
  240: [[-2, 1], [-1, 1], [-2, 0]],
  270: [[-2, 0], [-1, -1], [-1, 1]],
  300: [[-2, -1], [-2, 0], [-1, -1]],
  330: [[-1, -2], [-1, -1], [0, -2]],
};

function drawPolyline(ctx: CanvasRenderingContext2D, points: number[][], color: string) {
  for (let i = 0; i < points.length - 1; i += 1) {
    drawCellLine(ctx, points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], color);
  }
}

function drawMap(ctx: CanvasRenderingContext2D, elapsedMs: number, shownIndex: number) {
  ROAD_PATHS.forEach(path => drawPolyline(ctx, path, BOARD_COLORS.darkOrange));
  drawPolyline(ctx, RIVER_PATH, BOARD_COLORS.darkBlue);
  drawPixelPattern(ctx, AIRPORT, AIRPORT_POSITION.x, AIRPORT_POSITION.y, { color: BOARD_COLORS.darkGrey });

  // drawTrails: lines between the shown aircraft's past positions, oldest first.
  const shown = FLIGHTS[shownIndex];
  const lastSample = Math.floor(elapsedMs / TRAIL_STEP_MS) * TRAIL_STEP_MS;
  const trail = Array.from({ length: TRAIL_LENGTH }, (_, i) => {
    const { x, y } = aircraftPosition(shown, Math.max(0, lastSample - (TRAIL_LENGTH - 1 - i) * TRAIL_STEP_MS));
    return [x, y];
  });
  drawPolyline(ctx, trail, BOARD_COLORS.darkCyan);

  // drawHome
  setCell(ctx, HOUSE.x, HOUSE.y, BOARD_COLORS.green);
  drawCellCircle(ctx, HOUSE.x, HOUSE.y, 1, BOARD_COLORS.green);

  // drawFlights
  FLIGHTS.forEach((flight, index) => {
    const { x, y } = aircraftPosition(flight, elapsedMs);
    setCell(ctx, x, y, index === shownIndex ? BOARD_COLORS.cyan : BOARD_COLORS.blue);
  });
}

function drawBackground(ctx: CanvasRenderingContext2D, pos: number) {
  const top = pos < 0 ? 0 : pos;
  const bottom = pos < -BOARD_HEIGHT ? 0 : pos + BOARD_HEIGHT;
  if (bottom === 0) {
    return;
  }

  fillCells(ctx, MAP_WIDTH, top, BOARD_WIDTH, bottom, BOARD_COLORS.darkGrey);
  if (pos === 0) {
    drawCellLine(ctx, MAP_WIDTH, top, BOARD_WIDTH, top, BOARD_COLORS.darkerGrey);
  }
  drawCellLine(ctx, MAP_WIDTH, bottom - 1, BOARD_WIDTH, bottom - 1, BOARD_COLORS.darkerGrey);
}

function drawLogo(ctx: CanvasRenderingContext2D, flight: Flight, pos: number) {
  const image = (flight.owner && LOGOS[flight.owner]) || ICONS[flight.category];
  if (image) {
    drawCellImage(ctx, image, MAP_WIDTH + 1, pos + 1);
    return;
  }

  const top = pos < 0 ? 1 : pos + 1;
  const bottom = pos < -LOGO_SIZE ? 0 : pos + LOGO_SIZE;
  if (bottom === 0) {
    return;
  }
  fillCells(ctx, MAP_WIDTH + 1, top, MAP_WIDTH + LOGO_SIZE + 1, bottom, BOARD_COLORS.lightGrey);
}

function drawInfoBackground(ctx: CanvasRenderingContext2D, pos: number) {
  const top = Math.max(0, pos + FLIGHTS_HEIGHT - 3);
  const bottom = pos + FLIGHTS_HEIGHT + 5;
  if (bottom <= 0) {
    return;
  }
  fillCells(ctx, INFO_X + 2, top, BOARD_WIDTH - 1, bottom, BOARD_COLORS.darkerCyan);
}

function writeRoute(ctx: CanvasRenderingContext2D, origin: Location, destination: Location, pos: number) {
  const codeX = BOARD_WIDTH - 19;
  const originY = BOARD_HEIGHT - ROUTE_HEIGHT * 2 - 1 + pos;
  const destinationY = BOARD_HEIGHT - ROUTE_HEIGHT + pos;

  fillCells(ctx, codeX, Math.max(0, originY - 1), BOARD_WIDTH, BOARD_HEIGHT + pos, BOARD_COLORS.darkBlue);

  [[origin, originY], [destination, destinationY]].forEach(([location, y]) => {
    const { code, municipality } = location as Location;
    const centered = Math.floor((20 - measureBdfText(FONT_4X6, code)) / 2);
    drawBdfText(ctx, FONT_4X6, code, codeX + centered, y as number, BOARD_COLORS.blue);
    drawBdfText(ctx, FONT_4X6, municipality, MAP_WIDTH + 1, y as number, BOARD_COLORS.blue);
  });
}

function writeManufacturer(ctx: CanvasRenderingContext2D, manufacturer: string, type: string | undefined, pos: number) {
  drawBdfText(ctx, FONT_4X6, manufacturer, MAP_WIDTH + 1, BOARD_HEIGHT - ROUTE_HEIGHT * 2 - 1 + pos, BOARD_COLORS.blue);
  if (type) {
    drawBdfText(ctx, FONT_4X6, type, MAP_WIDTH + 1, BOARD_HEIGHT - ROUTE_HEIGHT + pos, BOARD_COLORS.blue);
  }
}

function writeAltitude(ctx: CanvasRenderingContext2D, { altitude, rate }: Flight, pos: number) {
  const top = Math.max(0, pos + FLIGHTS_HEIGHT - 2);
  const bottom = pos + FLIGHTS_HEIGHT + 4;
  if (bottom <= 0) {
    return;
  }

  fillCells(ctx, INFO_X + 3, top, INFO_X + 9, bottom, BOARD_COLORS.darkCyan);

  // The climb/descent arrow: a 3-wide bar, plus a 1-pixel tip and 5-wide base when not level.
  const middle = pos + FLIGHTS_HEIGHT + 1;
  [5, 6, 7].forEach(dx => setCell(ctx, INFO_X + dx, middle, BOARD_COLORS.cyan));
  if (rate !== '0') {
    const tipRow = rate === '1' ? middle - 1 : middle + 1;
    const baseRow = rate === '1' ? middle + 1 : middle - 1;
    setCell(ctx, INFO_X + 6, tipRow, BOARD_COLORS.cyan);
    [4, 5, 6, 7, 8].forEach(dx => setCell(ctx, INFO_X + dx, baseRow, BOARD_COLORS.cyan));
  }

  drawBdfText(ctx, FONT_4X6, `${altitude}ft`, INFO_X + 11, pos + FLIGHTS_HEIGHT - 1, BOARD_COLORS.cyan);
}

function drawTrack(ctx: CanvasRenderingContext2D, track: number, pos: number) {
  const top = Math.max(0, pos + FLIGHTS_HEIGHT - 2);
  const bottom = pos + FLIGHTS_HEIGHT + 4;
  if (bottom <= 0) {
    return;
  }

  fillCells(ctx, INFO_X + 42, top, INFO_X + 48, bottom, BOARD_COLORS.darkCyan);

  const center = { x: INFO_X + 45, y: pos + FLIGHTS_HEIGHT + 1 };
  const nearest = ((Math.round(track / 30) * 30) % 360 + 360) % 360;
  ANGLE_COORS[nearest].forEach(([dx, dy]) => setCell(ctx, center.x + dx, center.y + dy, BOARD_COLORS.cyan));
}

function renderFlight(ctx: CanvasRenderingContext2D, flight: Flight, pos: number, track: number) {
  drawBackground(ctx, pos);
  drawLogo(ctx, flight, pos);
  drawBdfText(ctx, SCIENTIFICA_11, flight.callsign, INFO_X + 3, pos - 2, BOARD_COLORS.blue);
  drawInfoBackground(ctx, pos);

  if (flight.origin && flight.destination) {
    writeRoute(ctx, flight.origin, flight.destination, pos);
  }
  else if (flight.manufacturer) {
    writeManufacturer(ctx, flight.manufacturer, flight.type, pos);
  }

  drawBdfText(ctx, FONT_4X6, `${flight.speed}kts`, INFO_X + 50, pos + FLIGHTS_HEIGHT - 1, BOARD_COLORS.cyan);
  writeAltitude(ctx, flight, pos);
  if (track) {
    drawTrack(ctx, track, pos);
  }
}

export default function FlightsPreview({ className }: { className?: string }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame(current => current + 1), FRAME_MS);
    return () => clearInterval(interval);
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    const elapsedMs = frame * FRAME_MS;
    const shownIndex = Math.floor(frame / CYCLE_FRAMES) % FLIGHTS.length;
    const cycleFrame = frame % CYCLE_FRAMES;
    const bgPos = cycleFrame < SHOWN_FRAMES ? 0 : SHOWN_FRAMES - cycleFrame;

    drawMap(ctx, elapsedMs, shownIndex);

    // drawBlankBackground
    fillCells(ctx, MAP_WIDTH, 0, BOARD_WIDTH, BOARD_HEIGHT, BOARD_COLORS.darkerGrey);

    // The queue: the shown flight, with the next one parked directly below it for the slide-up.
    [0, 1].forEach((queueIndex) => {
      const flight = FLIGHTS[(shownIndex + queueIndex) % FLIGHTS.length];
      renderFlight(ctx, flight, bgPos + queueIndex * BOARD_HEIGHT, aircraftTrack(flight, elapsedMs));
    });
  }, [frame]);

  return (
    <div className={className}>
      <MatrixCanvas draw={draw} deps={[frame]} />
    </div>
  );
}
