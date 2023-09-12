import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getGQLClient } from '~/utils/graphql';
import { useTripContext } from './trip';
import { useLoaderData } from '@remix-run/react';
import type { Dispatch } from 'react';
import { useEffect } from 'react';
import type { CityFieldsFragment } from '~/gql/graphql';

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

  return null;
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
