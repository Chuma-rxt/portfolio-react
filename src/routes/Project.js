import React from 'react'

import NavBar from "../components/NavBar";
import  Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Offers from '../components/Offers';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Projects." text="My most recent work."/>
      <Work />
      <Offers />
      <Footer />
    </div>
  )
};

export default Project;