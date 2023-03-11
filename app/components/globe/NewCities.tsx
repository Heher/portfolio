import type { Euler, Vector3 } from '@react-three/fiber';
import { useRef } from 'react';
import type { CylinderGeometry, MeshStandardMaterial } from 'three';
import type { MarkerVisit } from 'types/globe';
import type { City } from './coordinates';

type NewCitiesProps = {
  markerGeometry: CylinderGeometry;
  summerMarkerMaterial: MeshStandardMaterial;
  winterMarkerMaterial: MeshStandardMaterial;
  flagGeometry: CylinderGeometry;
  flagMaterial: MeshStandardMaterial;
  visitedMaterial: MeshStandardMaterial;
  offMaterial: MeshStandardMaterial;
  offVisitedMaterial: MeshStandardMaterial;
  city: City & MarkerVisit;
  citySelected: string | null;
  selected: boolean;
  flagPosition: number[];
};

export function NewCities({
  markerGeometry,
  summerMarkerMaterial,
  winterMarkerMaterial,
  flagGeometry,
  flagMaterial,
  visitedMaterial,
  offMaterial,
  offVisitedMaterial,
  city,
  citySelected,
  selected,
  flagPosition
}: NewCitiesProps) {
  const ref = useRef(null);

  if (!city.markerInfo) {
    return null;
  }

  function findFlagMaterial() {
    if (citySelected && citySelected !== city.name) {
      return city.visited ? offVisitedMaterial : offMaterial;
    }

    return city.visited ? visitedMaterial : flagMaterial;
  }

  return (
    <group>
      <mesh
        position={city.markerInfo.position as Vector3}
        rotation={city.markerInfo.rotation as Euler}
        geometry={markerGeometry}
        material={city.type === 'summer' ? summerMarkerMaterial : winterMarkerMaterial}
      ></mesh>
      <mesh
        ref={ref}
        position={flagPosition as Vector3}
        rotation={city.markerInfo.rotation as Euler}
        geometry={flagGeometry}
        material={findFlagMaterial()}
        material-emissiveIntensity={selected ? 40 : 10}
      ></mesh>
    </group>
  );
}
