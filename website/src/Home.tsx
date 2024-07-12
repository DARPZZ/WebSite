import React from "react";
import About from "./AboutFolder/About";
import Projects from "./PorjectsFolder/Projects";
import TechStack from "./TechStack";
function Home() {
  return (
    <div className="w-full h-full">
      <div className=" flex flex-col  items-center justify-center h-screen">
        <h1 className="text-white font-extrabold md:text-8xl text-6xl">
          WHO'S
        </h1>
        <div className=" space-x-1 flex flex-row  text-blue-300 font-extrabold text-6xl md:text-8xl">
          <h1 className="hover:text-white hover:scale-[1.3]">R</h1>
          <h1 className="hover:text-white hover:scale-[1.3] ">a</h1>
          <h1 className="hover:text-white hover:scale-[1.3] ">s</h1>
          <h1 className="hover:text-white hover:scale-[1.3] ">m</h1>
          <h1 className="hover:text-white hover:scale-[1.3] ">u</h1>
          <h1 className="hover:text-white hover:scale-[1.3] ">s</h1>
        </div>
      </div>
      <div className=" space-y-80">
        <div
          className=" md:justify-center md:items-center justify-start items-start flex flex-col"
          id="about"
        >
          <About />
        </div>
        <div
          className=" md:justify-center md:items-center justify-start items-start flex flex-col"
          id="project"
        >
          <Projects />
        </div>
        <div
          className=" md:justify-center md:items-center justify-start items-start flex flex-col"
          id="project"
        >
          <TechStack></TechStack>
        </div>
      </div>
    </div>
  );
}

export default Home;
