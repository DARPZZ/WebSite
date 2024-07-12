import React from "react";
import ThreeJSStack from "./ThreeJSStack";
import reactImg from "./assets/TechnoloPic/react.png";
import typeScriptImg from "./assets/TechnoloPic/TS.png";
import cSharpImg from "./assets/TechnoloPic/CSharp.png";
import javaImg from "./assets/TechnoloPic/java.png";
import pythonImg from "./assets/TechnoloPic/python.png";
import githubImg from "./assets/TechnoloPic/github.png"
import dockerImg from "./assets/TechnoloPic/docker.png"
import sqlImg from  "./assets/TechnoloPic/sql.png"
const TechStack: React.FC = () => {
  const techStack = [
    { title: "React", name: "React", iconUrl: reactImg },
    { title: "TypeScript", name: "TypeScript", iconUrl: typeScriptImg },
    { title: "C sharp", name: "c#", iconUrl: cSharpImg },
    { title: "Java", name: "Java", iconUrl: javaImg },
    { title: "Python", name: "Python", iconUrl: pythonImg },
    { title: "Github", name: "Github", iconUrl: githubImg },
    { title: "Docker", name: "Docker", iconUrl: dockerImg },
    { title: "SQL", name: "SQL", iconUrl: sqlImg },
  ];

  return (
    <div className="w-full px-5">
      <h2 className="text-5xl  font-extrabold text-blue-300">Tech Stack</h2>
      <div className="grid grid-cols-4 gap-4">
        {techStack.map((item, index) => (
          <ThreeJSStack key={index} techStack={[item]} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
