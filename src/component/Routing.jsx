import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";


const Routing = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            // element={<Home />}
            element={<Home />}
          />
          <Route
            path="/checkout"
            // element={<Home />}
            element={<Checkout />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
