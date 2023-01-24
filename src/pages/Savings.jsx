import React from "react";
import "./Savings.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgLock } from "react-icons/cg";
import { BsShield } from "react-icons/bs";
import { FiTarget, FiFilm } from "react-icons/fi";
import SavingsCard from "../components/SavingsCard"

const Savings = () => {
  return (
    <div className="savings section">
      <article className="savings-header ">
        <h1>4 ways to build your savings</h1>
        <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
        <button className="savings-button"> Start Saving</button>
      </article>
    </div>
  );
};

export default Savings;
