import React from "react";
import ExtensionCard from "./ExtensionCard";
import Geo from "../assets/Geo.png";
import PrivateInstergramPic from "../assets/PrivateInstergramPic.png";
import AdBlockerPic from "../assets/AdBlockerPic.png";
function Extension() {
  const startGithub = "https://github.com/DARPZZ/";
  //#region ExTENSIONS REGION
  const GeoGessur = {
    downLoadInstruction: `${startGithub}GeoChromeExtension/blob/main/README.md`,
    seeCode: `https://github.com/DARPZZ/GeoChromeExtension`,
    description:
      "This browser extension enhances your GeoGuessr gameplay by showing the current location directly on a map, helping you get better guesses faster.",
    name: "GeoGuessr",
    img: Geo,
  };
  const Instergram = {
    downLoadInstruction: `${startGithub}Anonymous-Instergram-extension/blob/main/README.md`,
    seeCode: `${startGithub}Anonymous-Instergram-extension`,
    description:
      "This extension is designed to keep your Instagram activity completely anonymous. It hides your presence while you browse, view stories, and interact on the platform without revealing your identity. Stay invisible while enjoying Instagram with full privacy.",
    name: "Instergram",
    img: PrivateInstergramPic,
  };
  const AdRemover = {
    description:"Enjoy a cleaner, distraction-free reading experience on popular international and Danish news websites. This extension automatically removes ads, allowing you to focus on the content that matters most.",
    name: "Ad Remover",
    img: AdBlockerPic,
  };
  //#endregion
  return (
    <div className="pt-10">
      <div className="text-green-400 text-3xl justify-center flex font-bold">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 animate-fade-in-up text-center">
          Take a Look at Some Chrome Extensions I've Built
        </h1>
      </div>
      <div className=" mt-12 md:mt-0 md:h-screen flex justify-center items-center">
        <div className=" gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid items-stretch">
          <ExtensionCard project={GeoGessur}></ExtensionCard>
          <ExtensionCard project={Instergram}></ExtensionCard>
          <ExtensionCard project={AdRemover}></ExtensionCard>
        </div>
      </div>
    </div>
  );
}

export default Extension;
