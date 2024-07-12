import PersonBillede from "../assets/Personbillede.jpg";
import { Parallax } from "react-next-parallax";
import { Reveal } from "../Reveal";
function About() {
  return (
    <div className="  h-full w-full px-8">
      <div className="flex md:flex-row flex-col items-center justify-center ">
        <div className="   text-black">
          <h1 className="font-extrabold text-5xl text-blue-300   pb-5">
            About me
          </h1>
          <div className="text-lg font font-semibold">
            <Reveal>
              <p>
                My name is Rasmus, I'm 22 and a junior computer science student
                based in Denmark.
              </p>
            </Reveal>
            <br />
            <Reveal>
            <p>
              My education has equipped me with a solid understanding of
              programming languages, databases, and system development.
            </p>
            </Reveal>
            <br />
            <Reveal>
            <p>
              I am driven by a constant curiosity and a passion for diving into
              complex technologies and solving problems.
            </p>
            </Reveal>
            <br />
            <Reveal>
            <p>
          
              Throughout my education, I have developed many different things.
            </p>
            </Reveal>
          </div>
        </div>
        <div className="pt-5 md:pl-16 pr-20 ">
          <Reveal>
          <Parallax>
            <img className="rounded-lg " src={PersonBillede} />
          </Parallax>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
