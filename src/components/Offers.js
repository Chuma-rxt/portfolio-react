import "./OffersStyles.css";

import React from 'react'

const Offers = () => {
  return (
    <div className="offer">
        <div className="offer-container">
            <div className="off">
                <h3>Networking Engineer</h3>
                <span className="bar"></span>
                <p className="sente">Network engineers can specialize 
                 in several roles and responsibilities,
                 including the following: Cloud networking architects assist
                  organizations with cloud infrastructure deployment. 
                  Local area network (LAN) engineers 
                 install and maintain large LANs for enterprises. 
                 </p>
            </div>

            <div className="off">
                <h3>Software Developer</h3>
                <span className="bar"></span>
                <p className="sente">As a software developer, I am responsible
                 for interpreting customer requirements, working with a team 
                 to research, and designing and writing software. 
                 Being a software developer also involves working with others to
                 understand and resolve issues, known as bugs, in existing software. 
                </p>
            </div>

            <div className="off">
                <h3>CyberSecurity</h3>
                <span className="bar"></span>
                <p className="sente">Global implications of cyber threats.
                  Cisco's approach to threat detection and defense Ways 
                  in which networks are vulnerable to attack 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Offers