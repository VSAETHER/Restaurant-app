import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import { restaurant } from "./models/models";
import { restaurants } from "./data";
import { restaurantContext } from "./components/restaurantContext";

function App() {
  const restaurant = restaurants;
  return (
    <>
      <restaurantContext.Provider value={restaurant}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details:id" element={<Details />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </restaurantContext.Provider>
    </>
  );
}

export default App;
