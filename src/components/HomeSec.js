import "./HomeSecStyless";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'

function HomeSec () {
  return (
    <div className="HomeSec">
        {ProjectCardData.map(item=>(
        <div className="card">
            <div className="card-top"></div>
            <div className="card-bottom"></div>
        </div>   
        ))}
        
    </div>
  )
}

export default HomeSec;   