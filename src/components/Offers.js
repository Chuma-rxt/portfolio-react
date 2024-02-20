import "./OffersStyles.css";

import React from 'react'

const Offers = () => {
  return (
    <div className="offer">
        <div className="offer-container">
            <div className="off">
                <h3>Networking Engineer</h3>
                <span className="bar"></span>
                <p className="sente">As a Network engineers I am specializing 
                 in several roles and responsibilities,
                 including the following: Cloud networking architects assist
                  organizations with cloud infrastructure deployment. 
                  Local area network (LAN) engineers,
                 install and maintain large LANs for enterprises.
                 Network security specialists detect and prevent network security threats. 
                 I am also specializing in VoIP, telecom and data center implementation. 
                 </p>
            </div>

            <div className="off">
                <h3>Software Developer</h3>
                <span className="bar"></span>
                <p className="sente">As a versatile professional adept in both software
                 development and network engineering, I bring a unique blend of technical
                  expertise to the table. With a solid foundation in languages like JavaScript,
                   Python, Node.js, Java, HTML, and CSS, I thrive in crafting robust and 
                   scalable software solutions. Proficient in UI/UX design, I utilize tools 
                   such as Balsamiq and Figma to create intuitive wireframes and sleek interfaces💻. 
                </p>
            </div>

            <div className="off">
                <h3>CyberSecurity</h3>
                <span className="bar"></span>
                <p className="sente">By leveraging my certification in Introduction to Cybersecurity,
                 I can position myself as a trusted cybersecurity advisor 
                 and offer valuable services to clients looking to enhance their security 
                 posture and protect against cyber threats. Continuously stay updated with the
                  latest developments and best practices in the cybersecurity 
                  field to provide the most effective solutions to your clients.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Offers