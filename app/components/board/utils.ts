export const BOARD_WIDTH = 192;
export const BOARD_HEIGHT = 32;
export const PIXEL_SCALE = 6;

// export const LED_ON = '#ff2b2b';
export const LED_ON = '#add8e6';
export const LED_BG = '#0a0303';
export const LED_GRID = '#555';

export const snapToPixelGrid = (value: number) => Math.round(value / PIXEL_SCALE) * PIXEL_SCALE;

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
