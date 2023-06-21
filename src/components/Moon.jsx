import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Moon(props) {
  const meshRef = useRef();

  const { nodes, materials } = useGLTF("./assets/moon2.gltf");
  console.log("moon : ", nodes, materials);
  useFrame(() => {
    var mesh = meshRef.current;
    mesh.position.set(4, 14, 0);
    mesh.scale.set(1, 1, 1);
  });
  return (
    <group ref={meshRef} {...props} dispose={null}>
      {Object.keys(nodes).map((key) => (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[key].geometry}
          material={materials["Material.002"]}
        />
        // <meshBasicMaterial color={"light-gray"}/>
      ))}
      <meshBasicMaterial color={"gray"} />
    </group>
  );
}

useGLTF.preload("./assets/moon2.gltf");
