import { useLoaderData } from '@remix-run/react';
import VisitsGraph from './VisitsGraph';
import { useTripContext } from '~/routes/trip';
import { TripLoader } from '~/routes/trip._index';

export default function TripStatus() {
  const { olympiads } = useLoaderData<TripLoader>();
  const { visits } = useTripContext();

  // const filteredOlympiads = filterOutNonOlympiads(olympiads);
  const totalWinter = olympiads.filter((olympiad) => olympiad.olympiadType === 'winter').length;
  const totalSummer = olympiads.filter((olympiad) => olympiad.olympiadType === 'summer').length;

  let winterVisits = 0;
  let summerVisits = 0;

  visits.forEach((yearVisits) => {
    if (yearVisits.type === 'winter') winterVisits++;
    if (yearVisits.type === 'summer') summerVisits++;
  });

  return (
    <div className="mx-auto mt-5 flex w-[75vw] items-center justify-between md:ml-0 md:mt-[50px] md:max-w-[300px] lg:max-w-[350px]">
      <VisitsGraph title="Summer" visits={summerVisits} total={totalSummer} />
      <VisitsGraph title="Winter" visits={winterVisits} total={totalWinter} />
    </div>
  );
}
