import React from "react";
import "./features.css";
import Techpoint from "../images/Techpoint.png";
import theguardian from "../images/theguardian.png";
import TC from "../images/TC.png";
import Fade from 'react-reveal/Fade';

const Features = () => {
  console.log("Features");
  return (
    <div className="features-section">
      <div className="features-title section">
        <Fade bottom>
          <div className="feature-header">
            <h1> As featured in </h1>
          </div>
          <ul className="featured-list">
            <li>
              <img src={Techpoint} alt="techpoint" />
            </li>
            <li>
              <img src={theguardian} alt="theguardian" className="the-guardian" />
            </li>
            <li>
              <img src={TC} alt="TC" className="the-TC" />
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default Features;
