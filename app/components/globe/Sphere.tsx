import { useLoader } from '@react-three/fiber';
import { globeGeometry } from './geometries';
import { TextureLoader } from 'three';

import earthImg from '~/data/map/new-earth.png';

type SphereProps = {
  width: number;
  showDetails: boolean;
  setMoveable: () => void;
};

const Sphere = ({ width, showDetails, setMoveable }: SphereProps) => {
  const earthMap = useLoader(TextureLoader, earthImg);

  return (
    <mesh
      geometry={globeGeometry}
      onClick={() => {
        if (width >= 768 || (width < 768 && showDetails)) {
          setMoveable();
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
