import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static

  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "whiteAlpha.500", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 1, // number of particles to add on click
          },
          repulse: {
            distance: 200, // distance of the particles from the cursor
          },
        },
      },
      collsions: {
        enable: true,
      },
      particles: {
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 6 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.1, max: 0.25 }, // using a different opacity, to have some semitransparent effects
        },
        number: {
          density: {
            enable: true,
          },
          value: 10,
        },
        size: {
          value: { min: 1, max: 2 }, // let's randomize the particles size a bit
        },
      },
      detectRetina: true,
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(main);
  };

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
