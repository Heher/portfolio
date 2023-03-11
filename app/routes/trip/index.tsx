import { useLoaderData } from '@remix-run/react';
import request from 'graphql-request';

import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import MainCopy from '~/components/home/MainCopy';
import { CitiesList } from '~/components/CitiesList';
import { useTripContext } from '../trip';
import type { CityFieldsFragmentDoc, OlympiadFieldsFragmentDoc } from '~/gql/graphql';
import { GetCitiesDocument } from '~/gql/graphql';
import { GetOlympiadsDocument } from '~/gql/graphql';
import type { AnimationVariants } from 'types/globe';
import type { FragmentType } from '~/gql';

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

  const now = new Date().toISOString();

  const olympiadsResponse = await request(process.env.API_ENDPOINT || '', GetOlympiadsDocument, { now });
  const citiesResponse = await request(process.env.API_ENDPOINT || '', GetCitiesDocument, { now });

  if (!olympiadsResponse.olympiads || !citiesResponse.cities) {
    return json({ olympiads: [], cities: [] });
  }

  return json({ olympiads: olympiadsResponse.olympiads.nodes, cities: citiesResponse.cities.nodes });
}

const animationVariants: AnimationVariants = {
  hidden: { opacity: 0, x: '-150px', transition: { duration: 0.3 } },
  visible: { opacity: 1, x: '0px', transition: { duration: 0.3 } }
};

function getCitiesListVisibility(width: number, showDetails: boolean) {
  if (width >= 768) {
    return true;
  }

  if (showDetails) {
    return true;
  }

  return false;
}

export default function TripIndex() {
  const { width, moveableGlobe, routeSelected, showDetails, setShowDetails, visits, toggleBodyBackground } =
    useTripContext();

  const { olympiads, cities } = useLoaderData<typeof loader>();

  // const groupedOlympiads = groupBy(olympiads, (olympiad) => olympiad?.city?.id);

  return (
    <div>
      <MainCopy
        showDetails={showDetails}
        olympiads={olympiads as FragmentType<typeof OlympiadFieldsFragmentDoc>[]}
        visits={visits}
        globeMoveable={moveableGlobe}
        routeSelected={routeSelected}
        variants={animationVariants}
      />

      {getCitiesListVisibility(width, showDetails) && (
        <CitiesList cities={cities as FragmentType<typeof CityFieldsFragmentDoc>[]} variants={animationVariants} />
      )}
      {!showDetails && width < 768 && (
        <button
          className={`absolute bottom-[50px] left-1/2 z-30 translate-x-[-50%] rounded-[4px] border border-solid border-slate-400 bg-[var(--globe-background)] px-[30px] py-[15px] font-semibold uppercase text-slate-200`}
          type="button"
          onClick={() => {
            toggleBodyBackground();
            setShowDetails(true);
          }}
        >
          Details
        </button>
      )}
    </div>
  );
}
