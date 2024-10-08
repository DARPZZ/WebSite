import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import React from "react";

function Background() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {init && (
        <div
          className={`fixed top-0 left-0 w-full h-full ${
            isMobile ? "-z-10 bg-black" : ""
          }`}
        >
          {!isMobile && (
            <Particles
              id="tsparticles"
              className="fixed top-0 left-0 w-full h-full -z-10"
              options={{
                background: {
                  color: {
                    value: "#000000",
                  },
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: false,
                      mode: "push",
                    },
                    onHover: {
                      enable: false,
                      mode: "repulse",
                    },
                    resize: {
                      enable: true,
                      delay: 0.5,
                    },
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 1,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                  },
                  opacity: {
                    value: 0.6,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Background;
