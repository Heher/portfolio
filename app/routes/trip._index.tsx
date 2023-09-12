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

function TripIndexInner({ olympiads, cities }: { olympiads: OlympiadFieldsFragment[]; cities: CityFieldsFragment[] }) {
  if (!olympiads || !cities) {
    return null;
  }

  return (
    <Fragment key="trip-index-inner">
      <MainCopy olympiads={olympiads as OlympiadFieldsFragment[]} variants={animationVariants} />
      <CitiesList cities={cities as CityFieldsFragment[]} variants={animationVariants} />
    </Fragment>
  );
}

export default function TripIndex() {
  const loaderData = useLoaderData<typeof loader>() || {};

  const tripContext = useTripContext();

  const { width, appState, dispatch } = tripContext;

  const { showDetails, loaded } = appState;

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--body-background', 'var(--trip-background)');
  }, [showDetails, width]);

  useEffect(() => {
    if (!loaded) {
      dispatch({ type: 'LOADED', loaded: true });
    }
  }, [loaded, dispatch]);

  if (!loaderData?.olympiads || !loaderData?.cities) {
    return null;
  }

  return (
    <div className="relative z-10">
      <TripIndexInner
        olympiads={loaderData.olympiads as OlympiadFieldsFragment[]}
        cities={loaderData.cities as CityFieldsFragment[]}
      />
    </div>
  );
}
