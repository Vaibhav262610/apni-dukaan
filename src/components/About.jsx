import React, { useContext } from 'react'
import HeroSection from './HeroSection'


const About = () => {


  const data = {
    name : "Vaibhav Ecommerce"
  }

  return (
    <>
      <HeroSection myData={{data}}/>
    </>
  )
}

export default About