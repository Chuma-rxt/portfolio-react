import "./HeroImgStyles.css";


import React from "react";

import HomeImg from "../assets/homeImg.jpeg";

const HeroImg = () => {
  return 
    <div className= "hero">
        <div className='mask'>
           <img className="homeImg" src={HomeImg} alt="HomeImg"/>
        </div>
    </div>
  
};

export default HeroImg;