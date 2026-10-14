import { useState } from "react";
import { decideID } from "../scroll";
import burgermenu from "../assets/whiteBurger.png";
import xIcon from "../assets/whiteX.png";

const links = [
  { id: "about", label: "About" },
  { id: "project", label: "Projects" },
  { id: "References", label: "References" },
  { id: "tech", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const goTo = (id) => {
    setIsOpen(false);
    decideID(id);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full font-black text-emerald-400">
      <div className="md:hidden">
        <div className="flex justify-center">
          <button
            className="m-2 p-4 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <img className="w-8 h-8" src={isOpen ? xIcon : burgermenu} alt="" />
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col px-4 pb-4 text-2xl font-serif bg-transparent">
            {links.map((link) => (
              <button
                key={link.id}
                className="w-full py-3 hover:text-pink-300"
                onClick={() => goTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:flex justify-center gap-10 lg:gap-22 py-6 font-inter text-3xl lg:text-4xl 4xl:text-7xl">
        {links.map((link) => (
          <button
            key={link.id}
            className="hover:text-sky-300"
            onClick={() => goTo(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
