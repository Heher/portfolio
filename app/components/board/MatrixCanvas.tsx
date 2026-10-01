import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import { BOARD_HEIGHT, BOARD_WIDTH, LED_BG, LED_GRID, PIXEL_SCALE } from './utils';

type MatrixCanvasProps = {
  // Called after the background is cleared and before the grid lines are drawn.
  draw: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void | Promise<void>;
  // Values that should trigger a redraw when they change.
  deps: unknown[];
  editable?: boolean;
  onPixelPaint?: (column: number, row: number) => void;
  className?: string;
};

export default function MatrixCanvas({ draw, deps, editable, onPixelPaint, className }: MatrixCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isPaintingRef = useRef(false);
  const lastCellRef = useRef<{ column: number; row: number } | null>(null);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) {
        return;
      }

      ctx.fillStyle = LED_BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await draw(ctx, canvas);

      if (cancelled) {
        return;
      }

      ctx.strokeStyle = LED_GRID;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let column = 0; column <= BOARD_WIDTH; column += 1) {
        const x = column * PIXEL_SCALE + 0.5;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let row = 0; row <= BOARD_HEIGHT; row += 1) {
        const y = row * PIXEL_SCALE + 0.5;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();
    };

    void render();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react/exhaustive-deps -- `deps` is the intentional, caller-provided dependency list
  }, deps);

  function getCellFromEvent(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
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

  // Bresenham's line algorithm so fast drags paint every cell in between, not just the endpoints.
  function paintLine(from: { column: number; row: number }, to: { column: number; row: number }) {
    if (!onPixelPaint) {
      return;
    }

    let { column, row } = from;
    const dx = Math.abs(to.column - column);
    const dy = -Math.abs(to.row - row);
    const stepX = column < to.column ? 1 : -1;
    const stepY = row < to.row ? 1 : -1;
    let error = dx + dy;

    for (;;) {
      onPixelPaint(column, row);
      if (column === to.column && row === to.row) {
        break;
      }
      const doubleError = 2 * error;
      if (doubleError >= dy) {
        error += dy;
        column += stepX;
      }
      if (doubleError <= dx) {
        error += dx;
        row += stepY;
      }
    }
  }

  function paintAt(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!editable || !onPixelPaint) {
      return;
    }

    const cell = getCellFromEvent(event);
    if (!cell) {
      return;
    }

    paintLine(lastCellRef.current ?? cell, cell);
    lastCellRef.current = cell;
  }

  return (
    <div className="rounded-lg border-12 border-better-black">
      <canvas
        ref={canvasRef}
        width={BOARD_WIDTH * PIXEL_SCALE}
        height={BOARD_HEIGHT * PIXEL_SCALE}
        className={cn('w-full bg-black', editable && 'cursor-crosshair touch-none', className)}
        style={{ aspectRatio: `${BOARD_WIDTH} / ${BOARD_HEIGHT}` }}
        onPointerDown={(event) => {
          if (!editable) {
            return;
          }
          isPaintingRef.current = true;
          lastCellRef.current = null;
          event.currentTarget.setPointerCapture(event.pointerId);
          paintAt(event);
        }}
        onPointerMove={(event) => {
          if (!isPaintingRef.current) {
            return;
          }
          paintAt(event);
        }}
        onPointerUp={() => {
          isPaintingRef.current = false;
          lastCellRef.current = null;
        }}
        onPointerLeave={() => {
          isPaintingRef.current = false;
          lastCellRef.current = null;
        }}
      />
    </div>
  );
}
