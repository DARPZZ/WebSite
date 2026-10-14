import React from "react";
import GmailImg from "../assets/GmailPicture.png";
import linkedin from "../assets/linkedin.png";
import githubLogo from "../assets/GithubLogo.png";
import ContactComponent from "./ContactComponent";
const contacts = [
  {
    icon: GmailImg,
    link: "mailto:rasmustofthermansen@gmail.com",
    label: "Gmail",
    handle: "Send me an email",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/rasmus-toft-b880a827b/",
    label: "LinkedIn",
    handle: "Rasmus Toft",
  },
  {
    icon: githubLogo,
    link: "https://github.com/DARPZZ",
    label: "GitHub",
    handle: "@DARPZZ",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="flex h-full w-full flex-col items-center px-5 py-16"
    >
      <h1 className="font-inter text-5xl font-extrabold text-green-400 4xl:text-8xl">
        Contact
      </h1>
      <div className="mt-4 h-1 w-16 rounded-full bg-green-400/80 4xl:w-28" />

      <p className="mt-8 max-w-xl text-center font-inter text-lg text-gray-300 md:text-xl 4xl:max-w-4xl 4xl:text-4xl">
        Want to work together or just say hi? Feel free to reach out on any of
        these platforms.
      </p>

      <ul className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 md:gap-10 4xl:max-w-7xl 4xl:gap-16">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <ContactComponent {...contact} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
