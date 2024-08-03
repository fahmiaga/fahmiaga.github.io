import React, { useEffect } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Fahmi | Web Developer";
  }, []);
  <Helmet>
    <title>Fahmi Aga Aditya | Web Developer</title>
    <meta name="description" content="Landing page Fahmi Aga Aditya, Web Developer" />
  </Helmet>
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
