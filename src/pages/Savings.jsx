import React from "react";
import "./Savings.css";
import SavingsCard from "../components/SavingsCard"
import { Cards } from "../../src/data"

const Savings = () => {
  return (
    <div className="savings-section">
      {/* <div className="savings section"> */}
        <article className="savings-header ">
          <h1>4 ways to build your savings</h1>
          <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
          <button className="savings-button"> Start Saving</button>
        </article>
      {/* </div> */}
      <div className="cards-savings">
        {Cards.map((item) => {
          return <SavingsCard cards={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Savings;
