import React from "react";
import "./listproperties.css";
import CardMain from "../../components/cardmain";
import HeroImage1 from "../../images/heroPhoto.jpg";
import HeroImage2 from "../../images/loginImage.jpg";

export default function ListProperties() {
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
        <CardMain
          HeroImage={HeroImage1}
          title="Apartment for sale in Halba"
          place="Souk, Halba"
          numberBedRoom="3"
          numberBathRooms="2"
          capacity="145"
          price="60,000"
        />
        <CardMain
          HeroImage={HeroImage2}
          title="Apartment for sale in Akkar"
          place="Souk, Bebnin"
          numberBedRoom="4"
          numberBathRooms="2"
          capacity="165"
          price="80,000"
        />
        <CardMain
          HeroImage={HeroImage2}
          title="Apartment for sale in Beirut"
          place="Ein el Mrayse, Beirut"
          numberBedRoom="5"
          numberBathRooms="6"
          capacity="405"
          price="1,500,000"
        />
        <CardMain
          HeroImage={HeroImage1}
          title="Apartment for sale in Beirut"
          place="Ein el Mrayse, Beirut"
          numberBedRoom="5"
          numberBathRooms="6"
          capacity="405"
          price="1,500,000"
        />
        <CardMain
          HeroImage={HeroImage2}
          title="Apartment for sale in Beirut"
          place="Ein el Mrayse, Beirut"
          numberBedRoom="5"
          numberBathRooms="6"
          capacity="405"
          price="1,500,000"
        />
      </div>
    </div>
  );
}
