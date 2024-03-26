/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/components/maoob2.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/maoob2.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[3.559, 1.498, 1.064]}>
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

useGLTF.preload('/maoob2.glb')
