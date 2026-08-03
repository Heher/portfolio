import { useAtomValue } from 'jotai';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';

export default function CurrentTime() {
  const currentTime = useAtomValue(currentTimeState);

  return (
    <div className="mb-3 flex items-baseline justify-end gap-2">
      <span className="w-22 text-center text-xl text-gray-950">{currentTime.time}</span>
      <span className="text-sm text-gray-950 uppercase">Timezone: Eastern</span>
    </div>
  );
}
