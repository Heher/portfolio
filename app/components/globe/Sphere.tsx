import { useLoader } from '@react-three/fiber';
import { globeGeometry } from './geometries';
import { TextureLoader } from 'three';

import earthImg from '~/data/map/new-earth.png';
import { TripPageContext, TripPageDispatchContext, useTripContext } from '~/routes/trip';
import { useContext } from 'react';

const Sphere = () => {
  const earthMap = useLoader(TextureLoader, earthImg);

  const { showDetails, width } = useContext(TripPageContext);
  const dispatch = useContext(TripPageDispatchContext);

  return (
    <mesh
      geometry={globeGeometry}
      onClick={() => {
        if (width >= 768 || (width < 768 && showDetails)) {
          dispatch({ type: 'MOVEABLE_GLOBE', moveableGlobe: true });
        }
      }}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial map={earthMap} />
      {/* <meshStandardMaterial /> */}
    </mesh>
  );
};

export default Sphere;
