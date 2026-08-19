import { TZDate } from '@date-fns/tz';
import { differenceInMinutes, format, set } from 'date-fns';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';
import { MainHeader, UIPageBody } from '@/app/components/demos/components';
import Header from '@/app/components/demos/Header';
import TVGuide from '@/app/components/demos/tv-guide/TVGuide';
import { getFakeScheduleData, hourWidth } from '@/app/components/demos/tv-guide/utils';

export async function loader() {
  // const schedule = await getScheduleData();

  // const networks = formatScheduleData(schedule);

  const networks = getFakeScheduleData();

  return { networks };
}

export type LoaderData = typeof loader;

// function TVGuideHeader() {
//   return (
//     <MainHeaderContainer>
//       <MainHeader>
//         TV Guide
//       </MainHeader>
//       <Tip />
//     </MainHeaderContainer>
//   );
// }

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
    <div className="flex h-dvh flex-col">
      <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
      <title>TV Guide | Demos | John Heher</title>
      <meta name="description" content="A simple TV guide component created by John Heher." />
      <meta property="og:title" content="TV Guide | Demos | John Heher" />
      <meta property="og:description" content="A simple TV guide component created by John Heher." />
      <Header
        heading={(
          <MainHeader url="/demos/tv-guide">
            TV Guide
          </MainHeader>
        )}
        subhead={(
          <div>
            <p>
              No need to wait for your favorite channel to roll around again on the TV Guide channel. Through the magic of computers, you can just scroll.
            </p>
            <div className="
              mt-7 flex flex-col gap-3 rounded-sm border border-name/20 bg-better-white/60 p-3 text-base
              sm:p-5 sm:text-lg
            "
            >
              <p>Please excuse the fake lorem ipsum shows. The only TV schedule API I could find was woefully inaccurate.</p>
              <p>Just imagine you're watching TV in Ancient Rome.</p>
            </div>
          </div>
        )}
        imgSrc="/demos/tv-guide.png"
        madeWith={['React', 'Tailwind', 'date-fns', 'shadcn', 'Faker']}
        headerBgColor="bg-compass-header"
      />
      <UIPageBody
        transitionPath="/demos/tv-guide"
        className="
          flex h-full min-h-dvh flex-1 flex-col bg-linear-to-b from-compass-top to-compass-bottom px-2.5 py-5
          sm:p-0
        "
      >
        <TVGuide />
      </UIPageBody>
    </div>
  );
}
