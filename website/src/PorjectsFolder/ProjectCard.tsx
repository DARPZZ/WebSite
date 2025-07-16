import React, { useState, useEffect } from "react";
import { Parallax } from "react-next-parallax";
import { Reveal } from "../Reveal";
import Modal from "../Modal";

import useScreenSize from "../useScreenSize";
interface GitHubProject {
  name: string;
  image: string;
  description?: string;
  seeCode?: string;
  caption: string;
  youtubeLink?: string;
  visitWebSite?: string;
  extension?: string;
}

interface Props {
  project: GitHubProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState<boolean>(false);
  const [hasLink, setHashLink] = useState<boolean>(true);
  const [hasWebsite, SetHasWbsite] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(true);
  const [isExtension, SetIsExtension] = useState<boolean>(false);
  const [showSetCode, setShowSetCode] = useState<boolean>(false);
  const url: string = `https://www.youtube.com/watch?v=${project.youtubeLink}`;
  const handleResize = () => {
    setScreenWidth(window.innerWidth);

    if (window.innerWidth < 800) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  function CheckForWbsiteAndLink() {
    project.visitWebSite != null ? SetHasWbsite(true) : SetHasWbsite(false);
    project.youtubeLink != null ? setHashLink(true) : setHashLink(false);
    project.extension != null ? SetIsExtension(true) : SetIsExtension(false);
    project.seeCode != null ? setShowSetCode(true) : setShowSetCode(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.dispatchEvent(new Event("resize"));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showButton]);

  useEffect(() => {
    CheckForWbsiteAndLink();
  }, []);

  return (
    <div className="rounded-lg p-5 bg-gradient-to-r from-blue-500 to-purple-500 max-w-sm 4xl:max-w-2xl  flex flex-col justify-between">
      <div >
        <div className="w-full flex flex-col  items-center 4xl:p-5">

        
        <Parallax>
          <Reveal>
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg 4xl:w-[35rem] 4xl:h-96    h-60 w-96 "
            />
          </Reveal>
        </Parallax>
        </div>
        <Reveal>
          <h1 className="break-words mt-5 4xl:text-5xl text-2xl font-Alegreya  text-green-400 font-bold">
            {project.caption}
          </h1>
        </Reveal>
        <div className="mt-5 ">
          <Reveal>
            <p className="break-words font-Alegreya 4xl:text-3xl/relaxed  text-white text-lg">
              {project.description}
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal width="100%">
        <div className=" flex md:flex-row flex-col md:space-x-5">
          {showSetCode && (
            <div className="pt-10 w-full">
              <a
                href={project.seeCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" 4xl:py-12 4xl:text-4xl   font-Alegreya text-xl bg-purple-400 items-center flex flex-col w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md">
                  See code
                </button>
              </a>
            </div>
          )}
          {hasLink && (
            <div className=" pt-10 w-full">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="4xl:py-12 4xl:text-4xl   font-Alegreya text-xl bg-purple-400 items-center flex flex-col w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md">
                  See program
                </button>
              </a>
            </div>
          )}
          {hasWebsite && (
            <div className="pt-10 w-full">
              <a
                href={project.visitWebSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="4xl:py-12 4xl:text-4xl  font-Alegreya text-xl bg-purple-400 items-center flex flex-col w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md">
                  See program
                </button>
              </a>
            </div>
          )}
          {isExtension && (
            <div className="pt-10 w-full">
              <a href={project.extension}>
                <button className="4xl:py-12 4xl:text-4xl border font-Alegreya text-xl bg-purple-400 items-center flex flex-col w-full hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md">
                  See My extensions
                </button>
              </a>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
};

export default ProjectCard;
