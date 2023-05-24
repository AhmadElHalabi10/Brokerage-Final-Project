import React from "react";
import "./rent.css";
import CardMain from "../../components/cardmain";
import HeroImage1 from "../../images/heroPhoto.jpg";
import HeroImage2 from "../../images/loginImage.jpg";

export default function Rent() {
  return (
    <div className="rent">
      <div className="rent-hero">
        <h1 className="rent-hero-h1">
          <span className="rent-hero-h1-1">F</span>
          <span className="rent-hero-h1-2">i</span>
          <span className="rent-hero-h1-3">n</span>
          <span className="rent-hero-h1-4">d</span>
          <span className="rent-hero-h1-5"> y</span>our ideal rental home from
          our carefully selected colle
          <span className="rent-hero-h1-5">c</span>
          <span className="rent-hero-h1-4">t</span>
          <span className="rent-hero-h1-3">i</span>
          <span className="rent-hero-h1-2">o</span>
          <span className="rent-hero-h1-1">n</span>
          <span className="rent-hero-h1-1">.</span>
        </h1>
      </div>
      <div className="rent-cardmains">
        <CardMain
          HeroImage={HeroImage1}
          title="Apartment for rent in Halba"
          place="Souk, Halba"
          numberBedRoom="3"
          numberBathRooms="2"
          capacity="145"
          price="200"
        />
        <CardMain
          HeroImage={HeroImage2}
          title="Apartment for rent in Akkar"
          place="Souk, Bebnin"
          numberBedRoom="4"
          numberBathRooms="2"
          capacity="165"
          price="250"
        />
        <CardMain
          HeroImage={HeroImage2}
          title="Apartment for rent in Beirut"
          place="Ein el Mrayse, Beirut"
          numberBedRoom="5"
          numberBathRooms="6"
          capacity="405"
          price="300"
        />
        <CardMain
          HeroImage={HeroImage1}
          title="Apartment for rent in Beirut"
          place="Ein el Mrayse, Beirut"
          numberBedRoom="5"
          numberBathRooms="6"
          capacity="405"
          price="300"
        />
        <CardMain
          HeroImage={HeroImage2}
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
