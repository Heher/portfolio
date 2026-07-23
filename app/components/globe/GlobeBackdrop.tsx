import { GradientTexture, GradientType } from '@react-three/drei';

export default function GlobeBackdrop() {
  return (
    <mesh
      rotation={[0, 0, 0.5, 'ZXY']}
      receiveShadow
    >
      <circleGeometry args={[1, 64]} />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0.6, 0.9, 1]} // As many stops as you want
          colors={['#004953', '#317873', '#008080']} // Colors need to match the number of stops
          // size={1024} // Size (height) is optional, default = 1024
          width={1024} // Width of the canvas producing the texture, default = 16
          type={GradientType.Radial} // The type of the gradient, default = GradientType.Linear
          innerCircleRadius={0} // Optional, the radius of the inner circle of the gradient, default = 0
          outerCircleRadius="auto" // Optional, the radius of the outer circle of the gradient, default = auto
        />
      </meshBasicMaterial>
    </mesh>
  );
}
