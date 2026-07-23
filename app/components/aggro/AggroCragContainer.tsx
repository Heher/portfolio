import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
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
      {/* <Environment preset="forest" background blur={0.5} /> */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[1, 1, 5]} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      <group scale={1} rotation={[0, 1.5, 0.15, 'ZXY']} position={[0, -0.7, 0]}>
        <Suspense fallback={null}>
          <AggroCrag />
        </Suspense>
      </group>
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        maxDistance={45}
        minDistance={5}
        enablePan={false}
        rotateSpeed={0.5}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}
