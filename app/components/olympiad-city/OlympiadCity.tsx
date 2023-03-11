import type { FragmentType } from '~/gql';
import { useFragment } from '~/gql';
import type { CityFieldsFragment } from '~/gql/graphql';
import { CityOlympiadFragmentDoc } from '~/gql/graphql';
import { useTripContext } from '~/routes/trip';
import CityInList from './CityInList';
import { cityStatus, filterOutNonOlympiadsForCity } from './utils';

type OlympiadCityProps = {
  city: CityFieldsFragment;
};

export function OlympiadCity({ city }: OlympiadCityProps) {
  const { visits } = useTripContext();

  const olympiads = useFragment(
    CityOlympiadFragmentDoc,
    city.olympiads.nodes as FragmentType<typeof CityOlympiadFragmentDoc>[]
  );

  if (!city.name) {
    return null;
  }

  const filteredOlympiads = filterOutNonOlympiadsForCity(city.name, olympiads);

  const { amountCompleted, totalOlympiads } = cityStatus(filteredOlympiads, visits);

  return (
    <CityInList
      city={city}
      amountCompleted={amountCompleted}
      totalOlympiads={totalOlympiads}
      olympiads={filteredOlympiads}
    />
  );
}
