import PersonBillede from "../assets/Personbillede.jpg";
import { Parallax } from "react-next-parallax";
import { Reveal } from "../Reveal";
function About() {
  return (
    <div className="  h-full w-full px-8">
      <div className="flex md:flex-row flex-col items-center justify-center ">
        <div className="   text-white">
          <h1 className="font-extrabold text-5xl text-green-400 font-serif flex item  justify-center md:justify-start  pb-5">
            About me
          </h1>
          <div className="text-lg font-Alegreya font-semibold">
            <Reveal>
              <p>
                {" "}
                My name is Rasmus, and I'm a 24-year-old recent computer science
                graduate from Denmark. I’m deeply motivated by a continuous
                curiosity and a genuine passion for exploring complex
                technologies and tackling challenging problems.{" "}
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                I find excitement in understanding the intricacies of how things
                work and applying this knowledge to create efficient solutions.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                My studies and projects allow me to develop and refine my
                skills, equipping me to approach real-world problems with a
                thoughtful, technical perspective.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="w-full pt-5 md:pl-16 pr-5 ">
          <Reveal>
            <img className="rounded-lg" src={PersonBillede} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
