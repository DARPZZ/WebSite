import React, { useState, useEffect } from "react";
import TechStack from "./TechStack";
import TechMobile from "./TechMobile";
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
      <h2 className="text-5xl font-extrabold text-green-400">Tech Stack</h2>
      {screenWidth > 1400 ? (

          <TechStack />
      ) : (
        <div>
          <div>
           <TechMobile></TechMobile>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tech;
