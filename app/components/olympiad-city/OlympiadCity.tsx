import { useTripContext } from '~/routes/trip';
import CityInList from './CityInList';
import { cityStatus, filterOutNonOlympiadsForCity } from './utils';

type OlympiadCityProps = {
  city: any;
  firstRef: React.RefObject<HTMLDivElement> | null;
};

export function OlympiadCity({ city, firstRef }: OlympiadCityProps) {
  const { visits } = useTripContext();

  if (!city.name) {
    return null;
  }

  const filteredOlympiads = filterOutNonOlympiadsForCity(city.name, city.olympiads.nodes);

  const { amountCompleted, totalOlympiads } = cityStatus(filteredOlympiads, visits);

  return (
    <CityInList
      firstRef={firstRef}
      city={city}
      amountCompleted={amountCompleted}
      totalOlympiads={totalOlympiads}
      olympiads={filteredOlympiads}
    />
  );
}
