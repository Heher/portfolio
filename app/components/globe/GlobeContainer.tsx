import { Canvas } from '@react-three/fiber';

import type { Visit } from 'types/globe';
import { Globe } from './Globe';
import { white } from './colors';

type GlobeContainerProps = {
  visits: Visit[];
  selectedCity: string | null;
  routeSelected: boolean;
  showDetails: boolean;
  width: number;
  moveable: boolean;
  setMoveable: () => void;
  selectedRouteLeg: number;
};

export function GlobeContainer({
  visits,
  selectedCity,
  routeSelected,
  width,
  moveable,
  setMoveable,
  showDetails,
  selectedRouteLeg
}: GlobeContainerProps) {
  return (
    // <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={2} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      <Globe
        visits={visits}
        selectedCity={selectedCity}
        routeSelected={routeSelected}
        width={width}
        moveable={moveable}
        setMoveable={setMoveable}
        showDetails={showDetails}
        selectedRouteLeg={selectedRouteLeg}
      />
    </Canvas>
  );
}
