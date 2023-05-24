import React, { useState, useEffect } from "react";
import "./nav.css";
import alMoradLogo from "/home/ahmad/Desktop/Final-Project/Brokerage-Repository/Brokerage-FinalProject-FrontEnd/almorad/src/images/alMoradLogo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [boxShadow, setBoxShadow] = useState("");

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setBackgroundColor("#36372f");
        setBoxShadow("0px 6px 10px #36372f");
      } else {
        setBackgroundColor("transparent");
        setBoxShadow("");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="navBar"
      style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
    >
      <Link to="/" className="navBar-logo link">
        <img src={alMoradLogo} className="logo-home" alt="logo" />

        <h3>AlMorad</h3>
      </Link>
      <div className="navBar-nav-middleside">
        <Link to="/" className="navBar-nav-home link">
          Home
        </Link>

        {/* <Link to="buy" className="navBar-nav-buy link">
          Buy
        </Link> */}

        <Link to="/rent" className="navBar-nav-rent link">
          Rent
        </Link>
        <Link to="/contact" className="navBar-nav-contact link">
          Contact
        </Link>
      </div>
      <div className="navBar-nav-login-rightside">
        <Link to="/signin" className="navBar-nav-login link">
          Signin
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/listproperties" className="navBar-nav-listproperties link">
          Properties List
        </Link>
      </div>
    </div>
  );
}
