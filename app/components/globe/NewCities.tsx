import { type Euler, type Vector3, extend, useLoader } from '@react-three/fiber';

import type { MarkerVisit } from 'types/globe';
import type { City } from './coordinates';
import { MarkerMaterial } from './materials/MarkerMaterial';
import { notSelectedColor, notVisitedColor, summerColor, visitedColor, winterColor } from './colors';
import { FlagMaterial } from './materials/FlagMaterial';
import type { Color } from 'three';
import { TextureLoader } from 'three';

import alphaMapImg from '~/data/beam/alphamap10.png';
import { Flag } from './markers/Flag';
import { Marker } from './markers/Marker';

type NewCitiesProps = {
  city: City & MarkerVisit;
  citySelected: string | null;
  flagPosition: number[];
};

extend({ MarkerMaterial, FlagMaterial });

export function NewCities({ city, citySelected, flagPosition }: NewCitiesProps) {
  // const flagRef = useRef(null);

  const alphaMap = useLoader(TextureLoader, alphaMapImg);

  // useFrame((state) => {
  //   if (!flagRef?.current?.material?.uniforms?.u_time) {
  //     return;
  //   }

  //   const { clock } = state;
  //   flagRef.current.material.uniforms.u_time.value = clock.getElapsedTime();
  // });

  if (!city.markerInfo) {
    return null;
  }

  function findFlagColor(): Color {
    if (citySelected && citySelected !== city.name) {
      return notSelectedColor;
    }

    return city.visited ? visitedColor : notVisitedColor;
  }

  return (
    <group>
      <Marker
        position={city.markerInfo.position as Vector3}
        rotation={city.markerInfo.rotation as Euler}
        color={city.type === 'summer' ? summerColor : winterColor}
      />
      <Flag
        position={city.markerInfo.position as Vector3}
        rotation={city.markerInfo.rotation as Euler}
        alphaMap={alphaMap}
        flagColor={findFlagColor()}
      />
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
