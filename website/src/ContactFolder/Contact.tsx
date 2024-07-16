import React from "react";
import GmailImg from "../assets/GmailPicture.png";
import linkedImg from "../assets/LinkedInPicture.png";
import githubLogo from "../assets/GithubLogo.png";
function Contact() {
  return (
    <div className="w-full h-full px-5">
      <h1 className="text-5xl justify-center items-center flex flex-col md:items-baseline font-extrabold text-green-400 font-mono">
        Contact
      </h1>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-mono text-white text-2xl underline">
          You can contact me on these platforms
        </h1>
        <div className=" grid grid-cols-3 gap-28 pt-10">
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmustofthermansen@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="md:w-28 md:h-28" src={GmailImg} />
            </a>
          </div>
          <div>
            <a
              href={"https://www.linkedin.com/in/rasmus-toft-b880a827b/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="md:w-28 md:h-28" src={linkedImg} />
            </a>
          </div>
          <div>
            <a
              href={"https://github.com/DARPZZ"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="md:w-28 md:h-28" src={githubLogo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
