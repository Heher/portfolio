import { useLoaderData } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';
import { groupBy } from 'lodash';

import { OlympiadType } from '~/components/OlympiadType';
import { getStravaActivities } from '~/utils/getStravaActivities';

// import styles from '~/styles/index.css';
import visitData from '~/data/visits.json';
import SimpleGlobe from '~/components/globe/SimpleGlobe';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ModalContainer from '~/components/modal/ModalContainer';
import CitiesList from '~/components/CitiesList';

// export function links() {
//   return [{ rel: 'stylesheet', href: styles }];
// }

export async function loader() {
  const stravaResponse = await getStravaActivities();

  const query = gql`
    {
      olympiads(orderBy: YEAR_ASC) {
        nodes {
          id
          year
          olympiadType
          city {
            id
            name
            slug
            country {
              name
            }
          }
        }
      }
    }
  `;

  const graphQLClient = new GraphQLClient(process.env.API_ENDPOINT || '');

  const response = await graphQLClient.request(query);

  //* filter out 1906 Athens and 1956 Stockholm
  response.olympiads.nodes = response.olympiads.nodes.filter((olympiad) => {
    if (olympiad.year === 1906) {
      return false;
    }

    if (olympiad.year === 1956) {
      if (olympiad.city.name === 'Stockholm') {
        return false;
      }
    }
    return true;
  });

  return { olympiads: response.olympiads.nodes, stravaData: stravaResponse };
}

export default function Index() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [routeSelected, setRouteSelected] = useState(false);

  const { olympiads, stravaData } = useLoaderData<typeof loader>();

  // const separatedOlympiads = groupBy(olympiads, (olympiad) => olympiad.olympiadType);

  const groupedOlympiads = groupBy(olympiads, (olympiad) => olympiad.city.id);

  // console.log(stravaData);

  const handleCitySelection = (city) => {
    if (selectedCity) {
      setSelectedCity(null);
    } else {
      setSelectedCity(city);
    }

    // setSelectedCity(city);
  };

  const handleRouteSelection = () => {
    if (routeSelected) {
      setRouteSelected(false);
    } else {
      setRouteSelected(true);
    }
  };

  return (
    <main className="relative w-full h-full bg-[var(--nav-background)]">
      <div className="body-container max-w-[var(--max-width)] mx-auto">
        <motion.div
          className="globe-container fixed h-[100vh] w-[100vw]"
          animate={
            {
              // opacity: selectedCity ? 1 : 0.5,
              // width: selectedCity ? '100%' : '50%'
              // top: selectedCity ? '10%' : '0%',
              // right: selectedCity ? '10%' : '0%'
              // border: selectedCity ? '2px solid #333' : '0',
              // borderRadius: selectedCity ? '10px' : '0'
              // padding: selectedCity ? '0' : '30px'
            }
          }
        >
          <SimpleGlobe visits={visitData.olympiads} selectedCity={selectedCity} routeSelected={routeSelected} />
        </motion.div>

        <button
          className="route-button relative px-[20px] py-[10px] bg-blue-500 mb-[50px]"
          type="button"
          onClick={handleRouteSelection}
        >
          My route
        </button>

        <CitiesList
          olympiadList={groupedOlympiads}
          visits={visitData.olympiads}
          handleCitySelection={handleCitySelection}
          selectedCity={selectedCity}
          routeSelected={routeSelected}
        />
      </div>
      {/* {selectedCity && <ModalContainer city={selectedCity} handleCitySelection={handleCitySelection} />} */}
    </main>
  );
}

{
  /* <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}></motion.main> */
}
