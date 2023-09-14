import type { V2_MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import { useOutletContext, useParams } from '@remix-run/react';
import type { RouteContext } from './trip.route';

export const meta: V2_MetaFunction = ({ params }) => {
  return [
    { title: `Leg ${params.num} | Olympic Trip Route | John Heher` },
    {
      name: 'description',
      content: `John Heher's leg #${params.num} of his Olympic trip route.`
    },
    {
      name: 'og:title',
      content: `Leg ${params.num} | Olympic Trip Route | John Heher`
    },
    {
      name: 'og:image',
      content: '/olympic-cities-og.jpg'
    }
  ];
};

function RouteNumPage() {
  const { dispatch } = useOutletContext<RouteContext>();
  const params = useParams();

  useEffect(() => {
    if (!params.num) return;
    dispatch({ type: 'SELECTED_ROUTE_LEG', selectedRouteLeg: parseInt(params.num) });
  }, [dispatch, params.num]);

  return null;
}

export default RouteNumPage;
