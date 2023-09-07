import { Link } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';
import { orderBy } from 'lodash';
import type { AnimationVariants } from 'types/globe';
import type { CityFieldsFragment } from '~/gql/graphql';
import { useTripContext } from '~/routes/trip';
import { OlympiadCity } from './olympiad-city/OlympiadCity';

type CitiesListProps = {
  cities: CityFieldsFragment[];
  variants: AnimationVariants;
};

const MotionLink = motion(Link);

export function CitiesList({ cities, variants }: CitiesListProps) {
  const { appState } = useTripContext();

  const { moveableGlobe, routeSelected } = appState;

  const orderedCities = orderBy(cities, (city) => city.firstOlympiad);

  return (
    <div
      key="cities-list"
      className={`cities-container relative z-0 flex flex-col bg-[var(--nav-background)] px-[5vw] pb-[20px] ${
        !moveableGlobe && !routeSelected && 'md:z-40'
      } md:max-w-[50vw] md:bg-transparent md:px-[30px] md:pt-[100px] lg:max-w-[500px]`}
      // variants={variants}
      // animate={moveableGlobe || routeSelected ? 'hidden' : 'visible'}
    >
      <Link
        className={`route-button relative mb-[40px] w-full rounded-[6px] border border-solid border-[#9db7c6] bg-[var(--globe-background)] p-[20px] text-center font-semibold uppercase text-[#e0e0e0]`}
        type="button"
        to={'route'}
        prefetch="intent"
      >
        My route
      </Link>
      {/* <div> */}
      {/* <MotionLink
        className={`mb-[20px] flex cursor-pointer rounded-[6px] bg-[#e0e0e0] hover:bg-[#f5f5f5]`}
        to={`/trip/athens`}
        // layoutId={city.slug}
        // initial={{ opacity: 0, y: -1000 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -1000 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        // transition={{ duration: 0.3 }}
        key="athens"
        layout
        layoutId="athens"
      >
        <span>Athens</span>
      </MotionLink> */}
      {orderedCities.map((city) => {
        return <OlympiadCity key={city.id} city={city} />;
      })}
    </div>
  );
}
