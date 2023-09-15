import { CatmullRomLine } from '@react-three/drei';
import { Vector3, CatmullRomCurve3, MeshStandardMaterial } from 'three';
import type { RouteInfo } from 'types/globe';
import { getPositionVector, globeRadius } from './utils';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Line2 } from 'three-stdlib';
// import { line } from 'd3';

const colors = {
  ground: '#E8E288',
  ferry: '#009FB7',
  flight: '#E6781E'
};

function flightScale(i: number, tubeSections: number) {
  return globeRadius + Math.sin((Math.PI * i) / tubeSections) * (globeRadius * 0.1);
}

const sectionsPerCity = 40;

// const lineMaterial = new MeshStandardMaterial({ color: '#E6781E' });

let uniforms = {
  time: { value: 0 }
};

export function RouteTrip({ coords, type, lineWidth, lineSpeed, dashSize, dashGap }: RouteInfo) {
  const lineRef = useRef<Line2>(null);

  useFrame(({ clock }, delta) => {
    if (!lineRef.current?.material?.uniforms?.time) return;

    lineRef.current.material.uniforms.time.value = (clock.getElapsedTime() / (lineSpeed || 100)) * -1;
  });

  const cityVectors = coords.map((coord) => {
    return getPositionVector(coord, globeRadius);
  });

  let points = [];

  for (let i = 0; i < coords.length - 1; i++) {
    for (let j = 0; j <= sectionsPerCity; j++) {
      if (j === sectionsPerCity) {
        points.push(cityVectors[i + 1]);
        break;
      }

      let p = new Vector3().lerpVectors(cityVectors[i], cityVectors[i + 1], j / sectionsPerCity);
      p.normalize();
      p.multiplyScalar(type === 'flight' ? flightScale(j, sectionsPerCity) : globeRadius);
      points.push(p);
    }
  }

  let path = new CatmullRomCurve3(points);

  return (
    <CatmullRomLine
      ref={lineRef}
      points={path.points}
      color={colors[type]}
      lineWidth={lineWidth || 3}
      curveType="catmullrom"
      dashed
      dashSize={dashSize || 0.01}
      gapSize={dashGap || 0.01}
      tension={5}
      onBeforeCompile={(shader) => {
        shader.uniforms.time = uniforms.time;
        shader.fragmentShader = `
          uniform float time;
          ${shader.fragmentShader}
        `.replace(`vLineDistance + dashOffset`, `vLineDistance + dashOffset + time`);
      }}
    />
  );
}
