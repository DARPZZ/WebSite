import React from "react";
import { Parallax } from "react-next-parallax";
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
    <div className="p-5 border-2 bg-gradient-to-r from-blue-500 to-purple-500  max-w-sm">
      <div className="">
        <Parallax>
          <img
            src={project.image}
            alt={project.name}
            className="  h-60 w-96"
          />
        </Parallax>
      </div>

      <h1 className="break-words mt-5  text-xl font-bold">
        {project.caption}
      </h1>

      <div className="mt-5">
        <p className="break-words">{project.description}</p>
      </div>

      <div className="mt-5">
        <a href={project.seeCode} target="_blank" rel="noopener noreferrer">
          <button className=" bg-blue-500 justify-center items-center flex flex-col w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md">
            See code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
