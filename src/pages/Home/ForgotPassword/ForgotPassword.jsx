import React, { useState } from "react";
import "./forgotpassword.css";
import { useNavigate, Link } from "react-router-dom";
import pigvest from "../../../images/pigvest.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("please input your profile details");
    navigate("/");
  };
  return (
    <section className="forgotpassword-section">
      <div className="header">
        <img src={pigvest} alt="piggyvest" className="forgotpassword-image" />
      </div>
      <form className="form-control">
        <div className="form-control-header">
          <h1>Forgot Password</h1>
          <p>Enter your email to reset your password</p>
        </div>
        <div className="form-body">
          <div className="form-field">
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field" required
              placeholder="e.g. john@gmail.com"
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="button-log">
            RESET PASSWORD
          </button>
        </div>
      </form>
      <div className="forgotpassword-footer">
        <Link to="/login" className="forgotpassword-link">
          Back to login
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
