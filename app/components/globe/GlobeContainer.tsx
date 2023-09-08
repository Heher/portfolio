// import { Canvas, useThree } from '@react-three/fiber';

// import type { Visit } from 'types/globe';
import { Globe } from './Globe';
import { white } from './colors';
// import { LayoutCamera, MotionCanvas } from 'framer-motion-3d';
// import { OrbitControls } from '@react-three/drei';
import { useContext, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { TripPageContext } from '~/routes/trip';
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
import type { OrbitControls } from '@react-three/drei';

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  // let errorMessage = 'Unknown error';
  // if (isDefinitelyAnError(error)) {
  //   errorMessage = error.message;
  // }

  return (
    <div
      className={`absolute bottom-[20%] left-[50%] flex h-[250px] w-[250px] translate-x-[-50%] items-center justify-center rounded-full bg-slate-400 md:right-[400px] md:top-[100px] md:h-[500px] md:w-[500px]`}
    >
      <p>Could not load globe. Please reload.</p>
    </div>
  );
}

export function GlobeContainer() {
  const controlsRef = useRef<typeof OrbitControls>(null);
  // const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);

  // useEffect(() => {
  //   if (routeSelected) {
  //     setCameraPosition([0, 0, 4]);
  //   } else {
  //     setCameraPosition([0, 0, 18]);
  //   }
  // }, [routeSelected]);

  const tripContext = useContext(TripPageContext);

  if (!tripContext) {
    return null;
  }

  const { selectedCity, visits, selectedRouteLeg } = tripContext;

  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      {/* <MotionCanvas shadows> */}
      {/* <LayoutCamera position={[0, 0, 5]} fov={8} /> */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={2} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      <Globe selectedCity={selectedCity} visits={visits} selectedRouteLeg={selectedRouteLeg} />
      {/* <OrbitControls
        ref={controlsRef}
        enabled
        minPolarAngle={Math.PI / 4 - 0.2}
        maxPolarAngle={Math.PI - 0.7}
        maxDistance={45}
        minDistance={5}
        enablePan={false}
        rotateSpeed={0.25}
        target={[0, 0, 0]}
      /> */}
      {/* </MotionCanvas> */}
    </Canvas>
  );
}
