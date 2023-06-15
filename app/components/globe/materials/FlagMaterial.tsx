import { shaderMaterial } from '@react-three/drei';
import { Color } from 'three';

import vertex from '../shaders/vertex.glsl';
import fragment from '../shaders/fragment.glsl';

export const FlagMaterial = shaderMaterial(
  {
    u_time: 0,
    u_offColor: new Color(0x999999),
    u_color: new Color(0.2, 0.0, 0.1)
  },
  vertex,
  fragment
);
