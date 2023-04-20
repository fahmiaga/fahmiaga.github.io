import React from "react";
import myPhoto from "../assets/image/edited_pot_crop.png";
import WA from "../assets/image/wa-icon.svg";

const Banner = () => {
  return (
    <>
      <div id="profile" className="lg:px-40 px-4 mt-20 flex items-center lg:flex-row flex-col-reverse justify-center w-full">
        <div className=" text-yellow-600 font-semibold lg:w-1/2 w-full lg:text-left text-center">
          <p className="uppercase">Fullstack Developer</p>
          <h1 className="lg:text-7xl text-4xl text-white uppercase py-4">
            Hi, I AM A Web Developer Expert In Web Development
          </h1>
          <p className="text-white font-thin">
            3+ years of experiences in web development either backend or
            frontend. My mission is to develop a website system that you and
            your audience love.
          </p>
          <a
            href="https://wa.me/085275002732"
            target="_blank"
            rel="noreferrer"
            className="flex items-center bg-green-600 text-white w-1/2 py-1 justify-center rounded-3xl mt-8 lg:mx-0 mx-auto"
          >
            <img src={WA} alt="Whatsapp" className="w-8 mr-2" />
            <p>CONTACT ME</p>
          </a>
        </div>
        <div className="lg:w-2/5 w-full">
          <img
            src={myPhoto}
            alt="myphoyo"
            className="lg:w-10/12 w-1/2 mx-auto rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
