import { useRef, useState } from "react";
import { Parallax } from "react-next-parallax";
import { Reveal } from "../Reveal";

const startYoutubeUrl = "https://youtu.be/";
const startGithubUrl = "https://github.com/DARPZZ/";
const buttonClass =
  "w-full flex items-center justify-center font-manrope text-xl 4xl:text-4xl 4xl:py-12 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-800/80 text-white transition-colors duration-300 hover:bg-neutral-700 hover:border-neutral-500";

const ProjectCard = ({
  project,
  url = project.url,
  showSetCode = Boolean(project.seeCode),
  hasLink = Boolean(url),
  hasWebsite = Boolean(project.visitWebSite),
  isExtension = Boolean(project.extension),
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  className = "",
}) => {
  const cardRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
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
      className={`relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-5 4xl:p-8 max-w-sm 4xl:max-w-2xl flex flex-col justify-between ${className}`}
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
        <div className="w-full flex flex-col items-center 4xl:p-5">
          <Parallax>
            <Reveal>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl h-60 w-96 4xl:w-[35rem] 4xl:h-96 object-cover"
                loading="lazy"
              />
            </Reveal>
          </Parallax>
        </div>
        <Reveal>
          <h1 className="break-words mt-5 text-2xl 4xl:text-5xl font-inter font-bold text-white">
            {project.caption}
          </h1>
        </Reveal>
        <div className="mt-5">
          <Reveal>
            <p className="break-words font-manrope text-lg 4xl:text-3xl/relaxed text-neutral-400">
              {project.description}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10">
        <Reveal width="100%">
          <div className="flex flex-col md:flex-row md:space-x-5">
            {showSetCode && (
              <div className="pt-10 w-full">
                <a
                  href={`${startGithubUrl}${project.seeCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  See code
                </a>
              </div>
            )}
            {hasLink && (
              <div className="pt-10 w-full">
                <a
                  href={`${startYoutubeUrl}${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  See program
                </a>
              </div>
            )}
            {hasWebsite && (
              <div className="pt-10 w-full">
                <a
                  href={project.visitWebSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  Visit website
                </a>
              </div>
            )}
            {isExtension && (
              <div className="pt-10 w-full">
                <a href={project.extension} className={buttonClass}>
                  See My extensions
                </a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ProjectCard;
