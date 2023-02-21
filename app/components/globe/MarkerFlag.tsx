import { Instance } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

export function MarkerFlag({
  markerGeometry,
  markerMaterial,
  summerMarkerMaterial,
  winterMarkerMaterial,
  flagMaterial,
  visitedMaterial,
  offMaterial,
  offVisitedMaterial,
  flagGeometry,
  city,
  citySelected,
  selected
}) {
  // console.log(selected, citySelected);
  const ref = useRef(null);

  // const [markerColor, setMarkerColor] = useState(city.type === 'summer' ? 'red' : 'blue');
  // const [flagColor, setFlagColor] = useState('purple');

  // useEffect(() => {
  //   if (citySelected) {
  //     if (selected) {
  //       // console.log(city.name, selected);
  //       // setFlagColor('white');
  //     } else {
  //       setFlagColor('black');
  //     }
  //   } else {
  //     setFlagColor('purple');
  //   }
  // }, [citySelected]);

  // useFrame(() => {
  //   if (!city.markerInfo) {
  //     return;
  //   }

  //   if (citySelected) {
  //     if (citySelected === city.name) {
  //       // console.table(ref.current.material.color);
  //       ref.current.material.color.setStyle('white');
  //     }
  //   }
  // });

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
    <Instance
      position={city.markerInfo.flagPosition}
      rotation={city.markerInfo.rotation}
      color={selected ? 'purple' : 'yellow'}
      // emissive={selected ? 'purple' : 'yellow'}
      // emissiveIntensity={selected ? 80 : 40}
    >
      <instancedBufferAttribute attach={'emissive'} args={[10, 10, 10]} />
    </Instance>
  );
}

{
  /* <group>
        <mesh
          position={city.markerInfo.position}
          rotation={city.markerInfo.rotation}
          geometry={markerGeometry}
          material={city.type === 'summer' ? summerMarkerMaterial : winterMarkerMaterial}
          // material-color={markerColor}
        ></mesh>
        <mesh
          ref={ref}
          position={city.markerInfo.flagPosition}
          rotation={city.markerInfo.rotation}
          geometry={flagGeometry}
          material={findFlagMaterial()}
          // material-color={flagColor}
          // material-emissive={flagColor}
          material-emissiveIntensity={selected ? 40 : 10}
        >
        </mesh>
      </group> */
}
