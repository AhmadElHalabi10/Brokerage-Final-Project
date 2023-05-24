import React from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SignIn() {
  const history = useNavigate();

  const goBack = () => {
    history(-1); // Go back to the previous page using React Router
    // Alternatively, you can use `window.history` directly:
    // window.history.back();
  };

  return (
    <div className="signin">
      {/* <div className="login-image"></div> */}
      <div className="signin-signinbox">
        <form className="signin-signinbox-form">
          <Link to="/contact" className="signin-signinbox-form-closeicon">
            <AiOutlineCloseCircle size={30} />
          </Link>
          <div className="signin-signinbox-form-top">
            <h1 className="signin-signinbox-title">Sign in</h1>
          </div>
          <input
            type="txt"
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
