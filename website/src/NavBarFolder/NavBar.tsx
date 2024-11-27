import { useState } from "react";
import { decideID } from "../scroll";
import burgermenu from '../assets/whiteBurger.png'
import xIcon from '../assets/whiteX.png'
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
 const myIcon = "";
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    
  };

  return (
    <div className="font-black font-serif text-indigo-600">
      <div className="fixed text-2xl top-0 left-0 md:hidden w-full z-50">
        <div className="flex  justify-center items-center ">
          <button
            className=" px-6 pt-10 m-2 text-lg text-indigo-100 z-50 transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline "
            onClick={toggleMenu}
          >
            <img className="mt-5" src={isOpen ? xIcon : burgermenu} />
          </button>
        </div>

        <div className={`flex-col  px-4 pb-4  ${isOpen ? "flex" : "hidden"}`}>
          <button
            className="w-full py-2 hover:text-pink-300 "
            onClick={() => decideID("about")}
          >
            About
          </button>
          <button
            className="w-full py-2 hover:text-pink-300"
            onClick={() => decideID("project")}
          >
            Projects
          </button>
          <button
            className="w-full py-2 hover:text-pink-300"
            onClick={() => decideID("tech")}
          >
            Skills
          </button>
          <button
            className="w-full py-2 hover:text-pink-300"
            onClick={() => decideID("contact")}
          >
            Contact
          </button>
        </div>
      </div>

      <div className="hidden font-Alegreya fixed text-4xl z-10 md:flex md:flex-row flex-col space-x-10 space-y-10 w-full pr-10 items-end justify-center">
        <button className="hover:text-pink-300" onClick={() => decideID("about")}>
          About
        </button>
        <button className="hover:text-pink-300" onClick={() => decideID("project")}>
          Projects
        </button>
        <button className="hover:text-pink-300" onClick={() => decideID("tech")}>
          Skills
        </button>
        <button className="hover:text-pink-300" onClick={() => decideID("contact")}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default NavBar;
