import { Canvas } from '@react-three/fiber';

import type { Visit } from 'types/globe';
import { Globe } from './Globe';
import { white } from './colors';
// import { Bloom, EffectComposer } from '@react-three/postprocessing';

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
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 15]} color={white} castShadow shadow-mapSize={[3072, 3072]} />
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
      {/* <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={0.85} levels={9} />
      </EffectComposer> */}
      {/* <Stats className="stats" /> */}
    </Canvas>
  );
}
