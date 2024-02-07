import React from 'react'

import NavBar from "../components/NavBar";
import  Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Contact." text="Let's chat here"/>
      <Footer />
    </div>
  )
};

export default Contact;