import { use, useEffect } from 'react';
import { useParams } from 'react-router';

import { TripPageContext } from '~/utils/context';

export default function RouteNumPage() {
  const { dispatch } = use(TripPageContext);
  const params = useParams();

  useEffect(() => {
    if (!params.num) {
      return;
    }

    dispatch({ type: 'SELECTED_ROUTE_LEG', selectedRouteLeg: Number.parseInt(params.num) });
    dispatch({ type: 'SELECTED_CITY', selectedCity: null });
    dispatch({ type: 'SELECTED_CITY_DATA', selectedCityData: null });
  }, [dispatch, params.num]);

  return null;
}
