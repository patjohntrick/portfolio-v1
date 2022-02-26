import React from "react";
import hero from "../../img/hero.jpg";
import myCV from "../../img/CV.pdf";

const Hero = () => {
  return (
    <div className="relative h-full">
      <div className="img-container h-screen">
        <img src={hero} alt="" className="h-full object-cover w-full" />
      </div>
      <div className="overlay absolute top-0 w-full h-screen bg-neutral-900/80"></div>
      <div className=" text-container absolute top-0 w-full h-full grid place-items-center">
        <div className=" w-[90%] sm:w-auto ">
          <p className="font-semibold text-fuchsia-800">Hello there,</p>
          <p className="text-white font-bold text-4xl mb-6 md:text-4xl lg:text-5xl lg:leading-tight">
            I am John Patrick Resurreccion. <br />
            Aspiring{" "}
            <span className="text-fuchsia-800">Front End Developer</span>
          </p>
          <a
            href={myCV}
            download="CV"
            className="border-2 border-white px-5 py-3 rounded uppercase font-semibold text-sm text-white hover:bg-fuchsia-800 hover:border-fuchsia-800 hover:text-white transition-all"
          >
            {" "}
            donwload CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
