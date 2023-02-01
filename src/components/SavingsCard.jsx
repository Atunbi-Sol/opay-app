import React from "react";
import "./SavingsCard.css";
import {Zoom } from "react-awesome-reveal";

const SavingsCard = ({ cards }) => {
  const { icon, title, description, button, buttonName, id } = cards;

  return (
    <Zoom>
      <div className="savings-card section">
        {icon}
        <h3> {title}</h3>
        <p> {description} </p>
        {button} {buttonName}
      </div>
    </Zoom>
  );
};

export default SavingsCard;

