import { useCallback, useEffect, useState } from 'react';

import type { Align } from '@/types/board';

import { drawBdfText, measureBdfText } from '../bdf';
import { SCIENTIFICA_11 } from '../bdfFonts';
import MatrixCanvas from '../MatrixCanvas';
import { BOARD_COLORS, BOARD_HEIGHT, BOARD_WIDTH, drawCellCircle, drawCellLine, drawPixelPattern, LED_ON } from '../utils';

// Mirrors programs/message/* in the Pi's codebase (minus the "incoming message" intro): each
// message fills a 32-row panel, holds for 152 frames, then the stack scrolls up one row per
// frame to the next. Text messages are scientifica-11, centered vertically; drawings are the
// raw pixels someone painted, offset by the panel position.
type SampleMessage
  = | { type: 'text'; text: string; align: Align; color: string }
    | { type: 'pixel'; draw: (ctx: CanvasRenderingContext2D, pos: number) => void };

const HEART = [
  '.##...##.',
  '####.####',
  '#########',
  '#########',
  '.#######.',
  '..#####..',
  '...###...',
  '....#....',
];

// A stand-in freestyle drawing: a smiley, a heart, and a wavy brush stroke, painted with the
// same Bresenham strokes the drawing editor uses.
function drawDoodle(ctx: CanvasRenderingContext2D, pos: number) {
  const yellow = '#ffb703';
  drawCellCircle(ctx, 40, 15 + pos, 12, yellow);
  drawCellLine(ctx, 35, 10 + pos, 35, 12 + pos, yellow);
  drawCellLine(ctx, 45, 10 + pos, 45, 12 + pos, yellow);
  drawCellLine(ctx, 32, 18 + pos, 34, 21 + pos, yellow);
  drawCellLine(ctx, 35, 22 + pos, 45, 22 + pos, yellow);
  drawCellLine(ctx, 46, 21 + pos, 48, 18 + pos, yellow);

  drawPixelPattern(ctx, HEART, 82, 11 + pos, { color: BOARD_COLORS.red });

  let previous: [number, number] | null = null;
  for (let x = 120; x <= 180; x += 3) {
    const point: [number, number] = [x, Math.round(15 + Math.sin((x - 120) / 7) * 7)];
    if (previous) {
      drawCellLine(ctx, previous[0], previous[1] + pos, point[0], point[1] + pos, '#2bff6b');
    }
    previous = point;
  }
}

const MESSAGES: SampleMessage[] = [
  { type: 'text', text: 'Hi from the internet!', align: 'center', color: LED_ON },
  { type: 'pixel', draw: drawDoodle },
  { type: 'text', text: 'nice board', align: 'left', color: '#2bff6b' },
  { type: 'text', text: ':)', align: 'right', color: '#ffb703' },
];

const FRAME_MS = 33;
const HOLD_FRAMES = 152;
const MESSAGE_FRAMES = HOLD_FRAMES + BOARD_HEIGHT - 1;
const CYCLE_FRAMES = MESSAGES.length * MESSAGE_FRAMES;
const TEXT_ROW = Math.floor((BOARD_HEIGHT - SCIENTIFICA_11.height) / 2);

function getBgPos(frame: number) {
  const cycleFrame = frame % CYCLE_FRAMES;
  const index = Math.floor(cycleFrame / MESSAGE_FRAMES);
  const messageFrame = cycleFrame % MESSAGE_FRAMES;
  const scrolled = messageFrame < HOLD_FRAMES ? 0 : messageFrame - HOLD_FRAMES + 1;
  return -BOARD_HEIGHT * index - scrolled;
}

// writeMessage: LayoutUtils aligns within the full board width and floors the centered offset.
function textColumn(text: string, align: Align) {
  const width = measureBdfText(SCIENTIFICA_11, text);
  if (align === 'left') {
    return 0;
  }
  if (align === 'right') {
    return BOARD_WIDTH - width;
  }
  return Math.floor((BOARD_WIDTH - width) / 2);
}

export default function MessagesPreview({ className }: { className?: string }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame(current => current + 1), FRAME_MS);
    return () => clearInterval(interval);
  }, []);

  const bgPos = getBgPos(frame);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    MESSAGES.forEach((message, index) => {
      const pos = bgPos + index * BOARD_HEIGHT;
      if (pos <= -BOARD_HEIGHT || pos >= BOARD_HEIGHT) {
        return;
      }

      if (message.type === 'text') {
        drawBdfText(ctx, SCIENTIFICA_11, message.text, textColumn(message.text, message.align), TEXT_ROW + pos, message.color);
      }
      else {
        message.draw(ctx, pos);
      }
    });
  }, [bgPos]);

  return (
    <div className={className}>
      <MatrixCanvas draw={draw} deps={[bgPos]} />
    </div>
  );
}
