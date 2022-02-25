import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Sections from "./components/Sections/Sections";

function App() {
  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };
  console.log(navBar);

  return (
    <div className="App ">
      <Navigation navBar={navBar} handleNavBar={handleNavBar} />
      <Hero />
      <Sections />
    </div>
  );
}

export default App;
