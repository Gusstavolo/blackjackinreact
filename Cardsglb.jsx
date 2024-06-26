/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/components/cardsglb.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./components/cardsglb.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.47, 1.141, 0.666]} scale={[0.273, 0.105, 0.187]}>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.004']} />
      </group>
    </group>
  )
}

useGLTF.preload('./components/cardsglb.glb')
