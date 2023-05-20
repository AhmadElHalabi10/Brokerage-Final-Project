import React from "react";
import "./nav.css";
import alMoradLogo from "/home/ahmad/Desktop/Final-Project/Brokerage-Repository/Brokerage-FinalProject-FrontEnd/almorad/src/images/alMoradLogo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navBar">
      <Link to="/" className="navBar-logo link">
        <img src={alMoradLogo} className="logo-home" alt="logo" />

        <h3>AlMorad</h3>
      </Link>
      <div className="navBar-nav-middleside">
        <Link to="/" className="navBar-nav-home link">
          Home
        </Link>

        <Link to="buy" className="navBar-nav-buy link">
          Buy
        </Link>

        <Link to="/rent" className="navBar-nav-rent link">
          Rent
        </Link>
        <Link to="/contact" className="navBar-nav-contact link">
          Contact
        </Link>
        <Link to="/admin" className="navBar-nav-adminname link">
          AdminName123
        </Link>
      </div>
      <div className="navBar-nav-login-rightside">
        <Link to="/login" className="navBar-nav-login link">
          Login
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/listproperties" className="navBar-nav-listproperties link">
          List Properties
        </Link>
      </div>
    </div>
  );
}
