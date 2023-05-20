import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup">
      {/* <div className="login-image"></div> */}
      <div className="signup-signupbox">
        <form className="signup-signupbox-form">
          <h1 className="signup-signupbox-title">Sign up</h1>
          <input
            type="text"
            placeholder="username"
            className="signup-signupbox-input"
          />
          <input
            type="text"
            placeholder="Email"
            className="signup-signupbox-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-signupbox-input"
          />
          <button type="submit" className="signup-signupbox-button">
            Sign Up
          </button>

          <p className="signup-loginbox-haveaccount">
            Already have an account?
          </p>
          <Link to="/signin" className="signup-signupbox-signin">
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
}
