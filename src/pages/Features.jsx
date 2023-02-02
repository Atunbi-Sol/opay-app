import React from "react";
import "./features.css";
import Techpoint from "../images/Techpoint.png";
import theguardian from "../images/theguardian.png";
import TC from "../images/TC.png";
import { Fade } from "react-awesome-reveal";

const Features = () => {
  console.log("Features");
  return (
    <div className="features-section">
      <div className="features-title section">
        <Fade direction="up">
          <div className="feature-header">
            <h1> As featured in </h1>
          </div>
        </Fade>
        <ul className="featured-list">
          <Fade direction="up">
            <li>
              <img src={Techpoint} alt="techpoint" />
            </li>
          </Fade>
          <Fade direction="up">
            <li>
              <img src={theguardian} alt="theguardian" className="the-guardian" />
            </li>
          </Fade>
          <Fade direction="up">
            <li>
              <img src={TC} alt="TC" className="the-TC" />
            </li>
          </Fade>
        </ul>
      </div>
    </div>
  );
};

export default Features;
