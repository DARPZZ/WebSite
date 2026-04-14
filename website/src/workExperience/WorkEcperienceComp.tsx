import React from "react";
import { WorkExperienceCardType } from "./WorkExperienceCard";
function WorkEcperienceComp(props: WorkExperienceCardType) {
  return (
    <div className="md:w-1/2 w-full py-5 md:px-10 px-4 text-right flex-shrink-0">
      <div className="bg-zinc-900 border border-green-400/30 rounded-2xl p-4 shadow-lg hover:scale-105 transition overflow-hidden">
        <div className="w-full flex items-center justify-between">
          <div className="text-left">
            <h3 className="text-green-400 font-bold 4xl:text-4xl">{props.title}</h3>
          </div>
          <div className="w-1/2 flex justify-end">
            <img className="w-8 h-8 3xl:w-20 4xl:h-20 rounded-sm" src={props.icon} alt="" />
          </div>
        </div>
        <p className="text-sm text-zinc-400 4xl:text-3xl">{props.workingTime}</p>
        <p className="text-sm mt-2 4xl:text-3xl 4xl:leading-loose" >{props.workedWith}</p>
      </div>
    </div>
  );
}

export default WorkEcperienceComp;
