/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 frog.gltf
Author: David Wigforss (https://sketchfab.com/dwigfor)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/frog-statue-123d8e7e99c14d699d3913e3f84458d5
Title: Frog Statue
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Frog(props) {
  const { nodes, materials } = useGLTF('/frog.gltf')
  const meshRef = useRef();

  useFrame(() => {
    var mesh = meshRef.current;
    mesh.position.set(-10, 1, 10);
    mesh.rotation.set(0, 2.25, 0);
  });
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh geometry={nodes.geo1_MAT_Statue_Frog_0.geometry} material={materials.MAT_Statue_Frog} scale={15} />
    </group>
  )
}

useGLTF.preload('/frog.gltf')
