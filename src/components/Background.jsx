import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const BackgroundCanvas = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine); // load tsparticles engine
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full -z-10"
      options={{
        background: {
          color: "#000000",
        },
        fpsLimit: 30,
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
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            value: 100,
            density: { enable: true, area: 800 },
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

export default BackgroundCanvas;
