import React from "react";
import R from "../src/assets/rallee.png";
import { decideID } from "../src/scroll";
function NavBar() {
  return (
    <div className=" font-extrabold text-blue-300  text-xl">
      <div className="fixed flex flex-row space-x-10  w-full pr-10 pt-5 items-end justify-end">
        <button
          className="hover:text-pink-300"
          onClick={() => decideID("about")}
        >
          About
        </button>
        <button className="hover:text-pink-300">Projects</button>
        <button className="hover:text-pink-300">Skills</button>
        <button className="hover:text-pink-300">Contact</button>
      </div>
      <div className="fixed flex flex-row items-start justify-start">
        <img src={R} alt="R" className="w-1/2" />
      </div>
    </div>
  );
}

export default NavBar;
