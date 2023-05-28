import React from "react";
import "./rent.css";
import CardMain from "../../components/cardmain";
import RentProductPhoto1 from "../../images/RentProductPhoto1.jpg";
import RentProductPhoto2 from "../../images/RentProductPhoto2.jpg";
import RentProductPhoto3 from "../../images/RentProductPhoto3.jpg";
import RentProductPhoto4 from "../../images/RentProductPhoto4.jpg";
import RentProductPhoto5 from "../../images/RentProductPhoto5.jpg";

import HeroImage2 from "../../images/loginImage.jpg";

export default function Rent() {
  return (
    <div className="rent">
      <div className="rent-hero">
        <h1 className="rent-hero-h1">
          Find your ideal
          <span className="rent-hero-h1-1"> rental</span> home from our
          carefully selected collection.
        </h1>
      </div>
      <div className="rent-cardmains">
        <CardMain
          HeroImage={RentProductPhoto1}
          title="Apartment for rent in Halba"
          place="Souk, Halba"
          numberBedRoom="3"
          numberBathRooms="2"
          capacity="145"
          price="200"
        />
        <CardMain
          HeroImage={RentProductPhoto2}
          title="Apartment for rent in Akkar"
          place="Souk, Bebnin"
          numberBedRoom="4"
          numberBathRooms="2"
          capacity="165"
          price="250"
        />
        <CardMain
          HeroImage={RentProductPhoto3}
          title="Apartment for rent in Beirut"
          place="Ein el Mrayse, Beirut"
          numberBedRoom="5"
          numberBathRooms="6"
          capacity="405"
          price="300"
        />
        <CardMain
          HeroImage={RentProductPhoto4}
          title="Apartment for rent in Beirut"
          place="Ein el Mrayse, Beirut"
          numberBedRoom="5"
          numberBathRooms="6"
          capacity="405"
          price="300"
        />
        <CardMain
          HeroImage={RentProductPhoto5}
          title="Apartment for rent in Beirut"
          place="Ein el Mrayse, Beirut"
          numberBedRoom="5"
          numberBathRooms="6"
          capacity="405"
          price="300"
        />
      </div>
    </div>
  );
}
