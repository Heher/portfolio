import { Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';
import { groupBy } from 'lodash';

import { getStravaActivities } from '~/utils/getStravaActivities';

import SimpleGlobe from '~/components/globe/SimpleGlobe';
import { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CitiesList from '~/components/CitiesList';
import useMeasure from 'react-use-measure';
import { ImageModal } from '~/components/modal/ImageModal';
import type { MetaFunction } from '@remix-run/node';
import BackButton from '~/components/home/BackButton';
import MainCopy from '~/components/home/MainCopy';
import NewCitiesList from '~/components/NewCitiesList';

import visitData from '~/data/visits.json';
import BackButtonContainer from '~/components/home/BackButtonContainer';

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

function toggleBodyBackground() {
  const body = document.body;

  body.classList.toggle('bg-[var(--globe-background)]');
  body.classList.toggle('bg-[var(--nav-background)]');
}

function getGlobeContainerMaxes(citySelected, moveableGlobe) {
  // if (citySelected && !moveableGlobe) {
  //   return 'clip-container md:max-h-[500px] md:max-w-[500px]';
  // }
  return 'md:max-h-[800px] lg:max-h-[1000px] lg:max-w-[var(--max-width)]';
}

function GlobeFallback() {
  return <div>Loading...</div>;
}

function getGlobeHeight(width, moveableMobile = false, citySelected = false) {
  // if (citySelected) {
  //   return '500px';
  // }

  if (width < 768) {
    if (moveableMobile) {
      return '100vh';
    }
    return '50vh';
  }

  // if (citySelected) {
  //   return '500px';
  // }

  return '100vh';
}

function getGlobeContainerTop(width, showDetails = false, citySelected = false) {
  if (width < 768) {
    if (!showDetails) {
      return 'auto';
    }

    return '0vh';
  }

  if (citySelected) {
    return '-20vh';
  }

  return '0vh';
}

function getMoveableGlobeContainerRight(width, moveableMobile = false) {
  if (moveableMobile) {
    return '0px';
  }

  if (width < 768 || width > 1100) {
    const difference = (width - 1100) / 2;
    return `${difference}px`;
  }

  return `0px`;
}

function getGlobeContainerBottom(width, showDetails = false) {
  if (width < 768 && !showDetails) {
    return '-20vh';
  }

  return 'auto';
}

function getGlobeContainerRight(width, citySelected = false) {
  // Mobile
  if (width < 768) {
    return '0px';
  }

  if (citySelected) {
    return '-200px';
  }

  // XL
  if (width > 2000) {
    const difference = (width - 1100) / 2;
    return `${difference - 500}px`;
  }

  if (width > 1100) {
    const difference = (width - 1100) / 2;
    return `${difference - 1100 * 0.35}px`;
  }

  if (width < 1000) {
    return `-${width * 0.5}px`;
  }

  return `-${width * 0.3}px`;
}

function getGlobeVariant(routeSelected: boolean, moveableGlobe: boolean, showDetails: boolean, citySelected) {
  if (citySelected && !moveableGlobe) {
    return 'citySelected';
  }

  if (showDetails) {
    // Mobile
    if (moveableGlobe) {
      return 'moveableMobile';
    }
    return 'showDetails';
  }

  if (routeSelected || moveableGlobe) {
    return 'moveable';
  }

  return 'notMoveable';
}

const variants = {
  moveable: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width),
    right: getMoveableGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width)
  }),
  notMoveable: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width),
    right: getGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width)
  }),
  showDetails: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width),
    top: getGlobeContainerTop(width, true),
    right: getGlobeContainerRight(width),
    bottom: getGlobeContainerBottom(width, true)
  }),
  moveableMobile: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width, true),
    top: getGlobeContainerTop(width, true),
    right: getMoveableGlobeContainerRight(width, true),
    bottom: getGlobeContainerBottom(width, true)
  }),
  citySelected: (width: number) => ({
    width: '100%',
    height: getGlobeHeight(width, false, true),
    top: getGlobeContainerTop(width, false, true),
    right: getGlobeContainerRight(width, true),
    bottom: getGlobeContainerBottom(width)
  })
};

const cityRegex = /\/trip\/(\w|-)+/g;

export default function TripPage() {
  const location = useLocation();

  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [stopScroll, setStopScroll] = useState(false);
  const [moveableGlobe, setMoveableGlobe] = useState(false);
  const [routeSelected, setRouteSelected] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const [pageContainerRef, { width, height }] = useMeasure({ debounce: 300 });

  const isCityPage = location?.pathname.match(cityRegex);

  useEffect(() => {
    if (location?.pathname === '/' || location?.pathname === '/trip') {
      setSelectedCity(null);
    }
  }, [location.pathname]);

  // const [mainContentRef, { width: mainContentWidth, height: mainContentHeight }] = useMeasure({ debounce: 300 });

  const { olympiads } = useLoaderData<typeof loader>();

  function handleImageModal(img: string | null) {
    const body = document.body;

    body.classList.toggle('bg-slate-200');
    setSelectedImg(img);
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
    <main
      ref={pageContainerRef}
      className={`relative h-[100dvh] w-full bg-[var(--nav-background)] ${stopScroll ? 'overflow-hidden' : ''}`}
    >
      <div className="body-container mx-auto h-[100dvh] max-w-[var(--max-width)]">
        {(routeSelected || selectedCity || showDetails || moveableGlobe) && (
          <BackButtonContainer
            routeSelected={routeSelected}
            moveableGlobe={moveableGlobe}
            width={width}
            handleBackButton={handleBackButton}
            isCityPage={isCityPage}
          />
        )}
        {width && (
          <motion.div
            className={`globe-container fixed z-30 ${getGlobeContainerMaxes(selectedCity, moveableGlobe)} ${
              selectedCity && !moveableGlobe && 'clip-container'
            } @container`}
            custom={width}
            variants={variants}
            animate={getGlobeVariant(routeSelected, moveableGlobe, showDetails, selectedCity)}
            transition={{ type: 'tween', ease: 'anticipate', duration: 0.6 }}
            initial={false}
          >
            <Suspense fallback={<GlobeFallback />}>
              <SimpleGlobe
                visits={visitData.olympiads}
                selectedCity={selectedCity}
                routeSelected={routeSelected}
                showDetails={width >= 768 ? true : showDetails}
                width={width}
                moveable={moveableGlobe}
                setMoveable={() => setMoveableGlobe(true)}
              />
            </Suspense>
          </motion.div>
        )}
        <AnimatePresence>
          <Outlet
            context={{
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
              visits: visitData.olympiads
            }}
          />
        </AnimatePresence>
        {selectedImg && <ImageModal img={selectedImg} closeModal={() => handleImageModal(null)} />}
      </div>
    </main>
  );
}
