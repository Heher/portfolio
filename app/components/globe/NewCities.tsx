import { useFrame, type Euler, type Vector3, extend, useLoader } from '@react-three/fiber';
import { useRef } from 'react';

import type { MarkerVisit } from 'types/globe';
import type { City } from './coordinates';
import { markerHeight, markerRadius, beamHeight } from './utils';
import { MarkerMaterial } from './materials/MarkerMaterial';
import { notSelectedColor, notVisitedColor, summerColor, visitedColor, winterColor } from './colors';
import { FlagMaterial } from './materials/FlagMaterial';
import { MeshTransmissionMaterial, useTexture } from '@react-three/drei';
import { DoubleSide, TextureLoader } from 'three';

import alphaMapImg from '~/data/beam/alphamap10.png';

type NewCitiesProps = {
  city: City & MarkerVisit;
  citySelected: string | null;
  flagPosition: number[];
};

extend({ MarkerMaterial, FlagMaterial });

export function NewCities({ city, citySelected, flagPosition }: NewCitiesProps) {
  const markerRef = useRef(null);
  const flagRef = useRef(null);

  const alphaMap = useLoader(TextureLoader, alphaMapImg);

  // useFrame((state) => {
  //   if (!flagRef?.current?.material?.uniforms?.u_time) {
  //     return;
  //   }

  //   const { clock } = state;
  //   flagRef.current.material.uniforms.u_time.value = clock.getElapsedTime();
  // });
  useFrame((state) => {
    if (!flagRef?.current) {
      return;
    }

    // const { clock } = state;
    // flagRef.current.geometry.translate(0, markerHeight / 2, 0);

    flagRef.current.rotation.x = 0;
    flagRef.current.rotation.y += 0.001;
    flagRef.current.rotation.z = 0;
  });

  if (!city.markerInfo) {
    return null;
  }

  function findFlagColor() {
    if (citySelected && citySelected !== city.name) {
      return notSelectedColor;
    }

    return city.visited ? visitedColor : notVisitedColor;
  }

  return (
    <group>
      <mesh
        ref={markerRef}
        position={city.markerInfo.position as Vector3}
        rotation={city.markerInfo.rotation as Euler}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[markerRadius, markerRadius, 0.01, 32]} />
        {/* <markerMaterial u_color={city.type === 'summer' ? summerColor : winterColor} /> */}
        <meshStandardMaterial color={city.type === 'summer' ? summerColor : winterColor} />
      </mesh>
      <group position={city.markerInfo.position as Vector3} rotation={city.markerInfo.rotation as Euler}>
        <mesh ref={flagRef} receiveShadow position-y={beamHeight / 2}>
          <cylinderGeometry args={[0.03, markerRadius, beamHeight, 32, 32, true]} />
          <meshBasicMaterial transparent alphaMap={alphaMap} color={findFlagColor()} side={DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}

/*
<mesh
        ref={flagRef}
        position={flagPosition as Vector3}
        rotation={city.markerInfo.rotation as Euler}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[markerRadius, markerRadius, 0.01, 32]} />
        <flagMaterial u_color={findFlagColor()} />
        <meshStandardMaterial color={findFlagColor()} emissive={findFlagColor()} />
      </mesh>
      */
