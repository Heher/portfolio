import { TZDate } from '@date-fns/tz';
import { differenceInMinutes, format, isAfter } from 'date-fns';
import { useMemo } from 'react';

import type { FormattedShow } from '@/types/demos/tv-guide';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

import { hourWidth } from './utils';

type ShowProps = {
  show: FormattedShow;
};

export default function Show({ show }: ShowProps) {
  const { showWidth, showLeft, goesOver, formattedTime, truncatedTime } = useMemo(() => {
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

    // Subtracting 1 so the borders with the next show don't overlap
    const showLeft = ((hourWidth / 60) * diffInMinutes) - 1;

    const formattedStartTime = format(timezonedStart, 'HH:mm');
    const formattedEndTime = format(timezonedEnd, 'HH:mm');
    const formattedTime = `${formattedStartTime} - ${formattedEndTime}`;
    const truncatedTime = showWidth > (hourWidth * 0.25) ? formattedTime : '...';

    return { showWidth, showLeft, goesOver, formattedTime, truncatedTime };
  }, [show]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            `
              absolute top-0 flex h-[100px] cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-white bg-gray-200/70 p-3 text-tv-guide-dark transition-colors
              group-hover:bg-gray-200/80
              hover:bg-gray-200
              sm:h-37.5
            `,
            goesOver && 'rounded-r-none',
          )}
          style={{ width: `${showWidth}px`, left: `${showLeft}px` }}
        >
          <span className="mb-2 block text-xs">{truncatedTime}</span>
          <span className="block truncate text-lg font-semibold uppercase">{show.name}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent className="px-4 py-2">
        <div className="flex flex-col gap-1">
          <span className="text-xs">{formattedTime}</span>
          <span className="text-sm font-semibold uppercase">{show.name}</span>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
