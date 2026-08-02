import { TZDate } from '@date-fns/tz';
import { differenceInMinutes } from 'date-fns';

import type { FormattedShow } from '@/types/uis/tv-guide';

import { hourWidth } from './utils';

type ShowProps = {
  show: FormattedShow;
};

export default function Show({ show }: ShowProps) {
  const showWidth = (show.duration / 60) * hourWidth;
  const midnightNewYork = new TZDate(2026, 7, 2, 0, 0, 0, 'America/New_York');

  const diffInMinutes = differenceInMinutes(
    new TZDate(show.startTime, 'America/New_York'),
    midnightNewYork,
  );

  const showLeft = (hourWidth / 60) * diffInMinutes;

  // console.log(diffInMinutes);

  return (
    <div className="absolute top-0 h-[150px] truncate overflow-hidden rounded-lg border-2 border-tv-guide-dark bg-tv-guide-light p-3 text-tv-guide-dark" style={{ width: `${showWidth}px`, left: `${showLeft}px` }}>
      <span className="font-semibold">{show.name}</span>
    </div>
  );
}
