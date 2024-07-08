import PersonBillede from "../assets/Personbillede.jpg";
import { Parallax } from "react-next-parallax";
function About() {
  return (
    <div className="  h-full w-full px-8">
      <div className="flex md:flex-row flex-col items-center justify-center ">
        <div className="   text-black">
          <h1 className="font-extrabold text-5xl   pb-5">About me</h1>
          <div className="text-lg font font-semibold">
            <p>
              My name is Rasmus, I'm 22 and a junior computer science student
              based in Denmark.
            </p>
            <br />
            <p>
              My education has equipped me with a solid understanding of
              programming languages, databases, and system development.
            </p>
            <br />
            <p>
              I am driven by a constant curiosity and a passion for diving into
              complex technologies and solving problems.
            </p>
            <br />
            <p>
              Throughout my education, I have developed many different things.
            </p>
          </div>
        </div>
        <div className="pt-5 md:pl-16 ">
          <Parallax>
            <img className="rounded-lg" src={PersonBillede} />
          </Parallax>
        </div>
      </div>
    </div>
  );
}

export default About;
