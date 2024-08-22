import { json } from '@remix-run/node';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import { Selector } from '~/components/route/Selector';
import { useTripContext } from './trip';
import { Outlet, useLoaderData } from '@remix-run/react';
import NewBackButton from '~/components/home/NewBackButton';
import { getDB } from '@drizzle/db';
import { CityTable } from '@drizzle/schema';
import { eq } from 'drizzle-orm';

export type RouteContext = {
  dispatch: React.Dispatch<any>;
};

export const meta: MetaFunction = () => {
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

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const referSlug = url.searchParams.get('refer');

  // const sdk = getGQLClient();

  if (referSlug) {
    const db = getDB();

    if (!db) {
      return json({ refer: null });
    }

    const cityResult = await db.select({ name: CityTable.name }).from(CityTable).where(eq(CityTable.slug, referSlug));

    const city = cityResult.at(0);

    if (!city) {
      return json({ refer: null });
    }
    // const referResponse = await sdk.GetCityName({ slug: referSlug });
    // const refer = referResponse?.data?.cityBySlug?.name || null;
    return json({ refer: { name: city.name, slug: referSlug } });
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
