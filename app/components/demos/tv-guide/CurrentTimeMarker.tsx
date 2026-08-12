import { useAtomValue } from 'jotai';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';

export default function CurrentTimeMarker() {
  const currentTime = useAtomValue(currentTimeState);

  return (
    <div
      className="absolute -top-3 h-full"
      style={{ left: currentTime.left - 9 }}
    >
      <div className="
        sticky top-7 z-5 size-4 rounded-full border border-better-white/50 bg-blue-700
        sm:top-13
      "
      />
    </div>
  );
}
