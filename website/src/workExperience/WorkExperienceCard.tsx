import React from "react";
import WorkEcperienceComp from "./WorkEcperienceComp";

export type WorkExperienceCardType = {
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
    <div className="relative mb-12 md:mb-20 flex md:items-center">
      <div className="absolute left-4 md:left-1/2 top-[3.25rem] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="h-4 w-4 4xl:h-8 4xl:w-8 rounded-full border-2 border-green-400 bg-neutral-950 shadow-[0_0_10px_#4ade80]" />
      </div>

      <div className={`w-full md:w-1/2 pl-12 pr-4 md:px-10 ${isLeft ? "" : "md:ml-auto"}`}>
        <WorkEcperienceComp {...prop} />
      </div>
    </div>
  );
}

export default WorkExperienceCard;
