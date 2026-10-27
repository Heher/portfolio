import { useCallback, useEffect, useState } from 'react';

import { FONT_9X15_DIGITS, FONT_9X15_HEIGHT, FONT_9X15_WIDTH } from '../font9x15';
import MatrixCanvas from '../MatrixCanvas';
import { BOARD_HEIGHT, BOARD_WIDTH, drawPixelPattern, LED_ON } from '../utils';

// Same positions as programs/clock.ts in the Pi's codebase: each two-digit group is centered
// on the board (rpi-led-matrix's LayoutUtils floors the offsets), then the hours/seconds groups
// are shifted 26 columns left/right.
const GROUP_WIDTH = FONT_9X15_WIDTH * 2;
const CENTER_COLUMN = Math.floor((BOARD_WIDTH - GROUP_WIDTH) / 2);
const TOP_ROW = Math.floor((BOARD_HEIGHT - FONT_9X15_HEIGHT) / 2);
const GROUP_OFFSET = 26;

// The colons are two static 2x2 squares drawn with drawLine, not a font glyph — it doesn't blink.
const COLON = ['##', '##', '..', '..', '##', '##'];
const COLON_ROW = 12;
const COLON_COLUMNS = [82, 108];

function pad(value: number) {
  return value.toString().padStart(2, '0');
}

function drawDigits(ctx: CanvasRenderingContext2D, digits: string, column: number) {
  [...digits].forEach((digit, index) => {
    drawPixelPattern(ctx, FONT_9X15_DIGITS[digit], column + index * FONT_9X15_WIDTH, TOP_ROW, { color: LED_ON });
  });
}

export default function ClockPreview({ className }: { className?: string }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    drawDigits(ctx, hours, CENTER_COLUMN - GROUP_OFFSET);
    drawDigits(ctx, minutes, CENTER_COLUMN);
    drawDigits(ctx, seconds, CENTER_COLUMN + GROUP_OFFSET);

    COLON_COLUMNS.forEach((column) => {
      drawPixelPattern(ctx, COLON, column, COLON_ROW, { color: LED_ON });
    });
  }, [hours, minutes, seconds]);

  return (
    <div className={className}>
      <MatrixCanvas draw={draw} deps={[hours, minutes, seconds]} />
    </div>
  );
}
