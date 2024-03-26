import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MESA(props) {
  const { nodes, materials } = useGLTF('./components/mesa.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.4, 0]} scale={[2.345, 0.089, 1.735]} rotation={[0,0,-0.9]}>
        <mesh  receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./components/mesa.glb')

export function CardsLOt(props) {
    const { nodes, materials } = useGLTF('./components/cartasempreto.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0.22, 0.2, -1.2]} scale={[0.273, 0.105, 0.187]} rotation={[0,0,-0.9]}>
          <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials['Material.002']} />
          <mesh receiveShadow geometry={nodes.Cube001_2.geometry} material={materials['Material.004']} />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('./components/cartasempreto.glb')

  export function DoneB(props) {
    const { nodes, materials } = useGLTF('./components/butondone.glb')
    return (
      <group {...props} dispose={null}>
        <group position={[0.22, 0.2, 1.2]} scale={0.147} rotation={[0,0,-0.9]}>
          <mesh castShadow  geometry={nodes.Cube002_1.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube002_2.geometry} material={materials['Material.005']} />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('./components/butondone.glb')