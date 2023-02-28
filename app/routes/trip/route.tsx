import type { MetaFunction } from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { motion } from 'framer-motion';
import { gql, GraphQLClient } from 'graphql-request';
import { useEffect } from 'react';
import { CityOlympiad } from '~/components/olympiad-city/CityOlympiad';
import { sharedStadiums } from '~/components/olympiad-city/settings';
import SharedOlympiads from '~/components/olympiad-city/SharedOlympiads';
import { cityStatus, statusColor } from '~/components/olympiad-city/utils';
import { Selector } from '~/components/route/Selector';

export const meta: MetaFunction = ({ data }) => {
  return {
    charset: 'utf-8',
    title: `My Route | Olympic Trip`,
    description: `John Heher's Olympic trip route.`,
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    'og:title': `My Route | Olympic Trip`,
    'og:image': '/olympic-cities-og.jpg'
  };
};

// export async function loader({ params }) {
//   const now = new Date().toISOString();

//   const query = gql`
//     {
//       cityBySlug(slug: "${params.slug}") {
//         id
//         name
//         slug
//         country {
//           name
//           flagByTimestamp(
//             dateTimestamp: { start: { value: "${now}", inclusive: true }, end: { value: "${now}", inclusive: true } }
//           ) {
//             png
//           }
//         }
//         olympiads(orderBy: YEAR_ASC) {
//           nodes {
//             id
//             year
//             olympiadType
//           }
//         }
//       }
//     }
//   `;

//   const graphQLClient = new GraphQLClient(process.env.API_ENDPOINT || '');

//   const response = await graphQLClient.request(query);

//   //* filter out 1906 Athens and 1956 Stockholm
//   response.cityBySlug.olympiads.nodes = response.cityBySlug.olympiads.nodes.filter((olympiad) => {
//     if (olympiad.year === 1906) {
//       return false;
//     }

//     if (olympiad.year === 1956) {
//       if (response.cityBySlug.name === 'Stockholm') {
//         return false;
//       }
//     }
//     return true;
//   });

//   return { city: response.cityBySlug };
// }

const variants = {
  show: {
    y: 0
  },
  hide: {
    y: '100%'
  }
};

function RoutePage() {
  const { width, setRouteSelected, selectedRouteLeg, setSelectedRouteLeg } = useOutletContext();
  // const { city } = useLoaderData();

  // const { amountCompleted, totalOlympiads } = cityStatus(city.olympiads.nodes, visits);

  useEffect(() => {
    if (setRouteSelected) {
      setRouteSelected(true);
    }
  }, [setRouteSelected]);

  return <Selector width={width} selectedRouteLeg={selectedRouteLeg} setSelectedRouteLeg={setSelectedRouteLeg} />;
}

export default RoutePage;
