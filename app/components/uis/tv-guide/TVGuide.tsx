import { useLoaderData } from 'react-router';

import type { LoaderData } from '@/app/routes/ui/tv-guide';

import Hours from './Hours';
import NetworkTitle from './NetworkTitle';
import Show from './Show';
import { hourWidth } from './utils';

export default function TVGuide() {
  const { networks } = useLoaderData<LoaderData>();

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 h-14 w-[150px] bg-gray-400" />
      <div className="h-[800px] overflow-scroll overscroll-x-none rounded-sm bg-gray-900">
        <div className="sticky top-0 z-3">
          <Hours />
        </div>
        <div className="flex w-full flex-col gap-2" style={{ width: `${(hourWidth * 24) + 150}px` }}>
          {networks.map(network => (
            <div key={network.id} className="flex">
              <div className="sticky left-0 z-2">
                <NetworkTitle network={network} />
              </div>
              <div key={network.id} className="relative h-[150px] w-full bg-gray-100">
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
  );
}
