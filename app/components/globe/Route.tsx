// import { coordinates } from './coordinates';
import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';

export const Route = ({ visible }) => {
  return (
    <group visible={visible}>
      {myRoute.map((coordData, index) => {
        return <RouteTrip key={index} {...coordData} />;
      })}
    </group>
  );
};
