import React from "react";
import { useState } from "react";
import "../css/Login.css";
import "../css/Login.css";
import BlogBtn from "../Components/BlogBtn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("LOGGED IN SUCCESSFUL!");

    if (!email || !password) {
      alert("Input all details");
      return;
    } else {
      alert("Logged in sU");
    }
  };

  return (
    <div className="create_account_container">
      <form className="account_form">
        <h1>Login Account</h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <BlogBtn className="button" text="Login" />
      </form>
    </div>
  );
};

export default Login;
