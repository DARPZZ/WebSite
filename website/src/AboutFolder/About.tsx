
import PersonBillede from '../assets/Personbillede.jpg'
function About() {
  return (
    <div className="  h-full w-full px-8">
      <div className="flex md:flex-row flex-col items-center justify-center md:space-x-28">
        <div className=" px-8  flex flex-col md:w-4/5  text-black">
          <h1 className="font-extrabold text-3xl   underline pb-5">About me</h1>
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
        <div className="pt-5 px-8">
        <img id='gmail-image' src={PersonBillede} alt="Gmail"/>
        </div>
      </div>
    </div>
  );
}

export default About;
