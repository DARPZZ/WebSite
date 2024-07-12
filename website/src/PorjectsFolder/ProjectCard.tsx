import React from "react";
import { Parallax } from "react-next-parallax";
import { Reveal } from "../Reveal";

interface GitHubProject {
  name: string;
  image: string;
  description?: string;
  seeCode: string;
  caption: string;
}

interface Props {
  project: GitHubProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="rounded-lg p-5 bg-gradient-to-r from-blue-500 to-purple-500 max-w-sm flex flex-col justify-between">
      <div>
        <Parallax>
          <Reveal>
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg h-60 w-96 object-cover"
            />
          </Reveal>
        </Parallax>
        <Reveal>
          <h1 className="break-words mt-5 text-2xl font-serif  text-green-400 font-bold">
            {project.caption}
          </h1>
        </Reveal>
        <div className="mt-5 ">
          <Reveal>
            <p className="break-words font-mono  text-white text-lg">
              {project.description}
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal width="100%">
        <div className="pt-10">
          <a href={project.seeCode} target="_blank" rel="noopener noreferrer">
            <button className=" font-mono text-xl bg-purple-400 items-center flex flex-col w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md">
              See code
            </button>
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default ProjectCard;
