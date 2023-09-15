import type { MarkerInfo } from 'types/globe';
import { extraCityColor } from './colors';

import { markerRadius } from './utils';
import ExtraCityMarker from './markers/ExtraCityMarker';
import { motion } from 'framer-motion-3d';

type ExtraCitiesProps = {
  markerInfo: MarkerInfo;
  zoom: number;
};

export default function ExtraCity({ markerInfo, zoom }: ExtraCitiesProps) {
  if (!markerInfo) {
    return null;
  }

  const radius = zoom ? markerRadius * (7 / zoom) : markerRadius;

  return (
    <motion.group
      position={markerInfo.position}
      rotation={markerInfo.rotation}
      initial={{ scale: 0, y: markerInfo.position[1] - 0.01 }}
      animate={{ y: markerInfo.position[1], scale: 1 }}
      exit={{ scale: 0, y: markerInfo.position[1] - 0.01 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <ExtraCityMarker color={extraCityColor} radius={radius} />
    </motion.group>
  );
}
