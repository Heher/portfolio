import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { orderBy } from 'lodash';
import type { AnimationVariants } from 'types/globe';
import type { CityFieldsFragment } from '~/gql/graphql';
import { useTripContext } from '~/routes/trip';
import { OlympiadCity } from './olympiad-city/OlympiadCity';

type CitiesListProps = {
  cities: CityFieldsFragment[];
  variants: AnimationVariants;
};

function ListOfCities({ cities }: { cities: readonly CityFieldsFragment[] }) {
  const orderedCities = orderBy(cities, (city) => city.firstOlympiad);

  return (
    <>
      {orderedCities.map((city) => {
        return <OlympiadCity key={city.id} city={city} />;
      })}
    </>
  );
}

export function CitiesList({ cities, variants }: CitiesListProps) {
  const { appState } = useTripContext();

  const { moveableGlobe, routeSelected } = appState;

  return (
    <motion.div
      className={`cities-container relative z-0 flex flex-col bg-[var(--nav-background)] px-[5vw] pb-[20px] ${
        !moveableGlobe && !routeSelected && 'md:z-40'
      } md:max-w-[50vw] md:bg-transparent md:px-[30px] md:pt-[100px] lg:max-w-[500px]`}
      variants={variants}
      animate={moveableGlobe || routeSelected ? 'hidden' : 'visible'}
    >
      <Link
        className={`route-button relative mb-[40px] w-full rounded-[6px] border border-solid border-[#9db7c6] bg-[var(--globe-background)] p-[20px] text-center font-semibold uppercase text-[#e0e0e0]`}
        type="button"
        to={'route'}
        prefetch="intent"
      >
        My route
      </Link>
      <ListOfCities cities={cities} />
    </motion.div>
  );
}
