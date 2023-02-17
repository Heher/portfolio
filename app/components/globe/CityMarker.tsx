import { globeRadius, placeObjectOnPlanet, topColor } from './utils';

export const CityMarker = ({ markerGeometry, markerTopGeometry, city, visited, citySelected, selected, top }) => {
  const cityInfo = placeObjectOnPlanet(city.coord, globeRadius);

  return (
    <group>
      <mesh position={cityInfo.position} rotation={cityInfo.rotation} geometry={markerGeometry}>
        <meshBasicMaterial color={topColor(citySelected, selected, visited, city.type)} />
      </mesh>
      {top && (
        <mesh position={cityInfo.flagPosition} rotation={cityInfo.rotation} geometry={markerTopGeometry}>
          <meshBasicMaterial color={topColor(citySelected, selected, visited, city.type)} />
        </mesh>
      )}
    </group>
  );
};
