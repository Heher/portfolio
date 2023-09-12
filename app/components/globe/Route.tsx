// import { useMemo } from 'react';
// import { CylinderGeometry, MeshStandardMaterial } from 'three';
import type { MarkerVisit } from 'types/globe';
import type { CityType } from './coordinates';
import { City } from './City';
import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';
import { TripPageContext } from '~/routes/trip';
import { useContext } from 'react';
import { beamHeight } from './utils';
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
  citiesWithVisits: (CityType & MarkerVisit)[];
};

export function Route({ citiesWithVisits }: RouteProps) {
  const { selectedRouteLeg } = useContext(TripPageContext);

  const selectedRoute = myRoute[selectedRouteLeg - 1];

  console.log('selectedRoute', selectedRoute);

  const onlyVisited =
    selectedRoute?.cities && selectedRoute.cities.length > 0
      ? citiesWithVisits.filter((city) => selectedRoute?.cities.includes(city.name))
      : [];

  console.log('only', onlyVisited);
  // console.log('new', newVisited);

  // const visited = [...onlyVisited, ...newVisited];
  // return null;

  return (
    <group>
      <RouteTrip {...selectedRoute} />;
      {selectedRoute.cities.map((city) => {
        const cityInfo = citiesWithVisits.find((c) => c.name === city.name);
        if (!cityInfo) return null;

        return (
          <City key={city.name} city={cityInfo} zoom={selectedRoute.zoom || 7} height={beamHeight} newFlag={city.new} />
        );
      })}
    </group>
  );
}
