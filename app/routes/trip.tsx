import { Outlet, useLocation, useOutletContext } from '@remix-run/react';

// import { GlobeContainer } from '~/components/globe/GlobeContainer';
import type { Dispatch } from 'react';
import { Suspense, useEffect, useReducer, createContext, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { ImageModal } from '~/components/modal/ImageModal';
import type { MetaFunction } from '@remix-run/node';

import visits from '~/data/visits';
import type { Visit } from 'types/globe';
import CitySlider from '~/components/olympiad-city/CitySlider';
import TestGlobe from '~/components/TestGlobe';

const LazyGlobe = lazy(() => import('~/components/globe/GlobeContainer'));

type TripPageState = {
  selectedImage: string | null;
  moveableGlobe: boolean;
  selectedCity: string | null;
  selectedCityData: any | null;
  selectedRouteLeg: number | null;
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

export const meta: MetaFunction = () => {
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

  body.classList.toggle('bg-globe-background');
  body.classList.toggle('bg-nav-background');
}

function GlobeFallback() {
  return <div>Loading...</div>;
}

type Action =
  | { type: 'IMAGE'; selectedImage: string | null }
  | { type: 'MOVEABLE_GLOBE'; moveableGlobe: boolean }
  | { type: 'SELECTED_CITY'; selectedCity: string | null }
  | { type: 'SELECTED_CITY_DATA'; selectedCityData: any | null }
  | { type: 'SELECTED_ROUTE_LEG'; selectedRouteLeg: number | null }
  | { type: 'LOADED'; loaded: boolean };

const reducer = (state: TripPageState, action: Action) => {
  switch (action.type) {
    case 'IMAGE':
      return { ...state, selectedImage: action.selectedImage };
    case 'MOVEABLE_GLOBE':
      return { ...state, moveableGlobe: action.moveableGlobe };
    case 'SELECTED_CITY':
      return { ...state, selectedCity: action.selectedCity };
    case 'SELECTED_CITY_DATA':
      return { ...state, selectedCityData: action.selectedCityData };
    case 'SELECTED_ROUTE_LEG':
      return { ...state, selectedRouteLeg: action.selectedRouteLeg };
    case 'LOADED':
      return { ...state, loaded: action.loaded };
    default:
      return state;
  }
};

export const TripPageContext = createContext<ContextType | null>(null);

const initialState: TripPageState = {
  selectedImage: null,
  moveableGlobe: false,
  selectedCity: null,
  selectedCityData: null,
  selectedRouteLeg: null,
  loaded: false
};

export default function TripPage() {
  const location = useLocation();

  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log('STATE', state);

  const { selectedImage, selectedCity, selectedCityData } = state;

  const [pageContainerRef, { width }] = useMeasure({ debounce: 300 });

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/trip') {
      dispatch({ type: 'SELECTED_CITY', selectedCity: null });
      dispatch({ type: 'SELECTED_ROUTE_LEG', selectedRouteLeg: null });
    }
  }, [location.pathname]);

  function handleImageModal(img: string | null) {
    const body = document.body;

    body.classList.toggle('bg-slate-200');
    dispatch({ type: 'IMAGE', selectedImage: img });
  }

  return (
    <main ref={pageContainerRef} className={`relative mx-auto min-h-dvh w-full max-w-[var(--max-width)]`}>
      <div className="fixed left-0 top-0 z-[-1] size-full min-h-dvh bg-gradient-to-b from-globe-background to-nav-background to-50%"></div>
      <div className="mx-auto h-dvh max-w-[var(--max-width)]">
        <div className={`fixed inset-0 z-0 size-full`}>
          <Suspense fallback={<GlobeFallback />}>
            <TripPageContext.Provider value={{ ...state, width, visits }}>
              <LazyGlobe />
            </TripPageContext.Provider>
          </Suspense>
          {/* <TestGlobe /> */}
        </div>

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
        <AnimatePresence>
          {selectedCity && <CitySlider data={selectedCityData} visits={visits} handleImageModal={handleImageModal} />}
        </AnimatePresence>
        {selectedImage && (
          <ImageModal
            img={selectedImage}
            closeModal={() => {
              handleImageModal(null);
            }}
          />
        )}
      </div>
    </main>
  );
}

export const useTripContext = () => {
  return useOutletContext<OutletContextType>();
};
