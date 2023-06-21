import { useFrame } from "@react-three/fiber";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const meshRef = useRef();
    const { nodes, materials } = useGLTF("./assets/bedroomrev.gltf");
    useFrame(() => {
        var mesh = meshRef.current;
        mesh.position.set(0, 1, 0);
        mesh.scale.set(3, 1.5, 3);
    }
    );
    return (
        <group ref={meshRef} {...props} dispose={null}>
            {Object.keys(nodes).map((key) => (
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes[key].geometry}
                    // material={materials[key]}
                />
            ))}
        </group>
    );
}

useGLTF.preload("./assets/bedroom.gltf")