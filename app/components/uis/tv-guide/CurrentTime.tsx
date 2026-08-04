import { useAtomValue } from 'jotai';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';

export default function CurrentTime() {
  const currentTime = useAtomValue(currentTimeState);

  return (
    <div className="mb-3 flex items-baseline justify-end gap-2 text-gray-50">
      <span className="w-22 text-center text-xl">{currentTime.time}</span>
      <span className="text-sm uppercase">Timezone: Eastern</span>
    </div>
  );
}
