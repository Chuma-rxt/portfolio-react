import "./HeroImgStyles.css";


import React from "react";

import homeImg from "../assets/WhatsApp Image 2024-01-25 at 11.11.38.jpeg"

const HeroImg = () => {
  return 
    <div className= "hero">
        <div className='mask'>
           <img className="into-img" src="homeImg"/>
        </div>
    </div>
  
};

export default HeroImg;