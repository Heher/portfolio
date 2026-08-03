import { useLoaderData } from 'react-router';

import type { LoaderData } from '@/app/routes/ui/tv-guide';

import CurrentTime from './CurrentTime';
import CurrentTimeLine from './CurrentTimeLine';
import HourLines from './HourLines';
import Hours from './Hours';
import NetworkTitle from './NetworkTitle';
import Show from './Show';
import TimeBar from './TimeBar';
import { hourWidth } from './utils';

export default function TVGuide() {
  const { networks } = useLoaderData<LoaderData>();

  return (
    <div>
      <CurrentTime />
      <div className="relative">
        <div className="absolute top-0 right-0 z-5 h-[800px] w-7 bg-linear-to-l from-gray-800/50" />
        <div className="absolute top-0 left-0 z-5 h-14 w-[150px] rounded-tl-md bg-linear-to-r from-gray-800 from-50%" />
        <div className="h-[800px] overflow-scroll overscroll-x-none rounded-sm bg-gray-800">
          <Hours />
          <TimeBar />
          <div className="relative w-full">
            <HourLines />
            <CurrentTimeLine />
            <div className="flex w-full flex-col gap-2" style={{ width: `${(hourWidth * 24) + 150}px` }}>
              {networks.map(network => (
                <div key={network.id} className="group flex">
                  <div className="sticky left-0 z-3">
                    <NetworkTitle network={network} />
                  </div>
                  <div key={network.id} className="relative h-37.5 w-full">
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
        </div>
      </div>
    </div>
  );
}
