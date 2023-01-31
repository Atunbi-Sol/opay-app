import React from "react";
import iphone from "../images/iphone.png";
import "./access.css";
import { FaDotCircle } from "react-icons/fa";
import{ Link }from "react-router-dom"
import { FaAngleRight } from "react-icons/fa";


const Access = () => {
  return (
    <div className="access-section section">
      <div className="access-image">
        <img src={iphone} alt="iphone advert" className="access-iphone" />
        <FaDotCircle className="dotcircle" />
      </div>
      <div className="invest-section">
        <h4>Up To 25% Returns</h4>
        <h1> Access investment opportunities </h1>
        <p>
          Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.
        </p>
        <Link to="" className="priority-link">
          Learn more about Investments
          <span>
            <FaAngleRight className="arrow-icon" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Access;
