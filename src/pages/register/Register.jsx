import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">The Social</h3>
            <span className="loginDesc">
              Connet with friends and the world around you on <b>The Social</b>.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                type="text"
                placeholder="Username"
                className="loginInput"
              />
              <input type="email" placeholder="Email" className="loginInput" />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
              />
              <input
                type="password"
                placeholder="Password Again"
                className="loginInput"
              />
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">Log into Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
