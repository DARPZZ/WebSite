import React from "react";
import WorkEcperienceComp from "./WorkEcperienceComp";
import { div } from "framer-motion/client";
import { isRef } from "@react-three/fiber/dist/declarations/src/core/utils";
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
    <div className="relative  flex items-center mb-20">
      {isLeft ? (
        <WorkEcperienceComp
          title={prop.title}
          workedWith={prop.workedWith}
          workingTime={prop.workingTime}
          icon={prop.icon}
        />
      ) : (
        <div className="w-1/2" />
      )}

      <div className=" hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50">
        <div className="4xl:w-8 4xl:h-8 w-4 h-4 bg-green-400 animate-pulse rounded-full shadow-[0_0_10px_#4ade80]" />
      </div>

      {!isLeft ? (
        <WorkEcperienceComp
          title={prop.title}
          workedWith={prop.workedWith}
          workingTime={prop.workingTime}
          icon={prop.icon}
        />
      ) : (
        <div className="w-1/2" />
      )}
    </div>
  );
}

export default WorkExperienceCard;
