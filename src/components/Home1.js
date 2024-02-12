import "./Home1Styles.css";

import React from 'react'
import Cis from "../assets/Cisco-Courses.jpg"

const Home1 = () => {
  return (
    <div className="slide-container">
        <div className="slide-content">
            <div className="card-wrapper">
                <div className="card">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src={Cis} className="img-card" alt="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home1;
