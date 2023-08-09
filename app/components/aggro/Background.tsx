import { useTexture } from '@react-three/drei';

import bg from '~/data/aggro/vintage-wallpaper.jpg';

export default function Background() {
  const backgroundTexture = useTexture(bg);

  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[5, 5]} />
      <meshPhongMaterial map={backgroundTexture} />
    </mesh>
  );
}
