import { extend, useLoader } from '@react-three/fiber';

import type { MarkerVisit } from 'types/globe';
import type { CityType } from './coordinates';
import { MarkerMaterial } from './materials/MarkerMaterial';
import { notVisitedColor, summerColor, visitedColor, winterColor } from './colors';
import { FlagMaterial } from './materials/FlagMaterial';
import type { Color } from 'three';
import { TextureLoader } from 'three';

import alphaMapImg from '~/data/beam/alphamap10.png';
import { Flag } from './markers/Flag';
import { Marker } from './markers/Marker';
// import { motion } from 'framer-motion-3d';
// import { AnimatePresence } from 'framer-motion';
import { TripPageContext } from '~/routes/trip';
import { useContext } from 'react';
import { beamHeight, markerRadius } from './utils';

type CitiesProps = {
  city: CityType & MarkerVisit;
};

extend({ MarkerMaterial, FlagMaterial });

export function City({ city, zoom, height, newFlag }: CitiesProps) {
  const alphaMap = useLoader(TextureLoader, alphaMapImg);

  const tripContext = useContext(TripPageContext);

  if (!tripContext) {
    return null;
  }

  const { selectedCity } = tripContext;

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

  const radius = zoom ? markerRadius * (7 / zoom) : markerRadius;

  // console.log('radius', radius);

  return (
    <group>
      <Marker markerInfo={city.markerInfo} color={city.type === 'summer' ? summerColor : winterColor} radius={radius} />
      <Flag
        markerInfo={city.markerInfo}
        alphaMap={alphaMap}
        flagColor={findFlagColor()}
        shown={((selectedCity && selectedCity === city.name) || !selectedCity) as boolean}
        radius={radius}
        height={height}
        newFlag={newFlag}
      />
    </group>
  );
}
