import "./AboutContentStyles.css"
import '@fortawesome/fontawesome-free/css/all.min.css';



import React from 'react';
import { Link } from "react-router-dom";
import pic1 from "../assets/myabou.jpeg";

const AboutContent = () => {
  return (
    <div className="about-container">
        <div className="about-contents">
            <section className="imageSection">
                <img src={pic1} className="img" alt="true" />
            </section>

            <section className="infoSection">
                <h1>WHO AM I ?</h1>
                <h2>Network Engineer || Software Developer</h2>
                <p>
                 Network Engineer, As a network engineer 
                 I am focusing on delivering high-availability
                 network infrastructure to sustain the users' 
                 online and on-site information technology activities. 
                 I often overlap with other roles, such as computer network 
                 architects or security systems engineer, and work internally
                  within an organization or as outside consultants. I can also be 
                  able to design and implement network configurations, troubleshoot
                   performance issues, carry out network monitoring and configure 
                   security systems such as firewalls
                </p>

                <p>
                    I just got my degree in information technology with
                    a Communication Networks major. These have aided me
                    in gaining competencies like CCNA and cybersecurity. 
                    Amidst my journey, I commenced my inaugural learnership at
                    Capaciti, where I acquired knowledge of many programming languages,
                    including HTML, CSS, JavaScript, Java, and Python. 
                    Apart from my technical proficiency, 
                    I possess exceptional interpersonal and teamwork talents, 
                    enabling me to work efficiently in a group environment. 
                    My ultimate goal is to contribute to the success of my team and 
                    positively impact the online and app development industry.
                  </p>
                  <Link to="/contact">
                    <button className="btn-light">Contact</button>
                   </Link>
            </section>


            <section className="skillSection">
                <div className="skill">
                    <div className="subject">Python</div>
                    <div className="progress-bar">
                        <div className="progress-line" value="75%" style={{ maxWidth: '75%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">Java</div>
                    <div className="progress-bar">
                        <div className="progress-line" value="90%" style={{ maxWidth: '90%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">HTML & CSS</div>
                    <div className="progress-bar">
                        <div className="progress-line" value="95%" style={{ maxWidth: '95%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">JavaScript</div>
                    <div className="progress-bar">
                        <div className="progress-line" value="60%" style={{ maxWidth: '60%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">Figma</div>
                    <div className="progress-bar">
                        <div className="progress-line" value="70%" style={{ maxWidth: '70%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">React.Js</div>
                    <div className="progress-bar">
                        <div className="progress-line" value="80%" style={{ maxWidth: '80%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">CISCO</div>
                    <div className="progress-bar">
                        <div className="progress-line" value="95%" style={{ maxWidth: '95%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">CyberSecurity</div>
                    <div className="progress-bar">
                        <div className="progress-line" value="85%" style={{ maxWidth: '85%' }}></div>
                    </div>
                </div>

            </section>
        </div>
    </div>
  )
}

export default AboutContent;