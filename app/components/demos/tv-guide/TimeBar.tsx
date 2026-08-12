import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { useOutletContext } from 'react-router';

import type { UIContext } from '@/app/routes/demos/layout';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';

import { hourWidth } from './utils';

export default function TimeBar() {
  const currentTime = useAtomValue(currentTimeState);
  const { size } = useOutletContext<UIContext>();

  const width = useMemo(() => {
    return (hourWidth * 24) + (size?.width && size.width >= 640 ? 150 : 100);
  }, [size?.width]);

  return (
    <div
      className="
        sticky top-8 z-4 h-2 bg-gray-300
        sm:top-14
      "
      style={{ width }}
    >
      <div className="absolute top-0 h-2 bg-blue-700/50" style={{ width: currentTime.left }} />
    </div>
  );
}
