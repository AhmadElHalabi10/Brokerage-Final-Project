import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* <div className="footer-container-logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="footer-container-social-icons"> */}
        <a href="https://www.facebook.com">
          <FaFacebook className="icon" size={50} />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter className="icon" size={50} />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram className="icon" size={50} />
        </a>
        {/* </div> */}
      </div>
    </footer>
  );
}
