import React from "react";
import "./home.css";
import ProductCardPhoto from "../../images/heroPhoto.jpg";
import Card from "../../components/card";
import { BiNavigation } from "react-icons/bi";

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <h1 className="home-hero-h1">
          <span className="home-hero-h1-1">W</span>
          <span className="home-hero-h1-2">e</span>
          <span className="home-hero-h1-3">l</span>
          <span className="home-hero-h1-4">c</span>
          <span className="home-hero-h1-5">o</span>me to our world of
          exceptional prope
          <span className="home-hero-h1-5">r</span>
          <span className="home-hero-h1-4">t</span>
          <span className="home-hero-h1-3">i</span>
          <span className="home-hero-h1-2">e</span>
          <span className="home-hero-h1-1">s</span>
          <span className="home-hero-h1-1">.</span>
        </h1>
      </div>
      <div className="home-diffierentTypeOfProperties">
        <p className="home-diffierentTypeOfProperties-p1">
          Different Types of properties
        </p>
        <p className="home-diffierentTypeOfProperties-p2">
          Best type of properties for you
        </p>
      </div>
      <div className="home-products">
        <div className="home-products-product1">
          <img
            className="home-products-img"
            src={ProductCardPhoto}
            alt="Hello1"
          />
          <div className="home-products-numberofproperties">3 properties</div>
        </div>
        <div className="home-products-product2">
          <img
            className="home-products-img"
            src={ProductCardPhoto}
            alt="Hello2"
          />
          <div className="home-products-numberofproperties">3 properties</div>
        </div>
        <div className="home-products-product3">
          <img
            className="home-products-img"
            src={ProductCardPhoto}
            alt="Hello3"
          />
          <div className="home-products-numberofproperties">3 properties</div>
        </div>
      </div>

      <div className="home-propertiesYouMayLike">
        <div className="home-propertiesYouMayLike-paragraph">
          <p className="home-propertiesYouMayLike-p1">
            Properties you may like
          </p>
          <p className="home-propertiesYouMayLike-p2">
            Our Featured properties
          </p>
        </div>
        <div className="home-propertiesYouMayLike-products">
          <Card
            price="30000"
            bedNumber="4"
            space="125"
            description="Lorem ipsum fwef wefw efwe we we fnjdfkefwlkkferfnewfn wje fnewf wle fnwe f jl"
          />
          <Card
            price="40000"
            bedNumber="3"
            space="135"
            description="Lorem ipsum fwef wefw efwe we we fnjdfkefwlkkferfnewfn wje fnewf wle fnwe f jl"
          />
          <Card
            price="50000"
            bedNumber="5"
            space="145"
            description="Lorem ipsum fwef wefw efwe we we fnjdfkefwlkkferfnewfn wje fnewf wle fnwe f jl"
          />
        </div>
      </div>
      <div className="home-latestoffers">
        <div className="home-latestoffers-paragraph">
          <p className="home-latestoffers-p1">Want to get the latest offers?</p>
          <p className="home-latestoffers-p2">
            Send us your email and we will do the rest
          </p>
        </div>
        <div className="home-latestoffers-searchbar-container">
          <input
            type="search"
            placeholder="Type email..."
            className="home-latestoffers-searchbar"
          />
          <BiNavigation
            className="home-latestoffers-searchbar-navigationicon"
            size={40}
          />
        </div>
      </div>
    </div>
  );
}
