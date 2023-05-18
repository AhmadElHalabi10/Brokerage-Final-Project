import React from "react";
import "./nav.css";
import alMoradLogo from "/home/ahmad/Desktop/Final-Project/Brokerage-Repository/Brokerage-FinalProject-FrontEnd/almorad/src/images/alMoradLogo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navBar">
      <Link to="/" className="navBar-logo link">
        <h3>AlMorad</h3>
        <img src={alMoradLogo} className="logo-home" alt="logo" />
      </Link>
      <Link to="/" className="navBar-nav-home link">
        Home
      </Link>

      <Link to="buy" className="navBar-nav-buy link">
        Buy
      </Link>

      <Link to="rent" className="navBar-nav-rent link">
        Rent
      </Link>
      <Link to="contact" className="navBar-nav-contact link">
        Contact
      </Link>
      <Link to="admin" className="navBar-nav-adminname link">
        AdminName123
      </Link>
      <Link to="logout" className="navBar-nav-logout link">
        Logout
      </Link>
      <Link to="listproperties" className="navBar-nav-listproperties link">
        List Properties
      </Link>
    </div>
  );
}
