import { useTripContext } from '~/routes/trip';
import CityInList from './CityInList';
import { cityStatus } from './utils';
import { TripLoader } from '~/routes/trip._index';
import { useLoaderData } from '@remix-run/react';

type OlympiadCityProps = {
  city: any;
  firstRef: React.RefObject<HTMLDivElement> | null;
};

export function OlympiadCity({ city, firstRef }: OlympiadCityProps) {
  const { olympiads } = useLoaderData<TripLoader>();
  const { visits } = useTripContext();

  if (!city.name) {
    return null;
  }

  // const filteredOlympiads = filterOutNonOlympiadsForCity(city.name, city.olympiads.nodes);

  const cityOlympiads = olympiads.filter((olympiad) => olympiad.city.id === city.id);

  const { amountCompleted, totalOlympiads } = cityStatus(cityOlympiads, visits);

  // console.log('amountCompleted', amountCompleted);
  // console.log('totalOlympiads', totalOlympiads);

  return (
    <CityInList
      firstRef={firstRef}
      city={city}
      amountCompleted={amountCompleted}
      totalOlympiads={totalOlympiads}
      olympiads={cityOlympiads}
    />
  );
}
