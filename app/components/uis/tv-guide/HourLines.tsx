import { useMemo } from 'react';

import { hourWidth } from './utils';

function createLines() {
  const lines = [];

  for (let i = 0; i < 48; i++) {
    lines.push(
      <div
        key={i}
        className="absolute top-0 h-full w-px bg-gray-300/40"
        style={{ left: `${((hourWidth / 2) * i) + 150}px` }}
      >
      </div>,
    );
  }

  return lines;
}

export default function HourLines() {
  const lines = useMemo(() => {
    return createLines();
  }, []);

  return (
    <div className="size-full bg-red-200">
      {lines}
    </div>
  );
}
