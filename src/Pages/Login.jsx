import React from "react";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="create_account_container">
      <form className="account_form">
        <h1>Create Account</h1>

        <input type="text" placeholder="First Name" />

        <input type="text" placeholder="Last Name" />

        <input type="password" placeholder="Password" />

        <input type="email" placeholder="Email" />

        <input type="text" placeholder="Phone Number" />

        <button>Create</button>
      </form>
    </div>
  );
};

export default Login;
