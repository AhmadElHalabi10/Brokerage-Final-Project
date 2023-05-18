import React from "react";
import "./allroutes.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Buy from "../../pages/buy";
import Rent from "../../pages/rent";
import Contact from "../../pages/contact";
import Admin from "../../pages/admin";
import Logout from "../../pages/logout";
import ListProperties from "../../pages/listproperties";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />

          <Route path="/rent" element={<Rent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/listproperties" element={<ListProperties />} />
        </Route>
      </Routes>
    </div>
  );
}
