import React from "react";
import "./SavingsCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgLock } from "react-icons/cg";
import { BsShield } from "react-icons/bs";
import { FiTarget, FiFilm } from "react-icons/fi";
const SavingsCard = ({ cards }) => {
  const { icon, title, description, button, buttonName, id } = cards;

  return (
    <div className="savings-card section">
      {icon}
      <h3> {title}</h3>
      <p> {description} </p>
      {button} {buttonName}
    </div>
  );
};

export default SavingsCard;

// return (
//     <div className="savings-card section">
//       <h1 className="card-icon">
//         <BsShield className="card-background" />
//       </h1>
//       <h3> Automated Savings </h3>
//       <p> Build a dedicated savings faster on your terms automatically or manually. </p>
//       <button card-button>
//         <FaLongArrowAltRight className="icon-background" /> <span>Piggybank</span>
//       </button>
//     </div>
//   );
// };
