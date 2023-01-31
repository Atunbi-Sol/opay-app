import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="sign-in">
      <button type="submit" onClick={handleSubmit} className="sign-in-button">
        Sign in
      </button>
    </div>
  );
};

export default Signin;
