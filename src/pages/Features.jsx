import React from "react";
import "./features.css";
import Techpoint from "../images/Techpoint.png";
import theguardian from "../images/theguardian.png";
import TC from "../images/TC.png";

const Features = () => {
  console.log("Features");
  return (
    <div className="features-section">
      <div className="features-title section">
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
      </div>
    </div>
  );
};

export default Features;
