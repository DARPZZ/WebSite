import React from "react";
import myCurrentTechStack from './TechUsed'

const TechMobile: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="grid font-mono grid-cols-2 md:grid-cols-4 gap-5 p-5 text-white text-2xl">
      {myCurrentTechStack.map((tech) => (
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
