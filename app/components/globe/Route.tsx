// import { coordinates } from './coordinates';
import { myRoute } from './routeCoordinates';
import { RouteTrip } from './RouteTrip';

export const Route = () => {
  return (
    <>
      {myRoute.map((coordData, index) => {
        return <RouteTrip key={index} {...coordData} />;
      })}
    </>
  );
};
