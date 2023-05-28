import React, { useState } from "react";
import "./cardmain.css";
import Bed from "../../images/sleeping.png";
import Bath from "../../images/bath.png";
import Capacity from "../../images/capacity.png";

export default function CardMain(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="cardmain">
      <img src={props.picture} className="cardmain-image"></img>
      <div className="cardmain-information">
        <div className="cardmain-title">{props.title}</div>
        <div className="cardmain-place">{props.place}</div>
        <div className="cardmain-feature">
          <img src={Bed} alt="BedIcon" className="cardmain-feature-bedicon" />
          &nbsp;{props.numberBedRoom} Bedroom&nbsp;&nbsp; |&nbsp;&nbsp;
          <img
            src={Bath}
            alt="BathIcon"
            className="cardmain-feature-bathicon"
          />
          &nbsp; {props.numberBathRooms} Bathrooms &nbsp;&nbsp;|&nbsp;&nbsp;
          <img
            src={Capacity}
            alt="CapacityIcon"
            className="cardmain-feature-capacityicon"
          />
          &nbsp; {props.capacity} M^2
        </div>

        <div className="cardmain-contact">
          <span onClick={handleClick}>Call</span> &nbsp;&nbsp; Email
          &nbsp;&nbsp; WhatsApp
          <span className="cardmain-contact-price">$ {props.price}</span>
        </div>
        {showPopup && (
          <div className="cardmain-popup">Add your popup content here</div>
        )}
      </div>
    </div>
  );
}
