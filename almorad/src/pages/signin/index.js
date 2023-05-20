import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="signin">
      {/* <div className="login-image"></div> */}
      <div className="signin-signinbox">
        <form className="signin-signinbox-form">
          <h1 className="signin-signinbox-title">Sign in</h1>
          <input
            type="text"
            placeholder="Email"
            className="signin-signinbox-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="signin-signinbox-input"
          />
          <button type="submit" className="signin-signinbox-button">
            Sign in
          </button>

          <p className="signin-signinbox-noaccount">Don't have an account?</p>
          <Link to="/signup" className="signin-signinbox-signup">
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}
