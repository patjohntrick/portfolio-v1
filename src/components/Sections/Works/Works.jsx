import React from "react";
import foodish from "../../../img/foodish.png";
import weather from "../../../img/weather.png";
import speakle from "../../../img/speakle.png";

const Works = () => {
  const FoodishWork = () => {
    return (
      <div className="work-box bg-white shadow rounded p-5 pb-9 w-[285px] xs:w-[320px] m-auto hover:shadow-lg transition-all">
        <div className="img-container w-[100%] h-[170px] xs:h-[180px] xs:w-[90%] sm:w-full sm:h-[180px] m-auto mb-10">
          <img
            src={foodish}
            alt=""
            className=" w-[100%] h-[100%] object-fit "
          />
        </div>
        <div className="text-container">
          <p className=" font-bold text-center mb-2 ">.foodish</p>
          <p className=" text-slate-800 mb-6 text-justify ">
            .foodish is a landing page showcasing the food and the restaurant's
            services that I created using React js.
          </p>
          <div className="btn-link text-center">
            <a
              href="https://patjohntrick.github.io/foodish/"
              target="_blank"
              className=" py-3 px-8 rounded uppercase font-bold text-sm bg-fuchsia-800 text-white transition-all hover:bg-fuchsia-900"
            >
              visit now
            </a>
          </div>
        </div>
      </div>
    );
  };
  const WeatherWork = () => {
    return (
      <div className="work-box bg-white shadow rounded p-5 pb-9 w-[285px] xs:w-[320px] m-auto hover:shadow-lg transition-all">
        <div className="img-container w-[100%] h-[170px] xs:h-[180px] xs:w-[90%] sm:w-full sm:h-[180px] m-auto mb-10">
          <img
            src={weather}
            alt="https://patjohntrick.github.io/weather-app/"
            className=" w-[100%] h-[100%] object-fit "
          />
        </div>
        <div className="text-container">
          <p className=" font-bold text-center mb-2 ">Weather App</p>
          <p className=" text-slate-800 mb-6 text-justify ">
            Real-time updates about weather conditions in a specific location.
            Made this using React and API.
          </p>
          <div className="btn-link text-center">
            <a
              href=""
              target="_blank"
              className=" py-3 px-8 rounded uppercase font-bold text-sm bg-fuchsia-800 text-white transition-all hover:bg-fuchsia-900"
            >
              visit now
            </a>
          </div>
        </div>
      </div>
    );
  };
  const SpeakleWork = () => {
    return (
      <div className="work-box bg-white shadow rounded p-5 pb-9 w-[285px] xs:w-[320px] m-auto hover:shadow-lg transition-all">
        <div className="img-container w-[100%] h-[170px] xs:h-[180px] xs:w-[90%] sm:w-full sm:h-[180px] m-auto mb-10">
          <img
            src={speakle}
            alt=""
            className=" w-[100%] h-[100%] object-fit "
          />
        </div>
        <div className="text-container">
          <p className=" font-bold text-center mb-2 ">Speakle</p>
          <p className=" text-slate-800 mb-6 text-justify ">
            A simple underdevelop Ecommerce website that I created using React
            js, TailwindCss and Commerce.js
          </p>
          <div className="btn-link text-center">
            <a
              href="https://speakle.herokuapp.com/"
              target="_blank"
              className=" py-3 px-8 rounded uppercase font-bold text-sm bg-fuchsia-800 text-white transition-all hover:bg-fuchsia-900"
            >
              visit now
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className=" bg-slate-100 py-16 ">
      <div className="text-container ">
        <div className="text-header-container text-center mb-12">
          <p className=" uppercase font-bold text-fuchsia-800 ">works</p>
          <p className="text-3xl capitalize font-bold mb-4 ">
            personal projects
          </p>
          <p className=" text-slate-800 text-sm font-semibold ">
            Projects that I created to practice my skills
          </p>
        </div>
      </div>
      <div className="works-container space-y-8 lg:w-[670px] lg:m-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:space-y-0 lg:gap-6">
        <FoodishWork />
        <WeatherWork />
        <SpeakleWork />
      </div>
    </section>
  );
};

export default Works;
