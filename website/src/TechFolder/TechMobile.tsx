import React from "react";
import myCurrentTechStack from './TechUsed'

const TechMobile: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="grid font-mono grid-cols-2 md:grid-cols-3 4xl:gap-12 gap-5 p-5 text-white text-2xl">
      {myCurrentTechStack.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <img src={tech.iconUrl} alt={tech.name} className="4xl:w-48 4xl:h-48 w-16 h-16" />
          <p className="mt-2 mb-10 4xl:text-5xl text-center">{tech.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TechMobile;
