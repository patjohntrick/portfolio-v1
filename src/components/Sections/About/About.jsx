import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Redux",
    "React & Redux",
    "Git",
    "Github",
  ];
  const Who = () => {
    return (
      <div className="about lg:w-[50%] mb-3">
        <p className=" uppercase text-fuchsia-800 font-bold mb-2 ">who am i?</p>
        <p className=" text-zinc-800 mb-5 text-justify ">
          My name <span className=" font-bold">John Patrick Resurreccion</span>.
          I am an aspiring Front End Web Developer that enjoys developing
          web-based solutions. I am a college student under Bachelor of Science
          in Information Technology (BSIT) course. I made the decision to pursue
          Web Development and have been associated with it. Although I am still
          at the beginning of my Web Development career, I am constantly
          learning and exploring different kinds of web technologies. <br />
          When I'm not writing code and learning new technologies, I prefer to
          play online games. I also sing and play guitar.
        </p>
        <a
          href="https://www.messenger.com/t/100002807494697"
          className="uppercase text-fuchsia-800 border-2 border-fuchsia-800 hover:bg-fuchsia-800 hover:border-fuchsia-800 hover:text-white hover:shadow-lg transition-all px-9 py-3 rounded text-sm font-bold"
          target="_blank"
        >
          contact
        </a>
      </div>
    );
  };
  const Skill = () => {
    return (
      <div className="skill lg:w-[48%] mt-8 lg:mt-0">
        <p className=" uppercase text-fuchsia-800 font-bold mt-4 mb-4 lg:mt-0 ">
          Skills
        </p>
        <div className="skill-container flex flex-wrap gap-3">
          {skills.map((skill) => {
            return (
              <p
                key={skill}
                className=" bg-zinc-200 font-bold px-4 py-2 w-auto rounded text-zinc-700 text-sm"
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <section className=" my-16 ">
      <div className="text-header-container text-center mb-10">
        <p className=" uppercase font-bold text-fuchsia-800 ">about</p>
        <p className="text-3xl capitalize font-bold mb-4 ">personal info</p>
        <p className=" text-slate-800 text-sm font-semibold ">Get to know me</p>
      </div>
      <div className="text-container w-[90%] sm:w-[70%] m-auto lg:flex lg:w-[850px] lg:justify-between lg:gap-8 xl:w-[1000px]">
        <Who />
        <Skill />
      </div>
    </section>
  );
};

export default About;
