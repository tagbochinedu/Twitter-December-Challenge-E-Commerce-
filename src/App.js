import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
