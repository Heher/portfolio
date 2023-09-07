import { Outlet, useLocation, useOutlet, useOutletContext } from '@remix-run/react';

import { GlobeContainer } from '~/components/globe/GlobeContainer';
import type { Dispatch } from 'react';
import { Suspense, useEffect, useReducer, createContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { ImageModal } from '~/components/modal/ImageModal';
import type { V2_MetaFunction } from '@remix-run/node';

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

// type DispatchContextType = {
//   handleImageModal: (img: string | null) => void;
// };

type TripPageState = {
  selectedImage: string | null;
  moveableGlobe: boolean;
  routeSelected: boolean;
  showDetails: boolean;
  selectedCity: string | null;
  selectedRouteLeg: number;
  loaded: boolean;
};

export type ContextType = TripPageState & {
  width: number;
  visits: Visit[];
};

export type OutletContextType = {
  handleImageModal: (img: string | null) => void;
  width: number;
  visits: Visit[];
  toggleBodyBackground: () => void;
  appState: TripPageState;
  dispatch: Dispatch<any>;
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'John Heher | Olympic Trip' },
    {
      name: 'description',
      content: "John Heher's Olympic trip: visiting every city that has hosted the Olympic Games."
    },
    {
      name: 'og:title',
      content: 'John Heher | Olympic Trip'
    },
    {
      name: 'og:image',
      content: '/olympic-cities-og.jpg'
    }
  ];
};

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

type Action =
  | { type: 'IMAGE'; selectedImage: string | null }
  | { type: 'MOVEABLE_GLOBE'; moveableGlobe: boolean }
  | { type: 'ROUTE_SELECTED'; routeSelected: boolean }
  | { type: 'SHOW_DETAILS'; showDetails: boolean }
  | { type: 'SELECTED_CITY'; selectedCity: string | null }
  | { type: 'SELECTED_ROUTE_LEG'; selectedRouteLeg: number }
  | { type: 'LOADED'; loaded: boolean };

const reducer = (state: TripPageState, action: Action) => {
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

const initialState: TripPageState = {
  selectedImage: null,
  moveableGlobe: false,
  routeSelected: false,
  showDetails: false,
  selectedCity: null,
  selectedRouteLeg: 0,
  loaded: false
};

export default function TripPage() {
  const location = useLocation();

  const [stopScroll, setStopScroll] = useState<boolean>(false);

  const [state, dispatch] = useReducer(reducer, initialState);

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

  // const outlet = useOutlet({
  //   handleImageModal,
  //   width,
  //   visits,
  //   toggleBodyBackground,
  //   appState: state,
  //   dispatch
  // });

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
      // className={`relative h-[100dvh] w-full ${!selectedCity && 'bg-[var(--nav-background)]'} ${
      //   stopScroll ? 'overflow-hidden' : ''
      // }`}
      className={`relative mx-auto min-h-[100dvh] w-full max-w-[var(--max-width)]`}
      // key={location.key}
      // initial={{ x: -150, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // exit={{ x: -150, opacity: 0 }}
      // transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="body-container mx-auto h-[100dvh] max-w-[var(--max-width)]">
        {/* {(routeSelected || selectedCity || (showDetails && width < 768) || moveableGlobe) && (
          <TripPageContext.Provider value={{ ...state, width, visits }}>
            <BackButtonContainer handleBackButton={handleBackButton} isCityPage={isCityPage} />
          </TripPageContext.Provider>
        )} */}
        {width > 0 && (
          <motion.div
            className={`globe-container fixed left-0 top-0 -z-0 h-full w-full `}
            transition={{ type: 'tween', ease: 'anticipate', duration: 0.6 }}
            initial={false}
          >
            <Suspense fallback={<GlobeFallback />}>
              <TripPageContext.Provider value={{ ...state, width, visits }}>
                <TripPageDispatchContext.Provider value={dispatch}>
                  <GlobeContainer />
                </TripPageDispatchContext.Provider>
              </TripPageContext.Provider>
            </Suspense>
          </motion.div>
        )}
        {/* <a href="/trip/athens" className="absolute left-0 top-0 z-50">
          Athens
        </a> */}
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
          {/* <motion.div key={useLocation().pathname}>{outlet}</motion.div> */}
        </AnimatePresence>
        <AnimatePresence>
          {selectedCity && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-1/3 z-20 h-[67dvh] w-full max-w-[var(--max-width)] bg-[#e0e0e0]"
              // layout
              // layoutId="athens"
            >
              {/* <CityPageInner city={loaderData?.city} dispatch={dispatch} visits={visits} /> */}
            </motion.div>
          )}
        </AnimatePresence>
        {selectedImage && <ImageModal img={selectedImage} closeModal={() => handleImageModal(null)} />}
      </div>
    </main>
  );
}

export const useTripContext = () => {
  return useOutletContext<OutletContextType>();
};
