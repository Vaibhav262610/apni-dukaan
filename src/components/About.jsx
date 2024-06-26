import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import { useProductContext } from "@/context/productcontext";

const About = () => {
  const myName = useProductContext();

  const data = {
    name: "Vaibhav Ecommerce",
  };

  return (
    <>
      <HeroSection myData={data} />
      {myName}
    </>
  );
};

export default About;
