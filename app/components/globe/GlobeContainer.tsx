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
import { GradientTexture, GradientType } from '@react-three/drei';
// import { OrbitControls } from '@react-three/drei';

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
      className={`absolute bottom-[20%] left-[50%] flex size-[250px] translate-x-[-50%] items-center justify-center rounded-full bg-slate-400 md:right-[400px] md:top-[100px] md:size-[500px]`}
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
      duration: 0.9,
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
        zoom: getZoom(selectedRouteLeg, window.innerWidth),
        routeY
      }}
      receiveShadow
    >
      <circleGeometry args={[1, 64]} />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0.6, 0.9, 1]} // As many stops as you want
          colors={['#004953', '#317873', '#008080']} // Colors need to match the number of stops
          size={1024} // Size (height) is optional, default = 1024
          width={1024} // Width of the canvas producing the texture, default = 16
          type={GradientType.Radial} // The type of the gradient, default = GradientType.Linear
          innerCircleRadius={0} // Optional, the radius of the inner circle of the gradient, default = 0
          outerCircleRadius={'auto'} // Optional, the radius of the outer circle of the gradient, default = auto
        />
      </meshBasicMaterial>
    </motion.mesh>
  );
}

export default function GlobeContainer() {
  const tripContext = useContext(TripPageContext);

  if (!tripContext) {
    return null;
  }

  const { selectedCity, visits, selectedRouteLeg } = tripContext;

  return (
    // <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 1]} intensity={3} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      {/* <directionalLight position={[0, 1, 1]} intensity={3} color={white} /> */}
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
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
