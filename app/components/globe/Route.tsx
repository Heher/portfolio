import { CylinderGeometry } from 'three';
import type { MarkerVisit } from 'types/globe';
import type { City } from './coordinates';
import { NewCities } from './NewCities';
import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';
import { getPosition, globeRadius } from './utils';
import {
  flagMaterial,
  offMaterial,
  offVisitedMaterial,
  summerMarkerMaterial,
  visitedMaterial,
  winterMarkerMaterial
} from './materials';

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

const markerHeight = 0.05;
const markerRadius = 0.003;

const markerGeometry = new CylinderGeometry(markerRadius, markerRadius, markerHeight, 32);
const flagGeometry = new CylinderGeometry(markerRadius, markerRadius, 0.01, 32);

type RouteProps = {
  visible: boolean;
  citiesWithVisits: (City & MarkerVisit)[];
  selectedRouteLeg: number;
};

export function Route({ visible, citiesWithVisits, selectedRouteLeg }: RouteProps) {
  const onlyVisited = citiesWithVisits.filter((city) => citiesVisited.includes(city.name));

  const selectedRoute = selectedRouteLeg === 0 ? myRoute : [myRoute[selectedRouteLeg - 1]];

  return (
    <group visible={visible}>
      {selectedRoute.map((coordData, index) => {
        return <RouteTrip key={index} {...coordData} />;
      })}
      {onlyVisited.map((city) => {
        const flagPosition = getPosition(city.coord, globeRadius + markerHeight / 2);

        return (
          <NewCities
            key={city.coord[0]}
            markerGeometry={markerGeometry}
            summerMarkerMaterial={summerMarkerMaterial}
            winterMarkerMaterial={winterMarkerMaterial}
            flagGeometry={flagGeometry}
            flagMaterial={flagMaterial}
            visitedMaterial={visitedMaterial}
            offMaterial={offMaterial}
            offVisitedMaterial={offVisitedMaterial}
            city={city}
            citySelected={null}
            selected={false}
            flagPosition={flagPosition}
          />
        );
      })}
    </group>
  );
}
