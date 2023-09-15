import { json } from '@remix-run/node';
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import { Selector } from '~/components/route/Selector';
import { useTripContext } from './trip';
import { Outlet, useLoaderData } from '@remix-run/react';
import NewBackButton from '~/components/home/NewBackButton';
import { getGQLClient } from '~/utils/graphql';

export type RouteContext = {
  dispatch: React.Dispatch<any>;
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'My Route | Olympic Trip' },
    {
      name: 'description',
      content: "John Heher's Olympic trip route."
    },
    {
      name: 'og:title',
      content: 'My Route | Olympic Trip'
    },
    {
      name: 'og:image',
      content: '/olympic-cities-og.jpg'
    }
  ];
};

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const referSlug = url.searchParams.get('refer');

  const sdk = getGQLClient();

  if (referSlug) {
    const referResponse = await sdk.GetCityName({ slug: referSlug });
    // const refer = referResponse?.data?.cityBySlug?.name || null;
    return json({ refer: { name: referResponse?.data?.cityBySlug?.name, slug: referSlug } });
  }

  return json({ refer: null });
}

function RoutePage() {
  const { width, appState, dispatch } = useTripContext();
  const { selectedRouteLeg } = appState;

  useEffect(() => {
    dispatch({ type: 'SELECTED_CITY', selectedCity: null });
    dispatch({ type: 'SELECTED_CITY_DATA', selectedCityData: null });

    const root = document.documentElement;
    root.style.setProperty('--body-background', 'var(--globe-background)');
  }, [dispatch]);

  const loaderData = useLoaderData<typeof loader>() || {};

  return (
    <div>
      <NewBackButton refer={loaderData.refer} />
      {selectedRouteLeg !== null && <Selector width={width} />}
      <Outlet context={{ dispatch }} />
    </div>
  );
}

export default RoutePage;
