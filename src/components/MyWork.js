import "./MyWorkStyle.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const MyWork = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="image" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btn">
                        <NavLink to={props.view} className="bTn">VIEW</NavLink>
                        <NavLink to={props.source} className="bTn">SOURCE</NavLink>
                    </div>
                </div>
            </div>
  )
};

export default MyWork