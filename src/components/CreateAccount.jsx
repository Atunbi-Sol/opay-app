import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
 const navigate = useNavigate();
 const handleSubmit = (e) => {
   e.preventDefault();
   navigate("/signup");
 };

  return (
    <div className="create">
      <button type='submit' onClick={handleSubmit} className="create-account">Create free account</button>
    </div>
  );
}

export default CreateAccount;