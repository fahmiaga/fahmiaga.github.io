import React, { useEffect } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Project from "../components/Project";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Fahmi | Web Developer";
  }, []);
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Banner />
        <About />
        <Project />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
