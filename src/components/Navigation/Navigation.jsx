import React from "react";
import { FaBars } from "react-icons/fa";

const Navigation = ({ navBar, handleNavBar }) => {
  const links = ["home", "about", "works", "contact"];

  return (
    <div className="relative z-10">
      <nav className="px-5 md:px-12 lg:px-0 min-h-[10vh] flex items-center justify-between m-auto fixed w-full lg:w-[960px] lg:left-[50%] lg:translate-x-[-50%] xl:w-[1250px] 2xl:w-[1400px]  ">
        <div className="logo-container font-pro font-black uppercase text-4xl text-white ">
          <p>pat.</p>
        </div>
        <div className="navLinks-container-desktop hidden sm:block ">
          <ul className=" flex gap-8 ">
            {links.map((link) => {
              return (
                <li
                  key={link}
                  className=" text-sm font-semibold text-slate-300 uppercase "
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="bar-container text-slate-300 text-xl sm:hidden"
          onClick={handleNavBar}
        >
          <FaBars />
        </div>
      </nav>
      <div
        className={
          navBar
            ? "navLinks-container-mobile fixed top-[10vh] w-full bg-white"
            : "navLinks-container-mobile hidden"
        }
      >
        <ul className="shadow-md md:hidden">
          {links.map((link) => {
            return (
              <li
                key={link}
                className="uppercase text-right text-slate-700 px-5 border-b-2 border-x-slate-800 p-4 font-semibold text-sm last:border-0 "
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
