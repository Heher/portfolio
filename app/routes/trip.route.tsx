import type { V2_MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import { Selector } from '~/components/route/Selector';
import { useTripContext } from './trip';

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

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--body-background', 'var(--globe-background)');
  }, []);

  useEffect(() => {
    dispatch({ type: 'ROUTE_SELECTED', routeSelected: true });
  }, [dispatch]);

  return <Selector width={width} />;
}

export default RoutePage;
