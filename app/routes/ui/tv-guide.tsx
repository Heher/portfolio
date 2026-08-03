import { TZDate } from '@date-fns/tz';
import { differenceInMinutes, format, set } from 'date-fns';
import { useSetAtom } from 'jotai';
import { ArrowLeft, InfoIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';
import { getFakeScheduleData, hourWidth } from '@/app/components/uis/tv-guide/utils';
import TVGuide from '~/components/uis/tv-guide/TVGuide';

export async function loader() {
  // const schedule = await getScheduleData();

  // const networks = formatScheduleData(schedule);

  const networks = getFakeScheduleData();

  return { networks };
}

export type LoaderData = typeof loader;

export default function TVGuidePage() {
  const setCurrentTime = useSetAtom(currentTimeState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = TZDate.tz('America/New_York');
      const todayMidnight = set(currentTime, { hours: 0, minutes: 0, seconds: 0 });

      const diffInMinutes = differenceInMinutes(
        currentTime,
        todayMidnight,
      );

      const left = ((hourWidth / 60) * diffInMinutes) + 150;

      setCurrentTime({ time: format(currentTime, 'HH:mm:ss'), left });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setCurrentTime]);

  return (
    <div className="">
      <title>TV Guide | UIs | John Heher</title>
      <meta name="description" content="A simple TV guide component created by John Heher." />
      <div className="mx-auto flex w-full max-w-xl flex-col">
        <Link
          to="/"
          className="
            flex w-max items-center gap-2 text-base font-semibold text-[#282B27]
            hover:opacity-80
          "
        >
          <ArrowLeft className="size-4.5" />
          <span className="block">Back</span>
        </Link>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold">TV Guide</h1>
          <p className="my-5 text-lg text-[#282B27]">
            No need to wait for your favorite channel to roll around again on the TV Guide channel. Through the magic of computers, you can scroll.
          </p>
        </div>
      </div>
      <div className="h-full bg-linear-to-b from-gray-400 to-gray-900 pt-10 pb-60">
        <div className="mx-auto mb-10 flex max-w-4xl items-center gap-5 rounded-lg border border-tv-guide/70 bg-tv-guide-light/50 px-7 py-5">
          <InfoIcon className="size-7 text-tv-guide-dark" />
          <p className="max-w-xl text-sm text-tv-guide-dark">Please excuse the fake lorem ipsum shows. The only TV schedule API I could find was woefully inaccurate. Just imagine you're watching TV in Ancient Rome.</p>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <TVGuide />
        </div>
      </div>
    </div>
  );
}
