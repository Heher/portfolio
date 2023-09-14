import type { V2_MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import { Selector } from '~/components/route/Selector';
import { useTripContext } from './trip';
import { Outlet } from '@remix-run/react';
import NewBackButton from '~/components/home/NewBackButton';

export type RouteContext = {
  dispatch: React.Dispatch<any>;
};

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
  const { width, appState, dispatch } = useTripContext();
  const { selectedRouteLeg } = appState;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--body-background', 'var(--globe-background)');
  }, []);

  return (
    <div>
      <NewBackButton />
      {selectedRouteLeg !== null && <Selector width={width} />}
      <Outlet context={{ dispatch }} />
    </div>
  );
}

export default RoutePage;
