import { useAtomValue } from 'jotai';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';

export default function CurrentTimeLine() {
  const currentTime = useAtomValue(currentTimeState);

  return (
    <div className="absolute top-0 z-3 h-full" style={{ left: currentTime.left - 3 }}>
      <div className="absolute top-0 h-full w-0.75 bg-blue-700/50" />
    </div>
  );
}
