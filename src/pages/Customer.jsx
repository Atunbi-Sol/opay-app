import React from "react";
import "./customer.css";
import CreateAccount from "../components/CreateAccount";
import AppleAndroid from "../components/AppleAndroid";
import { testimonies } from "../data";
import { Slide } from "react-awesome-reveal";

const Customer = () => {
  return (
    <div className="customer-section section">
      <div className="customer-headers">
        <Slide direction="up" triggerOnce="true">
          <h1>4 Million + customers</h1>
          <p>
            Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be
            more accountable.
          </p>
        </Slide>
        <div className="customer-createaccount">
          <CreateAccount />
        </div>
        <div className="customer-appleandroid">
          <AppleAndroid />
        </div>
      </div>
      <div className="customer-testimony section">
        {testimonies.map((testimony) => {
          const { date, name, story, image, id } = testimony;
          return (
            <div className="custom-testimony" key={id}>
              <p className="custom-image">{image}</p>
              <div>
                <p className="custom-date">{date}</p>
                <h1>{name}</h1>
                <p>{story}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customer;
