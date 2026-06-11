import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router';

// import { myRoute } from '~/components/globe/routeCoordinates';
import type { RouteContext } from './layout';

// export const meta: MetaFunction = ({ params }) => {
//   if (!params?.num) {
//     return [
//       { title: `Unknown leg | Olympic Trip Route | John Heher` },
//       {
//         name: 'description',
//         content: `An unknown leg of John Heher's Olympic trip.`,
//       },
//     ];
//   }

//   const data = myRoute[Number.parseInt(params.num) - 1];

//   return [
//     { title: `Leg ${params.num} | Olympic Trip Route | John Heher` },
//     {
//       name: 'description',
//       content: `Leg #${params.num} of John Heher's Olympic trip: ${data.description}`,
//     },
//     {
//       name: 'og:title',
//       content: `Leg ${params.num} | Olympic Trip Route | John Heher`,
//     },
//     {
//       name: 'og:image',
//       content: '/olympic-cities-og.jpg',
//     },
//   ];
// };

export default function RouteNumPage() {
  const { dispatch } = useOutletContext<RouteContext>();
  const params = useParams();

  useEffect(() => {
    if (!params.num)
      return;
    dispatch({ type: 'SELECTED_ROUTE_LEG', selectedRouteLeg: Number.parseInt(params.num) });
  }, [dispatch, params.num]);

  return null;
}
