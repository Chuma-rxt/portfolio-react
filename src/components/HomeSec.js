import React from 'react';
import Slider from "react-slick";
import ProjectCardData from './WorkCrad';
import { Link } from "react-router-dom";
import "./HomeSecStyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeSec() {
  const settings = {
    dots: false,
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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="HomeSec">
      <h1 className='style'>Projects</h1>
      <Slider {...settings}>
        {ProjectCardData.map(item => (
          <div className="card" key={item.id}>
            <div className="card-top">
              <img src={item.imgsrc} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <p>{item.text}</p>
              <div className="button-container">
                <a className="bTn" href={item.view} target="_blank" rel="noopener noreferrer">View</a>
                <a className="bTn" href={item.source} target="_blank" rel="noopener noreferrer">Source</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSec;
