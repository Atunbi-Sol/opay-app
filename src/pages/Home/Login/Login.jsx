import React, { useState } from "react";
import "./login.css";
import pigvest from "../../../images/pigvest.svg";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName) return alert("please input your profile details");
    navigate("/");
  };
  return (
    <section className="login-section">
      <div className="header">
        <img src={pigvest} alt="piggyvest" className="login-image" />
      </div>
      <form className="form-control">
        <div className="form-control-header">
          <h1>Login to your account</h1>
          <p>Securely login to your PiggyVest</p>
        </div>
        <div className="form-body">
          <div className="form-field">
            <label htmlFor="userName" className="input-label">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input type="password" id="password" name="password" className="input-field" />
          </div>
          <button type="submit" onClick={handleSubmit} className="button-log">
            LOG IN
          </button>
        </div>
      </form>
      <div className="login-footer">
        <p>
          Don't have an account?
          <span>
            <Link to="/signup" className="login-link">
              Register
            </Link>
          </span>
        </p>
        <Link to="/forgotPassord" className="login-link">
          Forgot Password
        </Link>
      </div>
    </section>
  );
};

export default Login;
