import { useLoaderData } from 'react-router';

import type { LoaderData } from '@/app/routes/ui/tv-guide';

import HourLines from './HourLines';
import Hours from './Hours';
import NetworkTitle from './NetworkTitle';
import Show from './Show';
import { hourWidth } from './utils';

export default function TVGuide() {
  const { networks } = useLoaderData<LoaderData>();

  return (
    <div className="relative">
      <div className="h-[800px] overflow-scroll overscroll-x-none rounded-sm bg-gray-800">
        <Hours />
        <div className="relative w-full">
          <HourLines />
          <div className="flex w-full flex-col gap-2" style={{ width: `${(hourWidth * 24) + 150}px` }}>
            {networks.map(network => (
              <div key={network.id} className="group flex">
                <div className="sticky left-0 z-2">
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
  );
}
