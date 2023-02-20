export function NewCities({
  markerGeometry,
  summerMarkerMaterial,
  winterMarkerMaterial,
  flagMaterial,
  visitedMaterial,
  flagGeometry,
  city,
  citySelected,
  selected,
  top
}) {
  if (!city.markerInfo) {
    return null;
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
        position={city.markerInfo.flagPosition}
        rotation={city.markerInfo.rotation}
        geometry={flagGeometry}
        material={city.visited ? visitedMaterial : flagMaterial}
      >
        {/* <meshBasicMaterial color={topColor(citySelected, selected, city.visited, city.type)} /> */}
        {/* <pointLight position={city.markerInfo.position} intensity={0.01} /> */}
      </mesh>
    </group>
  );
}
