import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random'

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const position_sphere = new Float32Array(10000);
    return random.inSphere(position_sphere, { radius: 1.2 });
  });
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });   // rotate the stars
  return (
    <group rotation={ [0, 0, Math.PI / 4] }>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }} className='w-full h-full'>
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
export default StarsCanvas;