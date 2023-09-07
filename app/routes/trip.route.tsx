import type { V2_MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import { Selector } from '~/components/route/Selector';
import { useTripContext } from './trip';
import { motion } from 'framer-motion';
import { useLocation } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'My Route | Olympic Trip' },
    {
      name: 'description',
      content: "John Heher's Olympic trip route."
    },
    {
      name: 'og:title',
      content: 'My Route | Olympic Trip'
    },
    {
      name: 'og:image',
      content: '/olympic-cities-og.jpg'
    }
  ];
};

function RoutePage() {
  const { width, dispatch } = useTripContext();
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--body-background', 'var(--globe-background)');
  }, []);

  useEffect(() => {
    dispatch({ type: 'ROUTE_SELECTED', routeSelected: true });
  }, [dispatch]);

  return (
    <motion.div key={location.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Selector width={width} />
    </motion.div>
  );
}

export default RoutePage;
