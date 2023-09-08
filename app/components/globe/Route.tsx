// import { useMemo } from 'react';
// import { CylinderGeometry, MeshStandardMaterial } from 'three';
import type { MarkerVisit } from 'types/globe';
import type { City } from './coordinates';
import { Cities } from './Cities';
import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';
import { TripPageContext } from '~/routes/trip';
import { useContext } from 'react';
// import { getPosition, globeRadius } from './utils';

const citiesVisited = [
  'paris',
  'london',
  'stockholm',
  'antwerp',
  'chamonix',
  'st-moritz',
  'amsterdam',
  'berlin',
  'garmisch-partenkirchen',
  'oslo',
  'helsinki',
  'cortina-dampezzo',
  'innsbruck',
  'grenoble',
  'munich',
  'sarajevo',
  'albertville',
  'lillehammer',
  'torino',
  'melbourne',
  'sydney',
  'barcelona',
  'rome',
  'athens',
  'montreal'
];

type RouteProps = {
  visible: boolean;
  citiesWithVisits: (City & MarkerVisit)[];
};

export function Route({ visible, citiesWithVisits }: RouteProps) {
  // console.log('onlyVisited: ', onlyVisited);

  const { selectedRouteLeg } = useContext(TripPageContext);
  const selectedRoute = myRoute[selectedRouteLeg - 1];

  const onlyVisited =
    selectedRoute.cities && selectedRoute.cities.length > 0
      ? citiesWithVisits.filter((city) => selectedRoute.cities.includes(city.name))
      : [];

  return (
    <group visible={visible}>
      <RouteTrip {...selectedRoute} />;
      {onlyVisited.map((city) => {
        // const flagPosition = getPosition(city.coord, globeRadius + markerHeight / 2);

        return <Cities key={city.coord[0]} city={city} />;
      })}
    </group>
  );
}
