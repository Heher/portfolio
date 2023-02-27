import { useLoaderData, useOutletContext } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';
import { groupBy } from 'lodash';

import { getStravaActivities } from '~/utils/getStravaActivities';

import SimpleGlobe from '~/components/globe/SimpleGlobe';
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import CitiesList from '~/components/CitiesList';
import useMeasure from 'react-use-measure';
import { ImageModal } from '~/components/modal/ImageModal';
import type { MetaFunction } from '@remix-run/node';
import BackButton from '~/components/home/BackButton';
import MainCopy from '~/components/home/MainCopy';
import NewCitiesList from '~/components/NewCitiesList';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Olympic Trip',
  description: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games.",
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  'og:title': 'John Heher | Olympic Trip',
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

// function getGlobeContainerPosition(width: number, showDetails: boolean) {
//   if (width < 768) {
//     if (showDetails) {
//       return 'bottom-auto top-0';
//     }

//     return 'bottom-[-20vh] top-auto';
//   }

//   return 'top-0 bottom-auto';
// }

// function getBottomPosition(width: number, showDetails: boolean) {
//   if (width < 768) {
//     if (showDetails) {
//       return 'auto';
//     }

//     return '-20vh';
//   }

//   return 'auto';
// }

// function getTopPosition(width: number, showDetails: boolean) {
//   if (width < 768 && showDetails) {
//     return '0';
//   }

//   return 'auto';
// }

// function getGlobeHeight(width: number, routeSelected: boolean, moveableGlobe: boolean) {
//   if (width < 768) {
//     if (routeSelected || moveableGlobe) {
//       return 'h-[100vh]';
//     }

//     return 'h-[50vh]';
//   }

//   return 'h-[100vh]';
// }

// function getGlobeStyles(
//   width: number,
//   showDetails: boolean,
//   routeSelected: boolean,
//   moveableGlobe: boolean,
//   selectedCity: any
// ) {
//   // let top = 'top-0';
//   // let bottom = 'bottom-0';
//   // let right = 'right-0';

//   const styles = [];

//   if (width < 768) {
//     if (showDetails) {
//       if (routeSelected || moveableGlobe) {
//         styles.push('top-0 bottom-0 right-0');
//       } else {
//         styles.push('top-0 bottom-auto right-0');
//       }
//     } else {
//       styles.push('top-auto bottom-[-20vh] right-0');
//     }
//   } else {
//     if (routeSelected || moveableGlobe) {
//       styles.push('md:top-0 md:bottom-0 lg:top-0 lg:bottom-0 ');
//     } else {
//       styles.push(`md:top-0 md:bottom-auto ${selectedCity ? '' : 'md:right-[-40vw]'} lg:top-0 lg:bottom-auto`);
//     }
//   }

//   return styles[0];
// }

export default function TripIndex() {
  const {
    handleImageModal,
    setStopScroll,
    width,
    selectedCity,
    setSelectedCity,
    moveableGlobe,
    setMoveableGlobe,
    routeSelected,
    setRouteSelected,
    showDetails,
    setShowDetails,
    visits
  } = useOutletContext();

  // const [mainContentRef, { width: mainContentWidth, height: mainContentHeight }] = useMeasure({ debounce: 300 });

  const { olympiads } = useLoaderData<typeof loader>();

  // const separatedOlympiads = groupBy(olympiads, (olympiad) => olympiad.olympiadType);

  const groupedOlympiads = groupBy(olympiads, (olympiad) => olympiad.city.id);

  function handleCitySelection(city) {
    if (selectedCity) {
      setStopScroll(false);
      setSelectedCity(null);
    } else {
      setStopScroll(true);
      setSelectedCity(city);
    }

    // setSelectedCity(city);
  }

  function handleRouteSelection() {
    if (routeSelected) {
      setRouteSelected(false);
    } else {
      setRouteSelected(true);
    }
  }

  return (
    <div>
      <MainCopy
        showDetails={showDetails}
        olympiads={olympiads}
        visits={visits}
        globeMoveable={moveableGlobe}
        routeSelected={routeSelected}
      />

      {width && (
        <NewCitiesList
          olympiadList={groupedOlympiads}
          visits={visits}
          handleCitySelection={handleCitySelection}
          selectedCity={selectedCity}
          routeSelected={routeSelected}
          handleRouteSelection={handleRouteSelection}
          showDetails={showDetails}
          width={width}
          handleImageModal={handleImageModal}
          globeMoveable={moveableGlobe}
          routeSelected={routeSelected}
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
