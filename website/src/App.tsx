import Links from "./Links";
import NavBar from "./NavBarFolder/NavBar";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Background from "./Background";
import { useLocation } from "react-router";
function App() {
  let location = useLocation();
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
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
  useEffect(() => {
    location.pathname !="/" ? setShowNavBar(false) : setShowNavBar(true)
  }, [location]);
  return (
    <div className="h-full">
      <Background />
      <div className=" h-full relative z-10">
        {showNavBar &&
          <NavBar />
        }
        <Links />
      </div>
    </div>
  );
}

export default App;
