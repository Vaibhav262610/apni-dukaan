import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import Footer from "./Footer";

const Home = () => {
  const data = {
    name: "Vaibhav's Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;
