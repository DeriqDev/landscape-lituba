import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Mockup } from '../models/Mockup'
import { Environment } from '@react-three/drei'

const Home = () => {
  return (
    <div className='header1'>
        <div className='left'>
            <div className='logo'>
                <img src='./Lituba1.svg'/>
                <div className='anime-container'>
                    <svg height='250' width='250' viewBox='0 0 500 500'>
                        <path fill='none' d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id='texte1'></path>
                        <circle fill='none' cx='250' cy='250' r='130'></circle>
                        <text className='anim-texte' dy='70' textLength='1220'>
                            <textPath href='#texte1'>Spirit Lituba</textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </div>
        <div className='right'>
                <div className='right_right'>
                    <div className='right_right_right'>
                        <Canvas className='w-full h-screen bg-transparent' dpr={[1, 1.5]} >
                        <fog attach="fog" args={['#191920', 0, 15]} />
                        {/* <directionalLight position={[1, 1, 1]} intensity={2}/> */}
                        {/* <ambientLight intensity={0.5}/> */}
                        {/* <hemisphereLight 
                            skyColor="#b1e1f" 
                            groundColor="#000000" 
                            intensity={1}/> */}
                            <Environment preset='apartment'/>
                            <Mockup 
                                position={[0, -1, 0]}
                                scale={10}/>
                        </Canvas>
                    </div>
                </div>
        </div>
        <h1 className='left_h1'> Spirit of Ngog Lituba</h1>

       

    </div>
  )
}

export default Home