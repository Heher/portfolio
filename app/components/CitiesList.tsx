import type { RefObject } from 'react';

import { Link, useLoaderData } from 'react-router';

import type { TripLoader } from '~/routes/trip';

import { useTripContext } from '~/hooks/useTripContext';

import { OlympiadCity } from './olympiad-city/OlympiadCity';

type CitiesListProps = {
  firstRef: RefObject<HTMLAnchorElement | null> | null;
};

export function CitiesList({ firstRef }: CitiesListProps) {
  const { cities } = useLoaderData<TripLoader>();
  const { appState } = useTripContext();

  const { moveableGlobe, selectedRouteLeg } = appState;

  // const orderedCities = orderBy(cities, (city) => city.firstOlympiad);

  return (
    <div
      key="cities-list"
      className={`
        relative z-0 mt-20 flex flex-col px-[5vw] pb-[20px]
        md:mt-0
        ${
    !moveableGlobe && !selectedRouteLeg && 'md:z-40'
    }
        md:max-w-[50vw] md:bg-transparent md:px-[30px] md:pt-[100px]
        lg:max-w-[500px]
      `}
    >
      <Link
        className="relative mb-[40px] w-full rounded-[6px] border border-solid border-[#9db7c6] bg-globe-background p-[20px] text-center font-semibold text-[#e0e0e0] uppercase"
        type="button"
        to="route/1"
        prefetch="intent"
      >
        My route
      </Link>
      {cities.map((city, index) => {
        return <OlympiadCity key={city.id} firstRef={index === 0 ? firstRef : null} city={city} />;
      })}
    </div>
  );
}
