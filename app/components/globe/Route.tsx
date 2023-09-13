import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';
import { TripPageContext } from '~/routes/trip';
import { useContext } from 'react';

export function Route() {
  const { selectedRouteLeg } = useContext(TripPageContext);

  const selectedRoute = myRoute[selectedRouteLeg - 1];

  return (
    <group>
      <RouteTrip {...selectedRoute} />;
    </group>
  );
}
