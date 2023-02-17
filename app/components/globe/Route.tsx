// import { coordinates } from './coordinates';
import { CylinderGeometry } from 'three';
import { CityMarker } from './CityMarker';
import { coordinates } from './coordinates';
import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';

const citiesVisited = [
  { coord: coordinates['paris'], scale: 2.2, name: 'paris', type: 'summer', years: ['1900', '1924'] },

  { coord: coordinates['london'], scale: 2.2, name: 'london', type: 'summer', years: ['1908', '1948', '2012'] },
  { coord: coordinates['stockholm'], scale: 2.2, name: 'stockholm', type: 'summer', years: ['1912'] },
  { coord: coordinates['antwerp'], scale: 2.2, name: 'antwerp', type: 'summer', years: ['1920'] },
  { coord: coordinates['chamonix'], scale: 2.2, name: 'chamonix', type: 'winter', years: ['1924'] },
  { coord: coordinates['stMoritz'], scale: 2.2, name: 'st-moritz', type: 'winter', years: ['1928'] },
  { coord: coordinates['amsterdam'], scale: 2.2, name: 'amsterdam', type: 'summer', years: ['1928'] },

  { coord: coordinates['berlin'], scale: 2.2, name: 'berlin', type: 'summer', years: ['1936'] },
  { coord: coordinates['garmisch'], scale: 2.2, name: 'garmisch-partenkirchen', type: 'winter', years: ['1936'] },
  { coord: coordinates['oslo'], scale: 2.2, name: 'oslo', type: 'winter', years: ['1952'] },
  { coord: coordinates['helsinki'], scale: 2.2, name: 'helsinki', type: 'summer', years: ['1952'] },

  { coord: coordinates['cortina'], scale: 2.2, name: 'cortina-dampezzo', type: 'winter', years: ['1956'] },

  { coord: coordinates['innsbruck'], scale: 2.2, name: 'innsbruck', type: 'winter', years: ['1928', '1948'] },

  { coord: coordinates['grenoble'], scale: 2.2, name: 'grenoble', type: 'winter', years: ['1968'] },

  { coord: coordinates['munich'], scale: 2.2, name: 'munich', type: 'summer', years: ['1972'] },

  { coord: coordinates['sarajevo'], scale: 2.2, name: 'sarajevo', type: 'winter', years: ['1984'] },

  { coord: coordinates['albertville'], scale: 2.2, name: 'albertville', type: 'winter', years: ['1992'] },
  { coord: coordinates['lillehammer'], scale: 2.2, name: 'lillehammer', type: 'winter', years: ['1994'] },

  { coord: coordinates['torino'], scale: 2.2, name: 'torino', type: 'winter', years: ['2006'] }
];

const markerGeometry = new CylinderGeometry(0.003, 0.003, 0.1, 32);
const markerTopGeometry = new CylinderGeometry(0.02, 0.02, 0.01, 32);

export const Route = ({ visible }) => {
  return (
    <group visible={visible}>
      {myRoute.map((coordData, index) => {
        return <RouteTrip key={index} {...coordData} />;
      })}
      {citiesVisited.map((city) => {
        return (
          <CityMarker
            key={city.name}
            markerGeometry={markerGeometry}
            markerTopGeometry={markerTopGeometry}
            city={city}
            visited
            citySelected={null}
            selected={false}
          />
        );
      })}
    </group>
  );
};
