import React from "react";
import "./YourPriority.css"
import { Link } from "react-router-dom";
import securitymark from "../images/securitymark.png";
import { FaAngleRight } from "react-icons/fa";

const YourPriority = () => {
  return (
     
    <div className="your-priority section">
      <div className="priority-image">
        <img src={securitymark} alt="securitymark" className="security-icon" />
      </div>
      <div className="priority-header">
        <h1>Your security is our priority</h1>
        <p>
          PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your
          information is comepletely protected from fraud.
        </p>
        <Link to="" className="priority-link">
          Learn more
          <span>
            <FaAngleRight className="arrow-icon"/>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default YourPriority;
