import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Ligths = () => {
    const ref = useRef()
    useFrame(({clock}) => {
        ref.current.position.y += Math.sin(clock.elapsedTime) * 0.1

        if (ref.current.rotation.y === 0) {
            ref.current.rotation.x += 0.01
            ref.current.rotation.z -= 0.01
        }else{
            ref.current.rotation.x -= 0.01
            ref.current.rotation.z += 0.01
        }
    } 
    )
  return (
    <spotLight ref={ref}  position={[1,1, 3]} intensity={40} color="#f8ce04" />

  )
}

export default Ligths