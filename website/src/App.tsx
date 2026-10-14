import Links from "./Links";
import NavBar from "./NavBarFolder/NavBar";
import { useEffect, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import Background from "./Background";
import { useLocation } from "react-router";
function App() {
  let location = useLocation();
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    location.pathname != "/" ? setShowNavBar(false) : setShowNavBar(true);
  }, [location]);
  return (
    <div className="h-full">
      <Background />
      <div className=" h-full relative z-10">
        {showNavBar && <NavBar />}
        <Links />
      </div>
    </div>
  );
}

export default App;
