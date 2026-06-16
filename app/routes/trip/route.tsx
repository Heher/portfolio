import { eq } from 'drizzle-orm';
import { Outlet } from 'react-router';

import { getDB } from '@drizzle/db';
import { city as CityTable } from '@drizzle/schema';
import NewBackButton from '~/components/home/NewBackButton';

import type { Route } from './+types/layout';

export type RouteContext = {
  dispatch: React.Dispatch<any>;
};

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const referSlug = url.searchParams.get('refer');

  // const sdk = getGQLClient();

  if (referSlug) {
    const db = getDB();

    if (!db) {
      return { refer: null };
    }

    const cityResult = await db.select({ name: CityTable.name }).from(CityTable).where(eq(CityTable.slug, referSlug));

    const city = cityResult.at(0);

    if (!city) {
      return { refer: null };
    }
    // const referResponse = await sdk.GetCityName({ slug: referSlug });
    // const refer = referResponse?.data?.cityBySlug?.name || null;
    return { refer: { name: city.name, slug: referSlug } };
  }

  return { refer: null };
}

export type LayoutLoaderData = typeof loader;

export default function RoutePage() {
  // const tripContext = useTripContext();
  // console.log('tripContext in layout', tripContext);

  // const { width, appState, dispatch } = tripContext;
  // const { selectedRouteLeg } = appState;

  // useEffect(() => {
  //   dispatch({ type: 'SELECTED_CITY', selectedCity: null });
  //   dispatch({ type: 'SELECTED_CITY_DATA', selectedCityData: null });

  //   const root = document.documentElement;
  //   root.style.setProperty('--body-background', 'var(--globe-background)');
  // }, [dispatch]);

  return (
    <div>
      <title>My Route | Olympic Trip</title>
      <meta name="description" content="John Heher\'s Olympic trip route." />
      <meta property="og:title" content="My Route | Olympic Trip" />
      <meta property="og:description" content="John Heher\'s Olympic trip route." />
      <meta property="og:image" content="/olympic-cities-og.jpg" />
      <NewBackButton />
      {/* {selectedRouteLeg !== null && <Selector width={width} />} */}
      {/* <Outlet context={{ dispatch }} /> */}
      <Outlet />
    </div>
  );
}
