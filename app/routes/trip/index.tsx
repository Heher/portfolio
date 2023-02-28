import { useLoaderData, useOutletContext } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';
import { groupBy } from 'lodash';

import type { MetaFunction } from '@remix-run/node';
import MainCopy from '~/components/home/MainCopy';
import { CitiesList } from '~/components/CitiesList';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Olympic Trip | John Heher',
  description: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games.",
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  'og:title': 'Olympic Trip | John Heher',
  'og:image': '/olympic-cities-og.jpg'
});

type OlympiadType = 'SUMMER' | 'WINTER';

export type OlympiadsResponse = {
  olympiads: {
    nodes: {
      id: string;
      year: number;
      olympiadType: OlympiadType;
      city: {
        id: string;
        name: string;
        slug: string;
        country: {
          name: string;
          flagByTimestamp: {
            png: string;
          };
        };
      };
    }[];
  };
};

export async function loader() {
  // const stravaResponse = await getStravaActivities();

  const now = new Date().toISOString();

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
              flagByTimestamp(
                dateTimestamp: { start: { value: "${now}", inclusive: true }, end: { value: "${now}", inclusive: true } }
              ) {
                png
              }
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

  return { olympiads: response.olympiads.nodes };
}

const animationVariants = {
  hidden: { opacity: 0, x: '-150px', transition: { duration: 0.3 } },
  visible: { opacity: 1, x: '0px', transition: { duration: 0.3 } }
};

function getCitiesListVisibility(width, showDetails) {
  if (width >= 768) {
    return true;
  }

  if (showDetails) {
    return true;
  }

  return false;
}

export default function TripIndex() {
  const {
    width,
    moveableGlobe,
    routeSelected,
    showDetails,
    setShowDetails,
    visits,
    toggleBodyBackground,
    setRouteSelected
  } = useOutletContext();

  const { olympiads } = useLoaderData<typeof loader>();

  const groupedOlympiads = groupBy(olympiads, (olympiad) => olympiad.city.id);

  return (
    <div>
      <MainCopy
        showDetails={showDetails}
        olympiads={olympiads}
        visits={visits}
        globeMoveable={moveableGlobe}
        routeSelected={routeSelected}
        variants={animationVariants}
      />

      {getCitiesListVisibility(width, showDetails) && (
        <CitiesList
          olympiadList={groupedOlympiads}
          visits={visits}
          variants={animationVariants}
          globeMoveable={moveableGlobe}
          routeSelected={routeSelected}
          setRouteSelected={setRouteSelected}
        />
      )}
      {!showDetails && width < 768 && (
        <button
          className={`absolute bottom-[50px] left-1/2 z-30 translate-x-[-50%] rounded-[4px] border border-solid border-slate-400 bg-[var(--globe-background)] px-[30px] py-[15px] font-semibold uppercase text-slate-200`}
          type="button"
          onClick={() => {
            toggleBodyBackground();
            setShowDetails(true);
          }}
        >
          Details
        </button>
      )}
    </div>
  );
}
