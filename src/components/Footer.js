import "./FooterStyles.css"

import React from 'react'

import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Cape Town,Langa</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                        073 326 5346
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                        craxoti60@gmail.com
                    </h4>
                </div>
            </div>

            <div className="Right">
                <p>© All Rights Reserved By Chuma Raxothi.</p>
                <div className="social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    </a>
                    <a href="https://github.com/Chuma-rxt" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
};

export default Footer