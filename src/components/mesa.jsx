import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MESA(props) {
  const { nodes, materials } = useGLTF('./components/mesa.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.4, 0]} scale={[2.345, 0.089, 1.735]} rotation={[0,0,-0.9]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./components/mesa.glb')

export function CardsLOt(props) {
    const { nodes, materials } = useGLTF('./components/cardsglb.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0.22, 0.2, -1.2]} scale={[0.273, 0.105, 0.187]} rotation={[0,0,-0.9]}>
          <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.004']} />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('./components/cardsglb.glb')