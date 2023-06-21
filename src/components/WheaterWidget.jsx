import { Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { MdOutlineWidgets, MdWidgets } from "react-icons/md";

export default function WheaterWidget({ ...props }) {
  const [today, setToday] = React.useState(new Date());
  let [isShowing, setIsShowing] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => setToday(new Date()), 600000);
  }, []);

  const iconSwitch = (main) => {
    switch (main) {
      case "Thunderstorm":
        return "/assets/Cloud 3 zap.png";
      case "Drizzle":
        return "/assets/Sun cloud little rain.png";
      case "Clouds":
        return "/assets/cloudy.png";
      case "Rain":
        return "/assets/Sun cloud angled rain.png";
      case "Snow":
        return "/";
      case "Clear":
        return "/assets/sun shine.png";
      default:
        return "/assets/sun shine.png";
    }
  };
  // console.log(props.weather && props.weather[0]);

  return (
    <>
      <button
        onClick={() => setIsShowing(!isShowing)}
        className="p-2 text-white absolute top-10 right-10 z-10 rounded bg-slate-600 glass-light"
      >
        {isShowing ? <MdOutlineWidgets size={30} /> : <MdWidgets size={30} />}
      </button>
      <Transition
        as={React.Fragment}
        show={isShowing}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute top-10 flex justify-end right-24 z-10 sm:w-4/12">
          <div className="flex flex-col w-11/12 p-5 gap-y-3 text-white rounded-lg shadow-md glass-light">
            <div className="text-center">
              <h1 className="text-3xl drop-shadow-big ">
                {props.name}, Indonesia
              </h1>
              <p className="font-light drop-shadow-big">
                {today.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="text-center drop-shadow-big sm:text-[40px]">
              <span className="">
                {today.toLocaleTimeString("en-Us", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
              {props.weather ? (
                <Image
                  alt={`${props.name}`}
                  src={iconSwitch(props.weather[0].main)}
                  width={230}
                  height={230}
                  quality={100}
                  className="drop-shadow-big mx-auto"
                />
              ) : (
                <p>Loading ...</p>
              )}

              <span className="inline-block font-semibold sm:text-[60px] drop-shadow-big">
                {Math.round(props.main?.temp)}°c
              </span>
            </div>
            <div className="flex justify-around text-center [&>*>p]:font-extralight [&>*>p]:text-sm p-2 bg-white/80 text-black rounded-2xl shadow-xl items-center">
              <div>
                <p>Wind</p>
                <span>{Math.round(props.wind?.speed)} m/s</span>
              </div>
              <div>
                <p>Humidity</p>
                <span>{Math.round(props.main?.humidity)}</span>
              </div>
              <div>
                <p>Pressure</p>
                <span>{props.main?.pressure} hPa</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
