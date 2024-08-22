import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useTripContext } from './trip';
import { useLoaderData } from '@remix-run/react';
import type { Dispatch } from 'react';
import { useEffect } from 'react';
import NewBackButton from '~/components/home/NewBackButton';
import { getDB } from '@drizzle/db';
import { CityTable, OlympiadTable } from '@drizzle/schema';
import { eq, and } from 'drizzle-orm';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: 'Unknown city | Olympic Trip | John Heher' }, { name: 'description', content: `City not found` }];
  }

  const { city } = data;

  if (!city?.name) {
    return [{ title: 'Unknown city | Olympic Trip | John Heher' }, { name: 'description', content: `City not found` }];
  }

  return [
    { title: `${city.name} | Olympic Trip | John Heher` },
    { name: 'description', content: `John Heher's past or future trip to ${city.name}` }
  ];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const referSlug = url.searchParams.get('refer');

  if (!params.slug) {
    return json({ city: null });
  }

  const db = getDB();

  if (!db) {
    return json({ city: null });
  }

  const result = await db
    .select({
      id: OlympiadTable.id,
      year: OlympiadTable.year,
      olympiadType: OlympiadTable.olympiadType,
      name: CityTable.name,
      slug: CityTable.slug
    })
    .from(OlympiadTable)
    .innerJoin(CityTable, eq(OlympiadTable.cityId, CityTable.id))
    .where(and(eq(CityTable.slug, params.slug), eq(OlympiadTable.realOlympiad, true)));

  // if (!result[0]) {
  //   return json({ city: null });
  // }

  const city = result.at(0);

  if (!city) {
    return json({ city: null });
  }

  const formattedCity = {
    name: city.name,
    slug: city.slug,
    olympiads: result.map((row) => ({ id: row.id, year: row.year, olympiadType: row.olympiadType }))
  };

  return json({ city: formattedCity, refer: referSlug });

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
  const { dispatch } = useTripContext();

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

  return <NewBackButton />;
}

export default function CityPage() {
  const loaderData = useLoaderData<typeof loader>();

  if (!loaderData.city) {
    return null;
  }

  return <CityTest />;
}
