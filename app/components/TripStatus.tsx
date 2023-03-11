import type { Visit } from 'types/globe';
import type { FragmentType } from '~/gql';
import { useFragment } from '~/gql';
import { OlympiadFieldsFragmentDoc } from '~/gql/graphql';
import { filterOutNonOlympiads } from './olympiad-city/utils';
import VisitsGraph from './VisitsGraph';

type TripStatusProps = {
  olympiads: FragmentType<typeof OlympiadFieldsFragmentDoc>[];
  visits: Visit[];
};

const TripStatus = (props: TripStatusProps) => {
  const olympiads = useFragment(OlympiadFieldsFragmentDoc, props.olympiads);
  const filteredOlympiads = filterOutNonOlympiads(olympiads);
  const totalWinter = filteredOlympiads.filter((olympiad) => olympiad.olympiadType === 'WINTER').length;
  const totalSummer = filteredOlympiads.filter((olympiad) => olympiad.olympiadType === 'SUMMER').length;

  let winterVisits = 0;
  let summerVisits = 0;

  props.visits.forEach((yearVisits) => {
    if (yearVisits.type === 'winter') winterVisits++;
    if (yearVisits.type === 'summer') summerVisits++;
  });

  return (
    <div className="mx-auto mt-[20px] flex w-[75vw] items-center justify-between md:mt-[50px] md:w-auto md:max-w-[300px] lg:max-w-[350px]">
      <VisitsGraph title="Summer" visits={summerVisits} total={totalSummer} />
      <VisitsGraph title="Winter" visits={winterVisits} total={totalWinter} />
    </div>
  );
};

export default TripStatus;
