import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";

function Island({position, scale}) {

    const meshRef = useRef()

    useFrame(()=>{
      var mesh = meshRef.current
          // mesh.position.set(0, 0, 0);
          // mesh.scale.set(20, 1.5, 20);
        mesh.position.set(position[0], position[1], position[2])
        mesh.scale.set(scale[0], scale[1], scale[2])
    })
  
  return (
    <mesh ref={meshRef} recieveShadow={true} castShadow={true}>
      <sphereBufferGeometry />
      <meshPhysicalMaterial  color={"#ffffff"} />
    </mesh>
  );
}
export default Island;