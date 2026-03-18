import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import HansenSvg from "../assets/WorkexperiencePictures/Hansen.svg";
import EasvPng from "../assets/WorkexperiencePictures/Easv.png";
import CrownPng from "../assets/WorkexperiencePictures/crown.png";
export default function WorkExperience() {
  const EASV = {
    title: "EASV",
    workingTime: "August 2022 - January 2025",
    workedWith:
      "During my education as a Datamatiker, I worked with software development across multiple programming languages, including TypeScript, C#, Java, and Python. I gained experience in DevOps practices, cybersecurity principles, and database design, focusing on building secure, scalable, and efficient applications.",
    icon: EasvPng,
  };
  const hansenTechonologies = {
    title: "Hansen technologies",
    workingTime: "August 2024 - January 2025 ",
    workedWith:
      "At Hansen Technologies, I worked primarily with Dynamics 365 Business Central and C#, focusing on developing and maintaining business solutions, implementing custom functionality, and supporting system integrations to meet client and business needs.",
    icon: HansenSvg,
  };
  const vurderingsstyrelsen = {
    title: "Vurderingsstyrelsen",
    workingTime: "December 2025 - Present",
    workedWith:
      "At Vurderingsstyrelsen, I develop and maintain applications using JavaScript and Python, creating efficient solutions that streamline processes and improve data handling, contributing to more effective decision-making and operations.",
    icon: CrownPng,
  };

  return (
    <div className="w-full flex flex-col justify-center bg-transparent text-white">
      <h1 className="text-4xl md:text-5xl pb-16  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 animate-fade-in-up text-center">
        Work experience
      </h1>
      <div className="relative w-full p-16">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-transparent transform -translate-x-1/2" />
        <WorkExperienceCard prop={vurderingsstyrelsen} side="left" />
        <WorkExperienceCard prop={hansenTechonologies} side="right" />
        <WorkExperienceCard prop={EASV} side="left" />
      </div>
    </div>
  );
}
