import React from "react";
import { FaBars } from "react-icons/fa";

const Navigation = ({ navBar, handleNavBar, navBarVisual }) => {
  const links = ["home", "about", "works", "contact"];

  return (
    <div className="relative z-10">
      <div
        className={
          navBarVisual
            ? "nav-container w-full fixed min-h-[10vh] m-auto  flex items-center bg-black transition-all animate-toptobot shadow-lg "
            : "nav-container w-full absolute min-h-[10vh] m-auto flex items-center "
        }
      >
        <nav className="px-5 md:px-12 lg:px-0  flex items-center justify-between m-auto w-full lg:w-[960px] xl:w-[1250px] 2xl:w-[1400px]">
          <div className="logo-container font-pro font-black uppercase text-3xl text-white ">
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
            className="bar-container text-slate-300 text-xl sm:hidden cursor-pointer"
            onClick={handleNavBar}
          >
            <FaBars />
          </div>
        </nav>
      </div>
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
