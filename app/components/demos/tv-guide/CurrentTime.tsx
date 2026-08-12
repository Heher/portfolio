import { useAtomValue } from 'jotai';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';

export default function CurrentTime() {
  const currentTime = useAtomValue(currentTimeState);

  return (
    <div className="
      absolute top-4 left-0 z-6 flex w-25 -translate-y-1/2 items-baseline justify-center gap-2 text-gray-50
      sm:top-7 sm:w-37.5
    "
    >
      <span className="
        text-center font-courier-prime text-lg leading-none -tracking-widest
        sm:text-xl
      "
      >
        {`${currentTime.time}`}
      </span>
    </div>
  );
}
