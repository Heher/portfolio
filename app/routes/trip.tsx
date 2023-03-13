import { Outlet, useLocation, useOutletContext } from '@remix-run/react';

import { SimpleGlobe } from '~/components/globe/SimpleGlobe';
import { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { ImageModal } from '~/components/modal/ImageModal';
import type { MetaFunction } from '@remix-run/node';

import visits from '~/data/new-visits';
import BackButtonContainer from '~/components/home/BackButtonContainer';
import {
  citySelectedPositioning,
  moveableMobilePositioning,
  moveablePositioning,
  notMoveablePositioning,
  showDetailsPositioning
} from '~/components/globe/globePositioning';
import type { Visit } from 'types/globe';
import ErrorBoundarySimple from '~/components/ErrorBoundary';

type ContextType = {
  handleImageModal: (img: string | null) => void;
  setStopScroll: (stop: boolean) => void;
  width: number;
  selectedCity: string | null;
  setSelectedCity: (city: string | null) => void;
  moveableGlobe: boolean;
  setMoveableGlobe: (moveable: boolean) => void;
  routeSelected: boolean;
  setRouteSelected: (selected: boolean) => void;
  showDetails: boolean;
  setShowDetails: (show: boolean) => void;
  visits: Visit[];
  toggleBodyBackground: () => void;
  selectedRouteLeg: number;
  setSelectedRouteLeg: (leg: number) => void;
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'John Heher | Olympic Trip',
  description: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games.",
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  'og:title': 'John Heher | Olympic Trip',
  'og:image': '/olympic-cities-og.jpg'
});

// export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
//   console.log('ERROR from boundary: ', error);
//   return <div className="h-[300px] w-[300px] bg-red-400">Error</div>;
// };

// export function CatchBoundary() {
//   const caught = useCatch();

//   return (
//     <div>
//       <h1>Caught</h1>
//       <p>Status: {caught.status}</p>
//       <pre>
//         <code>{JSON.stringify(caught.data, null, 2)}</code>
//       </pre>
//     </div>
//   );
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
  citySelected: string | null,
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
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedRouteLeg, setSelectedRouteLeg] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [pageContainerRef, { width }] = useMeasure({ debounce: 300 });

  const isCityPage = location?.pathname.match(cityRegex);

  useEffect(() => {
    if (location?.pathname === '/' || location?.pathname === '/trip') {
      setSelectedCity(null);
      setRouteSelected(false);
      setSelectedRouteLeg(0);
    }
  }, [location.pathname]);

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
            <ErrorBoundarySimple>
              <Suspense fallback={<GlobeFallback />}>
                <SimpleGlobe
                  visits={visits}
                  selectedCity={selectedCity}
                  routeSelected={routeSelected}
                  showDetails={width >= 768 ? true : showDetails}
                  width={width}
                  moveable={moveableGlobe}
                  setMoveable={() => setMoveableGlobe(true)}
                  selectedRouteLeg={selectedRouteLeg}
                />
              </Suspense>
            </ErrorBoundarySimple>
          </motion.div>
        )}
        <AnimatePresence mode="wait">
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
              visits,
              toggleBodyBackground,
              selectedRouteLeg,
              setSelectedRouteLeg,
              loaded,
              setLoaded
            }}
          />
        </AnimatePresence>
        {selectedImg && <ImageModal img={selectedImg} closeModal={() => handleImageModal(null)} />}
      </div>
    </main>
  );
}

export const useTripContext = () => {
  return useOutletContext<ContextType>();
};
