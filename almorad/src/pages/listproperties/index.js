import React, { useState, useEffect } from "react";
import "./listproperties.css";
import CardMain from "../../components/cardmain";
// import HeroImage1 from "../../images/heroPhoto.jpg";
// import HeroImage2 from "../../images/loginImage.jpg";

export default function ListProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:6000/property")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="listproperties">
      <div className="listproperties-hero">
        <h1 className="listproperties-hero-h1">
          <span className="listproperties-hero-h1-1">F</span>
          <span className="listproperties-hero-h1-2">i</span>
          <span className="listproperties-hero-h1-3">n</span>
          <span className="listproperties-hero-h1-4">d</span>
          <span className="listproperties-hero-h1-5"> y</span>our dream home.
          Browse our properties fo
          <span className="listproperties-hero-h1-5">r</span>
          <span className="listproperties-hero-h1-4"> s</span>
          <span className="listproperties-hero-h1-3">a</span>
          <span className="listproperties-hero-h1-2">l</span>
          <span className="listproperties-hero-h1-1">e</span>
          <span className="listproperties-hero-h1-1">.</span>
        </h1>
      </div>
      <div className="listproperties-cards">
        {properties.map((property, index) => (
          <CardMain
            HeroImage={property.picture}
            title={property.title}
            place={property.place}
            numberBedRoom={property.numberBedRoom}
            numberBathRooms={property.numberBathRooms}
            capacity={property.capacity}
            price={property.price}
          />
        ))}
      </div>
    </div>
  );
}
