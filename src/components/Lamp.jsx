import { useFrame } from "@react-three/fiber";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Lamp(props) {
  const meshRef = useRef()

  const { nodes, materials } = useGLTF('./assets/lamp2.gltf')
  useFrame(()=>{
    var mesh = meshRef.current
    mesh.position.set(-5, 0, -9)
    mesh.scale.set(1, 1, 1)
})
  return (
    <group ref={meshRef} {...props} dispose={null}>
        {
            Object.keys(nodes).map(key => 
                <mesh castShadow receiveShadow geometry={nodes[key].geometry} material={materials["Metal_Color_Palette.002"]} />
            )
        }
    </group>
  )
}

useGLTF.preload('./assets/lamp2.gltf')
