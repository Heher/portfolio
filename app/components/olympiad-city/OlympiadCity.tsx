import type { RefObject } from 'react';

import { use } from 'react';
import { useLoaderData } from 'react-router';

import type { TripLoader } from '~/routes/trip';

import { TripPageContext } from '~/utils/context';

import CityInList from './CityInList';
import { cityStatus } from './utils';

type OlympiadCityProps = {
  city: any;
  firstRef: RefObject<HTMLAnchorElement | null> | null;
};

export function OlympiadCity({ city, firstRef }: OlympiadCityProps) {
  const { olympiads } = useLoaderData<TripLoader>();
  const { visits } = use(TripPageContext);

  if (!city.name) {
    return null;
  }

  // const filteredOlympiads = filterOutNonOlympiadsForCity(city.name, city.olympiads.nodes);

  const cityOlympiads = olympiads.filter(olympiad => olympiad.city.id === city.id);

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
