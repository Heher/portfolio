import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
//import { Stars } from "@react-three/drei"
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Vector3 } from 'three';
import gsap from 'gsap';
import { globeRadius } from './Marker';
import GlobeMarkers from './GlobeMarkers';
import { useStore } from '../lib/store';

export default function Globe3D() {
  const currentSection = useStore((state) => state.currentSection);
  const setAutorotateGlobe = useStore((state) => state.setAutorotateGlobe);
  const name = (name) => `textures/${name}`;
  const [
    colorMap,
    bumpMap,
    specularMap //starsbg
  ] = useLoader(TextureLoader, [
    name('earthmap4k.jpg'),
    name('earthbump4k.jpg'),
    name('earthspec4k.jpg')
    //name("stars_background.jpg"),
  ]);

  const { camera, scene, gl } = useThree();
  const lightRef = useRef();
  const globeRef = useRef();
  //const starsRef = useRef()

  /* 	useLayoutEffect(() => {
		const canvasAspect = gl.domElement.clientWidth / gl.domElement.clientHeight;
		const imageAspect = starsbg.image ? starsbg.image.width / starsbg.image.height : 1;
		const aspect = imageAspect / canvasAspect;
	 
		starsbg.offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
		starsbg.repeat.x = aspect > 1 ? 1 / aspect : 1;
	 
		starsbg.offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
		starsbg.repeat.y = aspect > 1 ? 1 : aspect;
		scene.background = starsbg
	}) */

  useEffect(() => {
    gl.domElement.addEventListener('click', () => {
      setAutorotateGlobe(false);
    });
  });

  useFrame(() => {
    // make directional light follow camera
    lightRef.current.position.copy(camera.position);
    // make the stars stay in the same position on the camera
    // //starsRef.current.position.copy(camera.position)
    // starsRef.current.rotation.x = camera.rotation.x
    // starsRef.current.rotation.y = camera.rotation.y
    // starsRef.current.rotation.z = camera.rotation.z
    //console.log(starsRef.current.rotation)
  });

  useLayoutEffect(() => {
    //camera.reset()
    if (!globeRef.current) return;
    gsap.to(globeRef.current.scale, {
      x: 0.02,
      y: 0.02,
      z: 0.02,
      duration: 0.3,
      ease: 'power1.out',
      onComplete: fadeInGlobe
    });
  }, [currentSection]);

  function fadeInGlobe() {
    camera.position.copy(new Vector3(0, 0, 30));
    gsap.fromTo(
      globeRef.current.scale,
      { x: 0.2, y: 0.2, z: 0.2 },
      { x: 1, y: 1, z: 1, duration: 1.2, ease: 'power2.out' }
    );
  }

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight ref={lightRef} intensity={0.2} position={[1, 0, 4]} />
      <mesh ref={globeRef}>
        <sphereBufferGeometry args={[globeRadius, 48, 48]} />
        <meshPhongMaterial
          bumpScale={1}
          map={colorMap}
          bumpMap={bumpMap}
          //normalMap={normalMap}
          specularMap={specularMap}
          specular="grey"
        />
        <GlobeMarkers />
      </mesh>
      {/* <Stars ref={starsRef} depth={10} saturation={.8} count={5000} factor={10} fade /> */}
      {/* {globeRef.current && <objectControls ref={(self) => objCtrl.current = self} args={[camera, domElement, globeRef.current]} />} */}
    </>
  );
}
