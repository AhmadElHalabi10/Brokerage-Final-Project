import React from "react";
import "./home.css";
import ProductCardPhoto from "../../images/heroPhoto.jpg";
import Card from "../../components/card";

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero"></div>
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
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
