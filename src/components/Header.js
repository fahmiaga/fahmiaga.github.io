import React from "react";
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-between py-2 px-8 bg-dark items-center fixed top-0 pb-7 z-10">
        <div className="my-name">fahmiaga</div>
        <div className=" text-white justify-evenly lg:flex hidden">
          <h4 className="cursor-pointer">
            <Link activeClass="active" to="profile" spy={true} smooth={true} offset={-80}>Profile</Link>
          </h4>
          <h4 className="px-5 cursor-pointer">
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-200}>About</Link>
          </h4>
          <h4 className="cursor-pointer">
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-80}>Works</Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Header;
