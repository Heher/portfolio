import { useAtomValue } from 'jotai';
import { useMemo } from 'react';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';

import { hourWidth } from './utils';

export default function TimeBar() {
  const currentTime = useAtomValue(currentTimeState);

  const width = useMemo(() => {
    return (hourWidth * 24) + 150;
  }, []);

  return (
    <div className="sticky top-14 z-4 h-2 bg-gray-300" style={{ width }}>
      <div className="absolute top-0 h-2 bg-blue-700/50" style={{ width: currentTime.left }} />
    </div>
  );
}
