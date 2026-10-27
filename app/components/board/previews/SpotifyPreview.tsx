import { useCallback, useEffect, useState } from 'react';

import type { BdfFont } from '../bdf';

import { drawBdfText, measureBdfText } from '../bdf';
import { FONT_5X8, SCIENTIFICA_11 } from '../bdfFonts';
import MatrixCanvas from '../MatrixCanvas';
import { BOARD_COLORS, BOARD_HEIGHT, BOARD_WIDTH, drawCellImage, fillCells } from '../utils';

// Mirrors programs/spotify/* in the Pi's codebase: 28x28 album art at (2, 2), the title in
// scientifica-11 and the artist/album in 5x8, all starting at column 35. Titles and albums too
// long for the 35-96 window scroll one LED per frame, hiding whole glyphs outside the window,
// and pause at each end. The artist line just runs off the right edge.
const TRACK = {
  title: 'Nightdrive (Reprise)',
  artist: 'Vector Sunset',
  album: 'Afterglow EP',
};

const TEXT_X = 35;
const WINDOW_END = 96;
const WINDOW_WIDTH = 61;
const ART_SIZE = 28;
const FRAME_MS = 33;
const SONG_DURATION_MS = 30000;
// The Pi polls Spotify once a second and keeps progress to two decimals.
const POLL_MS = 1000;

type Scroll = { amount: number; change: number; wait: number; loaded: boolean };

const INITIAL_SCROLL: Scroll = { amount: 0, change: -1, wait: 0, loaded: true };

function glyphPositions(font: BdfFont, text: string) {
  let x = 0;
  return [...text].map((char) => {
    const position = { char, x };
    x += font.glyphs[char]?.[0] ?? 0;
    return position;
  });
}

function visibleGlyphs(font: BdfFont, text: string, amount: number) {
  return glyphPositions(font, text)
    .map(({ char, x }) => ({ char, x: x + TEXT_X + amount }))
    .filter(({ x }) => x >= TEXT_X && x <= WINDOW_END);
}

// One frame of writeTitle/writeAlbum + adjustScroll. Like the Pi, `wait` ticks up twice per
// frame while paused, so each end holds for ~76 frames.
function nextScroll(scroll: Scroll, font: BdfFont, text: string): Scroll {
  const width = measureBdfText(font, text);
  let { amount, change, wait, loaded } = scroll;

  if (loaded || (amount <= -(width - WINDOW_WIDTH) && change === -1) || (amount === 0 && change === 1)) {
    wait += 1;
  }

  const clipped = visibleGlyphs(font, text, amount).length < text.length;
  if (!clipped) {
    return { amount, change, wait, loaded };
  }

  if (wait === 0) {
    amount += change;
  }
  else if (wait > 151) {
    if (loaded) {
      loaded = false;
    }
    else {
      change = change === 1 ? -1 : 1;
    }
    wait = 0;
  }
  else {
    wait += 1;
  }

  return { amount, change, wait, loaded };
}

// Stand-in album cover, generated per LED like the Pi's 28x28 downscaled Spotify image.
const ALBUM_ART = Array.from({ length: ART_SIZE }, (_, y) => {
  let row = '';
  for (let x = 0; x < ART_SIZE; x += 1) {
    const t = y / (ART_SIZE - 1);
    let r = 255 + (63 - 255) * t;
    let g = 111;
    let b = 174 + (255 - 174) * t;

    if (Math.hypot(x - 9, y - 10) < 6.5) {
      [r, g, b] = [r + (255 - r) * 0.18, g + (255 - g) * 0.18, b + (255 - b) * 0.18];
    }
    if (Math.hypot(x - 20, y - 19) < 7.5) {
      [r, g, b] = [r * 0.78, g * 0.78, b * 0.78];
    }

    row += [r, g, b].map(value => Math.round(value).toString(16).padStart(2, '0')).join('');
  }
  return row;
});

type PreviewState = { frame: number; title: Scroll; album: Scroll };

export default function SpotifyPreview({ className }: { className?: string }) {
  const [state, setState] = useState<PreviewState>({ frame: 0, title: INITIAL_SCROLL, album: INITIAL_SCROLL });

  useEffect(() => {
    const interval = setInterval(() => {
      setState(current => ({
        frame: current.frame + 1,
        title: nextScroll(current.title, SCIENTIFICA_11, TRACK.title),
        album: nextScroll(current.album, FONT_5X8, TRACK.album),
      }));
    }, FRAME_MS);
    return () => clearInterval(interval);
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    visibleGlyphs(SCIENTIFICA_11, TRACK.title, state.title.amount).forEach(({ char, x }) => {
      drawBdfText(ctx, SCIENTIFICA_11, char, x, 0, BOARD_COLORS.blue);
    });

    drawBdfText(ctx, FONT_5X8, TRACK.artist, TEXT_X, 11, BOARD_COLORS.dimBlue);

    visibleGlyphs(FONT_5X8, TRACK.album, state.album.amount).forEach(({ char, x }) => {
      drawBdfText(ctx, FONT_5X8, char, x, FONT_5X8.height + 11, BOARD_COLORS.dimBlue);
    });

    drawCellImage(ctx, ALBUM_ART, 2, 2);

    // drawProgress: matrix.fill(35, height - 2, (width - 35) * progress + 35, height)
    const polledMs = Math.floor((state.frame * FRAME_MS) / POLL_MS) * POLL_MS;
    const progress = Number.parseFloat(((polledMs % SONG_DURATION_MS) / SONG_DURATION_MS).toFixed(2));
    const progressEnd = Math.trunc((BOARD_WIDTH - TEXT_X) * progress + TEXT_X);
    fillCells(ctx, TEXT_X, BOARD_HEIGHT - 2, progressEnd, BOARD_HEIGHT, BOARD_COLORS.green);
  }, [state]);

  return (
    <div className={className}>
      <MatrixCanvas draw={draw} deps={[state]} />
    </div>
  );
}
