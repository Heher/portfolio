import { useMemo } from 'react';
import { useOutletContext } from 'react-router';

import type { UIContext } from '@/app/routes/ui/layout';

import { hourWidth } from './utils';

function createLines(width?: number) {
  const lines = [];

  for (let i = 0; i < 48; i++) {
    lines.push(
      <div
        key={i}
        className="absolute top-0 h-full w-px bg-gray-300/40"
        style={{ left: `${((hourWidth / 2) * i) + (width && width >= 640 ? 150 : 100)}px` }}
      >
      </div>,
    );
  }

  return lines;
}

export default function HourLines() {
  const { size } = useOutletContext<UIContext>();

  const lines = useMemo(() => {
    return createLines(size?.width);
  }, []);

  return (
    <div className="size-full">
      {lines}
    </div>
  );
}
