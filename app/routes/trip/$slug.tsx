import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { motion } from 'framer-motion';
import { gql, GraphQLClient } from 'graphql-request';
import { useEffect } from 'react';
import { CityOlympiad } from '~/components/olympiad-city/CityOlympiad';
import { sharedStadiums } from '~/components/olympiad-city/settings';
import SharedOlympiads from '~/components/olympiad-city/SharedOlympiads';
import { cityStatus, statusColor } from '~/components/olympiad-city/utils';
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

export async function loader({ params }) {
  const now = new Date().toISOString();

  const query = gql`
    {
      cityBySlug(slug: "${params.slug}") {
        id
        name
        slug
        country {
          name
          flagByTimestamp(
            dateTimestamp: { start: { value: "${now}", inclusive: true }, end: { value: "${now}", inclusive: true } }
          ) {
            png
          }
        }
        olympiads(orderBy: YEAR_ASC) {
          nodes {
            id
            year
            olympiadType
          }
        }
      }
    }
  `;

  const graphQLClient = new GraphQLClient(process.env.API_ENDPOINT || '');

  const response = await graphQLClient.request(query);

  //* filter out 1906 Athens and 1956 Stockholm
  response.cityBySlug.olympiads.nodes = response.cityBySlug.olympiads.nodes.filter((olympiad) => {
    if (olympiad.year === 1906) {
      return false;
    }

    if (olympiad.year === 1956) {
      if (response.cityBySlug.name === 'Stockholm') {
        return false;
      }
    }
    return true;
  });

  return { city: response.cityBySlug };
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
  const { handleImageModal, visits, setSelectedCity, moveableGlobe } = useTripContext();
  const { city } = useLoaderData();

  const { amountCompleted, totalOlympiads } = cityStatus(city.olympiads.nodes, visits);

  useEffect(() => {
    if (city) {
      setSelectedCity(city);
    }
  }, [setSelectedCity, city]);

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
        <motion.ul className="mt-[40px] flex list-none flex-col p-0">
          {sharedStadiums.includes(city.name) ? (
            <SharedOlympiads
              olympiads={city.olympiads.nodes}
              visit={
                visits[city.olympiads.nodes[0].year.toString()]?.[city.olympiads.nodes[0].olympiadType.toLowerCase()]
              }
              handleImageModal={handleImageModal}
            />
          ) : (
            city.olympiads.nodes.map((olympiad) => {
              const visit = visits[olympiad.year.toString()]?.[olympiad.olympiadType.toLowerCase()];

              return (
                <CityOlympiad
                  key={olympiad.id}
                  olympiad={olympiad}
                  visit={visit}
                  handleImageModal={handleImageModal}
                  selected
                  expanded
                />
              );
            })
          )}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default CityPage;
