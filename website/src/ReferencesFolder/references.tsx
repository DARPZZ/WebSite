import React from "react";

function References() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h1 className="text-5xl 4xl:text-8xl justify-center items-center flex mb-5 md:items-baseline font-extrabold text-green-400 font-mono">
        References
      </h1>
      <div className="flex justify-center flex-col w-full items-center font-TimesNewRoman  text-wrap text-lg text-white">
        <div className="md:w-5/6  bg-black text-lg 4xl:text-4xl/loose p-4 md:p-14">
          <p>
            I have been supervising Rasmus Toft Hermansen during his Computer
            Science internship and AP project period at Hansen Technologies in
            our office in Sønderborg.
          </p>
          <br/>
           <p>
            I have been very pleased with supervising Rasmus during this half
            year given his strong commitment and drive to challenge the status
            quo. I think that Rasmus will be a strong asset to any company.
          </p>
          <br />
          <p>
            Rasmus has in his 10-week internship period been introduced to our
            company and tools. During this period, he has been part of our R&D
            team and has been taking part in our Scrum ceremonies. He has
            primarily been working on solving tasks and errors, while he has
            gained experience with our ERP solution Microsoft Business Central
            through tasks and our introduction program. To solve these tasks, he
            has been working with our software toolchain and has been introduced
            to the AL programming language and development environment.
          </p>
          <br />
          <p>
            Rasmus has in this AP project worked on upgrading one of our
            solution components called “Proxy”. The “Proxy” component acts as a
            service layer between our Microsoft Dynamics Business Central
            Solution and any integrations. It was developed on Microsoft’s WCF
            platform, which was discontinued by Microsoft in their latest
            framework. Due to customers demanding legacy functionality to be
            maintained it has been difficult to identify an upgrade path for the
            “Proxy”. Rasmus has during the initial few weeks worked on
            evaluating various approaches to solving this. Following this
            evaluation, he spent most of his project on upgrading the existing
            Proxy functionality to a selected framework. I have had status
            meetings with Rasmus to review progress, resolve challenges and plan
            milestones. I have been very pleased with the AP project that Rasmus
            has been running in collaboration with us.
          </p>
         
          <p className="text-right">
            Jacob Hansen, Senior Service Delivery Manager, Hansen Denmark
          </p>
        </div>
      </div>
    </div>
  );
}

export default References;
