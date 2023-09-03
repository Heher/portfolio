import { useLoaderData } from '@remix-run/react';
import request from 'graphql-request';

import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import MainCopy from '~/components/home/MainCopy';
import { CitiesList } from '~/components/CitiesList';
import { useTripContext } from '../trip';
import type { CityFieldsFragmentDoc, OlympiadFieldsFragment, OlympiadFieldsFragmentDoc } from '~/gql/graphql';
import { GetCitiesDocument, GetOlympiadsDocument } from '~/gql/graphql';
import type { AnimationVariants } from 'types/globe';
import type { FragmentType } from '~/gql';
import { useEffect } from 'react';
import { getGQLClient } from '~/utils/graphql';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Olympic Trip | John Heher',
  description: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games.",
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  'og:title': 'Olympic Trip | John Heher',
  'og:image': '/olympic-cities-og.jpg'
});

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

function getCitiesListVisibility(width: number, showDetails: boolean) {
  if (width >= 768 || showDetails) {
    return true;
  }

  return false;
}

export default function TripIndex() {
  const { width, toggleBodyBackground, appState, dispatch } = useTripContext();

  const { showDetails, loaded } = appState;

  const { olympiads, cities } = useLoaderData<typeof loader>();

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
    <div className="relative z-10">
      <MainCopy olympiads={olympiads as OlympiadFieldsFragment[]} variants={animationVariants} />

      {getCitiesListVisibility(width, showDetails) && (
        <CitiesList cities={cities as FragmentType<typeof CityFieldsFragmentDoc>[]} variants={animationVariants} />
      )}
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
    </div>
  );
}
