import React from "react";
import { image } from "../assets/image";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={image.Logo_Black} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
            <input type="text" placeholder="email..." />
            <input type="password" placeholder="password..." />
            <button className="login__signInButton">Sign In</button>
        </form>
        <button className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
