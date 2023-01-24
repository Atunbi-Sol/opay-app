import React from "react";
import "./customer.css";
import CreateAccount from "../components/CreateAccount";
import AppleAndroid from "../components/AppleAndroid";

const Customer = () => {
  return (
    <div className="customer-section section">
      <div className="customer-headers">
        <h1>4 Million + customers</h1>
        <p>
          Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be
          more accountable.
        </p>
        <div className="customer-createaccount">
          <CreateAccount />
        </div>
        <div>
          <AppleAndroid />
        </div>
      </div>
    </div>
  );
};

export default Customer;
