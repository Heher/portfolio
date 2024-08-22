import { extend, useLoader } from '@react-three/fiber';

import type { MarkerVisit } from 'types/globe';
import type { CityType } from './coordinates';
// import { MarkerMaterial } from './materials/MarkerMaterial';
import { notVisitedColor, summerColor, visitedColor, winterColor } from './colors';
// import { FlagMaterial } from './materials/FlagMaterial';
import type { Color } from 'three';
import { TextureLoader } from 'three';

import alphaMapImg from '~/data/beam/alphamap10.png';
// import { Flag } from './markers/Flag';
import { Marker } from './markers/Marker';
// import { motion } from 'framer-motion-3d';
// import { AnimatePresence } from 'framer-motion';
import { TripPageContext } from '~/routes/trip';
import { useContext } from 'react';
import { markerRadius } from './utils';
import { myRoute } from './routeCoordinates';

type CitiesProps = {
  city: CityType & MarkerVisit;
  zoom: number;
  height: number;
};

// extend({ MarkerMaterial, FlagMaterial });

export function City({ city, zoom, height }: CitiesProps) {
  // const alphaMap = useLoader(TextureLoader, alphaMapImg);

  const tripContext = useContext(TripPageContext);

  // if (!tripContext) {
  //   return null;
  // }

  if (!city.markerInfo) {
    return null;
  }

  function findFlagColor(): Color {
    return city.visited ? visitedColor : notVisitedColor;
  }

  const radius = zoom ? markerRadius * (7 / zoom) : markerRadius;
  // const radius = markerRadius;

  let showFlag = false;
  let newFlag = true;

  if (tripContext?.selectedRouteLeg) {
    const selectedRoute = myRoute[tripContext.selectedRouteLeg - 1];

    const foundCity = selectedRoute.cities.find((routeCity) => routeCity.name === city.name);

    showFlag = foundCity ? true : false;
    newFlag = foundCity ? foundCity.new : false;
  } else {
    showFlag = (tripContext?.selectedCity && tripContext.selectedCity === city.name) ?? false;
  }

  // console.log('CITY', city);

  return (
    <group>
      <Marker
        markerInfo={city.markerInfo}
        color={city.type === 'summer' ? summerColor : winterColor}
        radius={radius}
        shown={showFlag}
      />
      {/* <Flag
        markerInfo={city.markerInfo}
        alphaMap={alphaMap}
        flagColor={findFlagColor()}
        shown={showFlag}
        radius={radius}
        height={height}
        newFlag={newFlag}
        dim={!selectedCity && selectedRouteLeg === null}
      /> */}
    </group>
  );
}
