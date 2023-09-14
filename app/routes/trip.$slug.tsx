import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getGQLClient } from '~/utils/graphql';
import { useTripContext } from './trip';
import { useLoaderData } from '@remix-run/react';
import type { Dispatch } from 'react';
import { useEffect } from 'react';
import type { CityFieldsFragment } from '~/gql/graphql';
import NewBackButton from '~/components/home/NewBackButton';

export const meta: V2_MetaFunction<typeof loader> = ({ data, params }) => {
  if (!data) {
    return [{ title: 'Unknown city | Olympic Trip | John Heher' }, { name: 'description', content: `City not found` }];
  }

  const { city } = data;
  return [
    { title: `${city?.name} | Olympic Trip | John Heher` },
    { name: 'description', content: `John Heher's past or future trip to ${city?.name}` }
  ];
};

export async function loader({ params }: LoaderArgs) {
  if (!params.slug) {
    return json({ city: null });
  }

  const sdk = getGQLClient();

  const now = new Date().toISOString();

  const response = await sdk.GetCity({ now, slug: params.slug });

  if (!response?.data?.cityBySlug?.name) {
    return json({ city: null });
  }

  return json({ city: response.data.cityBySlug });
}

function CityTest({ city, dispatch }: { city: CityFieldsFragment; dispatch: Dispatch<any> }) {
  useEffect(() => {
    if (city?.slug) {
      dispatch({ type: 'SELECTED_CITY', selectedCity: city.slug });
      dispatch({ type: 'SHOW_DETAILS', showDetails: true });
      dispatch({ type: 'SELECTED_CITY_DATA', selectedCityData: city });

      const root = document.documentElement;
      root.style.setProperty('--body-background', 'var(--globe-background)');
    }
  }, [dispatch, city]);

  if (!city?.name) {
    return null;
  }

  return <NewBackButton />;
}

function CityPage() {
  const tripContext = useTripContext();
  const loaderData = useLoaderData<typeof loader>() || {};

  if (!tripContext || !loaderData?.city) {
    return null;
  }

  const { dispatch } = tripContext;

  return <CityTest city={loaderData.city as CityFieldsFragment} dispatch={dispatch} />;
}

export default CityPage;
