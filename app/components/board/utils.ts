import { FONT_HEIGHT, FONT_WIDTH, getGlyph } from './font5x7';

export const BOARD_WIDTH = 192;
export const BOARD_HEIGHT = 32;
export const PIXEL_SCALE = 6;

// export const LED_ON = '#ff2b2b';
export const LED_ON = '#add8e6';
export const LED_BG = '#0a0303';
export const LED_GRID = '#555';

export const snapToPixelGrid = (value: number) => Math.round(value / PIXEL_SCALE) * PIXEL_SCALE;

// Pulled directly from the Pi's own colors.ts so the previews use the exact colors the real
// programs draw with (LED_ON above is the same value as BOARD_COLORS.blue).
export const BOARD_COLORS = {
  blue: '#add8e6',
  dimBlue: '#7ba6b4',
  cyan: '#00ffff',
  darkCyan: '#005050',
  darkerCyan: '#001919',
  green: '#009600',
  red: '#ff0000',
  lightGrey: '#3c3c3c',
  darkGrey: '#1e1e1e',
  darkerGrey: '#0a0a0a',
  darkOrange: '#2c1800',
  darkBlue: '#000032',
} as const;

let scientificaLoad: Promise<void> | null = null;

// The board's text programs render with this font; load it once and reuse the promise.
export function loadScientificaFont(): Promise<void> {
  if (scientificaLoad) {
    return scientificaLoad;
  }

  scientificaLoad = (async () => {
    try {
      if (typeof document !== 'undefined' && 'fonts' in document) {
        const scientifica = new FontFace('Scientifica', 'url(/fonts/scientifica.ttf) format("truetype")');
        document.fonts.add(scientifica);
        await scientifica.load();
      }
    }
    catch {
    }
  })();

  return scientificaLoad;
}

// Glyph columns/rows are in LED-cell units; a column/row gap of 1 cell separates characters.
export function measureBitmapText(text: string, scale = 1) {
  if (text.length === 0) {
    return 0;
  }
  return text.length * (FONT_WIDTH + 1) * scale - scale;
}

export function drawBitmapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  column: number,
  row: number,
  { color, scale = 1 }: { color: string; scale?: number },
) {
  ctx.fillStyle = color;
  let cursor = column;

  for (const char of text) {
    const glyph = getGlyph(char);
    glyph.forEach((bits, col) => {
      for (let bitRow = 0; bitRow < FONT_HEIGHT; bitRow += 1) {
        if ((bits >> bitRow) & 1) {
          ctx.fillRect(
            (cursor + col * scale) * PIXEL_SCALE,
            (row + bitRow * scale) * PIXEL_SCALE,
            PIXEL_SCALE * scale,
            PIXEL_SCALE * scale,
          );
        }
      }
    });
    cursor += (FONT_WIDTH + 1) * scale;
  }
}

// Draws a small hand-authored icon from rows of '#' (filled) / '.' (empty) strings.
export function drawPixelPattern(
  ctx: CanvasRenderingContext2D,
  pattern: string[],
  column: number,
  row: number,
  { color, scale = 1 }: { color: string; scale?: number },
) {
  ctx.fillStyle = color;

  pattern.forEach((line, lineRow) => {
    for (let lineColumn = 0; lineColumn < line.length; lineColumn += 1) {
      if (line[lineColumn] !== '#') {
        continue;
      }
      ctx.fillRect(
        (column + lineColumn * scale) * PIXEL_SCALE,
        (row + lineRow * scale) * PIXEL_SCALE,
        PIXEL_SCALE * scale,
        PIXEL_SCALE * scale,
      );
    }
  });
}

// The helpers below mirror rpi-led-matrix's drawing calls so previews can copy the Pi's code
// coordinate-for-coordinate. All positions are in LED cells.

export function setCell(ctx: CanvasRenderingContext2D, column: number, row: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(column * PIXEL_SCALE, row * PIXEL_SCALE, PIXEL_SCALE, PIXEL_SCALE);
}

// matrix.fill(x0, y0, x1, y1) — both corners are inclusive.
export function fillCells(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  color: string,
) {
  const left = Math.min(x0, x1);
  const top = Math.min(y0, y1);
  ctx.fillStyle = color;
  ctx.fillRect(
    left * PIXEL_SCALE,
    top * PIXEL_SCALE,
    (Math.max(x0, x1) - left + 1) * PIXEL_SCALE,
    (Math.max(y0, y1) - top + 1) * PIXEL_SCALE,
  );
}

// matrix.drawLine — Bresenham, same as rpi-rgb-led-matrix's DrawLine.
export function drawCellLine(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  color: string,
) {
  let x = x0;
  let y = y0;
  const dx = Math.abs(x1 - x0);
  const dy = -Math.abs(y1 - y0);
  const stepX = x0 < x1 ? 1 : -1;
  const stepY = y0 < y1 ? 1 : -1;
  let error = dx + dy;

  for (;;) {
    setCell(ctx, x, y, color);
    if (x === x1 && y === y1) {
      break;
    }
    const doubleError = 2 * error;
    if (doubleError >= dy) {
      error += dy;
      x += stepX;
    }
    if (doubleError <= dx) {
      error += dx;
      y += stepY;
    }
  }
}

// matrix.drawCircle — the midpoint circle algorithm rpi-rgb-led-matrix uses.
export function drawCellCircle(ctx: CanvasRenderingContext2D, x0: number, y0: number, radius: number, color: string) {
  let x = radius;
  let y = 0;
  let radiusError = 1 - x;

  while (y <= x) {
    [[x, y], [y, x], [-x, y], [-y, x], [-x, -y], [-y, -x], [x, -y], [y, -x]].forEach(([dx, dy]) => {
      setCell(ctx, x0 + dx, y0 + dy, color);
    });
    y += 1;
    if (radiusError < 0) {
      radiusError += 2 * y + 1;
    }
    else {
      x -= 1;
      radiusError += 2 * (y - x + 1);
    }
  }
}

// Draws one of the 17x17 images from flightImages.ts (rows of RRGGBB hex) like the Pi's showImage.
export function drawCellImage(ctx: CanvasRenderingContext2D, rows: string[], column: number, row: number) {
  rows.forEach((line, y) => {
    for (let x = 0; x < line.length / 6; x += 1) {
      setCell(ctx, column + x, row + y, `#${line.slice(x * 6, x * 6 + 6)}`);
    }
  });
}

export type RgbColor = { r: number; g: number; b: number };

export function hexToRgb(hex: string): RgbColor | null {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!match) {
    return null;
  }

  return {
    r: Number.parseInt(match[1], 16),
    g: Number.parseInt(match[2], 16),
    b: Number.parseInt(match[3], 16),
  };
}

type GetCellFromEventParams = {
  canvas: HTMLCanvasElement | null;
  event: React.PointerEvent<HTMLCanvasElement>;
};

export function getCellFromEvent({ canvas, event }: GetCellFromEventParams) {
  if (!canvas) {
    return null;
  }

  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  const column = Math.floor(x / PIXEL_SCALE);
  const row = Math.floor(y / PIXEL_SCALE);

  // Clamp to the board so a fast drag past the edge still paints the edge cells.
  return {
    column: Math.min(Math.max(column, 0), BOARD_WIDTH - 1),
    row: Math.min(Math.max(row, 0), BOARD_HEIGHT - 1),
  };
}
