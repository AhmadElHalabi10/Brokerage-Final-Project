import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Visiter from "./pages/visiter";
import Home from "./pages/home";
import Rent from "./pages/rent";
import Contact from "./pages/contact";
// import Admin from "./pages/admin";
import SignIn from "./pages/signin";
import ListProperties from "./pages/listproperties";
import SignUp from "./pages/signup";
import PopUpProduct from "./pages/popupproduct";
import Unauthorized from "./pages/admin/unauthorized/index.js";
import LoginAdmin from "./pages/admin/login/index.js";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/admin" element={<LoginAdmin />} />

          <Route
            path="/dashboard/admin/unauthorized"
            element={<Unauthorized />}
          />

          <Route path="/" element={<Visiter />}>
            <Route path="/" element={<Home />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/listproperties" element={<ListProperties />} />
          </Route>

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/popup" element={<PopUpProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
