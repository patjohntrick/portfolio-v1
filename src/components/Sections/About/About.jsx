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
      <div className="about lg:w-[50%]">
        <p className=" uppercase text-fuchsia-800 font-bold mb-2 ">who am i?</p>
        <p className=" text-zinc-800 mb-5 ">
          My name <span className=" font-bold">John Patrick Resurreccion</span>
          , I am passionate Front End Web Developer that loves to create
          solutions using web technologies. I am currently studying at STI
          College Lucena taking up BS in Information Technology. I just recently
          decided to choose Web Development and I started to love it. Still, I
          am in beginner level of my Web Development career but I am continously
          learning and explore different kinds of web technologies. <br /> When
          I'm not writing code and learning technologies, I enjoy playing online
          games, music such as playing guitar and singing even I'm not really
          good at it.
        </p>
        <a
          href=""
          className="uppercase text-fuchsia-800 border-2 border-fuchsia-800 hover:bg-fuchsia-800 hover:border-fuchsia-800 hover:text-white transition-all px-9 py-3 rounded text-sm font-bold"
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
        <p className=" text-slate-800 text-sm font-semibold ">
          Get to know about me
        </p>
      </div>
      <div className="text-container w-[90%] sm:w-[70%] m-auto lg:flex lg:w-[850px] lg:justify-between lg:gap-8 xl:w-[1000px]">
        <Who />
        <Skill />
      </div>
    </section>
  );
};

export default About;
