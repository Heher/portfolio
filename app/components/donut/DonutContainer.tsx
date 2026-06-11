import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

import { white } from '../globe/colors';
import Donut from './Donut';

type DonutContainerProps = {
  color: number;
};

export function ErrorBoundary() {
  const error = useRouteError();

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
      <p>Could not load donut. Please reload.</p>
    </div>
  );
}

export function DonutContainer({ color }: DonutContainerProps) {
  const groupRef = useRef(null);

  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 10]} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      <motion.group ref={groupRef} scale={1} rotation={[0.5, 0, 0.5, 'ZXY']}>
        <Donut color={color} />
      </motion.group>
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
