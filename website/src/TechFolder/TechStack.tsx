
import React from 'react';
import ThreeJSStack from './ThreeJSStack';
import myCurrentTechStack from './TechUsed'
const TechStack: React.FC = () => {
  const [closestTech, setClosestTech] = React.useState<string>('');
  return (
    <div className="w-full text-white px-5">
      <div className="mt-14 font-inter">
      {closestTech && <h1>{closestTech}</h1>}
        <ThreeJSStack
          title="Tech Stack"
          techStack={myCurrentTechStack}
          onTechClosest={(techName) => setClosestTech(techName)} 
        />
      </div>
      
    </div>
  );
};

export default TechStack;
