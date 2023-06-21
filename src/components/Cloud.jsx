import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cloud(props) {
  const meshRef = useRef();

  const { nodes, materials } = useGLTF("./assets/cloud.gltf");
  // console.log(nodes, materials)
  useFrame(() => {
    var mesh = meshRef.current;
    mesh.position.set(props.position[0], props.position[1], props.position[2]);
    mesh.scale.set(4, 1, 2);
  });
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mball005.geometry}>
        <meshBasicMaterial color={"light-gray"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./assets/cloud.gltf");
