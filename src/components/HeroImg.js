import "./HeroImgStyles.css";
import React from "react";
import HomeImg from "../assets/homeImg1.jpeg";
import { Link } from "react-router-dom";                


const HeroImg = () => {

  function downloadResume() {
    const url = 'https://drive.google.com/file/d/1bczmnIQ6u4-P85ni6XPk2Hv2-6_Vhpjb/view?usp=sharing';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Chuma_Raxothi_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  



  return (
    <div className= "hero">
        <div className="mask">
           <img className="homeImg" src= {HomeImg} alt="HomeImg" />
        </div>
        <div className="content">
          <p> Hello my name is Chuma Raxothi</p>
          <h1>NETORK ENGINEER || SOFTWARE DEVELOPER</h1>
          
            {/* <div className="conta">
              <button href="Chrome HTML Document (.pdf)" class="Download-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="20"
                  viewBox="0 0 640 512"
                >
                  <path
                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                    fill="white"
                  ></path>
                </svg>
                <span>Download Resume</span>
              </button>
              <Link to="/contact" className="btn btn-light">
                CONTACT
              </Link>
            </div> */}

              <div className="container">
                <div className="conta">
                <button onClick={() => downloadResume()} target="_blank" className="Download-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="20"
                  viewBox="0 0 640 512"
                >
                  <path
                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                    fill="white"
                  ></path>
                </svg>
                <span>Download Resume</span>
                </button>
                </div>
                    <Link to="/contact">
                        <button className="btn-light">Contact</button>
                    </Link>
              </div>
        </div>
    </div>
  );
};

export default HeroImg;