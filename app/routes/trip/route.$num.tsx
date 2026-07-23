import { eq } from 'drizzle-orm';
import { use, useEffect } from 'react';
import { useParams } from 'react-router';

import { getDB } from '@drizzle/db';
import { city as CityTable } from '@drizzle/schema';
import NewBackButton from '~/components/home/NewBackButton';
import { Selector } from '~/components/route/Selector';
import { TripPageContext } from '~/utils/context';

import type { Route } from './+types/route.$num';

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

export default function RouteNumPage() {
  const { dispatch } = use(TripPageContext);
  const params = useParams();

  useEffect(() => {
    if (!params.num) {
      return;
    }

    dispatch({ type: 'SELECTED_ROUTE_LEG', selectedRouteLeg: Number.parseInt(params.num) });
    dispatch({ type: 'SELECTED_CITY', selectedCity: null });
    dispatch({ type: 'SELECTED_CITY_DATA', selectedCityData: null });
  }, [dispatch, params.num]);

  return (
    <div>
      <title>My Route | Olympic Trip</title>
      <meta name="description" content="John Heher\'s Olympic trip route." />
      <meta property="og:title" content="My Route | Olympic Trip" />
      <meta property="og:description" content="John Heher\'s Olympic trip route." />
      <meta property="og:image" content="/olympic-cities-og.jpg" />
      <NewBackButton />
      <Selector />
      {/* <Outlet context={{ dispatch }} /> */}
    </div>
  );
}
