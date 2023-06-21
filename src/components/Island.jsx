import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";

function Island({position, scale}) {

    const meshRef = useRef()

    useFrame(()=>{
        var mesh = meshRef.current
        mesh.position.set(0, 0, 0)
        mesh.scale.set(20, 1.5, 20)
    })
  
  return (
    <mesh ref={meshRef} recieveShadow={true} castShadow={true}>
      <sphereBufferGeometry />
      <meshPhysicalMaterial  color={"#ffffff"} />
    </mesh>
  );
}
export default Island;