import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between py-2 px-8 bg-dark items-center sticky">
        <div className="my-name">fahmiaga</div>
        <div className=" text-white justify-evenly lg:flex hidden">
          <h4>WORKS</h4>
          <h4 className="px-4">EXPERIENCES</h4>
          <h4>CONTACT ME</h4>
        </div>
      </div>
    </>
  );
};

export default Header;
