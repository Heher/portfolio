import { Globe } from './Globe';
import { white } from './colors';
import { useContext } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { TripPageContext } from '~/routes/trip';
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
// import { PerformanceMonitor, Stats } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing';
import { motion } from 'framer-motion-3d';
import { myRoute } from './routeCoordinates';
import { getGlobeVariant, getGlobeX, getGlobeZoom, getRouteY, getZoom } from './utils';

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

const variants = {
  selectedCity: ({ height }: { height: number }) => ({
    x: 0,
    y: height / -4,
    z: 10,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  route: ({ zoom, screenWidth, routeY }: { zoom: number; screenWidth: number; routeY: number }) => ({
    x: 0,
    y: routeY,
    z: getGlobeZoom(screenWidth, zoom),
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }),
  show: ({ width, screenWidth }: { width: number; screenWidth: number }) => ({
    opacity: 1,
    x: getGlobeX(width, screenWidth),
    y: 0,
    z: screenWidth < 768 ? 0 : -10 / width,
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  })
};

function GlobeBackdrop({
  selectedRouteLeg,
  selectedCity
}: {
  selectedRouteLeg: number | null;
  selectedCity: string | null;
}) {
  const { viewport } = useThree();

  const routeSelected = selectedRouteLeg !== null;

  let routeY = 0;

  if (routeSelected) {
    const leg = myRoute[selectedRouteLeg - 1];
    routeY = getRouteY(leg);
  }

  return (
    <motion.mesh
      rotation={[0, 0, 0.5, 'ZXY']}
      variants={variants}
      initial={{ opacity: 0 }}
      animate={getGlobeVariant(routeSelected, selectedCity)}
      custom={{
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        width: viewport.width,
        height: viewport.height,
        zoom: getZoom(selectedRouteLeg, selectedCity),
        routeY
      }}
    >
      <circleGeometry args={[1, 64]} />
      <meshBasicMaterial color="#2B4955" />
    </motion.mesh>
  );
}

export function GlobeContainer() {
  const tripContext = useContext(TripPageContext);

  if (!tripContext) {
    return null;
  }

  const { selectedCity, visits, selectedRouteLeg } = tripContext;

  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 1]} intensity={3} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      <Globe selectedCity={selectedCity} visits={visits} selectedRouteLeg={selectedRouteLeg} />
      <GlobeBackdrop selectedRouteLeg={selectedRouteLeg} selectedCity={selectedCity} />
      <EffectComposer>
        <Bloom
          intensity={1.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={false} // Enables or disables mipmap blur.
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        />
      </EffectComposer>
      {/* <Stats /> */}
    </Canvas>
  );
}
