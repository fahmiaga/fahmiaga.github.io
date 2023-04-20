import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="mt-40 text-white px-4 lg:px-52">
        <div className="flex items-center">
          <h1 className="text-4xl text-white text-center">About</h1>
          <hr className="w-full border-yellow-600 border-t-4 ml-2" />
        </div>
        <div className="flex mt-16">
          <p className="text-yellow-600">
            "Building websites is like building a puzzle. Every piece has to fit
            perfectly to create a beautiful picture."
          </p>
          <div className="lg:pl-56 pl-6">
            <h3 className="text-2xl mb-4">Hi, My Name is Fahmi Aga Aditya</h3>
            <p>
              An enthusiastic Web Developer with exceptional flexibility as well
              as a keen desire to improve and develop new skills.good
              communication, and good attention to detail and a high level of
              accuracy regarding quality and presentation of work.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
