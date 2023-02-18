import { topColor } from './utils';

export const CityMarker = ({ markerGeometry, markerTopGeometry, city, citySelected, selected, top }) => {
  if (!city.markerInfo) {
    return null;
  }

  return (
    <group>
      <mesh position={city.markerInfo.position} rotation={city.markerInfo.rotation} geometry={markerGeometry}>
        <meshBasicMaterial color={topColor(citySelected, selected, city.visited, city.type)} />
      </mesh>
      {top && (
        <mesh position={city.markerInfo.flagPosition} rotation={city.markerInfo.rotation} geometry={markerTopGeometry}>
          <meshBasicMaterial color={topColor(citySelected, selected, city.visited, city.type)} />
        </mesh>
      )}
    </group>
  );
};
