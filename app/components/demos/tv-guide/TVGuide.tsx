import { useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router';

import type { UIContext } from '@/app/routes/demos/layout';
import type { LoaderData } from '@/app/routes/demos/tv-guide';

import { currentTimeState } from '@/app/atoms/currentTimeAtom';

import CurrentTime from './CurrentTime';
import CurrentTimeLine from './CurrentTimeLine';
import CurrentTimeMarker from './CurrentTimeMarker';
import HourLines from './HourLines';
import Hours from './Hours';
import NetworkTitle from './NetworkTitle';
import Show from './Show';
import TimeBar from './TimeBar';
import { hourWidth } from './utils';

function TVGuideInner() {
  const { networks } = useLoaderData<LoaderData>();
  const { size } = useOutletContext<UIContext>();
  const currentTime = useAtomValue(currentTimeState);

  if (!size?.width || !currentTime?.time) {
    return null;
  }

  return (
    <>
      <CurrentTime />
      <Hours />
      <TimeBar />
      <div className="relative w-full">
        <HourLines />
        <CurrentTimeMarker />
        <CurrentTimeLine />
        <div className="flex w-full flex-col gap-2" style={{ width: `${(hourWidth * 24) + (size?.width >= 640 ? 150 : 100)}px` }}>
          {networks.map(network => (
            <div key={network.id} className="group flex">
              <div className="sticky left-0 z-3">
                <NetworkTitle network={network} />
              </div>
              <div
                key={network.id}
                className="
                  relative h-25 w-full
                  sm:h-37.5
                "
              >
                {network.shows.map((show) => {
                  return (
                    <Show key={show.id} show={show} />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function TVGuide() {
  const { size } = useOutletContext<UIContext>();
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentTime = useAtomValue(currentTimeState);

  useEffect(() => {
    if (!scrolled && size?.width && currentTime.left) {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        containerRef.current.scrollLeft = currentTime.left - (containerRect.width / 2);
        setScrolled(true);
      }
    }
  }, [size?.width, currentTime.left, scrolled]);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="relative min-h-0 flex-1">
        <div className="
          absolute top-0 left-0 z-5 h-8 w-34 rounded-tl-md bg-linear-to-r from-gray-800 from-70%
          sm:h-14 sm:w-46
        "
        />
        <div className="absolute top-0 right-0 z-5 w-7 bg-linear-to-l from-gray-800/50" />
        <div
          ref={containerRef}
          className="
            h-[calc(100%-20px)] overflow-scroll overscroll-x-none rounded-sm bg-gray-800
            sm:max-h-200
          "
        >
          <TVGuideInner />
        </div>
      </div>
    </div>
  );
}
