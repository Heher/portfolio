import { useRef } from 'react';

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
}) {
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
        position={city.markerInfo.position}
        rotation={city.markerInfo.rotation}
        geometry={markerGeometry}
        material={city.type === 'summer' ? summerMarkerMaterial : winterMarkerMaterial}
      ></mesh>
      <mesh
        ref={ref}
        position={flagPosition}
        rotation={city.markerInfo.rotation}
        geometry={flagGeometry}
        material={findFlagMaterial()}
        material-emissiveIntensity={selected ? 40 : 10}
      ></mesh>
    </group>
  );
}
