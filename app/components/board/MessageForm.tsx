import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import { FONT_HEIGHT, getGlyph } from './font5x7';

const BOARD_WIDTH = 192;
const BOARD_HEIGHT = 32;
const CHAR_WIDTH = 5;
const CHAR_HEIGHT = 11;
const CHAR_SPACING = 1;
const CHAR_ADVANCE = CHAR_WIDTH + CHAR_SPACING;
const GLYPH_TOP_PAD = Math.floor((CHAR_HEIGHT - FONT_HEIGHT) / 2);
const PIXEL_SCALE = 6;

const LED_ON = '#ff2b2b';
const LED_OFF = '#2a0d0d';
const LED_BG = '#0a0303';

type Align = 'left' | 'center' | 'right';

function buildBoardMatrix(text: string, align: Align): boolean[][] {
  const matrix = Array.from({ length: BOARD_HEIGHT }).map(() =>
    Array.from({ length: BOARD_WIDTH }).fill(false) as boolean[],
  );

  const textWidth = text.length > 0 ? text.length * CHAR_ADVANCE - CHAR_SPACING : 0;
  const startX
    = align === 'left'
      ? 0
      : align === 'right'
        ? BOARD_WIDTH - textWidth
        : Math.floor((BOARD_WIDTH - textWidth) / 2);
  const startY = Math.floor((BOARD_HEIGHT - CHAR_HEIGHT) / 2);

  for (let i = 0; i < text.length; i++) {
    const glyph = getGlyph(text[i]);
    const charX = startX + i * CHAR_ADVANCE;

    for (let col = 0; col < CHAR_WIDTH; col++) {
      const columnBits = glyph[col];
      for (let row = 0; row < FONT_HEIGHT; row++) {
        if (!((columnBits >> row) & 1)) {
          continue;
        }

        const x = charX + col;
        const y = startY + GLYPH_TOP_PAD + row;
        if (x < 0 || x >= BOARD_WIDTH || y < 0 || y >= BOARD_HEIGHT) {
          continue;
        }
        matrix[y][x] = true;
      }
    }
  }

  return matrix;
}

export default function MessageForm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState('OLYMPICS');
  const [align, setAlign] = useState<Align>('center');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      return;
    }

    const matrix = buildBoardMatrix(text, align);

    ctx.fillStyle = LED_BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const dotRadius = PIXEL_SCALE * 0.4;
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        const cx = x * PIXEL_SCALE + PIXEL_SCALE / 2;
        const cy = y * PIXEL_SCALE + PIXEL_SCALE / 2;
        ctx.beginPath();
        ctx.arc(cx, cy, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = matrix[y][x] ? LED_ON : LED_OFF;
        ctx.fill();
      }
    }
  }, [text, align]);

  return (
    <div className="flex flex-col gap-4">
      <canvas
        ref={canvasRef}
        width={BOARD_WIDTH * PIXEL_SCALE}
        height={BOARD_HEIGHT * PIXEL_SCALE}
        className="w-full max-w-3xl rounded-md bg-black"
        style={{ aspectRatio: `${BOARD_WIDTH} / ${BOARD_HEIGHT}` }}
      />

      <div className="flex items-center gap-2">
        <Input
          value={text}
          onChange={(event) => {
            setText(event.target.value.toUpperCase());
          }}
          placeholder="Type a message"
          className="max-w-xs"
        />

        <div className="flex gap-1">
          {(['left', 'center', 'right'] as const).map((option) => {
            return (
              <Button
                key={option}
                type="button"
                variant={align === option ? 'default' : 'outline'}
                onClick={() => setAlign(option)}
                className={cn('capitalize')}
              >
                {option}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
