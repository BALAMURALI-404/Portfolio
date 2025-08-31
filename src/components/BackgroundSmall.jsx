import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const BackgroundSmall = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine); // load tsparticles engine
  }, []);

  return (
<Particles
      id="tsparticles-small"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full -z-10"
      options={{
        background: {
          color: "#000000",
        },
        fpsLimit: 15, // ⚡ lighter for mobile
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: true,
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ff0000",
            distance: 120, // slightly shorter lines
            enable: true,
            opacity: 0.7, // softer for small screen
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            value: 70, // fewer particles for smoother performance
            density: { enable: true, area: 700 },
          },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundSmall;
