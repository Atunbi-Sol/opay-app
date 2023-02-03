import React from "react";
import "./Savings.css";
import SavingsCard from "../components/SavingsCard";
import { Cards } from "../../src/data";
import { Fade } from "react-awesome-reveal";

const Savings = () => {
  return (
    <div className="savings-section">
      <article className="savings-header ">
        <Fade direction="up" triggerOnce="true">
          <h1>4 ways to build your savings</h1>
          <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
          <button className="savings-button"> Start Saving</button>
        </Fade>
      </article>
      <div className="cards-savings">
        {Cards.map((item) => {
          return <SavingsCard cards={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Savings;
