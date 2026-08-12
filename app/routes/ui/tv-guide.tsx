import { TZDate } from '@date-fns/tz';
import { differenceInMinutes, format, set } from 'date-fns';
import { useSetAtom } from 'jotai';
import { InfoIcon } from 'lucide-react';
import { useEffect } from 'react';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';
import { MainHeader, MainHeaderContainer, UIPageBody } from '@/app/components/uis/components';
import Header from '@/app/components/uis/Header';
import Tip from '@/app/components/uis/tv-guide/Tip';
import { getFakeScheduleData, hourWidth } from '@/app/components/uis/tv-guide/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import TVGuide from '~/components/uis/tv-guide/TVGuide';

export async function loader() {
  // const schedule = await getScheduleData();

  // const networks = formatScheduleData(schedule);

  const networks = getFakeScheduleData();

  return { networks };
}

export type LoaderData = typeof loader;

function TVGuideHeader() {
  return (
    <MainHeaderContainer>
      <MainHeader>
        TV Guide
      </MainHeader>
      <Tip />
    </MainHeaderContainer>
  );
}

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
    <div className="flex h-dvh flex-col overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
      <title>TV Guide | UIs | John Heher</title>
      <meta name="description" content="A simple TV guide component created by John Heher." />
      <Header heading={<TVGuideHeader />} subhead="No need to wait for your favorite channel to roll around again on the TV Guide channel. Through the magic of computers, you can just scroll." />
      <UIPageBody
        transitionPath="/ui/tv-guide"
        // className="
        //   min-h-0 flex-1 bg-linear-to-b from-gray-400 to-gray-900 px-2.5 py-5
        //   sm:px-0 sm:pt-5 sm:pb-0
        // "
        className="
          min-h-0 flex-1 bg-linear-to-b from-compass-top to-compass-bottom px-2.5 py-5
          sm:px-0 sm:pt-5 sm:pb-0
        "
      >
        <div className="mx-auto size-full min-h-0 max-w-250">
          <TVGuide />
        </div>
      </UIPageBody>
    </div>
  );
}
