import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = ({ navBar, handleNavBar, navBarVisual, setNavBar }) => {
  const links = ["home", "about", "works", "contact"];
  const [linkVisual, setLinkVisual] = useState({
    home: true,
    about: false,
    works: false,
    contact: false,
  });
  const [linkVisualMobile, setLinkVisualMobile] = useState({
    home: true,
    about: false,
    works: false,
    contact: false,
  });

  const windowScrollLabel = () => {
    window.addEventListener("scroll", () => {
      const windowScroll = window.scrollY;
      // console.log(windowScroll);
      if (windowScroll < 400) {
        setLinkVisual({
          home: true,
          about: false,
          works: false,
          contact: false,
        });
      } else if (windowScroll >= 580 && windowScroll < 1160) {
        setLinkVisual({
          home: false,
          about: true,
          works: false,
          contact: false,
        });
      } else if (windowScroll >= 1160 && windowScroll < 2280) {
        setLinkVisual({
          home: false,
          about: false,
          works: true,
          contact: false,
        });
      } else if (windowScroll >= 2280) {
        setLinkVisual({
          home: false,
          about: false,
          works: false,
          contact: true,
        });
      } else {
        setLinkVisual({
          home: false,
          about: false,
          works: false,
          contact: false,
        });
      }
    });
  };
  useEffect(() => {
    windowScrollLabel();
  }, []);
  const handleHome = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleAbout = () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
  };
  const handleWorks = () => {
    window.scroll({
      top: 1160,
      behavior: "smooth",
    });
  };
  const handleContact = () => {
    window.scroll({
      top: 2280,
      behavior: "smooth",
    });
  };
  const handleHomeMobile = () => {
    setNavBar(!navBar);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleAboutMobile = () => {
    setNavBar(!navBar);
    window.scroll({
      top: 583,
      behavior: "smooth",
    });
  };
  const handleWorksMobile = () => {
    setNavBar(!navBar);
    window.scroll({
      top: 1284,
      behavior: "smooth",
    });
  };
  const handleContactMobile = () => {
    setNavBar(!navBar);
    window.scroll({
      top: 2845,
      behavior: "smooth",
    });
  };
  // console.log(linkVisual);
  // console.log(navBar);
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
          <div className="logo-container font-pro font-black uppercase text-4xl text-white ">
            <p>
              {" "}
              <a href="https://patjohntrick.github.io/portfolio-v1/">pat.</a>
            </p>
          </div>
          <div className="navLinks-container-desktop hidden sm:block ">
            <ul className=" flex gap-8 text-sm font-semibold text-slate-300 uppercase ">
              <li
                className={
                  linkVisual.home
                    ? " text-fuchsia-800 font-bold cursor-pointer  "
                    : "text-slate-300 cursor-pointer"
                }
                onClick={handleHome}
              >
                home
              </li>
              <li
                className={
                  linkVisual.about
                    ? " text-fuchsia-800 font-bold cursor-pointer"
                    : "text-slate-300 cursor-pointer "
                }
                onClick={handleAbout}
              >
                about
              </li>
              <li
                className={
                  linkVisual.works
                    ? " text-fuchsia-800 font-bold cursor-pointer"
                    : "text-slate-300 cursor-pointer"
                }
                onClick={handleWorks}
              >
                works
              </li>
              <li
                className={
                  linkVisual.contact
                    ? "text-fuchsia-800 font-bold cursor-pointer"
                    : "text-slate-300 cursor-pointer"
                }
                onClick={handleContact}
              >
                contact
              </li>
            </ul>
          </div>
          <div
            className="bar-container text-slate-300 text-xl sm:hidden cursor-pointer"
            onClick={handleNavBar}
          >
            {navBar ? <FaTimes /> : <FaBars />}
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
        <ul className="shadow-md md:hidden uppercase font-semibold text-sm">
          <li
            className={
              linkVisual.home
                ? " text-fuchsia-800 font-bold cursor-pointer text-right px-5 border-b-2 border-x-slate-800 p-4  "
                : "text-slate-700 cursor-pointer text-right px-5 border-b-2 border-x-slate-800 p-4"
            }
            onClick={handleHomeMobile}
          >
            home
          </li>
          <li
            className={
              linkVisual.about
                ? " text-fuchsia-800 font-bold cursor-pointer text-right px-5 border-b-2 border-x-slate-800 p-4"
                : "text-slate-700 cursor-pointer text-right px-5 border-b-2 border-x-slate-800 p-4 "
            }
            onClick={handleAboutMobile}
          >
            about
          </li>
          <li
            className={
              linkVisual.works
                ? " text-fuchsia-800 font-bold cursor-pointer text-right px-5 border-b-2 border-x-slate-800 p-4"
                : "text-slate-700 cursor-pointer text-right px-5 border-b-2 border-x-slate-800 p-4"
            }
            onClick={handleWorksMobile}
          >
            works
          </li>
          <li
            className={
              linkVisual.contact
                ? "text-fuchsia-800 font-bold cursor-pointer text-right px-5 border-b-2 border-x-slate-800 p-4"
                : "text-slate-700 cursor-pointer text-right px-5 border-b-2 border-x-slate-800 p-4"
            }
            onClick={handleContactMobile}
          >
            contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
