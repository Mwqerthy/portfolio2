import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  console.log(computer)

  return (
    <>
      <hemisphereLight intensity={8} groundColor="black" />
      <pointLight intensity={8} position={[0, 0, 10]} />
      <spotLight position={[20, 20, 20]} angle={Math.PI / 3} penumbra={1} intensity={8} shadow-mapSize={[2048, 2048]} />
      <mesh receiveShadow castShadow>
        <primitive object={computer.scene} scale={isMobile ? 0.45 : 0.75} position={[-1, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
      </mesh>
    </>

  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>

  )
}

export default ComputersCanvas;