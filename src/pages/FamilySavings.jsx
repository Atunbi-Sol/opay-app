import React from "react";
import "./familySavings.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import oyetade from "../images/oyetade.jpg"

const FamilySavings = () => {
  return (
    <div className="family-section">
      <div className="family-section-header">
        <h1>Meet the saver of the month!</h1>
        <p>
          Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is
          specifically helping them shape how they spend and save for future responsibilities.
        </p>
        <button>
          <FaLongArrowAltRight className="arrow-icon" /> Meet The Oyetade's
        </button>
      </div>
      <div className="family-section-image">
        <img src={oyetade} alt="the oyetades" />
      </div>
    </div>
  );
};

export default FamilySavings;
