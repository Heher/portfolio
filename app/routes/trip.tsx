import { Outlet, useLoaderData, useLocation } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';

// import { getStravaActivities } from '~/utils/getStravaActivities';

import { SimpleGlobe } from '~/components/globe/SimpleGlobe';
import { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { ImageModal } from '~/components/modal/ImageModal';
import type { MetaFunction } from '@remix-run/node';

import visitData from '~/data/visits.json';
import BackButtonContainer from '~/components/home/BackButtonContainer';
import {
  citySelectedPositioning,
  moveableMobilePositioning,
  moveablePositioning,
  notMoveablePositioning,
  showDetailsPositioning
} from '~/components/globe/globePositioning';

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

// export async function loader() {
//   // const stravaResponse = await getStravaActivities();

//   const now = new Date().toISOString();

//   const query = gql`
//     {
//       olympiads(orderBy: YEAR_ASC) {
//         nodes {
//           id
//           year
//           olympiadType
//           city {
//             id
//             name
//             slug
//             country {
//               name
//               flagByTimestamp(
//                 dateTimestamp: { start: { value: "${now}", inclusive: true }, end: { value: "${now}", inclusive: true } }
//               ) {
//                 png
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   const graphQLClient = new GraphQLClient(process.env.API_ENDPOINT || '');

//   const response = await graphQLClient.request(query);

//   //* filter out 1906 Athens and 1956 Stockholm
//   response.olympiads.nodes = response.olympiads.nodes.filter((olympiad) => {
//     if (olympiad.year === 1906) {
//       return false;
//     }

//     if (olympiad.year === 1956) {
//       if (olympiad.city.name === 'Stockholm') {
//         return false;
//       }
//     }
//     return true;
//   });

//   return { olympiads: response.olympiads.nodes };
// }

function toggleBodyBackground() {
  const body = document.body;

  body.classList.toggle('bg-[var(--globe-background)]');
  body.classList.toggle('bg-[var(--nav-background)]');
}

function GlobeFallback() {
  return <div>Loading...</div>;
}

function getGlobeVariant(
  routeSelected: boolean,
  moveableGlobe: boolean,
  showDetails: boolean,
  citySelected: boolean,
  width: number
) {
  if (citySelected && !moveableGlobe) {
    return 'citySelected';
  }

  if (routeSelected || moveableGlobe) {
    if (width < 768) {
      // Mobile
      return 'moveableMobile';
    }
    return 'moveable';
  }

  if (showDetails) {
    return 'showDetails';
  }

  return 'notMoveable';
}

const variants = {
  moveable: (width: number) => moveablePositioning(width),
  notMoveable: (width: number) => notMoveablePositioning(width),
  showDetails: (width: number) => showDetailsPositioning(width),
  moveableMobile: (width: number) => moveableMobilePositioning(width),
  citySelected: (width: number) => citySelectedPositioning(width)
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
  const [selectedRouteLeg, setSelectedRouteLeg] = useState(0);

  const [pageContainerRef, { width }] = useMeasure({ debounce: 300 });

  const isCityPage = location?.pathname.match(cityRegex);

  useEffect(() => {
    if (location?.pathname === '/' || location?.pathname === '/trip') {
      setSelectedCity(null);
      setRouteSelected(false);
      setSelectedRouteLeg(0);
    }
  }, [location.pathname]);

  // const { olympiads } = useLoaderData<typeof loader>();

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
            className={`globe-container fixed z-30 md:max-h-[800px] lg:max-h-[1000px] lg:max-w-[var(--max-width)] ${
              selectedCity && !moveableGlobe && 'clip-container'
            } ${selectedCity && !moveableGlobe && width < 768 && 'mobile'}`}
            custom={width}
            variants={variants}
            animate={getGlobeVariant(routeSelected, moveableGlobe, showDetails, selectedCity, width)}
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
                selectedRouteLeg={selectedRouteLeg}
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
              visits: visitData.olympiads,
              toggleBodyBackground,
              selectedRouteLeg,
              setSelectedRouteLeg
            }}
          />
        </AnimatePresence>
        {selectedImg && <ImageModal img={selectedImg} closeModal={() => handleImageModal(null)} />}
      </div>
    </main>
  );
}
