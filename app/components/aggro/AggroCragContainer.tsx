import { Canvas } from '@react-three/fiber';
import { white } from '../globe/colors';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import AggroCrag from './AggroCrag';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { KernelSize, Resolution } from 'postprocessing';
import Background from './Background';

export function AggroCragContainer() {
  const groupRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
      {/* <Environment preset="forest" background blur={0.5} /> */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 2, 8]} color={0xfff0dd} castShadow shadow-mapSize={[3072, 3072]} />
      <motion.group ref={groupRef} scale={1} rotation={[0, 1.5, 0.15, 'ZXY']} position={[0, -0.7, 0]}>
        <AggroCrag />
      </motion.group>
      <Background />
      <OrbitControls
        // minPolarAngle={Math.PI / 2}
        // maxPolarAngle={Math.PI / 2}
        maxDistance={45}
        minDistance={5}
        enablePan={false}
        rotateSpeed={0.5}
        target={[0, 0, 0]}
      />
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
    </Canvas>
  );
}
