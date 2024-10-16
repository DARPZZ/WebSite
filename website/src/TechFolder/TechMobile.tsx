import React from "react";
import reactImg from "../assets/TechnoloPic/react.png";
import typeScriptImg from "../assets/TechnoloPic/TS.png";
import cSharpImg from "../assets/TechnoloPic/CSharp.png";
import javaImg from "../assets/TechnoloPic/java.png";
import pythonImg from "../assets/TechnoloPic/python.png";
import githubImg from "../assets/TechnoloPic/github.png";
import dockerImg from "../assets/TechnoloPic/docker.png";
import sqlImg from "../assets/TechnoloPic/sql.png";

const TechMobile: React.FC = () => {
  const techStack = [
    { name: "React", iconUrl: reactImg },
    { name: "TypeScript", iconUrl: typeScriptImg },
    { name: "C#", iconUrl: cSharpImg },
    { name: "Java", iconUrl: javaImg },
    { name: "Python", iconUrl: pythonImg },
    { name: "Github", iconUrl: githubImg },
    { name: "Docker", iconUrl: dockerImg },
    { name: "SQL", iconUrl: sqlImg },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
    <div className="grid font-mono grid-cols-2 md:grid-cols-4 gap-5 p-5 text-white text-2xl">
      {techStack.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <img src={tech.iconUrl} alt={tech.name} className="w-16 h-16" />
          <p className="mt-2 mb-10 text-center">{tech.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TechMobile;
