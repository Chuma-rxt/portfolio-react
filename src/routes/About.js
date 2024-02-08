import React from 'react'

import NavBar from "../components/NavBar";
import  Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="About Me." text="Im a Network Engineer and Software Developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
};

export default About;