import React from "react";
import "./card.css";
import { FaBed } from "react-icons/fa";

export default function Card() {
  return (
    <div className="card">
      <h3>$ 200000</h3>
      <div className="card-features">
        <p>
          4 beds <i className="card-features-icon">{FaBed}</i> | 125 square
          meters
        </p>
      </div>
      <div className="card-description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>
    </div>
  );
}
