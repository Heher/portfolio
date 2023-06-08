import { CylinderGeometry, SphereGeometry } from 'three';
import { globeRadius, markerHeight, markerRadius } from './utils';

export const markerGeometry = new CylinderGeometry(markerRadius, markerRadius, markerHeight, 32);
export const flagGeometry = new CylinderGeometry(markerRadius, markerRadius, 0.01, 32);

export const globeGeometry = new SphereGeometry(globeRadius, 32, 32);
