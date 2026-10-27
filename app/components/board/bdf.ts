import { PIXEL_SCALE } from './utils';

// [advance width, first row from the top of the cell, ...rows (leftmost pixel = bit 15)]
export type BdfGlyph = number[];

export type BdfFont = {
  // Same as rpi-led-matrix's font.height(): the BDF's FONTBOUNDINGBOX height.
  height: number;
  glyphs: Record<string, BdfGlyph>;
};

function getGlyph(font: BdfFont, char: string) {
  return font.glyphs[char] ?? font.glyphs['?'];
}

export function measureBdfText(font: BdfFont, text: string) {
  return [...text].reduce((width, char) => width + (getGlyph(font, char)?.[0] ?? 0), 0);
}

// Mirrors matrix.drawText(text, x, y) on the Pi: `row` is the top of the font's cell, not the baseline.
export function drawBdfText(
  ctx: CanvasRenderingContext2D,
  font: BdfFont,
  text: string,
  column: number,
  row: number,
  color: string,
) {
  ctx.fillStyle = color;
  let cursor = column;

  for (const char of text) {
    const glyph = getGlyph(font, char);
    if (!glyph) {
      continue;
    }

    const [width, top, ...bitmap] = glyph;
    bitmap.forEach((bits, bitmapRow) => {
      for (let x = 0; x < width; x += 1) {
        if (bits & (0x8000 >> x)) {
          ctx.fillRect((cursor + x) * PIXEL_SCALE, (row + top + bitmapRow) * PIXEL_SCALE, PIXEL_SCALE, PIXEL_SCALE);
        }
      }
    });
    cursor += width;
  }
}
