import { use } from 'react';
import { Link, useLoaderData } from 'react-router';

import type { TripLoader } from '~/routes/trip';

import { TripPageContext } from '~/utils/context';

import OlympiadCity from './olympiad-city/OlympiadCity';

export function CitiesList() {
  const { cities } = useLoaderData<TripLoader>();
  const { moveableGlobe, selectedRouteLeg } = use(TripPageContext);

  // const orderedCities = orderBy(cities, (city) => city.firstOlympiad);

  return (
    <div
      key="cities-list"
      className={`
        relative z-0 mt-20 flex flex-col px-[5vw] pb-5
        md:mt-0
        ${
    !moveableGlobe && !selectedRouteLeg && 'md:z-40'
    }
        md:max-w-[50vw] md:bg-transparent md:px-7.5 md:pt-25
        lg:max-w-125
      `}
    >
      <Link
        className="relative mb-10 w-full rounded-[6px] border border-solid border-[#9db7c6] bg-globe-background p-5 text-center font-semibold text-[#e0e0e0] uppercase"
        type="button"
        to="route/1"
        prefetch="intent"
      >
        My route
      </Link>
      {cities.map((city) => {
        return <OlympiadCity key={city.id} city={city} />;
      })}
    </div>
  );
}
