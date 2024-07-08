import { useState } from 'react'; 
import { decideID } from '../src/scroll';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-extrabold text-blue-300 text-xl">

      <div className="fixed  md:hidden w-full   ">
        <div className="flex justify-center items-center px-4 py-2">
          <button className="text-blue-300 hover:text-pink-300" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <div className={`flex-col px-4 pb-4 bg- ${isOpen ? 'flex  ' : 'hidden'}`}>
          <button className="  w-full  py-2 hover:text-pink-300" onClick={() => decideID('about')}>
            About
          </button>
          <button className=" w-full  py-2 hover:text-pink-300" onClick={() => decideID('project')}>
            Projects
          </button>
          <button className=" w-full py-2 hover:text-pink-300">Skills</button>
          <button className=" w-full py-2 hover:text-pink-300">Contact</button>
        </div>
      </div>


      <div className="hidden md:flex md:flex-row flex-col space-x-10 space-y-10 w-full pr-10 items-end justify-end">
        <button className="hover:text-pink-300" onClick={() => decideID('about')}>
          About
        </button>
        <button className="hover:text-pink-300" onClick={() => decideID('project')}>
          Projects
        </button>
        <button className="hover:text-pink-300">Skills</button>
        <button className="hover:text-pink-300">Contact</button>
      </div>
    </div>
  );
}

export default NavBar;
