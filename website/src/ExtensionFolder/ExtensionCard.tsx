import React from "react";

interface Extensions {
  downLoadInstruction?: string;
  seeCode?: string;
  name: string;
  description: string;
  img: string;
}

interface Props {
  project: Extensions;
}

const ExtensionCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between rounded-lg p-5  max-w-sm bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex flex-col">
        <h1 className="text-green-500 font-bold text-4xl flex justify-center">
          {project.name}
        </h1>
        <img
          className="mt-5 rounded-lg h-60 w-full object-cover"
          src={project.img}
          alt={project.name}
        />
        <h1 className="text-lg text-white font-semibold font-Alegreya mt-5">
          {project.description}
        </h1>
      </div>

      <div className="w-full grid gap-3 md:grid-cols-2 grid-cols-1 mt-6">
        {project.seeCode && (
          <a
            href={project.seeCode}
            target="_blank"
            rel="noopener noreferrer"
            className="font-Alegreya text-xl bg-purple-400 flex items-center justify-center w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md"
          >
            See code
          </a>
        )}
        {project.downLoadInstruction && (
          <a
            href={project.downLoadInstruction}
            target="_blank"
            rel="noopener noreferrer"
            className="font-Alegreya text-xl bg-purple-400 flex items-center justify-center w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md"
          >
            Download guide
          </a>
        )}
      </div>
    </div>
  );
};

export default ExtensionCard;
