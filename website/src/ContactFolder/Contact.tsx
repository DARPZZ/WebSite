import React from "react";
import GmailImg from "../assets/GmailPicture.png";
import linkedin from "../assets/linkedin.png";
import githubLogo from "../assets/GithubLogo.png";
import ContactComponent from "./ContactComponent";
function Contact() {
  return (
    <div className="w-full h-full px-5">
      <h1 className="text-5xl 4xl:text-8xl justify-center items-center flex  md:items-baseline font-extrabold text-green-400 font-mono">
        Contact
      </h1>
      <div className=" flex flex-col justify-center items-center mt-14">
        <h1 className="font-inter text-white text-2xl 4xl:text-4xl ">
          You can contact me on these platforms
        </h1>
        <div className=" grid grid-cols-3 gap-28 pt-10 pb-5">
          <ContactComponent
            icon={GmailImg}
            link="https://mail.google.com/mail/?view=cm&fs=1&to=rasmustofthermansen@gmail.com"
          />
          <ContactComponent
            icon={linkedin}
            link="https://www.linkedin.com/in/rasmus-toft-b880a827b/"
          />
          <ContactComponent
            icon={githubLogo}
            link="https://github.com/DARPZZ"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
