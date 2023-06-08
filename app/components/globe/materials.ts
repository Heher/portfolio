import { MeshStandardMaterial } from 'three';
import { black, notVisitedColor, summerColor, visitedColor, winterColor } from './colors';

export const summerMarkerMaterial = new MeshStandardMaterial({
  color: summerColor
});

export const winterMarkerMaterial = new MeshStandardMaterial({
  color: winterColor
});

export const flagMaterial = new MeshStandardMaterial({
  color: notVisitedColor,
  emissive: notVisitedColor,
  emissiveIntensity: 10,
  toneMapped: false
});

export const visitedMaterial = new MeshStandardMaterial({
  color: visitedColor,
  emissive: visitedColor,
  emissiveIntensity: 10,
  toneMapped: false
});

export const offVisitedMaterial = new MeshStandardMaterial({
  color: visitedColor,
  emissive: black,
  emissiveIntensity: 0,
  toneMapped: false
});

export const offMaterial = new MeshStandardMaterial({
  color: notVisitedColor,
  emissive: black,
  emissiveIntensity: 0,
  toneMapped: false
});
