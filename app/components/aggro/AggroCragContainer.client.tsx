import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
// import { ToneMappingMode } from 'postprocessing';
import { Suspense } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

import { white } from '../globe/colors';
import AggroCrag from './AggroCrag';

export function ErrorBoundary() {
  const error = useRouteError();

  console.error(error);

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>
          Status:
          {error.status}
        </p>
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
      className="
        absolute bottom-[20%] left-[50%] flex size-[250px] translate-x-[-50%] items-center justify-center rounded-full bg-slate-400
        md:top-[100px] md:right-[400px] md:size-[500px]
      "
    >
      <p>Could not load globe. Please reload.</p>
    </div>
  );
}

export function AggroCragContainer() {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1.1} />
        {/* <ToneMapping mode={ToneMappingMode.ACES_FILMIC} /> */}
      </EffectComposer>
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 1, 1]} color={white} castShadow intensity={4.5} />
      <Suspense fallback={null}>
        <AggroCrag />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}
