import "./MyWorkStyle.css";
import MyWork from "./MyWork";
import WorkCrad from "./WorkCrad";

import React from 'react'
import ProjectCardData from './WorkCrad';

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCrad.map((val, ind) =>{
                return(
                     <MyWork 
                         key={ind}
                         imgsrc={val.imgsrc}
                         title={val.title}
                         text={val.text}
                         view={val.view}
                      />
                )
            })}
            
        </div>
    </div>
  )
};

export default Work