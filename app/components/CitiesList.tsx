import { Link } from '@remix-run/react';
import { orderBy } from 'lodash-es';
import { useTripContext } from '~/routes/trip';
import { OlympiadCity } from './olympiad-city/OlympiadCity';

type CitiesListProps = {
  cities: any[];
  firstRef: React.RefObject<HTMLDivElement>;
};

export function CitiesList({ cities, firstRef }: CitiesListProps) {
  const { appState } = useTripContext();

  const { moveableGlobe, selectedRouteLeg } = appState;

  const orderedCities = orderBy(cities, (city) => city.firstOlympiad);

  return (
    <div
      key="cities-list"
      className={`cities-container relative z-0 mt-20 flex flex-col px-[5vw] pb-[20px] md:mt-0 ${
        !moveableGlobe && !selectedRouteLeg && 'md:z-40'
      } md:max-w-[50vw] md:bg-transparent md:px-[30px] md:pt-[100px] lg:max-w-[500px]`}
    >
      <Link
        className={`route-button relative mb-[40px] w-full rounded-[6px] border border-solid border-[#9db7c6] bg-[var(--globe-background)] p-[20px] text-center font-semibold uppercase text-[#e0e0e0]`}
        type="button"
        to={'route/1'}
        prefetch="intent"
      >
        My route
      </Link>
      {orderedCities.map((city, index) => {
        return <OlympiadCity firstRef={index === 0 ? firstRef : null} key={city.id} city={city} />;
      })}
    </div>
  );
}
