import PersonBillede from "../assets/Personbillede.jpg";
import { Parallax } from "react-next-parallax";
import { Reveal } from "../Reveal";
function About() {
  return (
    <div className="  h-full w-full px-8">
      <div className="flex md:flex-row flex-col items-center justify-center ">
        <div className="   text-white">
          <h1 className="font-extrabold text-5xl text-green-400 font-serif   pb-5">
            About me
          </h1>
          <div className="text-lg font-mono font-semibold">
            <Reveal>
              <p>
                My name is Rasmus, I'm 23 and a junior computer science student
                based in Denmark.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                I am driven by a constant curiosity and a passion for diving
                into complex technologies and solving problems.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="w-full pt-5 md:pl-16 pr-5 ">
          <Reveal>
            <img className="rounded-lg  " src={PersonBillede} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
