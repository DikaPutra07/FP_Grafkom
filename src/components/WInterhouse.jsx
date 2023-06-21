import { useFrame } from "@react-three/fiber";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
export default function Model(props) {
    const meshRef = useRef();
    const { nodes, materials } = useGLTF("./assets/winter-house.glb");
    useFrame(() => {
        var mesh = meshRef.current;
        mesh.position.set(-10, 1, -10);
        mesh.rotation.set(0, 315, 0);
        mesh.scale.set(0.15, 0.15, 0.15);
    }
    );

    console.log(nodes);
    console.log(materials);

    return (
        <group ref={meshRef} {...props} dispose={null}>
            {Object.keys(nodes).map((key) => (
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes[key].geometry}
                    material={materials[50]}
                />
            ))}
        </group>
    );
}

useGLTF.preload("./assets/bedroom.gltf")