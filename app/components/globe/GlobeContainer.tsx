// import { Canvas, useThree } from '@react-three/fiber';

import type { Visit } from 'types/globe';
import { Globe } from './Globe';
import { white } from './colors';
import { LayoutCamera, MotionCanvas } from 'framer-motion-3d';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

export function GlobeContainer() {
  // const controlsRef = useRef<typeof OrbitControls>(null);
  // const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);

  // useEffect(() => {
  //   if (routeSelected) {
  //     setCameraPosition([0, 0, 4]);
  //   } else {
  //     setCameraPosition([0, 0, 18]);
  //   }
  // }, [routeSelected]);

  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      {/* <MotionCanvas shadows> */}
      {/* <LayoutCamera position={[0, 0, 5]} fov={8} /> */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={2} color={white} castShadow shadow-mapSize={[3072, 3072]} />
      <Globe />
      {/* <OrbitControls
        ref={controlsRef}
        enabled={routeSelected || moveable}
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
