import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      {/* <div className="login-image"></div> */}
      <div className="login-loginbox">
        <form className="login-loginbox-form">
          <h1 className="login-loginbox-title">Login</h1>
          <input
            type="text"
            placeholder="Email"
            className="login-loginbox-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-loginbox-input"
          />
          <button type="submit" className="login-loginbox-button">
            Sign in
          </button>

          <p className="login-loginbox-noaccount">Don't have an account?</p>
          <p className="login-loginbox-signup">Sign up</p>
        </form>
      </div>
    </div>
  );
}
