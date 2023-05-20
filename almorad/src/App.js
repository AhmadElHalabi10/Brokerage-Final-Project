import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Visiter from "./pages/visiter";
import Home from "./pages/home";
import Buy from "./pages/buy";
import Rent from "./pages/rent";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import Login from "./pages/login";
import ListProperties from "./pages/listproperties";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Visiter />}>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/listproperties" element={<ListProperties />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
