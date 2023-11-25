/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { MeshReflectorMaterial, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Mockup(props) {
  const { nodes, materials } = useGLTF("/Mockup.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle.geometry}
        material={materials.Glass}
        position={[-0.001, 0, 0.021]}
        rotation={[0, 0.15, -0.006]}
      >
      <MeshTransmissionMaterial transmission={1} roughness={0.2} thickness={0.015} ior={1.5}/>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle_Label.geometry}
          material={materials["Glass Label"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle_Label_Cap.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap.geometry}
          material={materials.Cap}
          position={[0.002, 0.003, 0]}
          rotation={[0, 0, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Liquid.geometry}
          material={materials.Liquid}
          rotation={[0, 0, 0.006]}
        />

      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle_Label_Back001.geometry}
        material={materials.BottleLabelBackMterial}
        position={[-0.001, 0, 0.02]}
        rotation={[0, 0.15, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.BG}
        position={[0.04, 0.157, -0.017]}
        rotation={[0, 0.263, 0]}
        scale={[0.144, 0.047, 0.144]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle001.geometry}
        material={materials.Glass}
        position={[-0.103, 0.072, -0.115]}
        rotation={[0, -0.077, -0.006]}
      >
      
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle_Label_Cap001.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle_Label001.geometry}
          material={materials["Glass Label"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap001.geometry}
          material={materials.Cap}
          position={[0.002, 0.003, 0]}
          rotation={[0, 0, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Liquid001.geometry}
          material={materials.Liquid}
          rotation={[0, 0, 0.006]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle002.geometry}
        material={materials.Glass}
        position={[0.103, 0, -0.067]}
        rotation={[Math.PI, 0.149, 3.136]}
      >
      <MeshTransmissionMaterial transmission={1} roughness={0.2} thickness={0.015} ior={1.5}/>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle_Label_Cap002.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle_Label002.geometry}
          material={materials["Glass Label"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap002.geometry}
          material={materials.Cap}
          position={[0.002, 0.003, 0]}
          rotation={[0, 0, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Liquid002.geometry}
          material={materials.Liquid}
          rotation={[0, 0, 0.006]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle_Label_Back002.geometry}
        material={materials.BottleLabelBackMterial}
        position={[0.103, 0, -0.066]}
        rotation={[Math.PI, 0.149, 3.136]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        scale={2.352}
      >
        <MeshReflectorMaterial 
        blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={15}
          roughness={1}
          depthScale={0.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Mockup.glb");
