// import { useMemo } from 'react';
// import { CylinderGeometry, MeshStandardMaterial } from 'three';
import type { MarkerVisit } from 'types/globe';
import type { City } from './coordinates';
import { Cities } from './Cities';
import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';
import { TripPageContext, useTripContext } from '~/routes/trip';
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
  'athens'
];

type RouteProps = {
  visible: boolean;
  citiesWithVisits: (City & MarkerVisit)[];
};

export function Route({ visible, citiesWithVisits }: RouteProps) {
  const onlyVisited = citiesWithVisits.filter((city) => citiesVisited.includes(city.name));

  const { selectedRouteLeg } = useContext(TripPageContext);

  const selectedRoute = selectedRouteLeg === 0 ? myRoute : [myRoute[selectedRouteLeg - 1]];

  return (
    <group visible={visible}>
      {selectedRoute.map((coordData, index) => {
        return <RouteTrip key={index} {...coordData} />;
      })}
      {onlyVisited.map((city) => {
        // const flagPosition = getPosition(city.coord, globeRadius + markerHeight / 2);

        return <Cities key={city.coord[0]} city={city} />;
      })}
    </group>
  );
}
