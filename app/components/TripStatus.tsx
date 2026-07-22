import { use } from 'react';
import { useLoaderData } from 'react-router';

import type { TripLoader } from '~/routes/trip';

import { TripPageContext } from '~/utils/context';

import VisitsGraph from './VisitsGraph';

export default function TripStatus() {
  const { olympiads } = useLoaderData<TripLoader>();
  const { visits } = use(TripPageContext);

  // const filteredOlympiads = filterOutNonOlympiads(olympiads);
  const totalWinter = olympiads.filter(olympiad => olympiad.olympiadType === 'winter').length;
  const totalSummer = olympiads.filter(olympiad => olympiad.olympiadType === 'summer').length;

  let winterVisits = 0;
  let summerVisits = 0;

  visits.forEach((yearVisits) => {
    if (yearVisits.type === 'winter')
      winterVisits++;
    if (yearVisits.type === 'summer')
      summerVisits++;
  });

  return (
    <div className="
      mx-auto mt-5 flex w-[75vw] items-center justify-between
      md:mt-12.5 md:ml-0 md:max-w-75
      lg:max-w-87.5
    "
    >
      <VisitsGraph title="Summer" visits={summerVisits} total={totalSummer} />
      <VisitsGraph title="Winter" visits={winterVisits} total={totalWinter} />
    </div>
  );
}
