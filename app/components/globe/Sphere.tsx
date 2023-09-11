import { useLoader } from '@react-three/fiber';
import { globeGeometry } from './geometries';
import { TextureLoader } from 'three';

import earthImg from '~/data/map/new-earth.png';
import detailedEarthImg from '~/data/map/detailed-earth.png';
import { TripPageContext, TripPageDispatchContext, useTripContext } from '~/routes/trip';
import { useContext } from 'react';
import { Detailed } from '@react-three/drei';

const Sphere = () => {
  const earthMap = useLoader(TextureLoader, earthImg);
  const detailedEarthMap = useLoader(TextureLoader, detailedEarthImg);

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
      <Detailed distances={[20, 100]}>
        <meshStandardMaterial map={detailedEarthMap} />
        <meshStandardMaterial map={earthMap} />
      </Detailed>
      {/* <meshStandardMaterial /> */}
    </mesh>
  );
};

export default Sphere;
