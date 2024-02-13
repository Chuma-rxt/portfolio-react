import React from "react";
import NavBar from "../components/NavBar";
import  HeroImg from "../components/HeroImg";
import  Footer from "../components/Footer";
import HomeSec from "../components/HomeSec";


const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <HomeSec />
      <Footer />
    </div>
  )
};

export default Home;