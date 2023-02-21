import { useLoaderData } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';
import { groupBy } from 'lodash';

import { getStravaActivities } from '~/utils/getStravaActivities';

import visitData from '~/data/visits.json';
import SimpleGlobe from '~/components/globe/SimpleGlobe';
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import CitiesList from '~/components/CitiesList';
import useMeasure from 'react-use-measure';
import { ImageModal } from '~/components/modal/ImageModal';
import type { MetaFunction } from '@remix-run/node';
import BackButton from '~/components/home/BackButton';
import MainCopy from '~/components/home/MainCopy';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Olympic Trip',
  description: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games.",
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
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

function GlobeFallback() {
  return <div>Loading...</div>;
}

function getGlobeContainerPosition(width: number, showDetails: boolean) {
  if (width < 768) {
    if (showDetails) {
      return 'bottom-auto top-0';
    }

    return 'bottom-[-20vh] top-auto';
  }

  return 'top-0 bottom-auto';
}

function getBottomPosition(width: number, showDetails: boolean) {
  if (width < 768) {
    if (showDetails) {
      return 'auto';
    }

    return '-20vh';
  }

  return 'auto';
}

function getTopPosition(width: number, showDetails: boolean) {
  if (width < 768 && showDetails) {
    return '0';
  }

  return 'auto';
}

function getGlobeHeight(width: number, routeSelected: boolean, moveableGlobe: boolean) {
  if (width < 768) {
    if (routeSelected || moveableGlobe) {
      return 'h-[100vh]';
    }

    return 'h-[50vh]';
  }

  return 'h-[100vh]';
}

function getGlobeStyles(
  width: number,
  showDetails: boolean,
  routeSelected: boolean,
  moveableGlobe: boolean,
  selectedCity: any
) {
  // let top = 'top-0';
  // let bottom = 'bottom-0';
  // let right = 'right-0';

  const styles = [];

  if (width < 768) {
    if (showDetails) {
      if (routeSelected || moveableGlobe) {
        styles.push('top-0 bottom-0 right-0');
      } else {
        styles.push('top-0 bottom-auto right-0');
      }
    } else {
      styles.push('top-auto bottom-[-20vh] right-0');
    }
  } else {
    if (routeSelected || moveableGlobe) {
      styles.push('md:top-0 md:bottom-0 md:right-0 lg:top-0 lg:bottom-0 lg:right-0');
    } else {
      styles.push(
        `md:top-0 md:bottom-auto ${
          selectedCity ? 'md:right-0 lg:right-0' : 'md:right-[-40vw] lg:right-[-20vw]'
        } lg:top-0 lg:bottom-auto`
      );
    }
  }

  return styles[0];
}

function toggleBodyBackground() {
  const body = document.body;

  body.classList.toggle('bg-[var(--globe-background)]');
  body.classList.toggle('bg-[var(--nav-background)]');
}

export default function TripPage() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [routeSelected, setRouteSelected] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [moveableGlobe, setMoveableGlobe] = useState(false);
  const [stopScroll, setStopScroll] = useState(false);
  const [selectedImg, setSelectedImg] = useState<boolean | null>(null);

  const [pageContainerRef, { width, height }] = useMeasure({ debounce: 300 });

  const { olympiads } = useLoaderData<typeof loader>();

  // const separatedOlympiads = groupBy(olympiads, (olympiad) => olympiad.olympiadType);

  const groupedOlympiads = groupBy(olympiads, (olympiad) => olympiad.city.id);

  function handleImageModal(show = true) {
    const body = document.body;

    body.classList.toggle('bg-slate-200');
    setSelectedImg(show);
  }

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

  function handleBackButton() {
    if (moveableGlobe) {
      setMoveableGlobe(false);
    } else {
      if (routeSelected) {
        setRouteSelected(false);
      }

      if (selectedCity) {
        setSelectedCity(null);
      }

      if (!selectedCity && !routeSelected && showDetails) {
        setShowDetails(false);
        toggleBodyBackground();
      }
    }

    setStopScroll(false);
  }

  return (
    <main
      ref={pageContainerRef}
      className={`relative h-[100dvh] w-full bg-[var(--nav-background)] ${stopScroll ? 'overflow-hidden' : ''}`}
    >
      <div className="body-container mx-auto h-[100dvh] max-w-[var(--max-width)]">
        {(routeSelected || selectedCity || showDetails || moveableGlobe) && (
          <>
            <div
              className={`globe-background fixed top-0 left-0 ${
                routeSelected || moveableGlobe ? 'z-40' : 'z-10'
              } w-full ${routeSelected || moveableGlobe ? 'route-selected h-[50px]' : 'h-[50vh]'}`}
            ></div>
            <BackButton
              routeSelected={routeSelected}
              globeMoveable={moveableGlobe}
              handleBackButton={handleBackButton}
            />
          </>
        )}
        <motion.div
          className={`globe-container fixed w-[100vw] ${getGlobeHeight(
            width,
            routeSelected,
            moveableGlobe
          )} ${getGlobeStyles(
            width,
            showDetails,
            routeSelected,
            moveableGlobe,
            selectedCity
          )} z-30 md:max-h-[800px] lg:max-h-[1000px] ${selectedCity && !moveableGlobe && 'clip-container'} ${
            moveableGlobe ? 'md:h-[100vh] md:w-[100vw]' : 'md:h-[90vh] md:w-[90vw]'
          }`}
          animate={
            width < 768
              ? {
                  bottom: getBottomPosition(width, showDetails),
                  top: getTopPosition(width, showDetails)
                }
              : {
                  bottom: 'auto',
                  top: 'auto'
                }
          }
          transition={{ type: 'tween', ease: 'anticipate', duration: 0.6 }}
        >
          <Suspense fallback={<GlobeFallback />}>
            <SimpleGlobe
              visits={visitData.olympiads}
              selectedCity={selectedCity}
              routeSelected={routeSelected}
              showDetails={showDetails}
              width={width}
              moveable={moveableGlobe}
              setMoveable={() => setMoveableGlobe(true)}
            />
          </Suspense>
        </motion.div>

        <MainCopy
          showDetails={showDetails}
          olympiads={olympiads}
          visits={visitData.olympiads}
          globeMoveable={moveableGlobe}
        />

        <CitiesList
          olympiadList={groupedOlympiads}
          visits={visitData.olympiads}
          handleCitySelection={handleCitySelection}
          selectedCity={selectedCity}
          routeSelected={routeSelected}
          handleRouteSelection={handleRouteSelection}
          showDetails={showDetails}
          width={width}
          setSelectedImg={handleImageModal}
          globeMoveable={moveableGlobe}
        />
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
        {selectedImg && <ImageModal img={selectedImg} closeModal={() => handleImageModal(false)} />}
      </div>
    </main>
  );
}
