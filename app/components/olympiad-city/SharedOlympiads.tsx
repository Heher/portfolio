import type { FragmentType } from '~/gql/fragment-masking';
import type { CityOlympiadFragmentDoc } from '~/gql/graphql';
import { useTripContext } from '~/routes/trip';
import { OlympiadMedia } from './OlympiadMedia';
import { filterOutNonOlympiadsForCity } from './utils';

type SharedOlympiadsProps = {
  olympiads: FragmentType<typeof CityOlympiadFragmentDoc>[];
  cityName: string;
};

function SharedOlympiads({ olympiads, cityName }: SharedOlympiadsProps) {
  const { visits } = useTripContext();

  const filteredOlympiads = filterOutNonOlympiadsForCity(cityName, olympiads);

  const olympiadVisits = filteredOlympiads.map((olympiad) => {
    if (!olympiad?.year) {
      return null;
    }

    return visits.find(
      (visit) => visit.year === olympiad.year.toString() && visit.type === olympiad.olympiadType?.toLowerCase()
    );
  });

  const olympiadYears = filteredOlympiads.map((olympiad) => {
    return olympiad?.year;
  });
  // const firstOlympiad = olympiads[0];

  const firstOlympiad = filteredOlympiads[0];

  if (!firstOlympiad?.olympiadType) {
    return null;
  }

  return (
    <li className="city-olympiad mr-[20px]">
      <div className="title grid grid-cols-[10px_1fr] items-center gap-[7px]">
        <span className={`city-status h-[10px] w-[10px] rounded-full bg-[var(--positive)]`} />
        <p className="m-0 text-[1.2rem]">
          {olympiadYears.join(' and ')}
          {` ${firstOlympiad.olympiadType.charAt(0) + firstOlympiad.olympiadType.slice(1).toLowerCase()} Games`}
        </p>
      </div>
      <div className="media mt-[20px] items-end group-[.selected]:flex">
        {olympiadVisits[0] ? (
          <OlympiadMedia visit={olympiadVisits[0]} olympiadType={firstOlympiad.olympiadType} />
        ) : null}
      </div>
    </li>
  );
}

export default SharedOlympiads;
