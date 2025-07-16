import React, { useState, useEffect } from "react";
import TechStack from "./TechStack";
import TechMobile from "./TechMobile";
import { div } from "three/examples/jsm/nodes/Nodes.js";

function Tech() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full px-5">
      <h2 className=" text-5xl justify-center 4xl:text-8xl 4xl:mb-16 items-center flex  md:items-baseline font-extrabold text-green-400 font-Alegreya">
        Tech Stack
      </h2>
      {screenWidth > 900 && screenWidth < 3480 ? (
        <TechStack />
      ) : (
        <div>
          <TechMobile />
        </div>
      )}
    </div>
  );
}

export default Tech;
