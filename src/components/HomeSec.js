import "./HomeSecStyles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import ProjectCardData from './WorkCrad';
import { Link } from "react-router-dom";

function HomeSec () {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="HomeSec">
      <Slider {...settings}>

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
      </Slider>   
    </div>
  );
}

export default HomeSec;   