import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SignUp() {
  return (
    <div className="signup">
      {/* <div className="login-image"></div> */}
      <div className="signup-signupbox">
        <Link to="/contact" className="signup-signupbox-form-closeicon">
          <AiOutlineCloseCircle size={30} />
        </Link>
        <form className="signup-signupbox-form">
          <h1 className="signup-signupbox-title">Sign up</h1>
          <input
            type="txt"
            placeholder="username"
            className="signup-signupbox-input"
          />
          <input
            type="txt"
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
