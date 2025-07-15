import React from "react";
import GmailImg from "../assets/GmailPicture.png";
import linkedin from "../assets/linkedin.png"
import githubLogo from "../assets/GithubLogo.png";
function Contact() {
  return (
    <div className="w-full h-full px-5">
      <h1 className="text-5xl 4xl:text-8xl justify-center items-center flex  md:items-baseline font-extrabold text-green-400 font-mono">
        Contact
      </h1>
      <div className=" flex flex-col justify-center items-center mt-14">
        <h1 className="font-mono text-white text-2xl 4xl:text-4xl underline">
          You can contact me on these platforms
        </h1>
        <div className=" grid grid-cols-3 gap-28 pt-10 pb-5">
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmustofthermansen@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="md:size-28 4xl:size-44" src={GmailImg} />
            </a>
          </div>
          <div>
            <a
              href={"https://www.linkedin.com/in/rasmus-toft-b880a827b/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="md:size-28 4xl:size-44" src={linkedin} />
            </a>
          </div>
          <div>
            <a
              href={"https://github.com/DARPZZ"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="md:size-28 4xl:size-44" src={githubLogo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
