import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import { restaurants } from "./data";
import { RestaurantContext } from "./components/RestaurantContext";
import { FavoritesContextProvider } from "./components/FavoritesContext";

function App() {
  return (
    <>
      <RestaurantContext.Provider value={restaurants}>
        <FavoritesContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Favorites/:id" element={<Details />} />
          </Routes>
        </FavoritesContextProvider>
      </RestaurantContext.Provider>
    </>
  );
}

export default App;
