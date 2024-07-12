import React from 'react';
import ThreeJSStack from './ThreeJSStack';
import reactImg from '../assets/TechnoloPic/react.png';
import typeScriptImg from '../assets/TechnoloPic/TS.png';
import cSharpImg from '../assets/TechnoloPic/CSharp.png';
import javaImg from '../assets/TechnoloPic/java.png';
import pythonImg from '../assets/TechnoloPic/python.png';
import githubImg from '../assets/TechnoloPic/github.png';
import dockerImg from '../assets/TechnoloPic/docker.png';
import sqlImg from '../assets/TechnoloPic/sql.png';

const TechStack: React.FC = () => {
  const techStack = [
    { name: 'React', iconUrl: reactImg },
    { name: 'TypeScript', iconUrl: typeScriptImg },
    { name: 'c#', iconUrl: cSharpImg },
    { name: 'Java', iconUrl: javaImg },
    { name: 'Python', iconUrl: pythonImg },
    { name: 'Github', iconUrl: githubImg },
    { name: 'Docker', iconUrl: dockerImg },
    { name: 'SQL', iconUrl: sqlImg },
  ];

  return (
    <div className="w-full px-5">
      <h2 className="text-5xl font-extrabold text-blue-300 ">Tech Stack</h2>
      <div className="mt-10 ">
        
        <ThreeJSStack title="Tech Stack" techStack={techStack} />
      </div>
    </div>
  );
};

export default TechStack;