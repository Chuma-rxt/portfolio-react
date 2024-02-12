import "./Home1Styles.css";

import React from 'react'
import Cis from "../assets/Cisco-Courses.jpg";
import { NavLink } from "react-router-dom";

function Home1(props) {
    const { someProp } = props;

  return (
    <div className="slide-container">
        <div className="slide-content">
            <div className="card-wrapper">
                <div className="card">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src={Cis} className="card-img" alt="true" />
                        </div>
                    </div>
                    <div className="card-content">
                        <h2 className="name"> Communication Networks</h2>
                        <p className="description">Completed the course CCNAv7: Switching, Routing and Wireless Essentials course administered by the undersigned instructor.</p>

                        <div className="pro-btn">
                            <NavLink to={props.view} className="bTn">VIEW</NavLink>
                            <NavLink to={props.source} className="bTn">SOURCE</NavLink>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home1;
