export default function useEnvStore() {
    const env = {
        sky: {
            day : {
                distance:1500,
                turbidity:50,
                rayleigh:1,
                luminance:0,
                mieCoefficient:0.005,
                mieDirectionalG:1,
                inclination:0,
                azimuth:0.25,
            },
            sunset : {
                distance:1500,
                turbidity:50,
                rayleigh:1,
                luminance:0,
                mieCoefficient:0.005,
                mieDirectionalG:0.8,
                inclination:0.49,
                azimuth:0.25,
            },
            night : {
                distance:1500,
                turbidity:200,
                rayleigh:1,
                luminance:0,
                mieCoefficient:1,
                mieDirectionalG:0,
                inclination:0,
                azimuth: 0.25,
            }
        }
    };
    return env;
  }
  