import React from "react";

function About() {
  return (
    <div className=" h-full w-full">
      <div className="flex flex-row">
        <div className="  flex flex-col w-1/2 text-black">
          <h1 className="font-extrabold text-3xl  underline pb-5">About me</h1>
          <p>
            My name is Rasmus, I'm 22 and a junior computer science student based
            in Denmark.
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
        <div className="pl-52"> 
            <h1 >Picture here </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
