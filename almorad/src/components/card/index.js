import React from "react";
import "./card.css";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to="/listproperties" className="card">
      <div className="card-image"></div>
      <div className="card-features">
        <p className="card-features-title">Title: {props.title}</p>
        <h3 className="card-features-type">
          <span className="card-features-type-var">{props.type}</span>
        </h3>

        <h3 className="card-features-price">
          <span className="card-features-price-var">{props.price}</span>
        </h3>
        <p className="card-features-number">
          {props.bedNumber} &nbsp; beds &nbsp;
          <FaBed className="card-features-p-icon" />
          &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; {props.space}&nbsp;
          square&nbsp; meters
        </p>

        <div className="card-description">
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
