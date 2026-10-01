import { useCallback, useState } from 'react';

import type { Align, MessageMode } from '@/types/board';

import FreestylePanel from './FreestylePanel';
import MatrixCanvas from './MatrixCanvas';
import TextMessagePanel from './TextMessagePanel';
import { BOARD_HEIGHT, BOARD_WIDTH, LED_ON, PIXEL_SCALE, snapToPixelGrid } from './utils';

type MessageFormProps = {
  mode: MessageMode;
  close: () => void;
  pixels: (string | null)[];
  setPixels: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  clear: () => void;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  align: Align;
  setAlign: React.Dispatch<React.SetStateAction<Align>>;
};

export default function MessageForm({ mode, close, pixels, setPixels, clear, text, setText, align, setAlign }: MessageFormProps) {
  const [color, setColor] = useState(LED_ON);

  const drawText = useCallback(async (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    try {
      if (typeof document !== 'undefined' && 'fonts' in document) {
        const scientifica = new FontFace('Scientifica', 'url(/fonts/scientifica.ttf) format("truetype")');
        document.fonts.add(scientifica);
        await scientifica.load();
      }
    }
    catch {
    }

    ctx.textAlign = align === 'left' ? 'left' : align === 'right' ? 'right' : 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${snapToPixelGrid(BOARD_HEIGHT * 1.2)}px "Scientifica", monospace`;
    // ctx.fillStyle = LED_ON;
    ctx.fillStyle = color;

    const padding = snapToPixelGrid(BOARD_WIDTH * 0.08);
    const x = align === 'left'
      ? padding
      : align === 'right'
        ? canvas.width - padding
        : snapToPixelGrid(canvas.width / 2);

    ctx.fillText(text || ' ', x, snapToPixelGrid(canvas.height / 2));
  }, [text, align, color]);

  const drawPixels = useCallback((ctx: CanvasRenderingContext2D) => {
    for (let row = 0; row < BOARD_HEIGHT; row += 1) {
      for (let column = 0; column < BOARD_WIDTH; column += 1) {
        const pixelColor = pixels[row * BOARD_WIDTH + column];
        if (!pixelColor) {
          continue;
        }
        ctx.fillStyle = pixelColor;
        ctx.fillRect(column * PIXEL_SCALE, row * PIXEL_SCALE, PIXEL_SCALE, PIXEL_SCALE);
      }
    }
  }, [pixels]);

  const paintPixel = useCallback((column: number, row: number) => {
    setPixels((prev) => {
      const index = row * BOARD_WIDTH + column;
      if (prev[index] === color) {
        return prev;
      }
      const next = prev.slice();
      next[index] = color;
      return next;
    });
  }, [color, setPixels]);

  // x = 0 at the left edge, y = 0 at the top edge, matching the board's physical layout.
  // const paintedPixels = useMemo(() => {
  //   return pixels.flatMap((pixelColor, index) => {
  //     const rgb = pixelColor && hexToRgb(pixelColor);
  //     if (!rgb) {
  //       return [];
  //     }
  //     return [{ x: index % BOARD_WIDTH, y: Math.floor(index / BOARD_WIDTH), ...rgb }];
  //   });
  // }, [pixels]);

  return (
    <div className="">
      <div className="
        mb-3
        sm:pointer-fine:mb-5
      "
      >
        {mode === 'text' ? <TextMessagePanel text={text} setText={setText} align={align} setAlign={setAlign} color={color} setColor={setColor} /> : <FreestylePanel color={color} setColor={setColor} clear={clear} />}
      </div>
      <MatrixCanvas draw={mode === 'text' ? drawText : drawPixels} deps={[text, align, color, pixels]} editable={mode !== 'text'} onPixelPaint={paintPixel} />
      <div className="
        mt-3 flex items-center justify-end gap-3
        sm:pointer-fine:mt-10
      "
      >
        <button
          type="submit"
          className="
            w-[70px] cursor-pointer rounded-sm bg-better-white py-2 font-semibold text-better-black
            hover:bg-better-white/80
            sm:pointer-fine:w-[100px] sm:pointer-fine:py-4
          "
          onClick={() => close()}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="
            w-[70px] cursor-pointer rounded-sm bg-better-black py-2 font-semibold text-better-white
            hover:bg-better-black/80
            sm:pointer-fine:w-[100px] sm:pointer-fine:py-4
          "

        >
          Send
        </button>
      </div>
    </div>
  );
}
