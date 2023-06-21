export default function useWeatherStore() {
  const Weather = {
    coord: {
      lon: 112.7508,
      lat: -7.2492,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02n",
      },
    ],
    base: "stations",
    main: {
      temp: 25.97,
      feels_like: 25.97,
      temp_min: 25.97,
      temp_max: 25.97,
      pressure: 1009,
      humidity: 94,
    },
    visibility: 7000,
    wind: {
      speed: 3.6,
      deg: 240,
    },
    clouds: {
      all: 60,
    },
    dt: 1670937898,
    sys: {
      type: 1,
      id: 9363,
      country: "ID",
      sunrise: 1670882818,
      sunset: 1670927950,
    },
    timezone: 25200,
    id: 1625822,
    name: "Surabaya",
    cod: 200,
  };
  return Weather;
}
