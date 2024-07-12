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
    <div className=" rounded-lg p-5  bg-gradient-to-r from-blue-500 to-purple-500  max-w-sm">
      <div className="">
        <Parallax>
          <Reveal>
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg  h-60 w-96"
            />
          </Reveal>
        </Parallax>
      </div>
      <Reveal>
        <h1 className="break-words mt-5  text-xl font-bold">
          {project.caption}
        </h1>
      </Reveal>
      <div className="mt-5">
        <Reveal>
          <p className="break-words">{project.description}</p>
        </Reveal>
      </div>
      <Reveal width="100%">
      <div className="mt-5">
        <a href={project.seeCode} target="_blank" rel="noopener noreferrer">
          <button className=" bg-blue-500 justify-center items-center flex flex-col w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md">
            See code
          </button>
        </a>
      </div>
      </Reveal>
    </div>
  );
};

export default ProjectCard;
