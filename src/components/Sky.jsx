import React from "react";
import { Sky } from "@react-three/drei";

export default function SkyEnv({sunPosition, sky}) {
  console.log(sky, "sky");

  return (
    <Sky
      distance={sky.distance}
      turbidity={sky.turbidity}
      rayleigh={sky.rayleigh}
      luminance={sky.luminance}
      mieCoefficient={sky.mieCoefficient}
      mieDirectionalG={sky.mieDirectionalG}
      sunPosition={sunPosition}
      inclination={sky.inclination}
      azimuth={sky.azimuth}
    />
  );
}