import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import { useProductContext } from "@/context/productcontext";
import Footer from "./Footer";

const About = () => {
  const myName = useProductContext();

  const data = {
    name: "Vaibhav Ecommerce",
  };

  return (
    <>
      <HeroSection myData={data} />
      {myName}
      <Footer />
    </>
  );
};

export default About;
