import React, { useRef, useState } from "react";

interface Extensions {
  downLoadInstruction?: string;
  seeCode?: string;
  name: string;
  description: string;
  img: string;
}

interface Props {
  project: Extensions;
  spotlightColor?: string;
  className?: string;
}

const buttonClass =
  "flex-1 min-w-fit whitespace-nowrap flex items-center justify-center font-manrope text-lg 4xl:text-4xl 4xl:py-10 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-800/80 text-white transition-colors duration-300 hover:bg-neutral-700 hover:border-neutral-500";

const ExtensionCard: React.FC<Props> = ({
  project,
  spotlightColor = "rgba(168, 85, 247, 0.25)",
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const handleFocus = () => {
    const card = cardRef.current;
    if (card) {
      card.style.setProperty("--spot-x", "50%");
      card.style.setProperty("--spot-y", "50%");
    }
    setOpacity(0.6);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={handleFocus}
      onBlur={() => setOpacity(0)}
      className={`relative overflow-hidden flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900 p-5 4xl:p-8 max-w-sm 4xl:max-w-2xl ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col">
        <h1 className="flex justify-center text-center text-4xl font-bold text-white">
          {project.name}
        </h1>
        <img
          className="mt-5 h-60 w-full rounded-xl object-cover 4xl:h-80"
          src={project.img}
          alt={project.name}
          loading="lazy"
        />
        <p className="mt-5 font-manrope text-lg 4xl:text-3xl/loose text-neutral-400">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex w-full flex-wrap gap-3">
        {project.seeCode && (
          <a
            href={project.seeCode}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            See code
          </a>
        )}
        {project.downLoadInstruction && (
          <a
            href={project.downLoadInstruction}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Download guide
          </a>
        )}
      </div>
    </div>
  );
};

export default ExtensionCard;
