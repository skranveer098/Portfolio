import React from "react";
import LeftScroll from "./LeftScroll.jsx";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import image_side from "./phots/My project (1).png";

import "./AboutMe.css";
// import zIndex from '@mui/material/styles/zIndex.js';

const AboutMe = () => {
  return (
    <div className="flexabout" style={{background:"linear-gradient(145deg, #1f1919, #241e1e)"}}>
      <div className="contained" >
        <h1 style={{ color: "aliceblue" }}>About Me</h1>
        <p style={{ color: "aliceblue" }}>Myself Ranveer Singh Karnawat from Rajasthan. I am interested in the domain of
Web and Software Developer with experience in tech Stacks like ReactJS . Proven track record in my projects. Seeking a challenging role to leverage technical expertise.
</p>
        <div className="containabout">
          <LeftScroll></LeftScroll>
          <div className="leftSocial">
            <footer className="wrapper">
              <div className="icons facebook">
                <div className="tooltip">Github</div>
                <span>
                  {" "}
                  <i
                    className="fab fa-facebook"
                    onClick={() =>
                      (window.location.href = "https://github.com/skranveer098")
                    }
                  >
                    <FaGithubAlt />
                  </i>
                </span>
              </div>

              <div className="icons instagram">
                <div className="tooltip">Instagram</div>
                <span>
                  {" "}
                  <i
                    className="fab fa-instagram"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/r_s_k?igsh=MWFyMW1xemwzMW9ibA==")
                    }
                  >
                    <FaInstagram />
                  </i>
                </span>
              </div>

              <div className="icons twitter">
                <div className="tooltip">Gmail</div>
                <a href="mailto:ranveersinghsingh2644@gmail.com">
                  <span>
                    {" "}
                    <i className="fab fa-twitter">
                      <SiGmail />
                    </i>
                  </span>
                </a>
              </div>

              <div className="icons youtube">
                <div className="tooltip">Phone</div>
                <span>
                  {" "}
                  <i className="fab fa-youtube">
                    <IoCall />
                  </i>
                </span>
              </div>
            </footer>
          </div>

          <div id="para">
            {/* <p style={{ color: "aliceblue", textAlign: "left" }}>
              Dedicated web developer, C++ coder, and tech enthusiast driven by
              a passion for cutting‑edge technologies. Proficient in front‑end
              development, with expertise in HTML, CSS, JavaScript, C++, and
              Java. Strong leadership skills and a keen eye for detail.
              Committed to crafting efficient, scalable solutions that elevate
              user experiences and contribute for the betterment of the society
              and association.
            </p> */}

            <div className="row">
  <div className="col-lg-6">
    <ul>
      <li>
        <i className="bi bi-chevron-right"></i>{" "}
        <strong>Name:</strong> <span style={{color: 'aliceblue'}}>Ranveer Singh</span>
      </li>
      <li>
        <i className="bi bi-chevron-right"></i>{" "}
        <strong>Phone:</strong> <span style={{color: 'aliceblue'}}>+917905864355</span>
      </li>
      <li>
        <i className="bi bi-chevron-right"></i>{" "}
        <strong>City:</strong> <span style={{color: 'aliceblue'}}>Jamshedpur, Jharkhand, India</span>
      </li>
    </ul>
  </div>
  <div className="col-lg-6"> {/* Changed from col-lg-61 to col-lg-6 */}
    <ul>
      <li>
        <i className="bi bi-chevron-right"></i>{" "}
        <strong>Age:</strong> <span style={{color: 'aliceblue'}}>21</span>
      </li>
      <li>
        <i className="bi bi-chevron-right"></i>{" "}
        <strong>GMail:</strong>{" "}
        <span style={{color: 'aliceblue'}}>ranveersinghsingh2644@gmail.com</span>
      </li>
      <li>
        <i className="bi bi-chevron-right"></i>{" "}
        <strong>Freelance:</strong> <span style={{color: 'aliceblue'}}>Available</span>
      </li>
    </ul>
  </div>
</div>

          </div>

          <div className="pic">
            <img src={image_side}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
