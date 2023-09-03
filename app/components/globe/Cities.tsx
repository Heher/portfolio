import { extend, useLoader } from '@react-three/fiber';

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
import { motion } from 'framer-motion-3d';
import { AnimatePresence } from 'framer-motion';
import { TripPageContext, useTripContext } from '~/routes/trip';
import { useContext } from 'react';

type CitiesProps = {
  city: City & MarkerVisit;
};

extend({ MarkerMaterial, FlagMaterial });

export function Cities({ city }: CitiesProps) {
  const alphaMap = useLoader(TextureLoader, alphaMapImg);

  const { selectedCity } = useContext(TripPageContext);

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
    // if (citySelected && citySelected !== city.name) {
    //   return notSelectedColor;
    // }

    return city.visited ? visitedColor : notVisitedColor;
  }

  return (
    <group>
      <Marker
        position={city.markerInfo.position}
        rotation={city.markerInfo.rotation}
        color={city.type === 'summer' ? summerColor : winterColor}
      />
      <Flag
        position={city.markerInfo.position}
        rotation={city.markerInfo.rotation}
        alphaMap={alphaMap}
        flagColor={findFlagColor()}
        shown={((selectedCity && selectedCity === city.name) || !selectedCity) as boolean}
      />
    </group>
  );
}
