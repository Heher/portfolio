import type { OlympiadFieldsFragment } from '~/gql/graphql';
import { filterOutNonOlympiads } from './olympiad-city/utils';
import VisitsGraph from './VisitsGraph';
import { useTripContext } from '~/routes/trip';

type TripStatusProps = {
  olympiads: OlympiadFieldsFragment[];
};

const TripStatus = ({ olympiads }: TripStatusProps) => {
  const { visits } = useTripContext();

  const filteredOlympiads = filterOutNonOlympiads(olympiads);
  const totalWinter = filteredOlympiads.filter((olympiad) => olympiad.olympiadType === 'WINTER').length;
  const totalSummer = filteredOlympiads.filter((olympiad) => olympiad.olympiadType === 'SUMMER').length;

  let winterVisits = 0;
  let summerVisits = 0;

  visits.forEach((yearVisits) => {
    if (yearVisits.type === 'winter') winterVisits++;
    if (yearVisits.type === 'summer') summerVisits++;
  });

  return (
    <div className="mx-auto mt-[20px] flex w-[75vw] items-center justify-between md:mt-[50px] md:max-w-[300px] lg:max-w-[350px]">
      <VisitsGraph title="Summer" visits={summerVisits} total={totalSummer} />
      <VisitsGraph title="Winter" visits={winterVisits} total={totalWinter} />
    </div>
  );
};

export default TripStatus;
