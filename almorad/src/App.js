import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Nav from "./components/nav";
import AllRoutes from "./components/allroutes";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
