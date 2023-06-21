import React, { useState } from "react";
// import { Rain, useTheme } from 'threejs-weather'
import Box from "@/components/Box";
import Floor from "@/components/Floor";
import House from "@/components/House";
import Island from "@/components/Island";
import LightBulb from "@/components/LightBulb";
import Model from "@/components/Model";
import Rain from "@/components/Rain";
import Lamp from "@/components/Lamp";
import Roof from "@/components/Roof";
import WeatherWidget from "@/components/WheaterWidget";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";
import SkyEnv from "@/components/Sky";
import Snow from "@/components/Snow";
import Cloud from "@/components/Cloud";
import useWeatherStore from "../store/useWeatherStore";
import useEnvStore from "../store/usEnvStore";
import Moon from "@/components/Moon";
import Sun from "@/components/Sun";
import Kucing from "@/components/Kucing";
import Bedroom from "@/components/bedroom";
import Models from "@/components/bedroom";
import Winterhouse from "@/components/WInterhouse";

export default function Home() {
  const data = useWeatherStore();
  const env = useEnvStore()
  const [weather, setWeather] = useState(null);
  const [sky, setSky] = useState(env.sky.day);

  const api = {
    key: "4f927311c182ce5391d2408e15c9dc21",
    base: "https://api.openweathermap.org/data/2.5/",
    cityName: "Surabaya",
  };
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let date = new Date();
  let hour = date.getHours() - 6;
  let realHour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes == 0) minutes = 1;
  let degree = 360 * ((hour * 60 + minutes) / (24 * 60));
  let radian = (Math.PI * degree) / 180;

  let sunPositionX = 10 * Math.cos(radian);
  let sunPositionY = 10 * Math.sin(radian);

  console.log(sunPositionX, sunPositionY);


  React.useEffect(() => {
    if (realHour > 6 && realHour < 16) {
      console.log(realHour, "day");
      setSky(env.sky.day);
    } else if (realHour >= 16 && realHour < 18) {
      console.log(realHour, "sunset");
      setSky(env.sky.sunset);
    } else {
      console.log(realHour, "night");
      setSky(env.sky.night);
    }
  }, [hour]);

  console.log(realHour, sky);
  
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-slate-600">
      <Head>
        <title>Weathery</title>
        <meta
          name="description"
          content="Weathery, forcast app with interactive 3D design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen">
        <div className="absolute top-5 left-10 p-5 text-white rounded-lg shadow-md bg-slate-500 z-10">
          <h1>Interactions</h1>
          <ul className=" ">
            <li>🖱️ Drag/scroll to adjust the camera</li>
          </ul>
        </div>
        {/* <WeatherWidget {...weather} /> */}
        <Canvas
          color="white"
          shadows={true}
          className="bg-sky-500"
          camera={{
            position: [0, 0, 0],
            fov: 75,
          }}
          // {...bind()}
        >
          <OrbitControls
            enablePan={false}
            maxDistance={25}
            minDistance={8}
            maxPolarAngle={1.5}
            enableDamping={true}
            target={[0, 1, 0]}
          />

          <ambientLight color={"white"} intensity={1} />
          {/* <LightBulb position={[4, 5.5, 0]} scale={[0.8, 0.8, 0.8]} /> */}

          <SkyEnv s
            sunPosition={[sunPositionX, sunPositionY, 0]}
            sky={sky}
          />

          <Suspense fallback={null}>
            {console.log(realHour)}
            <Snow />
            <Lamp/>
            <Suspense fallback={null}>
              <Island position={[-10, 0, -10]} scale={[8, 1, 8]} />
              <Island position={[10, 0, -10]} scale={[8, 1, 8]} />
              <Island position={[-10, 0, 10]} scale={[8, 1, 8]} />
              <Island position={[10, 0, 10]} scale={[8, 1, 8]} />
            </Suspense>

            <Models />
            <Winterhouse />
          </Suspense>
          <Floor position={[0, -1, 0]} />
        </Canvas>
      </main>
    </div>
  );
}