// import { useCallback, useMemo } from 'react';
// import { useFetcher } from 'react-router';

import { Button } from '@/components/ui/button';

// import MatrixCanvas from './MatrixCanvas';
// import { LED_ON } from './utils';

const SWATCHES = ['#ffb703', '#2bff6b', '#2bd4ff', '#c02bff', '#ffffff'];

type FreestylePanelProps = {
  color: string;
  setColor: (color: string) => void;
  clear: () => void;
};

export default function FreestylePanel({ color, setColor, clear }: FreestylePanelProps) {
  return (

    <div className="flex h-12 items-center gap-3">
      <div className="flex items-center gap-1">
        {SWATCHES.map((swatch) => {
          return (
            <button
              key={swatch}
              type="button"
              aria-label={`Use color ${swatch}`}
              onClick={() => setColor(swatch)}
              className={`
                size-7 rounded-full border-2
                ${
            color === swatch ? 'border-white' : 'border-transparent'
            }
              `}
              style={{ backgroundColor: swatch }}
            />
          );
        })}

        <input
          type="color"
          value={color}
          onChange={event => setColor(event.target.value)}
          aria-label="Pick a custom color"
          className="size-10 cursor-pointer rounded-full border-2 border-transparent bg-transparent p-0"
        />
      </div>

      <Button type="button" variant="outline" onClick={clear}>
        Clear
      </Button>

      {/* <fetcher.Form method="post">
          <input type="hidden" name="mode" value="freestyle" />
          <input type="hidden" name="pixels" value={JSON.stringify(paintedPixels)} />
          <Button type="submit" disabled={paintedPixels.length === 0 || fetcher.state !== 'idle'}>
            {fetcher.state === 'idle' ? 'Send to Board' : 'Sending…'}
          </Button>
        </fetcher.Form> */}
    </div>
  );
}
