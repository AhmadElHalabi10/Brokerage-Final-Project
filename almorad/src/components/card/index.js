import React from "react";
import "./card.css";
import { FaBed } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-features">
        <h3>$ {props.price}</h3>
        <p>
          4&nbsp; beds &nbsp;
          <FaBed className="card-features-p-icon" />
          &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; {props.space}&nbsp;
          square&nbsp; meters
        </p>

        <div className="card-description">
          <p>{props.description1c7388}</p>
        </div>
      </div>
    </div>
  );
}
