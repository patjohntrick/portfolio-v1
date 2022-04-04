import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Sections from "./components/Sections/Sections";

function App() {
  const [navBar, setNavBar] = useState(false);
  const [navBarVisual, setNavBarVisual] = useState(false);

  const handleNavBar = (e) => {
    setNavBar(!navBar);
  };

  window.addEventListener("scroll", () => {
    const windowScrollY = window.scrollY;
    if (windowScrollY >= 600) {
      setNavBarVisual(true);
    } else {
      setNavBarVisual(false);
    }
  });
  // const scrollY = window.pageYOffset;
  // console.log(scrollY);
  // console.log(navBarVisual);
  return (
    <div className="App ">
      <Navigation
        navBar={navBar}
        handleNavBar={handleNavBar}
        navBarVisual={navBarVisual}
        setNavBar={setNavBar}
      />
      <Hero />
      <Sections />
    </div>
  );
}

export default App;
