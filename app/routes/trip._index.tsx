import { useLoaderData } from '@remix-run/react';

import type { V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import MainCopy from '~/components/home/MainCopy';
import { CitiesList } from '~/components/CitiesList';
import { useTripContext } from './trip';
import type { CityFieldsFragment, OlympiadFieldsFragment } from '~/gql/graphql';
import type { AnimationVariants } from 'types/globe';
import { Fragment, useEffect } from 'react';
import { getGQLClient } from '~/utils/graphql';
import { motion } from 'framer-motion';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Olympic Trip | John Heher' },
    {
      name: 'description',
      content: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games."
    },
    {
      name: 'og:title',
      content: 'Olympic Trip | John Heher'
    },
    {
      name: 'og:image',
      content: '/olympic-cities-og.jpg'
    }
  ];
};

export async function loader() {
  // const stravaResponse = await getStravaActivities();

  const sdk = getGQLClient();
  const response = await sdk.GetOlympicData({
    now: new Date().toISOString()
  });

  if (!response?.data?.olympiads || !response?.data?.cities) {
    return json({ olympiads: [], cities: [] });
  }

  return json({ olympiads: response.data.olympiads.nodes, cities: response.data.cities.nodes });
}

const animationVariants: AnimationVariants = {
  hidden: { opacity: 0, x: '-150px', transition: { duration: 0.3 } },
  visible: { opacity: 1, x: '0px', transition: { duration: 0.3 } }
};

// function getCitiesListVisibility(width: number, showDetails: boolean) {
//   if (width >= 768 || showDetails) {
//     return true;
//   }

//   return false;
// }

function TripIndexInner({ olympiads, cities, toggleBodyBackground, showDetails, width, dispatch }) {
  if (!olympiads || !cities) {
    return null;
  }

  return (
    <Fragment key="trip-index-inner">
      <MainCopy olympiads={olympiads as OlympiadFieldsFragment[]} variants={animationVariants} />

      {/* {getCitiesListVisibility(width, showDetails) && (
        <CitiesList cities={cities as CityFieldsFragment[]} variants={animationVariants} />
      )} */}

      <CitiesList cities={cities as CityFieldsFragment[]} variants={animationVariants} />

      {!showDetails && width < 768 && (
        <button
          className={`absolute bottom-[50px] left-1/2 z-30 -translate-x-2/4 rounded-[4px] border border-solid border-slate-400 bg-[var(--globe-background)] px-[30px] py-[15px] font-semibold uppercase text-slate-200`}
          type="button"
          onClick={() => {
            toggleBodyBackground();
            dispatch({ type: 'SHOW_DETAILS', showDetails: true });
          }}
        >
          Details
        </button>
      )}
    </Fragment>
  );
}

export default function TripIndex() {
  const loaderData = useLoaderData<typeof loader>();

  const tripContext = useTripContext();

  // if (!tripContext) {
  //   return null;
  // }

  const { width, toggleBodyBackground, appState, dispatch } = tripContext;

  const { showDetails, loaded } = appState;

  useEffect(() => {
    const root = document.documentElement;

    if (width < 768 && showDetails) {
      root.style.setProperty('--body-background', 'var(--globe-background)');
    } else {
      root.style.setProperty('--body-background', 'var(--nav-background)');
    }
  }, [showDetails, width]);

  useEffect(() => {
    if (!loaded) {
      dispatch({ type: 'LOADED', loaded: true });
    }
  }, [loaded, dispatch]);

  return (
    <motion.div className="relative z-10" key="trip-index-outer">
      <TripIndexInner
        olympiads={loaderData?.olympiads}
        cities={loaderData?.cities}
        toggleBodyBackground={toggleBodyBackground}
        showDetails={showDetails}
        width={width}
        dispatch={dispatch}
      />
    </motion.div>
  );
}
