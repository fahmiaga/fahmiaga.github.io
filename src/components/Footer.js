import React from "react";
import Instagram from "../assets/image/ig.svg";
import Linkedin from "../assets/image/linkedin.svg";
import Github from "../assets/image/github.svg";

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <>
      <div className="py-32 text-white lg:px-52 px-4 -z-0">
        <hr className="w-full border-yellow-600 border-t-2 ml-2" />
        <div className="flex relative bg-green-800 w-1/4 mx-auto mt-7">
          <a
            href="https://www.instagram.com/fahmiaga/"
            className="top-0 hover:top-2 ease-out duration-300 transition-all absolute left-0"
          >
            <img src={Instagram} alt="ig" className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/fahmi-aga-aditya-bb145b202/"
            className="px-7 top-0 hover:top-2 ease-out duration-300 transition-all absolute left-[84px]"
          >
            <img src={Linkedin} alt="ig" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/fahmiaga"
            className="top-0 hover:top-2 ease-out duration-300 transition-all absolute right-0"
          >
            <img src={Github} alt="ig" className="w-10 h-10" />
          </a>
        </div>
        <div className="flex justify-center mt-20">
          <p>© {year} - Developed by Fahmi Aga Aditya</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
