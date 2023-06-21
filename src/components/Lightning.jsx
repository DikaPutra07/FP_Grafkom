import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Color } from 'three';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

function Rain(props) {
    const tempObject = new THREE.Object3D()
    const tempColor = new THREE.Color()

    const meshRef = useRef()
    const prevRef = useRef()

    const colorArray = Float32Array.from(new Array(3000).fill(1))

    var tick = 0
    var init = true
    useFrame((state) => {
        tick += 0.1
        meshRef.current.rotation.x = 0
        meshRef.current.rotation.y = 0
        let i = 0
        for (let x = 0; x < 20; x++)
            for (let y = 0; y < 20; y++)
                for (let z = 0; z < 20; z++) {
                    const id = i++
                    tempObject.position.set(15 - x*2, y*2-tick%2, z*2-15)
                    tempObject.rotation.y = 0
                    tempObject.rotation.z = 0
                    tempObject.updateMatrix()
                    meshRef.current.setMatrixAt(id, tempObject.matrix)
                }
        meshRef.current.instanceMatrix.needsUpdate = true
    })
    return (
        <instancedMesh
            ref={meshRef}
            args={[null, null, 8000]}>
            <capsuleGeometry args={[0.01, 0.2, 4, 8]}>
            </capsuleGeometry >
            <meshBasicMaterial color={"#3873E0"} />
        </instancedMesh>
    );
}
export default Rain;