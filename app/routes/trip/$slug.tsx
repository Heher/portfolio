import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { motion } from 'framer-motion';
import request from 'graphql-request';
import { useEffect } from 'react';
import CityInfo from '~/components/olympiad-city/CityInfo';
import { cityStatus, filterOutNonOlympiadsForCity, statusColor } from '~/components/olympiad-city/utils';
import type { FragmentType } from '~/gql';
import { useFragment } from '~/gql';
import { CityOlympiadFragmentDoc } from '~/gql/graphql';
import { GetCityDocument } from '~/gql/graphql';
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
    y: 0
  },
  hide: {
    y: '100%'
  }
};

function CityPage() {
  const { visits, setSelectedCity, moveableGlobe } = useTripContext();
  const { city } = useLoaderData<typeof loader>();

  const olympiads = useFragment(
    CityOlympiadFragmentDoc,
    city?.olympiads.nodes as FragmentType<typeof CityOlympiadFragmentDoc>[]
  );

  useEffect(() => {
    if (city?.slug) {
      setSelectedCity(city.slug);
    }
  }, [setSelectedCity, city]);

  if (!city?.country?.name || !city?.name || !city.country.flagByTimestamp?.png) {
    return null;
  }

  if (!city?.olympiads?.nodes?.length) {
    return null;
  }

  const filteredOlympiads = filterOutNonOlympiadsForCity(city.name, olympiads);

  const { amountCompleted, totalOlympiads } = cityStatus(filteredOlympiads, visits);

  return (
    <motion.div
      layout
      className={`olympiad-city selected group z-20 overflow-scroll bg-[#e0e0e0]`}
      style={{
        position: 'fixed',
        top: '25vh',
        left: '0px',
        height: '75vh',
        width: '100vw'
      }}
      variants={variants}
      animate={moveableGlobe ? 'hide' : 'show'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.span
        className={`city-status block w-full border-t-[15px] border-solid ${statusColor(
          amountCompleted,
          totalOlympiads
        )}`}
      />
      <motion.div className="mx-auto px-[5vw] md:max-w-[800px]">
        <motion.div className="header mt-[25vh] md:mt-[15vh]">
          <div className="flex items-center">
            <motion.h3 className="block text-[2rem] font-semibold uppercase leading-none tracking-wide">
              {city.name === 'Squaw Valley' ? 'Palisades Tahoe' : city.name}
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
  );
}

export default CityPage;
