import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Marketplace from "./Pages/Marketplace";
import Auctions from "./Pages/Auctions";
import ProductDetails from './Pages/ProductDetails'

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/auctions" element={<Auctions />} />
        <Route exact path='marketplace/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
