import type { Dispatch } from 'react';

import { AnimatePresence } from 'motion/react';
import { useEffect, useReducer } from 'react';
import { Outlet, useLocation } from 'react-router';
import useMeasure from 'react-use-measure';

import type { SelectedCity } from 'types/city';
import type { Visit } from 'types/globe';
import type { TripPageState } from 'types/trip';

import { ImageModal } from '~/components/modal/ImageModal';
import CitySlider from '~/components/olympiad-city/CitySlider';
// import GlobeContainer from '~/components/globe/GlobeContainer';
// import { ImageModal } from '~/components/modal/ImageModal';
// import CitySlider from '~/components/olympiad-city/CitySlider';
import visits from '~/data/visits';
import { TripPageContext } from '~/utils/context';

export type OutletContextType = {
  handleImageModal: (img: string | null) => void;
  width: number;
  visits: Visit[];
  toggleBodyBackground: () => void;
  appState: TripPageState;
  dispatch: Dispatch<any>;
};

function toggleBodyBackground() {
  const body = document.body;

  body.classList.toggle('bg-globe-background');
  body.classList.toggle('bg-nav-background');
}

type Action
  = | { type: 'IMAGE'; selectedImage: string | null }
    | { type: 'MOVEABLE_GLOBE'; moveableGlobe: boolean }
    | { type: 'SELECTED_CITY'; selectedCity: string | null }
    | { type: 'SELECTED_CITY_DATA'; selectedCityData: SelectedCity | null }
    | { type: 'SELECTED_ROUTE_LEG'; selectedRouteLeg: number | null }
    | { type: 'LOADED'; loaded: boolean };

function reducer(state: TripPageState, action: Action) {
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
}

const initialState: TripPageState = {
  selectedImage: null,
  moveableGlobe: false,
  selectedCity: null,
  selectedCityData: null,
  selectedRouteLeg: null,
  loaded: false,
};

export default function TripPage() {
  const location = useLocation();

  const [state, dispatch] = useReducer(reducer, initialState);

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
    <main ref={pageContainerRef} className="relative mx-auto min-h-dvh w-full max-w-max-width">
      <title>John Heher | Olympic Trip</title>
      <meta name="description" content="John Heher's Olympic trip: visiting every city that has hosted the Olympic Games." />
      <meta property="og:title" content="John Heher | Olympic Trip" />
      <meta property="og:image" content="/olympic-cities-og.jpg" />
      <div className="fixed top-0 left-0 -z-1 size-full min-h-dvh bg-linear-to-b from-globe-background to-nav-background to-50%"></div>
      <TripPageContext value={{ ...state, width, visits, dispatch, handleImageModal, toggleBodyBackground }}>
        <div className="mx-auto h-dvh max-w-(--max-width)">
          {/* <div className="fixed inset-0 z-0 size-full">
            <GlobeContainer />
          </div> */}

          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
          <AnimatePresence>
            {selectedCity && <CitySlider data={selectedCityData} visits={visits} />}
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
      </TripPageContext>
    </main>
  );
}
