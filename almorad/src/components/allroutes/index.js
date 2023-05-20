import React from "react";
import "./allroutes.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Buy from "../../pages/buy";
import Rent from "../../pages/rent";
import Contact from "../../pages/contact";
import Admin from "../../pages/admin";
import Login from "../../pages/login";
import ListProperties from "../../pages/listproperties";

export default function AllRoutes() {
  return (
    <div>
      <Routes></Routes>
    </div>
  );
}
