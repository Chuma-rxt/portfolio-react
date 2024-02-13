import "./HomeSecStyles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import ProjectCardData from './WorkCrad';
import { Link } from "react-router-dom";

function HomeSec () {
  return (
    <div className="HomeSec">
      <Slider>
        
      </Slider>
        {ProjectCardData.map(item=>(
        <div className="card">
            <div className="card-top">
              <img src={item.imgsrc} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <p>{item.text}</p>
              <Link>{item.view}</Link>
              <button>{item.source}</button>
            </div>
        </div>   
        ))}
        
    </div>
  );
}

export default HomeSec;   