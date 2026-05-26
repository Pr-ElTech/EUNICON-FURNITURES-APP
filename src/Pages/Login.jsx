import React from "react";
import "../css/Login.css"
import BlogBtn from "../Components/BlogBtn";

const Login = () => {
  return (


    <div className="create_account_container">
      <form className="account_form">

        <h1>Login Account</h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <BlogBtn className ="button" text="Login"/>

      </form>
    </div>
  );
};





export default Login;
