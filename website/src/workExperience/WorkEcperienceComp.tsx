import React, { useRef, useState } from "react";
import { WorkExperienceCardType } from "./WorkExperienceCard";

type Props = WorkExperienceCardType & {
  spotlightColor?: string;
};

function WorkEcperienceComp({
  title,
  workingTime,
  workedWith,
  icon,
  spotlightColor = "rgba(255, 255, 255, 0.15)",
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const isCurrent = /present/i.test(workingTime);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-6 4xl:p-10 transition-colors duration-300 hover:border-neutral-700"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 4xl:gap-6">
          {icon && (
            <div className="flex h-14 w-14 4xl:h-24 4xl:w-24 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-800/60 p-2 4xl:p-4">
              <img
                src={icon}
                alt=""
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="break-words font-inter text-xl 4xl:text-4xl font-bold text-white">
              {title}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-2 4xl:gap-4">
              <span className="font-manrope text-sm 4xl:text-2xl text-neutral-400">
                {workingTime.trim()}
              </span>
              {isCurrent && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-0.5 4xl:px-4 4xl:py-1 font-manrope text-xs 4xl:text-xl font-medium text-green-400">
                  <span className="h-1.5 w-1.5 4xl:h-3 4xl:w-3 rounded-full bg-green-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="my-5 4xl:my-8 h-px w-full bg-neutral-800" />

        <p className="font-manrope text-base leading-relaxed 4xl:text-3xl/relaxed text-neutral-400">
          {workedWith}
        </p>
      </div>
    </div>
  );
}

export default WorkEcperienceComp;
