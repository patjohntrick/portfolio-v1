import React from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-10 ">
      <div className="footer-container px-5 text-center items-center xs:flex xs:justify-between xs:text-left md:px-12 lg:w-[960px] lg:m-auto lg:p-0 xl:w-[1250px] 2xl:w-[1400px] ">
        <div className="logo-container mb-6 md:mb-0  ">
          <p className=" uppercase font-black text-4xl cursor-pointer ">
            {" "}
            <a href="https://patjohntrick.github.io/portfolio-v1/">pat.</a>
          </p>
          <p className=" text-fuchsia-800 ">
            Passionate Front End Web Developer
          </p>
        </div>
        <div className="social-container">
          <p className=" uppercase font-bold text-sm mb-2">social links</p>
          <div className="social flex justify-center xs:justify-center gap-2 ">
            <a
              href="https://www.facebook.com/johnpatrick13/"
              target="_blank"
              className=" text-2xl hover:text-fuchsia-800 transition-all"
            >
              <BsFacebook />
            </a>
            <a
              href="https://github.com/patjohntrick"
              target="_blank"
              className=" text-2xl hover:text-fuchsia-800 transition-all "
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
