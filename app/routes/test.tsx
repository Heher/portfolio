import { Outlet, useLocation, useOutlet, useOutletContext } from '@remix-run/react';
import type { Dispatch } from 'react';
import { createContext } from 'react';
import type { V2_MetaFunction } from '@remix-run/node';

import type { Visit } from 'types/globe';
import { AnimatePresence, motion } from 'framer-motion';
// import { Route, Routes } from 'react-router-dom';
import TestIndex from '~/components/test/TestIndex';
import TestPage2 from '~/components/test/TestPage2';

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

export const TripPageContext = createContext<ContextType | null>(null);
export const TripPageDispatchContext = createContext<Dispatch<any> | null>(null);

export default function TestPage() {
  const outlet = useOutlet();
  const location = useLocation();

  console.log(location.pathname, outlet);

  return (
    <motion.main key={location.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Outlet />
    </motion.main>
  );
}

export const useTripContext = () => {
  return useOutletContext<OutletContextType>();
};
