import { Outlet, useLocation, useOutletContext } from '@remix-run/react';

import { GlobeContainer } from '~/components/globe/GlobeContainer';
import type { Dispatch } from 'react';
import { Suspense, useEffect, useReducer, createContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { ImageModal } from '~/components/modal/ImageModal';
import type { MetaFunction } from '@remix-run/node';

import visits from '~/data/new-visits';
import BackButtonContainer from '~/components/home/BackButtonContainer';
// import {
//   citySelectedPositioning,
//   moveableMobilePositioning,
//   moveablePositioning,
//   notMoveablePositioning,
//   showDetailsPositioning
// } from '~/components/globe/globePositioning';
import type { Visit } from 'types/globe';
import ErrorBoundarySimple from '~/components/ErrorBoundary';

// type DispatchContextType = {
//   handleImageModal: (img: string | null) => void;
// };

type ContextType = {
  selectedImage: string | null;
  stopScroll: boolean;
  moveableGlobe: boolean;
  routeSelected: boolean;
  showDetails: boolean;
  selectedCity: string | null;
  selectedRouteLeg: number;
  loaded: boolean;
  width: number;
  visits: Visit[];
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

// function getGlobeVariant(
//   routeSelected: boolean,
//   moveableGlobe: boolean,
//   showDetails: boolean,
//   citySelected: string | null,
//   width: number
// ) {
//   if (citySelected && !moveableGlobe) {
//     return 'citySelected';
//   }

//   if (routeSelected || moveableGlobe) {
//     if (width < 768) {
//       // Mobile
//       return 'moveableMobile';
//     }
//     return 'moveable';
//   }

//   if (showDetails) {
//     return 'showDetails';
//   }

//   return 'notMoveable';
// }

// const variants = {
//   moveable: (width: number) => moveablePositioning(width),
//   notMoveable: (width: number) => notMoveablePositioning(width),
//   showDetails: (width: number) => showDetailsPositioning(width),
//   moveableMobile: (width: number) => moveableMobilePositioning(width),
//   citySelected: (width: number) => citySelectedPositioning(width)
// };

const reducer = (state, action) => {
  switch (action.type) {
    case 'IMAGE':
      return { ...state, selectedImage: action.selectedImage };
    case 'MOVEABLE_GLOBE':
      return { ...state, moveableGlobe: action.moveableGlobe };
    case 'ROUTE_SELECTED':
      return { ...state, routeSelected: action.routeSelected };
    case 'SHOW_DETAILS':
      return { ...state, showDetails: action.showDetails };
    case 'SELECTED_CITY':
      return { ...state, selectedCity: action.selectedCity };
    case 'SELECTED_ROUTE_LEG':
      return { ...state, selectedRouteLeg: action.selectedRouteLeg };
    case 'LOADED':
      return { ...state, loaded: action.loaded };
    default:
      return state;
  }
};

const cityRegex = /\/trip\/(\w|-)+/g;

export const TripPageContext = createContext<ContextType | null>(null);
export const TripPageDispatchContext = createContext<Dispatch<any> | null>(null);

export default function TripPage() {
  const location = useLocation();

  const [stopScroll, setStopScroll] = useState<boolean>(false);

  const [state, dispatch] = useReducer(reducer, {
    selectedImage: null,
    moveableGlobe: false,
    routeSelected: false,
    showDetails: false,
    selectedCity: null,
    selectedRouteLeg: 0,
    loaded: false
  });

  const { selectedImage, moveableGlobe, routeSelected, showDetails, selectedCity } = state;

  const [pageContainerRef, { width }] = useMeasure({ debounce: 300 });

  const isCityPage = location?.pathname.match(cityRegex);

  // useEffect(() => {
  //   const root = document.documentElement;
  //   root.style.setProperty('--body-background', 'var(--nav-background)');
  // }, []);

  useEffect(() => {
    if (location?.pathname === '/' || location?.pathname === '/trip') {
      dispatch({ type: 'SELECTED_CITY', selectedCity: null });
      dispatch({ type: 'ROUTE_SELECTED', routeSelected: false });
      dispatch({ type: 'SELECTED_ROUTE_LEG', selectedRouteLeg: 0 });
    }
  }, [location.pathname]);

  function handleImageModal(img: string | null) {
    const body = document.body;

    body.classList.toggle('bg-slate-200');
    dispatch({ type: 'IMAGE', selectedImage: img });
  }

  function handleBackButton() {
    if (moveableGlobe) {
      dispatch({ type: 'MOVEABLE_GLOBE', moveableGlobe: false });
    } else {
      if (routeSelected) {
        dispatch({ type: 'ROUTE_SELECTED', routeSelected: false });
      }

      if (selectedCity) {
        dispatch({ type: 'SELECTED_CITY', selectedCity: null });
      }

      if (!selectedCity && !routeSelected && showDetails) {
        dispatch({ type: 'SHOW_DETAILS', showDetails: false });
        toggleBodyBackground();
      }
    }

    setStopScroll(false);
  }

  return (
    <main
      ref={pageContainerRef}
      className={`relative h-[100dvh] w-full ${!selectedCity && 'bg-[var(--nav-background)]'} ${
        stopScroll ? 'overflow-hidden' : ''
      }`}
    >
      <div className="body-container mx-auto h-[100dvh] max-w-[var(--max-width)]">
        {(routeSelected || selectedCity || (showDetails && width < 768) || moveableGlobe) && (
          <TripPageContext.Provider value={{ ...state, width, visits }}>
            <BackButtonContainer handleBackButton={handleBackButton} isCityPage={isCityPage} />
          </TripPageContext.Provider>
        )}
        {width > 0 && (
          // <motion.div
          //   className={`globe-container fixed z-30 md:max-h-[800px] lg:max-h-[1000px] lg:max-w-[var(--max-width)] ${
          //     selectedCity && !moveableGlobe && 'clip-container'
          //   } ${selectedCity && !moveableGlobe && width < 768 && 'mobile'}`}
          //   custom={width}
          //   variants={variants}
          //   animate={getGlobeVariant(routeSelected, moveableGlobe, showDetails, selectedCity, width)}
          //   transition={{ type: 'tween', ease: 'anticipate', duration: 0.6 }}
          //   initial={false}
          // >
          <motion.div
            className={`globe-container fixed -z-0 h-full w-full`}
            transition={{ type: 'tween', ease: 'anticipate', duration: 0.6 }}
            initial={false}
          >
            <ErrorBoundarySimple>
              <Suspense fallback={<GlobeFallback />}>
                <TripPageContext.Provider value={{ ...state, width, visits }}>
                  <TripPageDispatchContext.Provider value={dispatch}>
                    <GlobeContainer />
                  </TripPageDispatchContext.Provider>
                </TripPageContext.Provider>
              </Suspense>
            </ErrorBoundarySimple>
          </motion.div>
        )}
        <AnimatePresence mode="wait">
          <Outlet
            context={{
              handleImageModal,
              width,
              visits,
              toggleBodyBackground,
              appState: state,
              dispatch
            }}
          />
        </AnimatePresence>
        {selectedImage && <ImageModal img={selectedImage} closeModal={() => handleImageModal(null)} />}
      </div>
    </main>
  );
}

export const useTripContext = () => {
  return useOutletContext<ContextType>();
};
