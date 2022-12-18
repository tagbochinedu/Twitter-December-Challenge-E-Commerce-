import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Marketplace from "./Pages/Marketplace";

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/marketplace' element={<Marketplace/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
