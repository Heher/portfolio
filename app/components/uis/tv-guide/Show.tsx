import { TZDate } from '@date-fns/tz';
import { differenceInMinutes, format, isAfter } from 'date-fns';
import { useMemo } from 'react';

import type { FormattedShow } from '@/types/uis/tv-guide';

import { cn } from '@/lib/utils';

import { hourWidth } from './utils';

type ShowProps = {
  show: FormattedShow;
};

export default function Show({ show }: ShowProps) {
  const { showWidth, showLeft, goesOver, formattedTime } = useMemo(() => {
    const midnightNewYork = new TZDate(2026, 7, 2, 0, 0, 0, 'America/New_York');
    const midnightNewYorkNextDay = new TZDate(2026, 7, 3, 0, 0, 0, 'America/New_York');
    const timezonedStart = new TZDate(show.startTime, 'America/New_York');
    const timezonedEnd = new TZDate(show.endTime, 'America/New_York');

    const goesOver = isAfter(timezonedEnd, midnightNewYorkNextDay);

    let showWidth = (show.duration / 60) * hourWidth;

    if (goesOver) {
      const diffToNextDay = differenceInMinutes(
        midnightNewYorkNextDay,
        timezonedStart,
      );

      showWidth = (hourWidth / 60) * diffToNextDay;
    }

    const diffInMinutes = differenceInMinutes(
      timezonedStart,
      midnightNewYork,
    );

    const showLeft = (hourWidth / 60) * diffInMinutes;

    const formattedStartTime = format(timezonedStart, 'HH:mm');
    const formattedEndTime = format(timezonedEnd, 'HH:mm');
    const formattedTime = showWidth > (hourWidth * 0.25) ? `${formattedStartTime} - ${formattedEndTime}` : '...';

    return { showWidth, showLeft, goesOver, formattedTime };
  }, [show]);

  return (
    <div
      className={cn(
        `absolute top-0 flex h-37.5 flex-col overflow-hidden rounded-lg border-2 border-gray-800/50 bg-gray-100/70 p-3 text-tv-guide-dark`,
        goesOver && 'rounded-r-none',
      )}
      style={{ width: `${showWidth}px`, left: `${showLeft}px` }}
    >
      <span className="mb-2 block text-xs">{formattedTime}</span>
      <span className="block truncate text-lg font-semibold uppercase">{show.name}</span>
    </div>
  );
}
