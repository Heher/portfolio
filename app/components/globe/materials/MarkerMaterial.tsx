import { shaderMaterial } from '@react-three/drei';
import { Color } from 'three';

import vertex from '../shaders/vertex.glsl';
import fragment from '../shaders/markerFragment.glsl';

export const MarkerMaterial = shaderMaterial(
  {
    u_color: new Color(0.2, 0.0, 0.1)
  },
  vertex,
  fragment
);
