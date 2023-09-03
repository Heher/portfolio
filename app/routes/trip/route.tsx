import type { MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import { Selector } from '~/components/route/Selector';
import { useTripContext } from '../trip';

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    title: `My Route | Olympic Trip`,
    description: `John Heher's Olympic trip route.`,
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    'og:title': `My Route | Olympic Trip`,
    'og:image': '/olympic-cities-og.jpg'
  };
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
