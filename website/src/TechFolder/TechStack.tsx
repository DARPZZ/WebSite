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

  const [closestTech, setClosestTech] = React.useState<string>('');

  return (
    <div className="w-full text-white px-5">
      
     
      <div className="mt-10">
      {closestTech && <h1>{closestTech}</h1>}
        <ThreeJSStack
          title="Tech Stack"
          techStack={techStack}
          onTechClosest={(techName) => setClosestTech(techName)} 
        />
      </div>
      
    </div>
  );
};

export default TechStack;
