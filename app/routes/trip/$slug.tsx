import { and, eq } from 'drizzle-orm';
import { use, useEffect } from 'react';
import { useLoaderData } from 'react-router';

import { getDB } from '@drizzle/db';
import { city as CityTable, olympiad as OlympiadTable } from '@drizzle/schema';
import NewBackButton from '~/components/home/NewBackButton';
import { TripPageContext } from '~/utils/context';

import type { Route } from './+types/$slug';

export async function loader({ request, params }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const referSlug = url.searchParams.get('refer');

  if (!params.slug) {
    return { city: null };
  }

  const db = getDB();

  if (!db) {
    return { city: null };
  }

  const result = await db
    .select({
      id: OlympiadTable.id,
      year: OlympiadTable.year,
      olympiadType: OlympiadTable.olympiadType,
      name: CityTable.name,
      slug: CityTable.slug,
    })
    .from(OlympiadTable)
    .innerJoin(CityTable, eq(OlympiadTable.cityId, CityTable.id))
    .where(and(eq(CityTable.slug, params.slug), eq(OlympiadTable.realOlympiad, true)));

  // if (!result[0]) {
  //   return json({ city: null });
  // }

  const city = result.at(0);

  if (!city) {
    return { city: null };
  }

  const formattedCity = {
    name: city.name,
    slug: city.slug,
    olympiads: result.map(row => ({ id: row.id, year: row.year, olympiadType: row.olympiadType })),
  };

  // TODO: See if I need to get the refer city name working again

  return { city: formattedCity, refer: referSlug };

  // const now = new Date().toISOString();

  // const response = await sdk.GetCity({ now, slug: params.slug });

  // if (!response?.data?.cityBySlug?.name) {
  //   return json({ city: null });
  // }

  // if (referSlug) {
  //   return json({
  //     city: null,
  //     refer: { name: 'City name', slug: referSlug }
  //   });
  // }

  // return json({ city: null, refer: null });
}

function CityTest() {
  const { city } = useLoaderData<typeof loader>();
  const { dispatch } = use(TripPageContext);

  useEffect(() => {
    if (city?.slug) {
      dispatch({ type: 'SELECTED_ROUTE_LEG', selectedRouteLeg: null });
      dispatch({ type: 'SELECTED_CITY', selectedCity: city.slug });
      dispatch({ type: 'SELECTED_CITY_DATA', selectedCityData: city });

      const body = document.body;
      body.classList.remove('bg-index-background');
      body.classList.add('bg-globe-background');
    }
  }, [dispatch, city]);

  if (!city?.name) {
    return null;
  }

  return (
    <div>
      <title>{`${city.name} | Olympic Trip | John Heher`}</title>
      <meta name="description" content={`John Heher's past or future trip to ${city.name}`} />
      <NewBackButton />
    </div>
  );
}

export default function CityPage({ loaderData }: Route.ComponentProps) {
  if (!loaderData?.city?.name) {
    return (
      <div>
        <title>Unknown city | Olympic Trip | John Heher</title>
        <meta name="description" content="City not found" />
      </div>
    );
  }

  return <CityTest />;
}
