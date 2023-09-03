import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { motion } from 'framer-motion';
import request from 'graphql-request';
import { useEffect } from 'react';
import CityInfo from '~/components/olympiad-city/CityInfo';
import { cityStatus, filterOutNonOlympiadsForCity, statusColorSlug } from '~/components/olympiad-city/utils';
import type { FragmentType } from '~/gql';
import { useFragment } from '~/gql';
import { CityOlympiadFragmentDoc, GetCityDocument } from '~/gql/graphql';
import { useTripContext } from '../trip';

export const meta: MetaFunction = ({ data }) => {
  return {
    charset: 'utf-8',
    title: `${data.city.name}, ${data.city.country.name} | Olympic Trip`,
    description: `John Heher's trip to ${data.city.name}, ${data.city.country.name}.`,
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    'og:title': `${data.city.name}, ${data.city.country.name} | Olympic Trip`,
    'og:image': '/olympic-cities-og.jpg'
  };
};

export async function loader({ params }: LoaderArgs) {
  if (!params.slug) {
    return json({ city: null });
  }

  const now = new Date().toISOString();

  const response = await request(process.env.API_ENDPOINT || '', GetCityDocument, { now, slug: params.slug });

  if (!response?.cityBySlug?.name) {
    return json({ city: null });
  }

  return json({ city: response.cityBySlug });
}

const variants = {
  show: {
    // y: '100%'
  },
  hide: {
    // y: '100%'
  }
};

function CityPage() {
  const { visits, setSelectedCity, moveableGlobe, setShowDetails } = useTripContext();
  const { city } = useLoaderData<typeof loader>();

  const olympiads = useFragment(
    CityOlympiadFragmentDoc,
    city?.olympiads.nodes as FragmentType<typeof CityOlympiadFragmentDoc>[]
  );

  useEffect(() => {
    if (city?.slug) {
      setSelectedCity(city.slug);
      setShowDetails(true);

      const root = document.documentElement;
      root.style.setProperty('--body-background', 'var(--globe-background)');
    }
  }, [setShowDetails, setSelectedCity, city]);

  if (!city?.country?.name || !city?.name || !city.country.flagByTimestamp?.png || !city.slug) {
    return null;
  }

  if (!city?.olympiads?.nodes?.length) {
    return null;
  }

  const filteredOlympiads = filterOutNonOlympiadsForCity(city.name, olympiads);

  const { amountCompleted, totalOlympiads } = cityStatus(filteredOlympiads, visits);

  return (
    <>
      <motion.span
        className={`city-status absolute left-0 top-0 -z-10 block w-full bg-gradient-to-t ${statusColorSlug(
          amountCompleted,
          totalOlympiads
        )} to-[var(--globe-background)]`}
        initial={{ height: 0, top: '50%' }}
        animate={{ height: '34dvh', top: '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.8 }}
      />
      <motion.div
        layout
        className={`olympiad-city selected group fixed top-1/3 z-20 h-[67dvh] w-full overflow-scroll bg-[#e0e0e0]`}
        variants={variants}
        animate={moveableGlobe ? 'hide' : 'show'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        layoutId={city.slug}
      >
        <motion.div className="mx-auto px-[5vw] md:max-w-[800px]">
          <motion.div className="header md:mt-16">
            <div className="flex items-center">
              <motion.h3 className="block text-[2rem] font-semibold uppercase leading-none tracking-wide">
                {city.name}
              </motion.h3>
            </div>
            <div className="mt-[10px] flex items-center">
              <motion.h4 className="text-[1.1rem] uppercase leading-none">{city.country.name}</motion.h4>
              <img
                className="ml-[10px] mt-[-1px] h-[15px] w-auto"
                src={city.country.flagByTimestamp.png}
                alt={city.country.name}
              />
            </div>
          </motion.div>
          <CityInfo
            cityName={city.name}
            olympiads={city.olympiads.nodes as FragmentType<typeof CityOlympiadFragmentDoc>[]}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default CityPage;
