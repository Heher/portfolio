import { AnimatePresence } from 'motion/react';
import { use } from 'react';

import { TripPageContext } from '~/utils/context';

import ExtraCity from './ExtraCity';
import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';
import { getZoom, globeRadius, placeObjectOnPlanet } from './utils';

export function Route() {
  const { selectedRouteLeg, width } = use(TripPageContext);

  if (!selectedRouteLeg) {
    return null;
  }

  const selectedRoute = myRoute[selectedRouteLeg - 1];

  const extraCities = selectedRoute?.extraCities?.map(coord => placeObjectOnPlanet(coord, globeRadius)) || [];

  return (
    <group>
      <RouteTrip {...selectedRoute} />
      <AnimatePresence>
        {extraCities.map((markerInfo) => {
          return <ExtraCity key={markerInfo.position[0]} markerInfo={markerInfo} zoom={getZoom(selectedRouteLeg, width)} />;
        })}
      </AnimatePresence>
    </group>
  );
}
