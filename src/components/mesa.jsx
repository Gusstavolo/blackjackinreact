import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useDelerAnim } from './animation'
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

  export function Deler(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('./components/maoob2.glb')
    const {setAnimations} = useDelerAnim();
    const {actions, names} = useAnimations(animations,group);
    
    useEffect(()=> {
      setAnimations(names);
    }, [names])


    useEffect(()=> {
      actions[names[2]].reset().fadeIn(0.5).play();
    }, [])

    return (
      <group castShadow receiveShadow ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature" position={[-2, 3.5, -0.99]} rotation={[0,3.2,0.9]}>
            <primitive object={nodes.Bone_r} />
            <primitive object={nodes.Bone008_r} />
            <primitive object={nodes.Bone010_r} />
            <primitive object={nodes.Bone012_r} />
            <primitive object={nodes.Bone014_r} />
            <primitive object={nodes.Bone_r001} />
            <primitive object={nodes.Bone008_r001} />
            <primitive object={nodes.Bone010_r001} />
            <primitive object={nodes.Bone012_r001} />
            <primitive object={nodes.Bone014_r001} />
            <skinnedMesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.006']} skeleton={nodes.Cube003.skeleton} />
          </group>
        </group>
      </group>
    )
  }
  
  useGLTF.preload('./components/maoob2.glb')
  