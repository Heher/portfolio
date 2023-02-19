import { useLoaderData } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';
import { groupBy } from 'lodash';

import { OlympiadType } from '~/components/OlympiadType';
import { getStravaActivities } from '~/utils/getStravaActivities';

// import styles from '~/styles/index.css';
import visitData from '~/data/visits.json';
import SimpleGlobe from '~/components/globe/SimpleGlobe';
import { Suspense, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ModalContainer from '~/components/modal/ModalContainer';
import CitiesList from '~/components/CitiesList';
import useMeasure from 'react-use-measure';
import TripStatus from '~/components/TripStatus';
import { ImageModal } from '~/components/modal/ImageModal';
import type { MetaFunction } from '@remix-run/node';

// export function links() {
//   return [{ rel: 'stylesheet', href: styles }];
// }

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Olympic Trip',
  description: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games.",
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
});

export async function loader() {
  const stravaResponse = await getStravaActivities();

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

  return { olympiads: response.olympiads.nodes, stravaData: stravaResponse };
}

const GlobeFallback = () => {
  return <div>Loading...</div>;
};

function getGlobeContainerPosition(width, showDetails) {
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

function getGlobeHeight(width, routeSelected) {
  if (width < 768) {
    if (routeSelected) {
      return 'h-[100vh]';
    }

    return 'h-[50vh]';
  }

  return 'h-[100vh]';
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
  const [stopScroll, setStopScroll] = useState(false);
  const [selectedImg, setSelectedImg] = useState<boolean | null>(null);

  const [pageContainerRef, { width, height }] = useMeasure({ debounce: 300 });

  const { olympiads, stravaData } = useLoaderData<typeof loader>();

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

    setStopScroll(false);
  }

  // console.log(width);

  return (
    <main
      ref={pageContainerRef}
      className={`relative h-[100dvh] w-full bg-[var(--nav-background)] ${stopScroll ? 'overflow-hidden' : ''}`}
    >
      <div className="body-container mx-auto h-[100dvh] max-w-[var(--max-width)]">
        {(routeSelected || selectedCity || showDetails) && (
          <>
            <div
              className={`globe-background fixed top-0 left-0 ${routeSelected ? 'z-40' : 'z-10'} w-full ${
                routeSelected ? 'route-selected h-[50px]' : 'h-[50vh]'
              }`}
            ></div>
            <button
              className={`fixed ${routeSelected ? 'z-50' : 'z-40'} top-[10px] left-[10px] h-[40px] w-[40px]`}
              type="button"
              onClick={handleBackButton}
            >
              <svg version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#dddddd"
                  d="m296.5 179.83c9.1094-9.1133 9.1094-23.887 0-32.996-9.1133-9.1133-23.887-9.1133-33 0l-81.656 81.656c0.003906-0.003907-0.003906 0.003906 0 0l-35.008 35.008c-4.1523 4.1523-6.4141 9.4766-6.7812 14.906-0.10547 1.5156-0.0625 3.0469 0.13281 4.5703 0.56641 4.4258 2.4023 8.7266 5.5117 12.305 0.40234 0.46484 0.82031 0.91016 1.2578 1.3398l116.54 116.54c9.1133 9.1133 23.887 9.1133 33 0 9.1094-9.1094 9.1094-23.883 0-32.996l-76.836-76.836h317c12.887 0 23.332-10.445 23.332-23.332s-10.445-23.332-23.332-23.332h-317z"
                />
              </svg>
            </button>
          </>
        )}
        <motion.div
          className={`globe-container fixed w-[100vw] ${getGlobeHeight(
            width,
            routeSelected
          )} ${getGlobeContainerPosition(width, showDetails)} z-30 md:right-[-20vw] md:h-[90vh] md:w-[90vw]`}
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
            />
          </Suspense>
        </motion.div>

        <motion.div
          className="body-text px-[30px] pt-[5vh] md:max-w-md"
          animate={{ display: showDetails ? 'none' : 'block' }}
        >
          <h1 className="text-[2.5rem] leading-[1.2] text-slate-100">
            Olympic trip
            <br />
            around the world
          </h1>

          <p className="text-md mt-[30px] text-slate-200">
            Combining my two passions of the Olympics and travelling, I decided to set a goal to travel to all of the
            Olympic cities, see their stadiums (or where they once were), go on a run or a ski trip, and overall just
            enjoy a part of the world I&rsquo;ve never been before.
          </p>
          <TripStatus olympiads={olympiads} visits={visitData.olympiads} />
        </motion.div>

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
