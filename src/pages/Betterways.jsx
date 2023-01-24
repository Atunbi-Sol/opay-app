import React from "react";
import lady from "../images/lady.png";
import "./Betterways.css"
import CreateAccount from "../components/CreateAccount";
import AppleAndroid from "../components/AppleAndroid";
import myrent from "../images/myrent.png";
import investify from "../images/investify.png";
import { FaCompress, FaDotCircle } from "react-icons/fa";
import {TbLineDotted } from "react-icons/tb";


const Betterways = () => {
  return (
    <>
      <div className="section betterways-section">
        <section className="main-betterways">
          <article className="betterway-header">
            <h1>The Better Way to Save {"&"} Invest.</h1>
            <p> PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease. </p>
          </article>
          <div className="betterways-center">
            <CreateAccount />
          </div>
          <div className="betterways-center appleandroid">
            <AppleAndroid />
          </div>
        </section>
     
        <article className="betterways-image">
          <img src={lady} alt="lady" className="better-image" />
          <img src={myrent} alt="myrent icon" className="myrent-image" />
          <img src={investify} alt="investify icon" className="investify-image" />
          <FaCompress className="compress-image" />
          <TbLineDotted className="dot-image " />
          <TbLineDotted className=" dotted" />
          <FaDotCircle className="dot-circle" />

        </article>
        <div className="myrent-icon">
        </div>
      </div>
    </>
  );
};

export default Betterways;
