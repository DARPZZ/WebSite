import React from "react";
import { any } from "three/examples/jsm/nodes/Nodes.js";
type WorkExperienceCardType = {
  title: string;
  workingTime: string;
  workedWith: string;
  icon?: string;
};

type Props = {
  prop: WorkExperienceCardType;
  side: "left" | "right";
};

function WorkExperienceCard({ prop, side }: Props) {
  const isLeft = side === "left";

  return (
    <div className="relative flex items-center mb-20">
      {isLeft ? (
        <div className="w-1/2 pr-10 text-right">
          <div className="bg-zinc-900 border border-green-400/30 rounded-2xl p-4 shadow-lg hover:scale-105 transition">
            <div className="w-full flex flex-row items-center justify-between">
              <div className="place-items-start text-center">
                <h3 className="text-green-400  font-bold">{prop.title}</h3>
              </div>
              <div className="place-items-end w-1/2">
                <img className="w-8 h-8 rounded-sm " src={prop.icon} alt="" />
              </div>
            </div>
            <p className="text-sm text-zinc-400">{prop.workingTime}</p>
            <p className="text-sm mt-2">{prop.workedWith}</p>
          </div>
        </div>
      ) : (
        <div className="w-1/2" />
      )}
      <div className="w-4 h-4 bg-green-400 motion-safe:animate-pulse rounded-full z-10 shadow-[0_0_10px_#4ade80]" />

      {!isLeft ? (
        <div className="w-1/2 pl-10 text-left">
          <div className="bg-zinc-900 border border-green-400/30 rounded-2xl p-4 shadow-lg hover:scale-105 transition">
            <div className="w-full flex flex-row items-center justify-between">
              <div className="place-items-start text-center">
                <h3 className="text-green-400  font-bold">{prop.title}</h3>
              </div>
              <div className="place-items-end w-1/2">
                <img className="w-8 h-8 rounded-sm " src={prop.icon} />
              </div>
            </div>
            <p className="text-sm text-zinc-400">{prop.workingTime}</p>
            <p className="text-sm mt-2">{prop.workedWith}</p>
          </div>
        </div>
      ) : (
        <div className="w-1/2" />
      )}
    </div>
  );
}

export default WorkExperienceCard;
