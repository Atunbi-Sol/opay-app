import React, { useState } from "react";
import "./signUp.css";
import pigvest from "../../../images/pigvest.svg";
import { useNavigate, Link } from "react-router-dom";
import CustomSelect from "../../../components/Select/CustomSelect";

const SignUp = () => {
  const [select, setSelect] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <section className="signUp-section">
      <div className="header">
        <img src={pigvest} alt="piggyvest" className="signUp-image" />
      </div>
      <form className="form-control">
        <div className="form-control-header">
          <h1>Create a Source Account</h1>
          <div className="welcome-text">
            <p>Welcome to the future of Savings </p>
            <p> & Investments</p>
          </div>
        </div>
        <div className="form-body">
          <div className="form-field">
            <label htmlFor="userName" className="input-label">
              Full Name
            </label>
            <input type="text" id="userName" name="userName" placeholder="Full Name" className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <input type="email" id="email" name="email" placeholder="Email Address" className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="userName" className="input-label">
              Phone Number
            </label>
            <input type="number" id="number" name="number" placeholder="Phone Number" className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="userName" className="input-label">
              Password
            </label>
            <input type="password" id="password" name="password" placeholder="Password" className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="userName" className="input-label">
              Referrer Phone or Promo Code (Optional)
            </label>
            <input type="text" id="Referrer" name="Referrer" placeholder="Referrer Phone or Code" className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="" className="input-label">
              How Did You Hear About Us? (Optional)
            </label>
            <CustomSelect value="select" onChange={(e) => setSelect(e.target.value)} />
          </div>
          <button type="submit" onClick={handleSubmit} className="button-log">
            CREATE ACCOUNT
          </button>
        </div>
      </form>
      <div className="signUp-footer">
        <p>
          Already have an account?
          <span>
            <Link to="/login" className="signUp-link">
              Log in
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
