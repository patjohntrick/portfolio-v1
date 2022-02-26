import React from "react";
import hero from "../../../img/hero.jpg";

const Contact = () => {
  const infos = [
    {
      id: 1,
      info: "Email",
      label: "patrickjohn.resurreccion18@gmail.com",
    },
    {
      id: 2,
      info: "Address",
      label: "Brgy. Ajos Sitio Tulay Catanauan, Quezon. 4311",
    },
    {
      id: 3,
      info: "Phone",
      label: "09566723445",
    },
  ];
  const ImgOverlay = () => {
    return (
      <div className="contact">
        <div className="img-container absolute w-full h-auto top-[-250px] lg:top-[-440px] -z-20">
          <img src={hero} alt="" className="w-full object-cover h-[1400px]" />
        </div>
        <div className="overlay absolute w-full bg-neutral-900/80 top-0 h-[1500px] -z-10"></div>
      </div>
    );
  };
  const Form = () => {
    return (
      <div className="form-container lg:w-[50%]">
        <form
          action=""
          className=" bg-neutral-900/70 p-5 rounded shadow-md w-[285px] m-auto space-y-4 xs:w-[320px] lg:w-[350px] lg:p-7"
        >
          <input
            type="text"
            placeholder="Name"
            className=" w-full p-3 font-semibold text-sm bg-neutral-600/20 text-neutral-300 rounded outline-none border-none placeholder:text-neutral-500"
            required
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Email"
            className=" w-full p-3 font-semibold text-sm bg-neutral-600/20 text-neutral-300 rounded outline-none border-none placeholder:text-neutral-500"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className=" w-full p-3 font-semibold text-sm bg-neutral-600/20 text-neutral-300 rounded outline-none border-none placeholder:text-neutral-500"
            required
          />
          <br />
          <textarea
            name=""
            placeholder="Message"
            id=""
            cols="30"
            rows="8"
            className=" w-full p-3 font-semibold text-sm bg-neutral-600/20 text-neutral-300 rounded outline-none border-none placeholder:text-neutral-500"
            required
          ></textarea>
          <br />
          <div className=" flex justify-center ">
            <input
              type="submit"
              value="Submit"
              className=" px-11 py-3 text-sm font-bold bg-fuchsia-800 text-white cursor-pointer hover:bg-fuchsia-900 transition-all rounded shadow uppercase "
            />
          </div>
        </form>
      </div>
    );
  };
  const ContactInfos = () => {
    return (
      <div className="info-container">
        <div className="address w-[285px] m-auto mt-8 lg:mt-0 lg:w-[50%] lg:m-0">
          {infos.map((info) => {
            return (
              <div key={info.id}>
                <p className="font-semibold text-white mb-1">{info.info}</p>
                <p className="mb-3 text-neutral-400 ">{info.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <section className="text-container py-16 relative overflow-hidden ">
      <div className="text-header-container text-center mb-12">
        <p className=" uppercase font-bold text-fuchsia-800 ">contact</p>
        <p className="text-3xl capitalize font-bold mb-4 text-white ">
          Wanna Say Something?
        </p>
        <p className=" text-neutral-300 text-sm font-semibold ">
          Feel free to ask
        </p>
      </div>
      <div className="contact-container">
        <ImgOverlay />
        <div className=" lg:w-[850px] lg:m-auto lg:flex lg:justify-center lg:items-center">
          <Form />
          <ContactInfos />
        </div>
      </div>
    </section>
  );
};

export default Contact;
