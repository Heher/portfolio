import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';

import base from '~/data/aggro/base.gltf';
import rock from '~/data/aggro/rock3.gltf';
import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { useGLTF, useTexture } from '@react-three/drei';

import rMap from '~/data/aggro/maps/rough.jpg';
import dMap from '~/data/aggro/maps/displacement.png';
import nMap from '~/data/aggro/maps/normal.jpg';
import { RockModel } from './Rock3';

interface DonutProps {
  scale?: number;
}

function RockMaterial() {
  const [roughTexture, displacementTexture, normalTexture] = useTexture([rMap, dMap, nMap]);

  return new MeshStandardMaterial({
    // transparent: true,
    color: 0xbbd3b0,
    // color: 0xff0000,
    emissive: 0xff0000,
    emissiveIntensity: 10,
    // roughness: 0.3,
    // transmission: 1,
    // thickness: 0.5,
    roughnessMap: roughTexture,
    // displacementMap: displacementTexture,
    normalMap: normalTexture
  });
}

const baseMaterial = new MeshStandardMaterial({
  color: 0x333333
});

export default function AggroCrag({ scale = 0.008 }: DonutProps) {
  const ref = useRef();
  const baseGltf = useLoader(GLTFLoader, base);
  // const rockGltf = useLoader(GLTFLoader, rock);

  const rockGltf = useGLTF(rock);

  const rockMaterial = RockMaterial();

  const [roughTexture, displacementTexture, normalTexture] = useTexture([rMap, dMap, nMap]);

  useFrame((state, delta) => {
    ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) / 2;
  });

  // return <RockModel ref={ref} scale={scale} />;
  console.log(rockGltf.nodes.Rock.material);

  return (
    <group ref={ref} scale={scale}>
      {/* <primitive object={baseGltf.nodes.Base} position={baseGltf.nodes.Base.position} material={baseMaterial} /> */}
      {/* <mesh position={rockGltf.nodes.Rock.position} scale={100}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={0xbbd3b0}
          // roughness={0.3}
          roughnessMap={roughTexture}
          normalMap={normalTexture}
          transmission={1}
          thickness={0.3}
        />
      </mesh> */}
      <mesh
        geometry={rockGltf.nodes.Rock.geometry}
        position={rockGltf.nodes.Rock.position}
        material={rockGltf.nodes.Rock.material}
      />
    </group>
  );
}
